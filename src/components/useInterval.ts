import { useEffect, useRef } from 'react';
import { callbackFunction } from '../types'

export const useInterval = (callback: callbackFunction, delay: number | null) => {
    const savedCallback = useRef<callbackFunction | null>(null);

    // remember the last callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // setup the interval
    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (delay != null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};
