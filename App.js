import logo from "./logo.svg";
import "./App.css";
import Addtask from "./components/Addtask";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateisDone } from "./store/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <h1> todos :</h1>
        <div className="content">
          <div className="list">
            {todos.length > 0 ? (
              todos.map((el) => (
                <div
                  className="todo"
                  onClick={() => dispatch(updateisDone(el.id))}
                >
                  <p className={el.isDone ? "done" : ""}>{el.title}</p>
                  <button onClick={() => dispatch(deleteTodo(el.id))}>
                    {" "}
                    delete
                  </button>
                  {el.isDone && (
                    <img
                      src="https://tse1.mm.bing.net/th?id=OIP.Km_XPfFbjnq9Gn3qse2YRAHaGo&pid=Api&rs=1&c=1&qlt=95&w=128&h=115"
                      alt=""
                    />
                  )}
                </div>
              ))
            ) : (
              <h1> there are no todos</h1>
            )}
          </div>
          <Addtask />
        </div>
      </div>
    </div>
  );
}

export default App;
