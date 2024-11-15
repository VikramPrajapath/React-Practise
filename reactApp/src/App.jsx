import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Count from "./components/Count";
function App() {
  const person = {
    name: "Ikris",
    message: "Hello",
    emoji: "😁😁",
    seatNumber: [1, 2, 7],
  };
  return (
    <div className="App">
      Hello Edgeverse...
      <Hello person={person} />
      <Fruits />
      <ConditionalComponent />
      <Message />
      <Count />
    </div>
  );
}

export default App;
