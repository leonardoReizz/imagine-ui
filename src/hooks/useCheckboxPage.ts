import { useCallback, useState } from "react";

export function useCheckboxPage() {
  const [checked, setChecked] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const handleCheckbox = useCallback((index: number) => {
    setChecked((t) => {
      let a = [...t];
      a[index] = a[index] !== true;
      return a;
    });
  }, []);

  return {
    handleCheckbox,
    checked,
  };
}
