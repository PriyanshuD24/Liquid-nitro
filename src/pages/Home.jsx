import Spline from "@splinetool/react-spline";
import { useContext, useEffect, useRef, useState } from "react";
import AboutUs from "./AboutUs";
import Idle_OV from "./Idle_OV";
import Idle_OP from "./Idle_OP";
import Idle_LE from "./Idle_LE";
import TeamMember from "./TeamMember";
import Int_INV_01 from "./Int_INV_01";
import Idle_CD from "./offerings/Idle_CD";
import Idle_GA from "./offerings/Idle_GA";
import Idle_NG from "./offerings/Idle_NG";
import Idle_LG from "./offerings/Idle_LG";
import CustomHeader from "../components/customHeader";
import { findIndexByValue } from "../constants";
import Int_NL01 from "./nitroLife/Int_NL01";
import Int_NL02 from "./nitroLife/Int_NL02";
import Int_NL03 from "./nitroLife/Int_NL03";
import Loader from "./loading/Loader";
import ReactOut from "./reachOut/ReactOut";
import Music from "../assets/bgMusic/sound.mp3";
import { AudioContext } from "../components/AudioContext";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [sceneVar, setSceneVar] = useState(0);
  const [splineData, setSplineData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [firstClick, setFirstClick] = useState(true);
  const { playAudio, setPlayAudio } = useContext(AudioContext);

  function sendmail() {
    window.location.href = "mailto:contact@liquidnitrogames.com";
    setSceneVar(0);
  }

  function onLoad(spline) {
    spline.setGlobalEvents(true);

    if (spline?._data?.scene) {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setSplineData(spline);
    }
  }

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            const increment = Math.floor(Math.random() * 10) + 1;
            return Math.min(prevProgress + increment, 100);
          }
          return prevProgress;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [loading]);

  const mainCrystals = ["Int_AU", "Int_RO", "Int_NL", "Int_OF"];

  function onSplineMouseDown(e) {
    console.log(e.target, "---------");
    setSceneVar(e.target.name);
    if (mainCrystals.some((a) => a === e.target.name)) {
      setCurrentPage(findIndexByValue(e.target.id));
    }
  }
  useEffect(() => {
    const handleBodyClick = () => {
      if (firstClick) {
        // console.log("First click on the document detected!");
        // Play music
        setPlayAudio(true);

        setFirstClick(false);
      }

      // Mark the first click as complete

      // console.log("Document clicked!");
    };

    // Attach the event listener to the body (or document)
    document.body.addEventListener("click", handleBodyClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [firstClick]);

  return (
    <div className="relative">
      {loading && <Loader progress={progress} />}

      <CustomHeader
        splineData={splineData}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Spline
        className="[&_canvas]:!h-[100svh]"
        onLoad={onLoad}
        onSplineMouseUp={onSplineMouseDown}
        scene="https://prod.spline.design/ARwIv8KtPA2-p1Ns/scene.splinecode"
      />

      {/* -----------About Us Section----------- */}
      {sceneVar === "Idle_Main_Crystal" && <AboutUs setScene={setSceneVar} />}
      {sceneVar === "Idle_INV1" && <Int_INV_01 setScene={setSceneVar} />}
      {sceneVar === "Idle_OV" && <Idle_OV setScene={setSceneVar} />}
      {sceneVar === "Idle_OP" && <Idle_OP setScene={setSceneVar} />}
      {sceneVar === "Idle_LE" && <Idle_LE setScene={setSceneVar} />}
      {sceneVar === "Int_CEO" && <TeamMember setScene={setSceneVar} />}
      {sceneVar === "Int_CFO" && <TeamMember setScene={setSceneVar} />}
      {sceneVar === "Int_CPO" && <TeamMember setScene={setSceneVar} />}
      {sceneVar === "Int_COO" && <TeamMember setScene={setSceneVar} />}

      {/* -----------Offerings Section----------- */}
      {sceneVar === "Idle_NG" && <Idle_NG setScene={setSceneVar} />}
      {sceneVar === "Idle_GA" && <Idle_GA setScene={setSceneVar} />}
      {sceneVar === "Idle_CD" && <Idle_CD setScene={setSceneVar} />}
      {sceneVar === "Idle_LG" && <Idle_LG setScene={setSceneVar} />}

      {/* ---------Reach Out----------- */}
      {sceneVar == "Idle_ROBC" && sendmail()}
      {sceneVar === "Idle_ROYC" && <ReactOut setScene={setSceneVar} />}
      {/* ------------NitroLife--------- */}
      {sceneVar === "Int_NL01" && <Int_NL01 setScene={setSceneVar} />}
      {sceneVar === "Int_NL02" && <Int_NL02 setScene={setSceneVar} />}
      {sceneVar === "Int_NL03" && <Int_NL03 setScene={setSceneVar} />}
    </div>
  );
}
