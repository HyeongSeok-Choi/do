import React from "react"

const students = [
  {
    id:1,
    name: "Hyeongseok"
  },
  {
    id:2,
    name:"Wonseok"
  },
  {
    id:3,
    name:"Minae"
  },
  {
    id:4,
    name:"Sohyen"
  }
];

function AttendanceBook(props){
  return (
    <ul>
      {students.map((student) => {
          return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;