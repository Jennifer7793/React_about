function App() {
  const name = "Jen"
  const x = true
  const y = false

  return (
    <div className="App">
      <h1>Hello From React</h1>
      <h2>Hello { name }</h2>
      <h2>Hello { 1 + 1 }</h2>
      <h2>Hello { x? 'Yes' : 'No'}</h2>
      <h2>Hello { y? 'Yes' : 'No' }</h2>
    </div>
  );
}

export default App;
