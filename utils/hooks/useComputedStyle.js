import { useEffect } from "react";

export default function useComputedStyle(color) {
    useEffect(() => {
        const styles = getComputedStyle(document.documentElement);
        const courseColor = styles.getPropertyValue(`--color-${color}`);

        const meta = document.querySelector("meta[name=theme-color]");
        meta.setAttribute("content", courseColor);
    }, []);
}
