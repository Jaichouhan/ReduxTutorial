import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "./Redux/Action/action";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.home.users);

  console.log(users);

  useEffect(() => {
    dispatch(data());
  }, []);

  return <img src={users && users.message} alt="" />;
};

export default App;
