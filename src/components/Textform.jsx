import React, {useState} from 'react'

export default function Textform(props) {
  const clea=()=>
  {  
  let newtext='';
settext(newtext);
  }
  const handleon=(event)=>{
    console.log("changes done"+ text);
   settext(event.target.value);

  }
  const copy=()=>{
    navigator.clipboard.writeText(text);
    props.showalert("Copied to clipboard!","success")
  }
  const extraSpace=()=>{
     let newString = text.replace(/\s+/g,' ').trim();
    settext(newString);
  }
  const handleup=()=>{
let newtext=text.toUpperCase();
settext(newtext);
  }
  let handlelo=()=>{
    let nayatext=text.toLowerCase();
    settext(nayatext);
  }
  const [text,settext]=useState('');
  return ( 
 <>
 
    <div className="container" style={{color: props.mode==='light'?'grey':'white' }}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='light'?'grey':'white'}} value={text} onChange={handleon}  id="my-box" rows= "8"></textarea>

</div>
<button className={`btn btn-${props.mode==='light'?'secondary':'info'} mx-2 my-2`}onClick={handleup}> Convert to up </button>
<button className={`btn btn-${props.mode==='light'?'secondary':'info'} mx-2 my-2`}onClick={handlelo}> Convert to low </button>
<button className={`btn btn-${props.mode==='light'?'secondary':'info'} mx-2 my-2`} onClick={extraSpace}> Remove extra space</button>
<button className={`btn btn-${props.mode==='light'?'secondary':'info'} mx-2 my-2` }onClick={copy}> Copy text</button>
<button className={`btn btn-${props.mode==='light'?'secondary':'info'} mx-2 my-2` }onClick={clea}> Clear text</button>
    </div>
    <div className="container" style={{color: props.mode==='light'?'grey':'white'}}>
      <h1>summarry of your text</h1>
      <p>
        {text.split(/\s+/).filter((element)=>{ return element.length!=0}).length}words and{text.length}character
      </p>
      <p>{0.08*text.split(/\s+/).filter((element)=>{ return element.length!=0}).length} minutes</p>
    </div>
    </>
  );
}
