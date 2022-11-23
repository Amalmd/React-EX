import { useState } from "react";

export const usePoint = (initialNumber) => {
  const [point, setPoint] = useState(initialNumber);

  const addOne = () => {
    setPoint((prev) => {
      return { ...prev, num: prev.num + 1 };
    });
  };
  const removeOne = () => {
    setPoint((prev) => {
      return { ...prev, num: prev.num - 1 };
    });
  };
  const double = () => {
    setPoint((prev) => {
      return { ...prev, num: prev.num * 2 };
    });
  };
  const divide = () => {
    setPoint((prev) => {
      return { ...prev, num: prev.num / 2 };
    });
  };
  return { point, addOne, removeOne, double, divide };
};
