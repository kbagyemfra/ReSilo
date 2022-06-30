import { useContext } from "react";
// import BookList from "../components/BookList";
import { NewTestContext } from "../context/new";
import { ButtonGroup, Button } from "react-bootstrap";

const Home = () => {
  const { pending } = useContext(NewTestContext);

  return (
    <div className="home">
      <h1 className="text-center">
        Hello <br /> Welocme to reading The Bible
      </h1>
      <div className="btn-center text-center">
        <ButtonGroup
          size="lg"
          aria-label="Basic example"
          className="center"
          style={{ width: "40rem" }}
        >
          <Button variant="secondary" href="/old">
            Old Testament
          </Button>
          <Button variant="success" href="/new">
            New Testament
          </Button>
        </ButtonGroup>
      </div>
      {/* <h1>{info.title}</h1> */}
      {/* {error && <div>{error}</div>} */}
      {/* {pending && <div>Is Loading</div>} */}
      {/* {info && <p>{`Hello ${info.content[2][1]}`}</p>} */}
      {/* {Array.isArray(info) && <BookList />} */}
    </div>
  );
};

export default Home;
