import React, { useState, useEffect } from "react";
import New from "./BookList/New";
import Old from "./BookList/Old";

const BookList = () => {
  const [test, setTest] = useState(false);

  var url = window.location.href;

  useEffect(() => {
    if (url === "http://localhost:3000/old") {
      setTest(true);
    }
  }, [url]);

  // if (Array.isArray(info)) {
  //   info.map((pro) => {
  //     console.log(pro);
  //     Object.values(pro).map((key) => {
  //       console.log(key);
  //     });
  //   });
  // }

  return <>{test ? <Old /> : <New />}</>;
};

export default BookList;
