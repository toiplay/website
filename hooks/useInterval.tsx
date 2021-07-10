import { useEffect, useRef } from 'react';

function useInterval(callback: Function, delay: number, condition: boolean = true): void {

    const savedCallback: React.MutableRefObject<Function> = useRef<Function>();

    useEffect((): void => {
        savedCallback.current = callback;
    }, [ callback ]);
  
    useEffect((): () => void => {

        const handler = (...args): void => savedCallback.current(...args);
  
        if(delay !== null && condition) {
            const interval = setInterval(handler, delay);
            return (): void => clearInterval(interval);
        }

    }, [ delay, condition ]);

}

export default useInterval;