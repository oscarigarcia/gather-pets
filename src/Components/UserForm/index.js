import React from "react";

import { Form, Input, Button } from "./styles";
import useInputValue from "../Hooks/useInputValue";
const UserForm = ({ onSubmit }) => {
  const value = useInputValue({
    Email: "",
    Password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault;
    onSubmit({ ...value });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Email" {...value.Email} />
        <Input placeholder="Password" type="password" {...value.Password} />
        <Button>Iniciar sesión.</Button>
      </Form>
    </div>
  );
};

export default UserForm;
