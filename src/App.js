import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="react-goes-here" >
      </div>
    </div>
  );
}

function MyComponent() {
  return (
      <div> Hello OpenClassroom ! </div>
  )
}
ReactDOM.render(<MyComponent />, document.getElementById("react-goes-here"))

export default App;
