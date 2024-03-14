
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
 const [mode,setmode]=useState(`light`);
 const change = ()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='grey';
    showalert("dark mode is enabled","success");
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showalert("light mode is enabled","success");
  }
 }
 const [alert,setalert]= useState(null)
  return (
    <>

   <Navbar title ="adarsh" about = "hello" mode={mode} change ={change}/>
   <Alerts  alert={alert}/>
   <div className='container'><Textform heading="enter text" mode={mode}  /></div>
     
    </>
  );
}

export default App;
