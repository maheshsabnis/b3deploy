import logo from './logo.svg';
import './App.css';

function App() {
  const clickMe=()=>{
    alert('Clicked');
  }
  return (
    <div className="App">
       <h1>The Amplify Deployed React.js App</h1>
       <input type="button" value="Click Me" onClick={clickMe}/>
    </div>
  );
}

export default App;
