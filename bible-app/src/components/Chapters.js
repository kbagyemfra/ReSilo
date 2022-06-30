import React, { useState, useEffect } from "react";
import New from "./Chapters/New";
// import Old from "./Chapters/Old";

const Chapters = () => {
  const [test, setTest] = useState(false);

  var url = window.location.href;

  useEffect(() => {
    if (url.substring(0, 25) == "http://localhost:3000/old") {
      setTest(true);
    }
  }, [url]);

  // console.log(test);

  return (
    <div className="book-details">
      {test ? (
        <>
          <h1>Old</h1>
        </>
      ) : (
        <New />
      )}
    </div>
  );
};

export default Chapters;
