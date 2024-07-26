import React from "react";
import Popup from "reactjs-popup";

const User = ({ user }) => {
  if (!user) {
    return <h1>Data Forgot</h1>; // o algún componente de carga o manejo de error
  }
  const AllData=()=>{
    return(
      <div>
        <label>Name: </label>{user.name.title} {user.name.first} {user.name.last}
        <br></br>
        <label>Location: </label>{user.location.city}<br></br>
        <label>City: </label>{user.location.street.name} - {user.location.street.number}<br></br>
        <label>Country: </label>{user.location.country}<br></br>
        <label>Birthday: </label>{user.dob.date}<br></br>
        <label>Age: </label>{user.dob.age}<br></br>
        <label>Phone: </label>{user.phone}<br></br>
        <label>Cellphone: </label>{user.cell}<br></br>
        <label>Username: </label>{user.login.username}<br></br>
        </div>
    )
  }
  return (
    <div
      style={{
        display: "flex",
        width: "10%",
        border: "1px solid white",
        justifyContent: "center",
        flexDirection: "column",
        margin: "1rem"
      }}
    >
      <h1
        style={{
          color: "green",
          fontSize: "40px",
          fontWeight: "bolder"
        }}
      >User
      </h1>
      <img
        src={user.picture.medium}
        style={{ width: "100%", height: "35vh", objectFit: "contain" }}
      ></img>

      <hr></hr>
      <div style={{ height: "30vh" }}>
        <div>
          <h3
            style={{
              overflowX: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxHeight: "100%"
            }}
          >
            {user.name.first}
          </h3>
        </div>
        <div style={{ height: "5vh" }}>
          <p
            style={{
              overflow: "hidden",
              maxHeight: "20vh",
              textOverflow: "ellipsis"
            }}
          >
            {user.name.last}
          </p>
        </div>
      </div>
      <div>
        <div>Email: {user.email}</div>
        <div>Cell: {user.cell}</div>
      </div>
      <div>------------------------</div>
      <div>
        <h4>See More</h4>
        <Popup trigger={<button> Click Here </button>} position="right center">
          <AllData/>
        </Popup>
      </div>
    </div>
  );
};
export default User;
