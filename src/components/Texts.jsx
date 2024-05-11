import React from "react";

export default function Texts({ data, reload }) {
  return (
    <div>
      {data.map((data, key) => (
        <data.element key={key} id={`area-${key}`}>
          {data.text}
          {reload}
        </data.element>
      ))}
    </div>
  );
}
