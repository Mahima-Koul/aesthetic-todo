import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [candleLit, setCandleLit] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500);

  const HandleAdd = () => {
    const trimmed = todo.trim();
    if (!trimmed) return;
    settodos([...todos, { todo: trimmed, isCompleted: false }]);
    settodo("");
  };

  const HandleDelete = (index) => {
    settodos(todos.filter((_, i) => i !== index));
  };

  const HandleEdit = (index) => {
    const newText = prompt("Revise your manuscript:", todos[index].todo);
    if (!newText) return;
    const updated = [...todos];
    updated[index].todo = newText;
    settodos(updated);
  };

  const HandleToggle = (index) => {
    const updated = [...todos];
    updated[index].isCompleted = !updated[index].isCompleted;
    settodos(updated);
  };

  const HandleChange = (e) => settodo(e.target.value);

  const activeTodos = todos.filter((t) => !t.isCompleted);
  const completedTodos = todos.filter((t) => t.isCompleted);

  return (
    <>
      <Navbar />

      {/* BACKGROUND */}
      <div className="min-h-screen bg-[url('/bg2.jpg')] bg-cover bg-center bg-fixed">
        <div className="min-h-screen bg-black/60 py-16 px-6">

          <div className="container mx-auto max-w-3xl">

            {/* MAIN LEDGER CARD */}
            <div className="bg-[#f2ede3]/95 backdrop-blur-sm 
                            text-[#2b2118] 
                            rounded-xl 
                            shadow-[0_20px_60px_rgba(0,0,0,0.7)] 
                            px-12 py-12 
                            border border-[#d6c7b2]">

              <h1 className="font-[Cinzel] text-4xl tracking-[0.15em] text-center mb-3 italic">
                Nocturnal Ledger
              </h1>

              <p className="text-center italic text-[#6e5c47] mb-8 tracking-wide">
                {completedTodos.length} of {todos.length} manuscripts sealed
              </p>

              {todos.length === 0 && (
                <p className="italic text-center text-[#7a6a55]">
                  The archive awaits your first inscription.
                </p>
              )}

              {/* ACTIVE ENTRIES */}
              {activeTodos.map((item) => {
                const realIndex = todos.indexOf(item);
                return (
                  <div key={realIndex}
                       className="flex justify-between items-center mb-4 
                                  transition-all duration-500 
                                  hover:translate-x-1">

                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        checked={item.isCompleted}
                        onChange={() => HandleToggle(realIndex)}
                        className="accent-[#3a2f26] w-4 h-4 cursor-pointer"
                      />

                      <span className="text-lg font-serif tracking-wide">
                        {item.todo}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => HandleDelete(realIndex)}
                        className="border border-[#3a2f26] px-3 py-1 text-sm 
                                   hover:bg-[#3a2f26] hover:text-amber-100 
                                   transition-all duration-300">
                        ✧
                      </button>

                      <button
                        onClick={() => HandleEdit(realIndex)}
                        className="border border-[#3a2f26] px-3 py-1 text-sm 
                                   hover:bg-[#3a2f26] hover:text-amber-100 
                                   transition-all duration-300">
                        ✎
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* ARCHIVED SECTION */}
              {completedTodos.length > 0 && (
                <>
                  <div className="flex items-center my-10">
                    <div className="flex-1 h-px bg-[#cbb89d]/40"></div>
                    <span className="px-4 italic tracking-wide text-[#7a6a55]">
                      Archived Entries
                    </span>
                    <div className="flex-1 h-px bg-[#cbb89d]/40"></div>
                  </div>

                  {completedTodos.map((item) => {
                    const realIndex = todos.indexOf(item);
                    return (
                      <div key={realIndex}
                           className="flex justify-between items-center mb-4 opacity-70">

                        <div className="flex items-center gap-4">
                          <input
                            type="checkbox"
                            checked={item.isCompleted}
                            onChange={() => HandleToggle(realIndex)}
                            className="accent-[#3a2f26] w-4 h-4 cursor-pointer"
                          />

                          <span className="text-lg line-through italic text-[#8b7a64] tracking-wide">
                            {item.todo}
                          </span>
                        </div>

                        <button
                          onClick={() => HandleDelete(realIndex)}
                          className="text-sm text-[#5c4a36] hover:text-black transition-colors">
                          remove
                        </button>
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            {/* ADD ENTRY SECTION */}
            <div className="mt-10 bg-[#f2ede3]/95 
                            border border-[#d6c7b2] 
                            rounded-xl 
                            px-8 py-6 
                            shadow-xl 
                            flex items-center gap-6">

              <input
                onChange={HandleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") HandleAdd();
                }}
                value={todo}
                type="text"
                placeholder="Inscribe a new intention..."
                className="flex-1 bg-transparent outline-none 
                           font-serif text-sm tracking-wide
                           border-b border-[#cbb89d]
                           focus:border-[#5c4a36]
                           pb-1"
              />

              <button
                onClick={HandleAdd}
                className="border border-[#3a2f26] px-5 py-2 text-sm
                           tracking-wide
                           hover:bg-[#3a2f26] hover:text-amber-100
                           transition-all duration-300">
                Seal
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}