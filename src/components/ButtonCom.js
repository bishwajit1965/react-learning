import React from "react";

import { Button } from "react-bootstrap";

const ButtonCom = () => {
  const handleSubmit = () => {
    alert("Hello");
  };
  return (
    <>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};

export default ButtonCom;
