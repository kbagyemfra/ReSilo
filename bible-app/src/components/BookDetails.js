import React, { useState, useEffect } from "react";
import New from "./BookDetail/New";
import Old from "./BookDetail/Old";

const BookDetails = () => {
  const [test, setTest] = useState(false);

  var url = window.location.href;

  useEffect(() => {
    if (url.substring(0, 25) == "http://localhost:3000/old") {
      setTest(true);
    }
  }, [url]);

  // console.log(test);

  return <div className="book-details">{test ? <Old /> : <New />}</div>;
};

export default BookDetails;
