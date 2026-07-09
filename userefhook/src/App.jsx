import { useRef } from "react"; // It creates a reference to an HTML element.
import Task1 from "./component/Task1";
import "./App.css";

function App() {
  const inputref = useRef();
  //useRef hook => It creates a reference to an HTML element. It allows you to directly access and manipulate DOM elements in a functional component without needing to use state or props.
  const imgref = useRef();

  function chng() {
    inputref.current.value = "React JS";
    // It sets the value of the input element to "React JS" when the button is clicked. This is done by accessing the current property of the inputref, which points to the actual DOM element, and then setting its value property.
    inputref.current.style.color = "brown";
    inputref.current.style.fontSize = "40px";
    inputref.current.style.backgroundColor = "aqua";
    imgref.current.src = "./1.jpeg";
    // It changes the source of the image to "./1.jpeg" when the button is clicked. This is achieved by accessing the current property of the imgref, which points to the actual DOM element, and then setting its src property to the new image path.
    imgref.current.height = "200";
    imgref.current.width = "300";
    imgref.current.style.size = "cover";
  }
  return (
    <>
      <input type="text" ref={inputref} placeholder="Enter Name" />
      <br></br>
      <img src="./2.jpeg" height={100} width={150} ref={imgref} />
      <br></br>
      <button onClick={chng}>Change</button>
      {/* When the button is clicked, the chng function is called, which updates the value and styles of the input element and changes the source and dimensions of the image element using the useRef hook to access the DOM elements directly. */}
      <Task1 />
    </>
  );
}

export default App;
