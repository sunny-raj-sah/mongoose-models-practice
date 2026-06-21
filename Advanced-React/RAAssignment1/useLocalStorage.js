import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValueState] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue !== null
      ? JSON.parse(storedValue)
      : initialValue;
  });

  const setValue = (newValue) => {
    setValueState(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return {
    value,
    setValue,
  };
};

export default useLocalStorage;