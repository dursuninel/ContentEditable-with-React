import React from "react";

export default function Texts({ data, reload }) {
  return (
    <div>
      {reload}
      {data.map((data, key) => (
        <data.element
          key={key}
          id={`area-${key}`}
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      ))}
    </div>
  );
}
