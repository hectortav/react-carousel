import { useState, useEffect, RefObject } from "react";

export const useOnScreen = (ref: RefObject<HTMLElement>) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
    );

    useEffect(() => {
        observer.observe(ref.current as Element);
        return () => {
            observer.disconnect();
        };
    }, []);

    return isIntersecting;
};
