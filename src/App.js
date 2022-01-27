import { useEffect } from "react";
import Box from "@mui/material/Box";

import "./App.css";
import Click from "./components/Click";
import RightPanel from "./components/RightPanel";
import LeftPanel from "./components/LeftPanel";
import MultiplierButton from "./components/MultiplierButton";
import TextPanel from "./components/TextPanel";

import { useSelector, useDispatch } from "react-redux";
import { incCounter, incCash } from "./redux/actionCreators";

function App() {
  const clicker1 = useSelector((state) => state.clicker1);
  const clicker2 = useSelector((state) => state.clicker2);
  const clicker3 = useSelector((state) => state.clicker3);
  const clicker4 = useSelector((state) => state.clicker4);
  const clicker5 = useSelector((state) => state.clicker5);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      dispatch(incCash(clicker1));
      dispatch(incCounter(clicker1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [clicker1]);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      dispatch(incCash(clicker2 * 10));
      dispatch(incCounter(clicker2 * 10));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [clicker2]);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      dispatch(incCash(clicker3 * 150));
      dispatch(incCounter(clicker3 * 150));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [clicker3]);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      dispatch(incCash(clicker4 * 3000));
      dispatch(incCounter(clicker4 * 3000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [clicker4]);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      dispatch(incCash(clicker5 * 500000));
      dispatch(incCounter(clicker5 * 500000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [clicker5]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "no-wrap",
          flexDirection: "row",
          minWidth: 300,
          width: "100%",
        }}>
        <Click />
        <RightPanel />
      </Box>
      <LeftPanel />
      <MultiplierButton />
      <TextPanel />
    </>
  );
}

export default App;
