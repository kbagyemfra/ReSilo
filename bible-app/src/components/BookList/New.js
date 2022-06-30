import { useContext } from "react";
import { Link } from "react-router-dom";
import { NewTestContext } from "../../context/new";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import { Route, Routes, useParams } from "react-router-dom";
import BookDetails from "../BookDetails";

const New = () => {
  const { info } = useContext(NewTestContext);

  // if (Array.isArray(info) === true) {
  //   info.map((pro) => {
  //     console.log(pro.title);
  //     Object.values(pro).map((value) => {
  //       // console.log(value);
  //     });
  //   });
  // }

  return (
    <Container>
      <Row className="book-list">
        {Array.isArray(info) &&
          info.map((value) => (
            <Col lg={3} md={3} className="book-preview" key={value.id}>
              <Link to={`/new/:${value.id}`}>
                <h2 className="text-center">{value.title}</h2>
                {/* <p>
                  <strong>Author: </strong>
                  {value.author
                    ? `${value.author.substring(0, 8)}...`
                    : value.author}
                </p>
                <p>
                  <strong>Place: </strong>
                  {`${value.place}`}
                </p> */}
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default New;
