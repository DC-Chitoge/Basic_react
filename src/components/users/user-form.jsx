import { Input, Button } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const AddUser = () => {
    if (
      userName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      return;
    }
    console.log("test button");
  };
  return (
    <>
      <div className="user-form" style={{ margin: "20px" }}></div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <div>
          <span>Full Name</span>
          <Input onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <span>Email</span>
          <Input onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <span>Phone</span>
          <Input onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button type="primary" onClick={() => AddUser()}>
          Create User
        </Button>
      </div>
    </>
  );
};
export default UserForm;
