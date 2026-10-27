import React, { useEffect, useState } from "react";

export default function ChangeTitle() {
  const [inp, setInp] = useState("amir");
  useEffect(() => {
    document.title = inp;
  }),[inp];
  return (
    <>
      <input
        placeholder="enter title"
        type="text"
        className="px-3 py-4 border-2"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
    </>
  );
}
