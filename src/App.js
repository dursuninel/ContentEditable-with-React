import React, { createElement, useEffect, useState } from "react";
import "./App.css";
import Texts from "./components/Texts";
import Buttons from "./components/Buttons";

function App() {
  const [selectedText, setSelectedText] = useState(null);
  const [selectedTag, setSelectedTag] = useState("");
  const [reload, setReload] = useState(false);

  const [texts, setTexts] = useState([
    {
      text: `Devs Just Want to Have Fun by Cyndi Lauper`,
      element: `p`,
      style: "",
    },
    {
      text: `I come home in the morning light My mother says, “When you gonna live your life right?” Oh mother dear we’re not the fortunate ones And devs, they wanna have fun Oh devs just want to have fun`,
      element: `p`,
      style: "",
    },
    {
      text: `The phone rings in the middle of the night My father yells, "What you gonna do with your life?" Oh daddy dear, you know you’re still number one But girls devs, they wanna have fun Oh devs just want to have`,
      element: `p`,
      style: "",
    },
    {
      text: `That’s all they really want Some fun When the working day is done Oh devs, they wanna have fun Oh devs just wanna have fun (devs, they wanna, wanna have fun, devs wanna have)`,
      element: `p`,
      style: "",
    },
  ]);

  const [buttons, setButtons] = useState([
    {
      text: `H1`,
      attr: `h1`,
      action: `tag`,
    },
    {
      text: `H2`,
      attr: `h2`,
      action: `tag`,
    },
    {
      text: `H3`,
      attr: `h3`,
      action: `tag`,
    },
    {
      text: `H4`,
      attr: `h4`,
      action: `tag`,
    },
    {
      text: `Paragraph`,
      attr: `p`,
      action: `tag`,
    },
    {
      text: `Strong`,
      attr: `font-weight: bold`,
      action: `style`,
    },
    {
      text: `Italic`,
      attr: `font-style: italic`,
      action: `style`,
    },
  ]);

  function highlightText(str, text, style, id) {
    const regex = new RegExp(`(${text})`, "gi");
    return str.replace(regex, `<font style="${style}" id="${id}">$1</font>`);
  }

  let selectTextEvent = () => {
    let selectText = window.getSelection().toString();
    setSelectedText(selectText);

    var range = window.getSelection().getRangeAt(0);
    var parentElement = range.commonAncestorContainer.parentElement;
    setSelectedTag(parentElement);
  };

  let btnAction = (action, attr) => {
    let index = selectedTag.id.split("area-")[1];
    let id = selectedTag.id;
    let newTexts = texts;

    if (action === "tag") {
      newTexts[index].element = attr;
    } else {
      let newText = highlightText(newTexts[index].text, selectedText, attr, id);
      newTexts[index].text = newText;
    }

    setTexts(newTexts);
    setReload(!reload);
  };

  return (
    <div className="App">
      <Buttons datas={buttons} btnAction={btnAction} />

      <div onMouseUp={selectTextEvent}>
        <div
          contentEditable
          suppressContentEditableWarning
          className="text_area"
        >
          <Texts data={texts} reload={reload} />
        </div>
      </div>
    </div>
  );
}

export default App;
