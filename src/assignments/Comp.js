import { useState } from "react";

function Comp() {
  // 과제1-1: 7-1, 7-2강을 듣고 이곳에 투두리스트 컴포넌트를 작성해주세요.
  const [todo,setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange =(e)=> setTodo(e.target.value);
  const onSubmit=(e)=>{
    e.preventDefault();

    if(todo===""){
      return;
    }

    setTodo("");

    setTodos(current => [todo, ...current])
  }

  return (
    <div>
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="할일이 무엇인가요? ... "
        onChange={onChange}
        value={todo}
        ></input>
        <button>
          추가
        </button>
      </form>
      <hr/>
      {todos.map((item, index)=>
        <li key={index}>{item}</li>)
      }
    </div>
  );
}

export default Comp;
