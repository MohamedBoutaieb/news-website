import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../config/store";
import { getData } from "../reducers/test.reducer";

const Home = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.test.testMessage);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="w-screen h-screen border-2">
      weclome to the home page mr 
      {" " + data}
    </div>
  );
};

export default Home;
