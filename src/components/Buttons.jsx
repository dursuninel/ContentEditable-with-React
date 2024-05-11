import React from "react";

export default function Buttons({ datas, btnAction }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {datas.map((data, key) => (
        <button key={key} onClick={() => btnAction(data.action, data.attr)}>
          {data.text}
        </button>
      ))}
    </div>
  );
}
