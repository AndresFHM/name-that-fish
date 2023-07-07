import "./App.css";
import { ClassApp } from "./Components/Class/ClassApp";
import { FunctionalApp } from "./Components/Functional/FunctionalApp";
import { Fish } from "./types";
import { Images } from "./assets/Images";

function App() {
  const initialFishes: Fish[] = [
    {
      name: "trout",
      url: Images.trout,
    },
    {
      name: "salmon",
      url: Images.salmon,
    },
    {
      name: "tuna",
      url: Images.tuna,
    },
    {
      name: "shark",
      url: Images.shark,
    },
    {
      name: "parrot",
      url: Images.parrot,
    },
    {
      name: "mola",
      url: Images.mola,
    },
  ];

  return (
    <div className="App">
      <h1>Name That Fish</h1>
      <div className="split">
        <div className="left">
          <h3>Functional</h3>
          <FunctionalApp initialFishes={initialFishes} />
        </div>
        <div className="right">
          <h3>Class</h3>
          <ClassApp initialFishes={initialFishes} />
        </div>
      </div>
    </div>
  );
}

export default App;

