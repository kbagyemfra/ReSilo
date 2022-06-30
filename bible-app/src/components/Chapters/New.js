import { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Container, Pagination, Row } from "react-bootstrap";
import { NewTestContext } from "../../context/new";
import axios from "axios";
import zip from "lodash/zip";

const New = () => {
  const { setPending, pending } = useContext(NewTestContext);
  const [chunk, setChunk] = useState({});
  const [chapterz, setChapter] = useState([]);
  const [verse, setVerse] = useState(0);
  const [vdigit, setVdigit] = useState([]);

  var url = window.location.href;
  var url1 = url.substring(31, 33);
  // console.log(url1);
  var url2 = url.substring(22, 30);
  var url3 = "http://localhost:8800/";

  const urlx = url3 + url2 + url1;

  // console.log(urlx);
  // console.log(pending);

  useEffect(() => {
    axios.get(urlx).then((res) => {
      var response = res.data;
      // console.log(response);
      setChunk(response);
      setPending(false);
    });
  }, [urlx]);

  useEffect(() => {
    if (chunk && typeof chunk === "object") {
      var arr = Object.values(chunk);
      if (arr.length > 0) {
        arr = arr[2];
        console.log(arr[0]);
        setVerse(arr[0]);
      }
    }
  }, [chunk]);

  useEffect(() => {
    if (verse.length > 0) {
      // console.log(verse.length)
      function range(start, end) {
        return Array(end - start + 1)
          .fill()
          .map((_, idx) => start + idx);
      }
      var result = range(1, verse.length);
      setVdigit(result);
      if (vdigit.length > 0) console.log(vdigit);
    }

    const combo = zip(vdigit, verse).map((val) => {
      return (
        <>
          <div className="class" key={val}>
            {val}
          </div>
        </>
      );
    });

    setChapter(combo);
    // console.log(combo);
  }, [verse]);

  // let items = [];
  // for (let number = 1; number <= 15; number++) {
  //   items.push(
  //     <Pagination.Item
  //       key={number}
  //       onClick={() => {
  //         return number;
  //       }}
  //     >
  //       {number}
  //     </Pagination.Item>
  //   );
  // }

  // const paginationBasic = (
  //   <div>
  //     <Pagination size="lg">{items}</Pagination>
  //     <br />
  //   </div>
  // );

  return (
    <Container>
      {/* <div className="pagin">{paginationBasic}</div> */}
      <h2>{chunk ? chunk.title : <h1>Did not load</h1>}</h2>

      <Row className="book-list">
        {pending ? (
          <h2>Is Loading....</h2>
        ) : (
          <>
            <div>{chapterz}</div>
          </>
        )}
      </Row>
    </Container>
  );
};

export default New;
