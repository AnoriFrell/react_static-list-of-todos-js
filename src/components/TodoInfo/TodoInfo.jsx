import { UserInfo } from '../UserInfo';

// Add the required props
export const TodoInfo = ({ todo, users }) => {
  const { userId, completed, title } = todo;

  return (
    <article
      className={completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {users.map(
        user =>
          user.id === userId ? <UserInfo user={user} key={user.id} /> : null,
        // eslint-disable-next-line function-paren-newline
      )}
    </article>
  );
};
