import React from "react";
import Student from "./Student";
import withStudentsData from "./withStudentsData";

const StudentsList = ({ students, error }) => {
  if (error) {
    return <div>{error}</div>;
  }

  if (!students) {
    return <div>Loading...</div>;
  }

  return students.map(student => <Student key={student.name} {...student} />);
};

export default withStudentsData(StudentsList);
