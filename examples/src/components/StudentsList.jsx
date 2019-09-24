import React from "react";
import Student from "./Student";

const StudentsList = ({ students }) =>
  students.map(student => <Student key={student.name} {...student} />);

export default StudentsList;
