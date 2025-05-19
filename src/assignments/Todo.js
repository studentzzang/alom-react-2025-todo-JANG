import { localStorage } from "./hooks/useLocalStorage";

function Todo({index, item, todos, setTodos}){

  const onDelete=()=>{
    const newArr = todos.filter((_, i) => i !== index); //배열이 단순 문자열일때

    setTodos(newArr);

    console.log("Zz");
  }

  return(
    <div>
      <li key={index}>{item}</li>

      <button onClick={()=>onDelete()}>
        X
      </button>
    </div>
  )
}
export default Todo;