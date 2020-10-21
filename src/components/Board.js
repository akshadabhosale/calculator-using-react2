import React,{useState,useRef,useEffect} from "react";
import { Button ,Form} from 'react-bootstrap';
//import Table from 'react-bootstrap/Table';
import Result from "./Result"
import "./Result.css"


/*class Board extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            op1:0,
            op2:0,
            operation:"empty",
            break:true,
            temp:0,
            op1get:false,
           // op2get:false

        }
    }
   keyPress=(i)=>{
       // alert(i);
       if(this.checkNotNumber(i))
       {
           this.state.operation=i;
           this.state.break=false;
           console.log(this.state.operation);
           this.state.op1get=true;
           if( this.state.op1get) {
           this.setOperand1()
           }

       }
       if(!(this.checkNotNumber(i)) && !(this.state.op1get) && (!(this.state.break)))
       {
           this.state.temp=this.state.temp*10+i;
           //console.log(this.state.temp);
          // this.state.break=true;



       }
       if(!(this.checkNotNumber(i)) && !(this.state.op2get))
       {
           this.state.temp=this.state.temp*10+i;
           console.log(this.state.temp);
           //this.state.break=true;
          

   
       }
    

   
        
    }
    setOperand1=()=>
    {
        //console.log(this.state.temp);
        this.state.op1=this.state.temp;
        //console.log(this.state.op1);
        this.state.temp=0;

    }

    checkNotNumber=(i)=>
    {
        if(i=="+" || i=="-" || i=="*" || i=="/" || i=="=")
        {
            return true
        }
    }

    render()
    {
    
        return(
        <div>
            <Result/>
            <Button variant="outline-secondary" value="7" className="btn" onClick={()=>this.keyPress(7)}>7</Button>{' '}
            <Button variant="outline-secondary" value="8" className="btn" onClick={()=>this.keyPress(8)} >8</Button>{' '}
            <Button variant="outline-secondary" value="9" className="btn" onClick={()=>this.keyPress(9)}>9</Button>{' '}
            <Button variant="outline-secondary" value="/" className="btn" onClick={()=>this.keyPress("/")}>/</Button>{' '}

            <br></br>
            <Button variant="outline-secondary" value="4" className="btn" onClick={()=>this.keyPress(4)}>4</Button>{' '}
            <Button variant="outline-secondary" value="5" className="btn" onClick={()=>this.keyPress(5)}>5</Button>{' '}
            <Button variant="outline-secondary" value="6" className="btn" onClick={()=>this.keyPress(6)}>6</Button>{' '}
            <Button variant="outline-secondary" value="*" className="btn" onClick={()=>this.keyPress("*")}>*</Button>{' '}
            <br></br>
            <Button variant="outline-secondary" value="1" className="btn" onClick={()=>this.keyPress(1)}>1</Button>{' '}
            <Button variant="outline-secondary" value="2" className="btn" onClick={()=>this.keyPress(2)}>2</Button>{' '}
            <Button variant="outline-secondary" value="3" className="btn" onClick={()=>this.keyPress(3)}>3</Button>{' '}
            <Button variant="outline-secondary" value="-" className="btn" onClick={()=>this.keyPress("-")}>-</Button>{' '}
            <br></br>
            <Button variant="outline-secondary" value="0" className="btn" onClick={()=>this.keyPress(0)}>0</Button>{' '}
            <Button variant="outline-secondary" value="." className="btn" onClick={()=>this.keyPress(".")}>.</Button>{' '}
            <Button variant="outline-secondary" value="=" className="btn" onClick={()=>this.keyPress("=")}>=</Button>{' '}
            <Button variant="outline-secondary" value="+" className="btn" onClick={()=>this.keyPress("+")}>+</Button>{' '}



            </div>
        )
    }

}*/


function Board()
{
    const [result,setResult]=useState(" ");
    const inputRef=useRef(null)
    
    const clear =()=>
    {
        setResult(" ")
    }

    const handleClick=(e)=>
    {
       // console.log(e.target.value)
        //console.log(result);
        setResult(result.concat(e.target.value))
        console.log(result);
    }

    const calculate=()=>
    {
        try{
            setResult=(eval(result).toString());
        }
        catch(err)
        {
            setResult("Error")
        }
    }

    return(
        <div>
            <Form>
                <Form.Control value={result} ref={inputRef} />
            </Form>

            <Button variant="outline-secondary" value="7" className="btn" onClick={handleClick}>7</Button>{' '}
            <Button variant="outline-secondary" value="8" className="btn" onClick={handleClick} >8</Button>{' '}
            <Button variant="outline-secondary" value="9" className="btn" onClick={handleClick}>9</Button>{' '}
            <Button variant="outline-secondary" value="/" className="btn" onClick={handleClick}>/</Button>{' '}

            <br></br>
            <Button variant="outline-secondary" value="4" className="btn" onClick={handleClick}>4</Button>{' '}
            <Button variant="outline-secondary" value="5" className="btn" onClick={handleClick}>5</Button>{' '}
            <Button variant="outline-secondary" value="6" className="btn" onClick={handleClick}>6</Button>{' '}
            <Button variant="outline-secondary" value="*" className="btn" onClick={handleClick}>*</Button>{' '}
            <br></br>
            <Button variant="outline-secondary" value="1" className="btn" onClick={handleClick}>1</Button>{' '}
            <Button variant="outline-secondary" value="2" className="btn" onClick={handleClick}>2</Button>{' '}
            <Button variant="outline-secondary" value="3" className="btn" onClick={handleClick}>3</Button>{' '}
            <Button variant="outline-secondary" value="-" className="btn" onClick={handleClick}>-</Button>{' '}
            <br></br>
            <Button variant="outline-secondary" value="0" className="btn" onClick={handleClick}>0</Button>{' '}
            <Button variant="outline-secondary" value="." className="btn" onClick={handleClick}>.</Button>{' '}
            <Button variant="outline-secondary" value="=" className="btn" onClick={calculate}>=</Button>{' '}
            <Button variant="outline-secondary" value="+" className="btn" onClick={handleClick}>+</Button>{' '}

            <Button variant="outline-secondary" value="7" className="btn" onClick={clear}>Clear</Button>{' '}


        </div>
    )
}

export default Board;