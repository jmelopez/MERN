
import './App.css';
import Todo from './components/Todo';
import styles from '../src/components/style.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Todo />
    </div>
  );
}

export default App;
