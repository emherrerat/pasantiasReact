import React from "react";
import Enum from "linq";
import { useState } from "react";
import FormatName from "../class/usuario";
import { SlSocialReddit } from "react-icons/sl";

function createData(name, lastname, age) {
  return {
    name,
    lastname,
    age
  };
}

const Search = () => {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [v3, setV3] = useState("");
  const [rows, setRows] = useState([
    createData("Elvis", "Herrera", 27),
    createData("Belén", "Zapata", 22),
    createData("Vale", "Remache", 24)
  ]);
  // Función para manejar el clic en el botón
  const handleAddUser = (e) => {
    // e.preventDefault(); // Evita el comportamiento por defecto del formulario

    if (v1 && v2 && !isNaN(v3)) {
      const newRow = createData(v1, v2, parseInt(v3));
      setRows([...rows, newRow]);
      // Limpiar campos del formulario
      setV1("");
      setV2("");
      setV3("");
    }
  };

  const results = Enum.from(rows)
    .select((rows) => ({
      first_name: rows.name,
      last_name: rows.lastname,
      year_birthday: 2024 - rows.age,
      adult_user: (rows.age >= 18).toString()
    }))
    .toArray();
  // Click Event.
  function btnClick() {
    window.open(
      "https://concepto.de/wp-content/uploads/2020/12/imagen-e1607991781485.jpg"
    );
  }
  return (
    <form>
      <table>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Birthday</th>
          <th>Adult</th>
        </tr>
        {results.map((res) => (
          <tr>
            <td>{res.first_name}</td>
            <td>{res.last_name}</td>
            <td>{res.year_birthday}</td>
            <td>{res.adult_user}</td>
          </tr>
        ))}
      </table>
      <div>
        <h1>Create New User</h1>
        <div>
          <label>Name: </label>
          <input
            name="name"
            value={v1}
            onChange={(e) => setV1(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Last Name: </label>
          <input
            name="lastaname"
            value={v2}
            onChange={(e) => setV2(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Age: </label>
          <input
            name="age"
            value={v3}
            onChange={(e) => setV3(e.target.value)}
          ></input>
        </div>
        <button onClick={handleAddUser}>Add New User</button>
      </div>

      <SlSocialReddit
        className="App-logo"
        color="orange"
        size={300}
        onClick={btnClick}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div>
        {v1} --- {v2} --- {v3}---
      </div>
    </form>
  );
};
export default Search;
