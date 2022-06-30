import { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Card } from "react-bootstrap";
import { NewTestContext } from "../../context/new";
import axios from "axios";

const New = () => {
  const { setPending, pending } = useContext(NewTestContext);
  const [chunk, setChunk] = useState({});

  var url = window.location.href;
  var url1 = url.substring(27, 29);
  var url2 = url.substring(22, 26);
  var url3 = "http://localhost:8000/";

  const urlx = url3 + url2 + url1;

  console.log(urlx);
  // console.log(pending);

  useEffect(() => {
    setPending(true);
    axios.get(urlx).then((res) => {
      var response = res.data;
      // console.log(response);
      setChunk(response);
      setPending(false);
    });
  }, []);

  // if (typeof chunk === "object") {
  //   console.log(chunk.id);
  //   // Object.values(chunk).map((pro) => {
  //   //   console.log(pro);
  //   // Object.values(pro).map((value) => {
  //   // console.log(value);
  //   // });
  //   // });
  // }

  return (
    <Container>
      <Row className="book-list">
        {pending ? (
          <h2>Is Loading....</h2>
        ) : (
          <>
            <Card
              className="center"
              border="secondary"
              style={{ width: "auto" }}
            >
              <Card.Header>
                The Book of {chunk.fullTitle}, # {chunk.id}
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <strong>Author: </strong>
                  {chunk.author}
                </Card.Title>
                <Card.Subtitle>
                  <strong>To: </strong>
                  {chunk.recipients ? chunk.recipients : "Unavailable"}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Subject: </strong>
                  {chunk.subject}
                </Card.Text>
                <Card.Text>
                  <strong>Time Written: </strong>
                  {chunk.timeWritten}
                </Card.Text>
                <Card.Text>
                  <strong>Place Written: </strong>
                  {chunk.place}
                </Card.Text>
                <a href={`http://localhost:3000/content/:${chunk.id}`}>
                  Chapters
                </a>
              </Card.Body>
            </Card>
          </>
        )}
      </Row>
    </Container>
  );
};

export default New;
