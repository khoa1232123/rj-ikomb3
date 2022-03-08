import React, { useEffect, useState } from "react";

const ProgressBar = ({ value, max, onInput }) => {
  const [wid, setWid] = useState(0);

  useEffect(() => {
    setWid((value / max) * 100);
  }, [value, max]);

  return (
    <div className="progress-bar">
      <div style={{ width: `${wid}%` }}></div>
      <input
        type="range"
        step="any"
        value={value}
        min={0}
        max={max}
        onInput={(e) => onInput(e.target.value)}
        className="input-slider"
      />
      <div style={{ width: `${wid}%` }}></div>
    </div>
  );
};

export default ProgressBar;
