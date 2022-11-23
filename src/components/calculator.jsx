import React, { useState }  from "react";
import './calculator.css'


export default function Calculator() {
const[num,setNum]=useState(0);
const[oldNum,setOldNum]=useState(0);
const[operator,setOperator]=useState();

function inputNum(e){
    var input=e.target.value 
    if(num===0){
        setNum(input);
    }else{
        setNum(num + input);
    }   
}

function clear(){
    setNum(0)
}

function porcentage(){
setNum(num/100)
}

function changeSign() {
    if(num>0){
        setNum(-num)
    }else{
        setNum(Math.abs(num))
    }
        
}

function operatorHandler(e){
    var operatorInput=e.target.value
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
    

}

function calculate(){
    if(operator==="/"){
        setNum(oldNum/num);
    } else if (operator==="X") {
        setNum(oldNum*num);
      
    } else if (operator==="-") {
        setNum(oldNum - num);
    } else if (operator==="+") {
        setNum (parseFloat(oldNum) + parseFloat(num));
    }
    console.log("Calculou!");
    console.log(oldNum);
    console.log(num);
    console.log(operator);
}
    return(
        
        <container className='container'>
          <h1 className='result'>{num}</h1>
          
        <div>
            <button className='lightGrey' onClick={clear}>AC</button>
            <button className='lightGrey' onClick={ changeSign}>+/-</button>
            <button className='lightGrey' onClick={porcentage}>%</button>
            <button className='orange' onClick={operatorHandler} value="/">/</button>
            <br/>
            <button className='darkGrey' onClick={inputNum} value={7}>7</button>
            <button className='darkGrey' onClick={inputNum} value={8}>8</button>
            <button className='darkGrey' onClick={inputNum} value={9}>9</button>
            <button className='orange' onClick={operatorHandler}  value="X">x</button>
            <br />
            <button className='darkGrey' onClick={inputNum} value={4}>4</button>
            <button className='darkGrey' onClick={inputNum} value={5}>5</button>
            <button className='darkGrey' onClick={inputNum} value={6}>6</button>
            <button className='orange' onClick={operatorHandler}  value="-" >-</button>
            <br/>
            <button className='darkGrey' onClick={inputNum} value={1}>1</button>
            <button className='darkGrey' onClick={inputNum} value={2}>2</button>
            <button className='darkGrey' onClick={inputNum} value={3}>3</button>
            <button className='orange' onClick={operatorHandler}  value="+" >+</button>
            <br />
            <button className='zero'>0</button>
            <button className='darkGrey'onClick={inputNum} value={"."}>.</button>
            <button className='orange' onClick={calculate}>=</button>
        </div>
        </container>
        
    )
}
