// import React, { forwardRef, useRef } from "react";
// import dynamic from "next/dynamic";
// import { useToolTipContext } from "../context/ToolTipContextProvider";
// const Steps: any = dynamic((): any => import("./StepsWrapper"), { ssr: false });

// const ForwardRefSteps = forwardRef((props: any, ref: any): any => {
//   const { activeSteps, setActiveSteps, enabled, onExit } = useToolTipContext();

//   <Steps
//     {...props}
//     stepsRef={ref}
//     enabled={enabled}
//     steps={activeSteps}
//     initialStep={0}
//     onExit={onExit}
//   />;
// });

// const StepsComponent = () => {
//   const { activeSteps, setActiveSteps, enabled, onExit } = useToolTipContext();
//   const stepsRef = useRef(null);
//   return (
//     <ForwardRefSteps
//       ref={stepsRef}
//       enabled={enabled}
//       steps={activeSteps}
//       initialStep={0}
//       onExit={onExit}
//     ></ForwardRefSteps>
//   );
// };

// export default StepsComponent;
