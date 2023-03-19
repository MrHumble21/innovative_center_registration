import axios from "axios";
import React, { useState } from "react";
import { MdDelete, MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";

function AdminTable({ head = [], body = [] }) {
  const [dColor, setDcolor] = useState("#e96479");
  const mark_as_paid = (user_id, user) => {
    axios
      .post("/api/mark_as_paid", { user_id, user })
      .then((response) => {
        const { is_paid } = response.data;
        if (is_paid) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const mark_as_not_paid = (user_id, user) => {
    axios
      .post("/api/mark_as_not_paid", { user_id, user })
      .then((response) => {
        const { is_paid } = response.data;
        if (!is_paid) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delete_user = (user_id) => {
    console.log(user_id);
    axios
      .post("/api/delete_user", { user_id })
      .then((response) => {
        const { status } = response.data;
        if (status === "deleted") {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-fluid table-container my-5">
        <table
          style={{
            borderRadius: "10px",
          }}
          className="table  table-hover "
        >
          <thead className="text-bg-info rounded-2">
            <tr>
              {head.map((header, i) => {
                return (
                  <th
                    key={i}
                    style={{
                      textAlign: header === "Delete" ? "center" : "left",
                    }}
                    scope="col"
                  >
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {body.map((body, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{body.first_name}</td>
                  <td>{body.last_name}</td>
                  <td>{body.gender || "Not provided"}</td>
                  <td>{body.date_of_birth || "Not provided"}</td>
                  <td>{body.region || "Not provided"}</td>
                  <td>{body.phone}</td>
                  <td>{body.email || "Not provided"}</td>
                  <td>{body.exam_type}</td>
                  <td>
                    <center>
                      <a target={"_blank"} href={body.image}>
                        <AiOutlineCloudDownload size={30} />
                      </a>
                    </center>
                  </td>
                  <td>
                    {!body.is_paid ? (
                      <span
                        role={"button"}
                        onClick={() => {
                          mark_as_paid(body._id, body);
                        }}
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                        className="badge rounded-pill text-bg-danger "
                      >
                        <b> Not paid</b>
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          mark_as_not_paid(body._id, body);
                        }}
                        role={"button"}
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                        className="badge rounded-pill text-bg-primary"
                      >
                        <b>Paid</b>
                      </span>
                    )}
                  </td>
                  <td className="">
                    <center>
                      <MdDelete
                        onClick={() => {
                          delete_user(body._id);
                        }}
                        color={"red"}
                        size={30}
                      />
                    </center>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {body.length === 0 && (
          <center>
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </center>
        )}
      </div>
    </>
  );
}

export default AdminTable;
