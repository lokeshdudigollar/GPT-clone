import React from 'react';

function Translation({doStuff, setInput, result }){
    //console.log("This is ",placeholdertext);
   
    
    return(
        <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        placeholder="Enter the input here"
        onChange={(e) => setInput(e.target.value)}>
       </textarea><br/>
       <p>
        Made with {"\u2764"} by <b>Lokesh Dudigollar</b>
      </p>
      <button className="action-btn" onClick={doStuff}>
        DO YOUR MAGIC!
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
    )

}

export default Translation;