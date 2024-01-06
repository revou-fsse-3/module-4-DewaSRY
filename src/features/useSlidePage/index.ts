import { useState } from "react";

export default function useSlidePages<T>(elementArr: T[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  function next() {
    setCurrentStepIndex((i) => {
      if (i >= elementArr.length - 1) return elementArr.length - 1;
      return i + 1;
    });
  }
  function prev() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return 0;
      return i - 1;
    });
  }
  const isHasNext = currentStepIndex < elementArr.length - 1;
  const isHasPrev = currentStepIndex > 0;
  function setPagesPosition(position: number) {
    setCurrentStepIndex(() => position);
  }
  return {
    next,
    prev,
    currentStepIndex,
    isHasNext,
    isHasPrev,
    setPagesPosition,
    currentElement: elementArr[currentStepIndex],
    elementArr,
  };
}
export { default as SlidePage } from "./SlidePage";
// export default function useSlidePages<T>(elementArr: T[]) {
//   const [currentStepIndex, setCurrentStepIndex] = useState(0);
//   function next() {
//     setCurrentStepIndex((i) => {
//       if (i >= elementArr.length - 1) return elementArr.length - 1;
//       return i + 1;
//     });
//   }
//   function prev() {
//     setCurrentStepIndex((i) => {
//       if (i <= 0) return 0;
//       return i - 1;
//     });
//   }
//   const isHasNext = currentStepIndex < elementArr.length - 1;
//   const isHasPrev = currentStepIndex > 0;
//   function setPagesPosition(position: number) {
//     setCurrentStepIndex(() => position);
//   }
//   return {
//     next,
//     prev,
//     currentStepIndex,
//     isHasNext,
//     isHasPrev,
//     setPagesPosition,
//     currentElement: elementArr[currentStepIndex],
//     elementArr,
//   };
// }
