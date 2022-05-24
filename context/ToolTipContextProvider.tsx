import React, { createContext, useContext, useEffect, useState } from "react";
import {
  IToolTipContext,
  IToolTipContextProvider,
} from "../interfaces/interfaces";
import { getSteps } from "../services";

const toolTipContext = createContext<IToolTipContext>({
  enabled: true,
  setEnabled: () => {},
  onExit: () => {},
  activeSteps: [],
  setActiveSteps: () => {},
});

export const useToolTipContext = () => useContext(toolTipContext);

const ToolTipContextProvider: React.FC<IToolTipContextProvider> = ({
  children,
}) => {
  const [enabled, setEnabled] = useState(true);
  const [activeSteps, setActiveSteps] = useState<any>([
    {
      element: "#tutorialBtn",
      title: "hey",
      intro: "",
      tooltipClass: "",
      highlightClass: "",
      nextLabel: "",
    },
  ]);

  useEffect(() => {
    // setEnabled(true);
    getSteps("tutorial/en/steps1.json").then((response) => {
      setActiveSteps(Object.values(response));
      // setEnabled(true);
    });
    // .then(() => {
    //   console.log("in");
    //   setEnabled(true);
    // });
  }, []);

  console.log(activeSteps, "<activeSteps", enabled, "<<<Enabled");

  const onExit = () => {
    // setEnabled(false);
    console.log(enabled);
  };

  return (
    <toolTipContext.Provider
      value={{ enabled, setEnabled, onExit, activeSteps, setActiveSteps }}
    >
      {children}
    </toolTipContext.Provider>
  );
};

export default ToolTipContextProvider;
