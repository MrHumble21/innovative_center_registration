import axios from "axios";
import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function AdminTable({ head = [], body = [] }) {
  const [dColor, setDcolor] = useState("#e96479");
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
                    {!body.is_paid ? (
                      <span
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
                  <td className=" d-flex justify-content-center">
                    <button
                      className="custom-btn px-2 py-1  d-flex justify-content-center align-items-center"
                      onClick={() => {}}
                      type="submit"
                      onMouseOver={() => {
                        setDcolor("white");
                      }}
                      onMouseOut={() => {
                        setDcolor("#e96479");
                      }}
                      style={{}}
                    >
                      <MdOutlineDeleteOutline size={20} color={dColor} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {body.length === 0 && (
          <center>
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </center>
        )}
      </div>
    </>
  );
}

export default AdminTable;
