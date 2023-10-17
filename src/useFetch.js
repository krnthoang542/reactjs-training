import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, {signal: abortCont.signal})
      .then((res) => {
        if (!res.ok) {
          throw Error("error");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
    
    return () => abortCont.abort();
  }, []);
  return {data, isPending}
};

export default useFetch;
