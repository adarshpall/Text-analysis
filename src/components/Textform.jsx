import React, {useState} from 'react'

export default function Textform(props) {
  const handleon=(event)=>{
    console.log("changes done"+ text);
   settext(event.target.value);

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
<button className="btn btn-primary mx-2" onClick={handleup}> convert to up </button>
<button className="btn btn-primary mx-2" onClick={handlelo}> convert to low </button>
    </div>
    <div className="container" style={{color: props.mode==='light'?'grey':'white' }}>
      <h1>summarry of your text</h1>
      <p>
        {text.split(" ").length}words and{text.length}character
      </p>
      <p>{0.08*text.split(" ").length} minutes</p>
    </div>
    </>
  );
}
