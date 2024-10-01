import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import AboutUs from "./AboutUs";
import Idle_OV from "./Idle_OV";
import Idle_OP from "./Idle_OP";
import Idle_LE from "./Idle_LE";
import Idle_CEO from "./Idle_CEO";
import Idle_CFO from "./Idle_CFO";
import Idle_CPO from "./Idle_CPO";
import Idle_COO from "./Idle_COO";
import Int_INV_01 from "./Int_INV_01";
import Members from "./Members";
import Idle_NG from "./offerings/Idle_NG";
import Idle_GA from "./offerings/Idle_GA";
import Idle_CD from "./offerings/Idle_CD";
import Idle_LG from "./offerings/Idle_LG";
import Loader from "./loading/Loader";
import Int_NL01 from "./nitroLife/Int_NL01";
import Int_NL02 from "./nitroLife/Int_NL02";
import Int_NL03 from "./nitroLife/Int_NL03";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [sceneVar, setSceneVar] = useState(0);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  function onLoad(spline) {
    if (spline?._data?.scene) {
      console.log('loaded')
      // setTimeout(() => {
      //   setLoading(false);
      // }, [4000]);
    }
  }
  function sendmail() {
    window.location.href = "mailto:contact@liquidnitrogames.com";
    setSceneVar(0);
  }
  function onSplineMouseDown(e) {
    console.log("-----", e.target);
    // i want to click the element with specific name
    setSceneVar(e.target.name);
  }

  console.log(sceneVar);

  // Handle parallax effect for the card based on mouse movement
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     const { clientX, clientY } = event;

  //     // Adjust these values to control the intensity of the parallax effect
  //     const moveX = (clientX / window.innerWidth) * 20 - 10;
  //     const moveY = (clientY / window.innerHeight) * 20 - 10;

  //     setCardPosition({ x: moveX, y: moveY });
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div className="relative bg-red-500">
      {loading && <Loader setLoading={setLoading} />}

      <Spline
        className="[&_canvas]:!h-[100svh]"
        onLoad={onLoad}
        onSplineMouseDown={onSplineMouseDown}
        scene="https://prod.spline.design/uvIfScNgi0IU6wyx/scene.splinecode"
      />

      {sceneVar === "Idle_Main_Crystal" && (
        <AboutUs
          setScene={setSceneVar}
          style={{
            transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      )}

      {sceneVar === "Idle_OV" && (
        <Idle_OV
          setScene={setSceneVar}
          // style={{
          //   transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
          //   transition: "transform 0.1s ease-out",
          // }}
        />
      )}

      {sceneVar === "Idle_OP" && (
        <Idle_OP
          setScene={setSceneVar}
          style={{
            transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      )}

      {sceneVar === "Idle_LE" && (
        <Idle_LE
          setScene={setSceneVar}
          style={{
            transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      )}

      {sceneVar === "Idle_CEO" && (
        // <Idle_CEO
        //   setScene={setSceneVar}
        //   style={{
        //     transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
        //     transition: "transform 0.1s ease-out",
        //   }}
        // />
        <Members setScene={setSceneVar} idx={0} />
      )}

      {sceneVar === "Idle_CFO" && (
        // <Idle_CFO
        //   setScene={setSceneVar}
        //   style={{
        //     transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
        //     transition: "transform 0.1s ease-out",
        //   }}
        // />
        <Members setScene={setSceneVar} idx={1} />
      )}

      {sceneVar === "Idle_CPO" && (
        // <Idle_CPO
        //   setScene={setSceneVar}
        //   style={{
        //     transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
        //     transition: "transform 0.1s ease-out",
        //   }}
        // />
        <Members setScene={setSceneVar} idx={2} />
      )}

      {sceneVar === "Idle_COO" && (
        // <Idle_COO
        //   setScene={setSceneVar}
        //   style={{
        //     transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
        //     transition: "transform 0.1s ease-out",
        //   }}
        // />
        <Members setScene={setSceneVar} idx={3} />
      )}

      {sceneVar === "Int_INV_01" && (
        <Int_INV_01
          setScene={setSceneVar}
          style={{
            transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      )}

      {/* -----------OFFERINGS----------- */}
      {sceneVar === "Idle_NG" && <Idle_NG setScene={setSceneVar} />}
      {sceneVar === "Idle_GA" && <Idle_GA setScene={setSceneVar} />}
      {sceneVar === "Idle_CD" && <Idle_CD setScene={setSceneVar} />}
      {sceneVar === "Idle_LG" && <Idle_LG setScene={setSceneVar} />}
      {/* ---------Reach us----------- */}
      {sceneVar == "Idle_ROBC" && sendmail()}
      {sceneVar === "Idle_ROYC" && sendmail()}

      {/* ----------nitroLife----------- */}

      {sceneVar === "Int_NL01" && <Int_NL01 setScene={setSceneVar} />}
      {sceneVar === "Int_NL02" && <Int_NL02 setScene={setSceneVar} />}
      {sceneVar === "Int_NL03" && <Int_NL03 setScene={setSceneVar} />}
    </div>
  );
}
