
import "./App.css";
import { Routing1 } from "./components/Routing1";
// import { Counter } from "./components/CounterReducer";

// import { Chat } from "./components/ChatUseEffect";
// import { Mapping } from "./components/Mapping";
// import { Input } from "./components/RestaurauntInput";
// import {Github} from "./components/Github.jsx"

// import { Tic } from "./components/Tic";

// import { Stop } from "./components/StopWatch";
// import "./components/Timer.css"

// import { ContactList } from "./components/ContactList";
// import { Timer } from "./components/Timer";



  // const [istrue, setIsTrue] = useState(false);
  // return (
  //   <div className="App">
  //     <ContactList/> 
  //      <Timer/>
  //    <h2>StopWatch</h2> 
  //     <Stop/>
  //     {istrue ? <h1>STOPWATCH</h1> : <h1>TIMER</h1>}
  //     {istrue ? <Stop /> : <Timer />}
  //     <div className="btn1">
  //     <button onClick={() => setIsTrue(!istrue)}>TOGGLE</button>
  //     </div>
  //   </div>
  // );





function App() {
  //  const [show,setShow]=useState(true)
    return (
      <div className="App">
{/* //         {show ? <Mapping/>: <Input/>}
//         <div className="show" onClick={()=>{ */}
{/* //           setShow(!show)
//         }}>{show ? "Add Another Restauraunt":"Restauraunt Data"}</div> */}
{/* // <Chat/> */}
{/* <Github/> */}
{/* <Counter/> */}
<Routing1/>
      </div>
    
    
     
     
    )
     
}

export default App;
