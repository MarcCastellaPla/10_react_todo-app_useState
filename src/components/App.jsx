import { ItemsList } from './ItemsList.jsx';
import { Header } from './Header.jsx';
import { Subheader } from './Subheader.jsx';
import { ListHeader } from './ListHeader.jsx';
import { ListContainer } from './ListContainer.jsx';
import { HeaderContainer } from './HeaderWrapper.jsx';
import { TaskForm } from './TaskForm.jsx';
import { useTodos } from '../hooks/useTodos';

import './App.css';

const App = () => {
  const { todos, handleCreateTask } = useTodos();

  return (
    <>
      <HeaderContainer>
        <Header />
        <Subheader subtitle="Todo List Manager" />
      </HeaderContainer>
      <TaskForm onCreateTask={handleCreateTask} />
      <ListContainer todos={todos} />
      <ListContainer>
        <ListHeader />
        <ItemsList itemsList={todos} />
      </ListContainer>
    </>
  );
};

export default App;
