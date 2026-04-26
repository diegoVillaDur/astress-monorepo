
function App() {
  return (
    <button onClick={async () => {
      const response = await fetch('/server');
      const data = await response.text();
      console.log(data);
    }}>
      Click Me
    </button>
  )
}

export default App;