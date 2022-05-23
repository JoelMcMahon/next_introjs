import React, { createContext, useContext, useState } from "react";
import {
  IToolTipContext,
  IToolTipContextProvider,
} from "../interfaces/interfaces";

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

  console.log(activeSteps, "<activeSteps");

  const onExit = () => {
    setEnabled(false);
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
