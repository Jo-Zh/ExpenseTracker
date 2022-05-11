import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUser, setListOfUser] = useState([
    //{ id: 1, name: "nata", age: 8, username: "nata01" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUser(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username, //short for username: username
    }).then((response) => {
      alert("USER CREATED");
      setListOfUser([...listOfUser, response.data]);
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUser.map((user) => {
          return (
            <div>
              <h1>Name:{user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>UserName:{user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="UserName..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button onClick={createUser}>Create USer</button>
      </div>
    </div>
  );
}

export default App;
