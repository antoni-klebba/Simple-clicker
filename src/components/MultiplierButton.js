import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useSelector, useDispatch } from "react-redux";
import { changeMultiplier, incMultiplierState } from "../redux/actionCreators";

const MultiplierButton = () => {
  const Multiplier = useSelector((state) => state.multiplier);
  const MultiplierState = useSelector((state) => state.multiplierState);
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "85%" }}>
      <Button
        variant="text"
        style={{ marginTop: 10, fontSize: 26 }}
        onClick={() => {
          dispatch(changeMultiplier(MultiplierState));
          dispatch(incMultiplierState());
        }}>
        {Multiplier}
      </Button>
    </Box>
  );
};

export default MultiplierButton;
