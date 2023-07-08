import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { cats } from "../mockCats";

const CatShow = ({cats}) => {
  const {id} = useParams()
  // let currentCat = cats?.find((cat) => cat.id === +id)
    return (
      <main className="card">
        {cats && (
          <Card
            style={{
            width: '18rem'
          }}>
              <CardBody>
                <CardTitle tag="h5">
                  {cats.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  age: {cats.age}
                </CardSubtitle>
              </CardBody> 
              <img
                alt={'image of ${currentCat.name}'}
                src={cats.image}
               width="100%"
               />
             <CardBody>
              {cats.hobbies}
              </CardBody> 
           </Card>
         )}
         <NavLink to={`/catedit/${cats.id}`} className="nav-link">
          <button>Edit Cat Profile</button>
        </NavLink>
        </main> 
        
       )}




export default CatShow