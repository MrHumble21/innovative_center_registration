import axios from "axios";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function AdminExamsTable({ head = [], body = [] }) {
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
            {body.map((b, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{b.exam_type}</td>
                  <td>{b.start_date}</td>
                  <td>{b.end_date || "Not provided"}</td>
                  <td>{b.price || "Not provided"}</td>
                  <td>
                    <Link state={b} to={"/admin/exams/edit"}>
                      <button className="btn btn-primary rounded-2 d-flex justify-conetent-center align-items-center p-2">
                        <BiEdit />
                      </button>
                    </Link>
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

export default AdminExamsTable;
