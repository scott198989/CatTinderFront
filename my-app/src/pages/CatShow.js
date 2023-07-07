import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"



const CatShow = ({cats}) => {
  const {id} = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)
    return (
      <main className="card">
        {currentCat && (
          <Card
            style={{
            width: '18rem'
          }}>
              <CardBody>
                <CardTitle tag="h5">
                  {currentCat.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  age: {currentCat.age}
                </CardSubtitle>
              </CardBody> 
              <img
                alt={'image of ${currentCat.name}'}
                src={currentCat.image}
               width="100%"
               />
             <CardBody>
              {currentCat.hobbies}
              </CardBody> 
           </Card>
         )}
         <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
          <button>Edit Cat Profile</button>
        </NavLink>
        </main> 
        
       )}




export default CatShow