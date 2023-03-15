import { usePromiseTracker } from "react-promise-tracker";

export function usePromises(areaPromise = "") {
  const { promiseInProgress } = usePromiseTracker();
  const { promiseInProgress: promiseInProgressArea } = usePromiseTracker({
    area: areaPromise,
  });

  return { promiseInProgress, promiseInProgressArea };
}
export default usePromises;
