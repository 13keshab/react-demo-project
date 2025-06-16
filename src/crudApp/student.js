import { useState } from "react";
import StudentList from "./studentList";

const Student = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    phno: "",
    email: "",
  });

  const [data, setdata] = useState([]);
  const [datadisplay, setdatadisplay] = useState(true);
  const [, setdirect] = useState(true);
  const [, setupdatebtn] = useState(false);

  const updateStudent = (index) => {
    const updatedStudent = data[index];
    setStudent(updatedStudent);
    deleteStudent(index);
    setupdatebtn(true);
  };

  const deleteStudent = (index) => {
    const newData = data.filter((_, indexdata) => indexdata !== index);
    setdata(newData);
  };

  const conditionaldisplay = () => {
    setdatadisplay(false);
  };
  const update = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const showdetails = (p) => {
    setdatadisplay(true);
    setdirect(false);
    setupdatebtn(false);

    p.preventDefault();
    setdata([...data, student]);
    setStudent({ name: "", age: "", phno: "", email: "" });
    setdatadisplay(true);
    setdirect(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!datadisplay ? (
        <div
          style={{
            border: "10px solid green",
            width: "300px",
            padding: "20px",
          }}
        >
          Student Form <hr style={{ width: "310px" }}></hr> <br></br>
          <label>Name</label> <br></br>
          <input
            type="text"
            name="name"
            value={student.name}
            placeholder="Enter Student Name"
            onChange={update}
            style={{ width: "190px", height: "28px", borderRadius: "10px" }}
          />
          <br></br>
          <label>Age</label> <br></br>
          <input
            type="text"
            name="age"
            value={student.age}
            placeholder="Enter Student Age"
            onChange={update}
            style={{ width: "190px", height: "28px", borderRadius: "10px" }}
            required
          />
          <br></br>
          <label>Phone</label> <br></br>
          <input
            type="text"
            name="phno"
            value={student.phno}
            placeholder="Enter Student Phno"
            onChange={update}
            style={{ width: "190px", height: "28px", borderRadius: "10px" }}
          />
          <br></br>
          <label>Email</label> <br></br>
          <input
            type="text"
            name="email"
            value={student.email}
            placeholder="Enter Student Email"
            onChange={update}
            style={{ width: "190px", height: "28px", borderRadius: "10px" }}
          />
          <br></br>
          <button
            onClick={showdetails}
            style={{
              borderRadius: "7px",
              height: "25px",
              width: "100px",
              margin: "10px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <StudentList
          Students={data}
          deleteStudent={deleteStudent}
          updateStudent={updateStudent}
          conditionaldisplay={conditionaldisplay}
        />
      )}
    </div>
  );
};

export default Student;
