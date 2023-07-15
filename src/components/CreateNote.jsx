import React, { useState } from "react";
import axios from "axios";

function CreateNotes() {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newNote = {
      title: input.title,
      content: input.content
    };
    axios
      .post("http://localhost:3001/create", newNote)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <h1>Crea Nota</h1>
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            autoComplete="off"
            placeholder="Titulo"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            name="content"
            value={input.content}
            autoComplete="off"
            placeholder="Contenido"
            className="form-control"
          ></textarea>
        </div>

        <button onClick={handleClick} className="btn btn-lg btn-info">
          {" "}
          Agregar Nota
        </button>
      </form>
    </div>
  );
}

export default CreateNotes;
