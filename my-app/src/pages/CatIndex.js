import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import '../styles/CatIndex.css';


const CatIndex = ({ cats }) => {
  // const { id } = useParams()
  // console.log(id)
  return (
    <div className="cat-index-container">
      {cats?.map((cat, index) => (
        <Card
          style={{
            width: '18rem'
          }}
          key={index}
          className="cat-card"
        >
          <img
            alt="Sample"
            src="https://picsum.photos/300/200"
            className="cat-image"
          />
          <CardBody>
            <CardTitle tag="h5" className="cat-name">
              {cat.name}
            </CardTitle>
            <CardSubtitle className="cat-info">
              <span className="cat-info-label">Age:</span> {cat.age}
            </CardSubtitle>
            <CardSubtitle className="cat-info">
              <span className="cat-info-label">Hobbies:</span> {cat.hobbies}
            </CardSubtitle>
            <NavLink to={`/catshow/${cat.id}`} className="nav-link cat-link">
              Click to see more details
            </NavLink>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CatIndex;
