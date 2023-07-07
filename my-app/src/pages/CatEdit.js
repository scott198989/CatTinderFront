import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useParams, useNavigate } from "react-router-dom"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat ? currentCat.name : '',
    age: currentCat ? currentCat.age : '',
    enjoys: currentCat ? currentCat.hobbies : '',
    image: currentCat ? currentCat.image : ''
  });
  
  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    navigate("/catindex")
  }
  return(
    <>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" onChange={handleChange} value={editCat.name} />
        </FormGroup>

        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="text" name="age" onChange={handleChange} value={editCat.age} />
        </FormGroup> 

        <FormGroup>
          <Label for="hobbies">Hobbies</Label>
          <Input type="text" name="hobbies" onChange={handleChange} value={editCat.hobbies} />
        </FormGroup> 

        <FormGroup>
          <Label for="image">Picture</Label>
          <Input type="text" name="image" onChange={handleChange} value={editCat.image} />
        </FormGroup>

        <Button onClick={handleSubmit} name="submit">
         Submit Updated Cat
        </Button>
          
        </Form>
    </>
)}






  


export default CatEdit