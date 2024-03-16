
import './App.css';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import {useState} from 'react';

function App() {
  const showalert=(message,type)=>{
  setalert({
   msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);
  }
  // const removebodyclass=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-primary')
  // }
 const [mode,setmode]=useState(`light`);
 const change = ()=>{
  // removebodyclass();
  // document.body.classList.add('bg-'+cls)
  
  if(mode==='light'){
    setmode('dark');
    document.body.style.removeProperty("background-color");
    document.body.style.backgroundColor='#0d0c21';
    showalert("change of theme  is being executed","success");
  }
  else{
    setmode('light');
    document.body.style.removeProperty("background-color");
    document.body.style.backgroundColor='white';
    showalert("change of theme  is being executed","success");
  }
 }
 const [alert,setalert]= useState(null)
  return (
    <>

   <Navbar title ="Contact  us" about = "hello" mode={mode} change ={change}/>
   <Alerts  alert={alert}/>
   
  {/* { document.body.style.backgroundColor="#0d0c21"} */}
   <div className='container'><Textform heading="Enter your text to analyze" mode={mode}    showalert={showalert}/></div>
     
    </>
  );
}

export default App;
