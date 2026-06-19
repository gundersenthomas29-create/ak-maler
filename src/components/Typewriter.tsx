import { useEffect, useState } from "react";

export function Typewriter({ phrases }: { phrases: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIdx((i) => i + 1);
      }, 300);
    } else if (deleting) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 35);
    } else {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 65);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, phrases]);

  return (
    <span
      style={{
        display: "block",
        width: "100%",
        minHeight: "1.2em",
        whiteSpace: "nowrap",
        overflow: "hidden",
        fontStyle: "italic",
        color: "var(--color-accent)",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
      }}
    >
      {text || "\u00A0"}
    </span>
  );
}
