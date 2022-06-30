import { useContext } from "react";
import { Link } from "react-router-dom";
import { OldTestContext } from "../../context/old";
import { Container, ListGroup, Row, Col } from "react-bootstrap";

const Old = () => {
  const { info } = useContext(OldTestContext);

  // if (Array.isArray(info) === true) {
  //   info.map((pro) => {
  //     console.log(pro);
  //     Object.keys(pro).map((value) => {
  //       console.log(value.author.length);
  //     });
  //   });
  // }

  return (
    <Container>
      <Row className="book-list">
        {Array.isArray(info) &&
          info.map((value) => (
            <Col lg={3} md={3} className="book-preview" key={value.id}>
              <Link to={`/old/:${value.id}`}>
                <h2 className="text-center">{value.title}</h2>
                {/* <p>
                  <strong>Author: </strong>
                  {value.author
                    ? `${value.author.substring(0, 25)}...`
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

export default Old;

// {
//   `${text.substring(0, MAX_LENGTH)}...`;
// }
