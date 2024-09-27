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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [sceneVar, setSceneVar] = useState(0);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  function onLoad(spline) {
    if (spline?._data?.scene) {
      setLoading(false);
    }
  }

  function onSplineMouseDown(e) {
    //console.log(e.target.name);
    setSceneVar(e.target.name);
  }

  // Handle parallax effect for the card based on mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Adjust these values to control the intensity of the parallax effect
      const moveX = (clientX / window.innerWidth) * 20 - 10;
      const moveY = (clientY / window.innerHeight) * 20 - 10;

      setCardPosition({ x: moveX, y: moveY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-red-500">
      {loading && (
        <div className="fixed top-0 right-0 h-[100svh] w-screen z-50 flex justify-center items-center bg-white">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

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
<Members setScene={setSceneVar} idx={0}/>
      )}

      {sceneVar === "Idle_CFO" && (
        // <Idle_CFO
        //   setScene={setSceneVar}
        //   style={{
        //     transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
        //     transition: "transform 0.1s ease-out",
        //   }}
        // />
<Members setScene={setSceneVar} idx={1}/>

      )}

      {sceneVar === "Idle_CPO" && (
        // <Idle_CPO
        //   setScene={setSceneVar}
        //   style={{
        //     transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
        //     transition: "transform 0.1s ease-out",
        //   }}
        // />
<Members setScene={setSceneVar} idx={2}/>

      )}

      {sceneVar === "Idle_COO" && (
        // <Idle_COO
        //   setScene={setSceneVar}
        //   style={{
        //     transform: `translate(${cardPosition.x}px, ${cardPosition.y}px)`,
        //     transition: "transform 0.1s ease-out",
        //   }}
        // />
<Members setScene={setSceneVar} idx={3}/>

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
    </div>
  );
}
