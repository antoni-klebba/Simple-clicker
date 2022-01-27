import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";

import {
  decCash,
  incClicker1,
  incClicker2,
  incClicker3,
  incClicker4,
  incClicker5,
} from "../redux/actionCreators";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginTop: 10,
  color: theme.palette.text.secondary,
}));

const LeftPanel = () => {
  const cash = useSelector((store) => store.cash);
  const multiplier = useSelector((store) => store.multiplier);
  const dispatch = useDispatch();

  const buyAutoClicker = (e) => {
    const id = e.target.id;

    if (id === "clicker-1") {
      if (typeof multiplier === "string") {
        const currentMultiplier = Math.floor(cash / 100);
        dispatch(decCash(100 * currentMultiplier));
        dispatch(incClicker1(1 * currentMultiplier));
      } else {
        dispatch(decCash(100 * multiplier));
        dispatch(incClicker1(1 * multiplier));
      }
    } else if (id === "clicker-2") {
      if (typeof multiplier === "string") {
        const currentMultiplier = Math.floor(cash / 500);
        dispatch(decCash(500 * currentMultiplier));
        dispatch(incClicker2(1 * currentMultiplier));
      } else {
        dispatch(decCash(500 * multiplier));
        dispatch(incClicker2(1 * multiplier));
      }
    } else if (id === "clicker-3") {
      if (typeof multiplier === "string") {
        const currentMultiplier = Math.floor(cash / 7000);
        dispatch(decCash(7000 * currentMultiplier));
        dispatch(incClicker3(1 * currentMultiplier));
      } else {
        dispatch(decCash(7000 * multiplier));
        dispatch(incClicker3(1 * multiplier));
      }
    } else if (id === "clicker-4") {
      if (typeof multiplier === "string") {
        const currentMultiplier = Math.floor(cash / 100000);
        dispatch(decCash(100000 * currentMultiplier));
        dispatch(incClicker4(1 * currentMultiplier));
      } else {
        dispatch(decCash(100000 * multiplier));
        dispatch(incClicker4(1 * multiplier));
      }
    } else if (id === "clicker-5") {
      if (typeof multiplier === "string") {
        const currentMultiplier = Math.floor(cash / 9999999);
        dispatch(decCash(9999999 * currentMultiplier));
        dispatch(incClicker5(1 * currentMultiplier));
      } else {
        dispatch(decCash(9999999 * multiplier));
        dispatch(incClicker5(1 * multiplier));
      }
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <Item>Leniwy Klikacz (1/s) - 100 kasiory </Item>
      </Grid>
      <Grid item xs={4}>
        {cash >= 100 * multiplier || (cash >= 100 && typeof multiplier === "string") ? (
          <Button
            id="clicker-1"
            variant="contained"
            style={{ marginTop: 10 }}
            onClick={buyAutoClicker}>
            {typeof multiplier === "number"
              ? `Kup za ${new Intl.NumberFormat("pl-PL").format(100 * multiplier)} kasiory`
              : `Kup ile wlezie`}
          </Button>
        ) : (
          <Button disabled variant="contained" style={{ marginTop: 10 }}>
            Za mało kasiory
          </Button>
        )}
      </Grid>
      <Grid item xs={8}>
        <Item>Pracowity Klikacz (10/s) - 500 kasiory</Item>
      </Grid>
      <Grid item xs={4}>
        {cash >= 500 * multiplier || (cash >= 500 && typeof multiplier === "string") ? (
          <Button
            id="clicker-2"
            variant="contained"
            style={{ marginTop: 10 }}
            onClick={buyAutoClicker}>
            {typeof multiplier === "number"
              ? `Kup za ${new Intl.NumberFormat("pl-PL").format(500 * multiplier)} kasiory`
              : `Kup ile wlezie`}
          </Button>
        ) : (
          <Button disabled variant="contained" style={{ marginTop: 10 }}>
            Za mało kasiory
          </Button>
        )}
      </Grid>
      <Grid item xs={8}>
        <Item>Klikacz specjalista (150/s) - 7 000 kasiory</Item>
      </Grid>
      <Grid item xs={4}>
        {cash >= 7000 * multiplier || (cash >= 7000 && typeof multiplier === "string") ? (
          <Button
            id="clicker-3"
            variant="contained"
            style={{ marginTop: 10 }}
            onClick={buyAutoClicker}>
            {typeof multiplier === "number"
              ? `Kup za ${new Intl.NumberFormat("pl-PL").format(7000 * multiplier)} kasiory`
              : `Kup ile wlezie`}
          </Button>
        ) : (
          <Button disabled variant="contained" style={{ marginTop: 10 }}>
            Za mało kasiory
          </Button>
        )}
      </Grid>
      <Grid item xs={8}>
        <Item>Maszyna Klikarka (3 000/s) - 100 000 Kasiory </Item>
      </Grid>
      <Grid item xs={4}>
        {cash >= 100000 * multiplier || (cash >= 100000 && typeof multiplier === "string") ? (
          <Button
            id="clicker-4"
            variant="contained"
            style={{ marginTop: 10 }}
            onClick={buyAutoClicker}>
            {typeof multiplier === "number"
              ? `Kup za ${new Intl.NumberFormat("pl-PL").format(100000 * multiplier)} kasiory`
              : `Kup ile wlezie`}
          </Button>
        ) : (
          <Button disabled variant="contained" style={{ marginTop: 10 }}>
            Za mało kasiory
          </Button>
        )}
      </Grid>
      <Grid item xs={8}>
        <Item>Komputer (500 000/s) - 9 999 999 Kasiory </Item>
      </Grid>
      <Grid item xs={4}>
        {cash >= 9999999 * multiplier || (cash >= 9999999 && typeof multiplier === "string") ? (
          <Button
            id="clicker-5"
            variant="contained"
            style={{ marginTop: 10 }}
            onClick={buyAutoClicker}>
            {typeof multiplier === "number"
              ? `Kup za ${new Intl.NumberFormat("pl-PL").format(9999999 * multiplier)} kasiory`
              : `Kup ile wlezie`}
          </Button>
        ) : (
          <Button disabled variant="contained" style={{ marginTop: 10 }}>
            Za mało kasiory
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default LeftPanel;
