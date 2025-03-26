import { Header } from './Header.jsx';
import { Subheader } from './Subheader.jsx';
import { ListHeader } from './ListHeader.jsx';
import { ItemsList } from './ItemsList.jsx';
import { ListContainer } from './ListContainer.jsx';
import './App.css';
import { taskList } from './data/tasks.js';
import { HeaderContainer } from './HeaderContainer.jsx';

const App = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
        <Subheader subtitle="Todo List Manager" />
      </HeaderContainer>

      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={taskList} />
      </ListContainer>
    </>
  );
};

export default App;
