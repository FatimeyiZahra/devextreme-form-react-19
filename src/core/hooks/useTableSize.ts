import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export const useTableSize = (ref?: RefObject<HTMLDivElement>) => {
  //
  const [tableHeight, setTableHeight] = useState<number>(350);
  //
  useEffect(() => {
    const element = ref?.current;
    if (element) {
      const observer = new ResizeObserver(() => {
        if (element.offsetHeight !== tableHeight) {
          setTableHeight(element.offsetHeight - 90);
        }
      });
      observer.observe(element);
      return () => observer.disconnect();
    }
  }, []);
  return {tableHeight};
};
