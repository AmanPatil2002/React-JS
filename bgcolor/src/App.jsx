import UseColor from "./BackgroundColor";

export default function App() {

  let [color, setColor] = UseColor("red");

    return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}} onClick={()=>setColor("Black")}> Black </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Yellow"}} onClick={()=>setColor("Yellow")}> Yellow </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}} onClick={()=>setColor("Pink")}> Pink </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}} onClick={()=>setColor("Blue")}> Blue </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}} onClick={()=>setColor("Green")} > Green </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Orange"}} onClick={()=>setColor("Orange")} > Orange </button>
          
        </div>
      </div>
    </div>
  );
}