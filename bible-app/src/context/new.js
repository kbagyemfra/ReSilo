import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const NewTestContext = createContext();

const NewTestContextProvider = ({ children }) => {
  const [info, setInfo] = useState({});
  const [pending, setPending] = useState(true);
  // const [error, setError] = useState(null);

  const url = "http://localhost:8000/new";

  useEffect(() => {
    axios.get(url).then((res) => {
      var response = res.data;
      // const book = Object.values(response).forEach((key) => {
      // setInfo(key);
      // console.log(response);
      // response = key.philipi;
      setInfo(response);
      // });
      // setInfo(response);
      setPending(false);
    });
  }, [url]);

  return (
    <NewTestContext.Provider value={{ info, pending, setPending, setInfo }}>
      {children}
    </NewTestContext.Provider>
  );
};

export default NewTestContextProvider;
