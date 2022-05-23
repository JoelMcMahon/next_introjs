import type { NextPage } from "next";
import { useEffect } from "react";
import { useToolTipContext } from "../context/ToolTipContextProvider";
import { getSteps } from "../services";
import { Steps } from "intro.js-react";

const Home: NextPage = () => {
  const { activeSteps, setActiveSteps, enabled, onExit } = useToolTipContext();

  useEffect(() => {
    getSteps("tutorial/en/steps1.json").then((response) => {
      setActiveSteps(Object.values(response));
    });
  }, []);

  console.log(activeSteps);
  return (
    <div>
      <Steps
        enabled={enabled}
        steps={activeSteps}
        initialStep={0}
        onExit={onExit}
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
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const steps = await getSteps('tutorial/en/steps1.json')
// }

export default Home;
