import { useEffect } from "react";

export default function useComputedStyle(color) {
    useEffect(() => {
        const styles = getComputedStyle(document.documentElement);
        const courseColor = styles.getPropertyValue(`--color-${color}`);
        const head = document.querySelector("head");

        const meta = document.createElement("meta");
        meta.setAttribute("name", "theme-color");
        meta.setAttribute("content", courseColor);

        head.appendChild(meta);
    }, []);
}
