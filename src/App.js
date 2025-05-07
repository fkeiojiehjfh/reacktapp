import logo from './logo.svg';
import './App.css';
import TestComponent from './conteiners/newTestComponent';
import AnotherOneComponent from './conteiners/anotherOneComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          привет мой дорогой друг
        </p>
        <p>
         НАДЕЮСЬ ТЕБЕ ЭТО ПОНРАВИТЬСЯ. А ТЕПЕРЬ
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          жмакай сюда
        </a>
       < TestComponent />
       <AnotherOneComponent />

      </header>
    </div>
  );
}

export default App;
