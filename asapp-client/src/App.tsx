import SearchBox from './components/ui-library/SearchBox'

function App() {
  return (
    <div className="App">
      <SearchBox onChange={ (value) => {console.log(value)}} />
    </div>
  );
}

export default App;
