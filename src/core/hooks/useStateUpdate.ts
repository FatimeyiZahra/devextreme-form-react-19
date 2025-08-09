import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

export const useStateUpdate = <T>(
  data: T
): [T, Dispatch<SetStateAction<T>>] => {
  //
  const [state, setState] = useState<T>(data);
  //
  useEffect(() => {
    setState(data);
  }, [data]);
  return [state, setState];
};
