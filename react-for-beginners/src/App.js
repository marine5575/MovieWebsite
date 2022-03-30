import { useEffect, useState } from "react";

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing((prev) => !prev);

  function Hello() {
    function byeFn() {
      console.log("bye");
    }

    function hiFn() {
      console.log("created");

      return byeFn;
    }

    useEffect(() => {
      console.log("hi");

      return () => console.log("bye");
    }, []);

    return <h1>Hello</h1>;
  }

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
