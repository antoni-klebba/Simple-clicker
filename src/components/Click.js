import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import clickImg from "../img/click.png";

import store from "../redux/store";

import { useSelector, useDispatch } from "react-redux";
import { incCounter, incCash } from "../redux/actionCreators";

const images = [
  {
    url: clickImg,
    title: "",
    width: "100%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const Click = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Grid item xs={5}>
      <Box sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}>
        {images.map((image) => (
          <ImageButton
            onClick={() => {
              dispatch(incCounter(1));
              dispatch(incCash(1));
            }}
            focusRipple
            key={image.title}
            style={{
              width: image.width,
              height: 330,
            }}>
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="#ffffff"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  fontSize: 30,
                  border: `1px solid #ffffff`,
                }}>
                {new Intl.NumberFormat().format(counter)}
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </Grid>
  );
};

export default Click;
