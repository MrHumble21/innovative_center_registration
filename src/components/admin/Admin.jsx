import axios from "axios";
import React, { useEffect, useState } from "react";

import AdminTable from "./Table";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    axios.get("/api/allUsers").then((res) => {
      console.log(users);
      setUsers(res.data.users);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <AdminTable
        head={[
          "No",
          "First Name",
          "Last Name",
          "Gender",
          "Date of Birth",
          "Region",
          "Phone",
          "Email",
          "Exam Type",
          "Paid Status",
          "Delete",
        ]}
        body={users}
      />
    </div>
  );
};

export default Admin;
