import { useEffect } from "react";

const Welcome = ({ name }) => {
    useEffect(() => {
        document.title = "hager dawoud";
    }, []);
  return <h1>Welcome {name}</h1>;
};



export default Welcome;
