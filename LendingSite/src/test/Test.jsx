import { memo } from 'react';
 
const TodoItem = memo(function TodoItem({ text, onDelete }) {
  console.log('рендер TodoItem:', text);
  return (
    <li>
      {text}
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
});

function TodoList() {
  const [todos, setTodos] = useState([...]);
 
  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);
 
  return todos.map((t) => (
    <TodoItem key={t.id} text={t.text} onDelete={() => handleDelete(t.id)} />
  ));
}
