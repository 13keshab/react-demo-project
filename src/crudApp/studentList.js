import React from "react";

const StudentList = ({
  Students,
  updateStudent,
  deleteStudent,
  conditionaldisplay,
}) => {
  return (
    <div>
      <h1>studentList</h1>
      <table
        border={1}
        height="70%"
        width="70%"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Age</th>
            <th>Student Phno</th>
            <th>Student Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.phno}</td>
              <td>{student.email}</td>
              <td>
                <button
                  onClick={() => updateStudent(index)}
                  style={{
                    borderRadius: "7px",
                    height: "25px",
                    width: "100px",
                    margin: "10px",
                    backgroundColor: "blue",
                    color: "white",
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => deleteStudent(index)}
                  style={{
                    borderRadius: "7px",
                    height: "25px",
                    width: "100px",
                    margin: "10px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <button
        onClick={conditionaldisplay}
        style={{
          borderRadius: "7px",
          height: "25px",
          width: "100px",
          margin: "10px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default StudentList;
