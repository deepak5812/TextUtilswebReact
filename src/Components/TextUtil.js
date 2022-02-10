
import React,{useState} from 'react'
import '../index.css'
function TextUtil() {
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }

    const changedTLowerCase=()=>{
    let cValue=text.toLowerCase();
    setText(cValue);
    }

    const changedTUpperCase=()=>{
        let cValue=text.toUpperCase();
        setText(cValue);
        }
    const clearText=()=>{
          let cValue="";
          setText(cValue);
        }

    const [text,setText]=useState("");
  return (
    <>
    <div className="mb-3">
    <h1>Enter Your Text Below </h1>
 </div>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
</div>
<div className='b'>
  <button className="b1 btn btn-primary" onClick={changedTUpperCase}>CONVERT UPPERCASE</button>
  <button className="b2 btn btn-primary" onClick={changedTLowerCase}>CONVERT LOWERCASE</button>
  <button className="b3 btn btn-primary" onClick={clearText}>CLEAR TEXT</button>
</div>
   </>
  )
}
export default TextUtil