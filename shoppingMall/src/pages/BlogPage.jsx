import { useEffect, useRef } from "react";

export default function BlogPage() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="mw">
      <h2>useRef</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
}
