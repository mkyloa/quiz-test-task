import { useState, useEffect } from "react";

export const useSessionStorage = (key: string) => {
  const [data, setData] = useState<Record<string, any>>({});

  useEffect(() => {
    const storedData = sessionStorage.getItem(key);

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [key]);

  const saveData = (values: Record<string, any>) => {
    setData({ ...data, ...values });

    sessionStorage.setItem(key, JSON.stringify({ ...data, ...values }));
  };

  return { data, saveData };
};
