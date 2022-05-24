import type { NextPage } from "next";
import { useEffect, useRef } from "react";
// import StepsComponent from "../components/StepsComponent";
import { useToolTipContext } from "../context/ToolTipContextProvider";
import { getSteps } from "../services";
import dynamic from "next/dynamic";
const Steps: any = dynamic(
  (): any => import("intro.js-react").then((mod) => mod.Steps),
  { ssr: false }
);
// import { Steps } from "intro.js-react";

const Home: NextPage = () => {
  const { activeSteps, setActiveSteps, enabled, setEnabled, onExit } =
    useToolTipContext();

  const ref = useRef(null);
  // console.log(Steps);

  const handleOnClick = () => {
    setEnabled(true);
    console.log(enabled);
  };

  return (
    <div>
      {/* <StepsComponent></StepsComponent> */}
      <Steps
        enabled={enabled}
        steps={activeSteps}
        initialStep={0}
        onExit={onExit}
        // ref={ref}
      />
      <div className="header">
        <p className="title">Title</p>
      </div>
      <section className="main">
        <div id="one" className="box">
          1
        </div>
        <div id="two" className="box">
          2
        </div>
        <div id="three" className="box">
          3
        </div>
      </section>
      <section className="main">
        <div id="four" className="box">
          4
        </div>
        <div id="five" className="box">
          5
        </div>
      </section>
      <section>
        <button onClick={handleOnClick}>Tutorial</button>
      </section>
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const steps = await getSteps('tutorial/en/steps1.json')
// }

export default Home;
