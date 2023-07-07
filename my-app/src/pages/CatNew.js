import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../styles/CatNew.css";

const CatNew = ({ createCat }) => {
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    hobbies: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createCat(newCat);
    navigate("/catindex");
  };

  return (
    <>
      <Form>
        <FormGroup className="form-group">
          <Label for="name" className="label">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={newCat.name}
            className="input"
          />
        </FormGroup>

        <FormGroup className="form-group">
          <Label for="age" className="label">
            Age
          </Label>
          <Input
            type="text"
            name="age"
            onChange={handleChange}
            value={newCat.age}
            className="input"
          />
        </FormGroup>

        <FormGroup className="form-group">
          <Label for="hobbies" className="label">
            Hobbies
          </Label>
          <Input
            type="text"
            name="hobbies"
            onChange={handleChange}
            value={newCat.hobbies}
            className="input"
          />
        </FormGroup>

        <FormGroup className="form-group">
          <Label for="image" className="label">
            Picture
          </Label>
          <Input
            type="text"
            name="image"
            onChange={handleChange}
            value={newCat.image}
            className="input"
          />
        </FormGroup>

        <Button color="primary" onClick={handleSubmit} name="submit" className="button-submit">
          Submit New Cat
        </Button>
      </Form>
    </>
  );
};

export default CatNew;
