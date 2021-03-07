import './App.css';

function App() {
  return (
    <div className="App">
      {arr.map((arr) => <div>{arr.map(arr=> <div>{arr.value}</div>)}</div>)}
    </div>
  );
}

export default App;
