import Spline from "@splinetool/react-spline";
import { useRef, useState } from "react";
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


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [sceneVar, setSceneVar] = useState(0);
  const [splineData, setSplineData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  function sendmail() {
    window.location.href = "mailto:contact@liquidnitrogames.com";
    setSceneVar(0);
  }

  function onLoad(spline) {
    spline.setGlobalEvents(true);

    if (spline?._data?.scene) {
      setLoading(false);
      setSplineData(spline);
    }
  }

  const mainCrystals = ["Int_AU", "Int_RO", "Int_NL", "Int_OF"];

  function onSplineMouseDown(e) {
    console.log(e.target.name);
    setSceneVar(e.target.name);
    if (mainCrystals.some((a) => a === e.target.name)) {
      setCurrentPage(findIndexByValue(e.target.id));
    }
  }

  return (
    <div className="relative">
      {loading && (
       <Loader/>
      )}
      <CustomHeader splineData={splineData} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Spline
        className="[&_canvas]:!h-[100svh]"
        onLoad={onLoad}
        onSplineMouseUp={onSplineMouseDown}
        scene="https://prod.spline.design/qKWI91V5r5MPadzz/scene.splinecode"
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
      {sceneVar === "Idle_ROYC" && sendmail()}
      {/* ------------NitroLife--------- */}
      {sceneVar === "Int_NL01" && <Int_NL01 setScene={setSceneVar} />}
      {sceneVar === "Int_NL02" && <Int_NL02 setScene={setSceneVar} />}
      {sceneVar === "Int_NL03" && <Int_NL03 setScene={setSceneVar} />}
      
    </div>
  );
}
