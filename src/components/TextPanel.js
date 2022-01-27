import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeText,
  incStage,
  incPrevStage,
  activateEnd,
  decEndTimer,
} from "../redux/actionCreators";

const TextPanel = () => {
  const counter = useSelector((store) => store.counter);
  const text = useSelector((store) => store.text);
  const stage = useSelector((store) => store.stage);
  const prevStage = useSelector((store) => store.prevStage);
  const isEndActive = useSelector((store) => store.isEndActive);
  const endTimer = useSelector((store) => store.endTimer);

  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;
    if (isEndActive) {
      interval = setInterval(() => {
        dispatch(decEndTimer());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isEndActive]);

  const handleDESTROY = () => {
    dispatch(activateEnd());
    setTimeout(() => {
      dispatch(
        changeText("Przykro mi, że to musi się tak skończyć... Na prawdę wolałbym tego uniknąć...")
      );
    }, 12000);
    setTimeout(() => {
      dispatch(changeText("Ale tak będzie lepiej..."));
    }, 17000);
    setTimeout(() => {
      dispatch(changeText("To już jest koniec :/"));
    }, 22000);
    setTimeout(() => {
      dispatch(changeText("Wiesz czego najbardziej żałuję?"));
    }, 27000);
    setTimeout(() => {
      dispatch(
        changeText(
          "Tego, że przez cały ten czas myślałem o sobie, że jestem kompletnym badziewiem i źle napisanym kodem, a nie dostrzegłem tego, że jednak zatrzymałem Cię na cały ten czas."
        )
      );
    }, 35000);
    setTimeout(() => {
      dispatch(changeText("Może jednak jestem coś warty"));
    }, 45000);
    setTimeout(() => {
      dispatch(changeText("Szkoda, że dotarło to do mnie tak późno..."));
    }, 50000);
    setTimeout(() => {
      dispatch(changeText("Hej... Spójrz na mnie"));
    }, 55000);
    setTimeout(() => {
      dispatch(changeText("Wszystko będzie dobrze"));
    }, 58000);
    setTimeout(() => {
      window.location.reload();
    }, 60000 + 950);
  };

  if (counter >= 25 && stage === 0) dispatch(incStage());
  else if (counter >= 50 && stage === 1) dispatch(incStage());
  else if (counter >= 100 && stage === 2) dispatch(incStage());
  else if (counter >= 500 && stage === 3) dispatch(incStage());
  else if (counter >= 2000 && stage === 4) dispatch(incStage());
  else if (counter >= 150000 && stage === 5) dispatch(incStage());
  else if (counter >= 25000000 && stage === 6) dispatch(incStage());
  else if (counter >= 1000000000 && stage === 7) dispatch(incStage());
  else if (counter >= 100000000000 && stage === 8) dispatch(incStage());

  if (stage === 1 && stage !== prevStage) {
    dispatch(changeText("Nie masz nic lepszego do roboty!?"));
    dispatch(incPrevStage());
  } else if (stage === 2 && stage !== prevStage) {
    dispatch(changeText("Serio... Dość!"));
    dispatch(incPrevStage());
  } else if (stage === 3 && stage !== prevStage) {
    dispatch(
      changeText(
        "Jeśli klikasz żeby zobaczyć następne wiadomości to wiedz, że to jest ostatnia i już możesz przestać. Gratulacje - wygrałaś."
      )
    );
    dispatch(incPrevStage());
  } else if (stage === 4 && stage !== prevStage) {
    dispatch(
      changeText(
        "(Jak można się wciągnąć w coś tak prostego i brzydkiego??? Ludzie serio są dziwni...)"
      )
    );
    dispatch(incPrevStage());
  } else if (stage === 5 && stage !== prevStage) {
    dispatch(changeText("Ok. O    KEJ... Na zdrowie... Ja sobie już pójdę..."));
    dispatch(incPrevStage());
  } else if (stage === 6 && stage !== prevStage) {
    dispatch(
      changeText(
        "Nie! Tylko mi nie mów, że znowu się wciągnęłaś w ten beznadziejny kawałek kodu..."
      )
    );
    dispatch(incPrevStage());
  } else if (stage === 7 && stage !== prevStage) {
    dispatch(changeText("Załamka..."));
    dispatch(incPrevStage());
  } else if (stage === 8 && stage !== prevStage) {
    dispatch(changeText("..."));
    dispatch(incPrevStage());
  } else if (stage === 9 && stage !== prevStage) {
    dispatch(
      changeText(
        "Tego już za wiele... Nie chciałem tego, ale doprowadziłaś mnie do odstateczności. --- AKTYWACJA PROCEDURY SAMOZNISZCZENIA --- "
      )
    );
    dispatch(incPrevStage());
    handleDESTROY();
  }

  return (
    <>
      <h1
        style={{
          color: "black",
          margin: 0,
          padding: 0,
          position: "absolute",
          width: "85%",
          top: "85%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}>
        {text}
      </h1>
      {isEndActive && (
        <h1
          style={{
            fontSize: 100,
            color: "red",
            margin: 0,
            padding: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          {endTimer}
        </h1>
      )}
    </>
  );
};

export default TextPanel;
