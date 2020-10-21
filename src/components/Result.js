import React from "react";

import "./Result.css"

class Result extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        }
    }
    render()
    {
        let display;
        if(this.state.show)
        {
            display=<Show/>
        }
        return (
            <>
            {display}
            </>
        )
    }
}


const Show=()=>{
    return (
        <div className="results"> 
           
        </div>
    );
}

export default Result;