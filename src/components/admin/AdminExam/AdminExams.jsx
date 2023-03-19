import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminExamsTable from "./AdminExamsTable";

import AdminTable from "./Table";

const AdminExams = () => {
  const [exams, setExams] = useState([]);

  const fetchUsers = async () => {
    axios.get("/api/allExams").then((res) => {
      setExams(res.data.exams);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <AdminExamsTable
        head={[
          "No",
          "Exam type",
          "Start date",
          "End date",
          "Price",
          "Edit Exam",
        ]}
        body={exams}
      />
    </div>
  );
};

export default AdminExams;
