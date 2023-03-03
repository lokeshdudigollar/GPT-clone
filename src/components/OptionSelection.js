import React from "react";

function OptionSelection({arrayItems, SelectOption}){
    return(
        <>
            <h1 className="heading">AI at your service</h1>
            <p>Choose one of the options below and give input and see the magic!</p>
            <div className="grid-main">
                {arrayItems.map((item) =>{
                    //console.log(item.name);
                    return(
                        <div className="grid-child" onClick={() =>SelectOption(item.option,item.name)}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
            <p>Made with {"\u2764"} by <b>Lokesh Dudigollar</b></p>
        </>

    );

}

export default OptionSelection;