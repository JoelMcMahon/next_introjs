import React from "react";

export interface IToolTipContext {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  onExit: any;
  activeSteps: step[];
  setActiveSteps: React.Dispatch<React.SetStateAction<step[]>>;
}

export type step = {
  element: string;
  intro: string;
  position?: string;
  tooltipClass: string;
  highlightClass: string;
};

export interface IToolTipContextProvider {
  children?: React.ReactNode;
}
