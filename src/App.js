import React, { useState } from "react";
import "./App.css";
import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./UserOptionsData/options";
import Translation from "./components/Translation";
import { Configuration, OpenAIApi } from "openai";
require("dotenv").config();
const Open_AI_Key = process.env.REACT_APP_CHATGPT_API_KEY;

function App() {
  //const VITE_Open_AI_Key = process.env.REACT_APP_CHATGPT_API_KEY;
  //console.log("this is", Open_AI_Key);
  const configuration = new Configuration({
    apiKey: Open_AI_Key
  });

  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  //const [placeholdertext, setPlaceHolderTxt] = useState("")

  const SelectOption = (option, val1) => {
    setOption(option);

    if (val1 === "Image Generator") {
      window.open("https://lokeshdudigollar.github.io/csb-edq8v4/");
    }
  };

  const doStuff = async () => {
    //setPlaceHolderTxt(option["demo"]);
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} SelectOption={SelectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;
