import { useEffect, useState } from "react";

const useFecth = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();

        setData(json);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(true);
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};

export default useFecth;
