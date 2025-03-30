import styles from './TaskForm.module.css';

export const TaskForm = ({ onCreateTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const status = formData.get('status');

    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      status: status,
    };

    onCreateTask(newTodo);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles['todo-form']}>
      <div className={styles['todo-form__group']}>
        <label htmlFor="title" className={styles['todo-form__label']}>
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className={styles['todo-form__input']}
        />
        <label htmlFor="description" className={styles['todo-form__label']}>
          Description
        </label>
        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          required
          className={styles['todo-form__textarea']}
        />
        <label htmlFor="status" className={styles['todo-form__label']}>
          Status
        </label>
        <select
          name="status"
          defaultValue="pending"
          className={styles['todo-form__select']}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit" className={styles['todo-form__button']}>
          Add Todo
        </button>
      </div>
    </form>
  );
};
