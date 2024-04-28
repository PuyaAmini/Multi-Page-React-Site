import { useCallback, useEffect, useRef, useState } from "react";

export default function useFetch(url, _options) {
  const [data, setData] = useState(null);
  const [isPending, setISPending] = useState(false);
  const [error, setError] = useState(null);

  const options = useRef(_options);

  const fetchData = useCallback(async () => {
    setISPending(true);
    const controller = new AbortController();

    try {
      const res = await fetch(url, { signal: controller.signal });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const json = await res.json();
      setData(json);

      setISPending(false);
      setError(null);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("fetch Aborted!");
      } else {
        setISPending(false);
        setError("could not fetch");
        console.log(err.message);
      }
    }
  }, [url, options]);
  useEffect(()=>{
       fetchData()
       console.log('loaded')
  }, [fetchData])

  return { data, isPending, error };
}
