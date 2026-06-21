import { useEffect, useState } from "react";

const useLogger = (initialValue = "", message = "Value changed to:") => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log(`${message} ${value}`);
  }, [value, message]);

  return {
    value,
    setValue,
  };
};

export default useLogger;