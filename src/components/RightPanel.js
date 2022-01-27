import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginTop: 10,
  color: theme.palette.text.secondary,
}));

const RightPanel = () => {
  const cash = useSelector((state) => state.cash);
  const clicker1 = useSelector((state) => state.clicker1);
  const clicker2 = useSelector((state) => state.clicker2);
  const clicker3 = useSelector((state) => state.clicker3);
  const clicker4 = useSelector((state) => state.clicker4);
  const clicker5 = useSelector((state) => state.clicker5);

  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Item>Twoja kasiora:</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>{new Intl.NumberFormat("pl-PL").format(cash) + " KSR"}</Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          {Intl.NumberFormat().format(
            clicker1 + clicker2 * 10 + clicker3 * 150 + clicker4 * 3000 + clicker5 * 500000
          ) + "/s"}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Posiadani Leniwi Klikacze:</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          {clicker1} (+{clicker1 * 1}/s)
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Posiadani Pracowici Klikacze:</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          {clicker2} (+{clicker2 * 10}/s)
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Posiadani Klikacze specjaliści:</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          {clicker3} (+{clicker3 * 150}/s)
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Posiadane Maszyny Klikarki?:</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          {clicker4} (+{clicker4 * 3000}/s)
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Posiadane Komputery:</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          {clicker5} (+{clicker5 * 500000}/s)
        </Item>
      </Grid>
    </Grid>
  );
};

export default RightPanel;
