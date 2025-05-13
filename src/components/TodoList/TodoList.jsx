import { TodoInfo } from '../TodoInfo';

// Add the required props
export const TodoList = ({ todos, users }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        return <TodoInfo key={todo.id} todo={todo} users={users} />;
      })}
    </section>
  );
};
