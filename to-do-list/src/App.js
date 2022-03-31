import { useState } from "react";
import "tailwindcss/tailwind.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") return;

    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
  };

  return (
    <>
      <div className="text-center">
        <div className="py-5">
          <h1 className="text-3xl font-bold mb-3">To Do List</h1>
          <div>Total: {toDos.length}</div>
        </div>
        <form onSubmit={onSubmit} className="space-x-2 mb-5">
          <input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write your to do..."
            className="border-2 focus:border-black px-2"
          />
          <button className="bg-slate-300 hover:bg-slate-500 text-white font-bold w-7 h-7 p-0 rounded-lg">
            +
          </button>
        </form>
        <hr />
      </div>
      <div
        className={`mt-3 ${
          toDos.length === 0 ? "text-center" : "sm:pl-10 pl-4 "
        }`}
      >
        {toDos.length === 0 ? (
          "NO CONTENTS"
        ) : (
          <ul className="inline-block">
            {toDos.map((item, index) => (
              <li key={index} className="hover:underline">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
