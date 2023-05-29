import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 5);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Add Animals</button>
      <p>The number of animals is: {counter}</p>
    </div>
  );
}

export default App;
