import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <button onClick={props.click}>{props.name}</button>
  );
}

export default App;
