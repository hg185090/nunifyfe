import './App.css';
import { LandingContainer } from './features/dashboard/dashboard';
import SearchAppBar from './utils/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchAppBar />
        <LandingContainer />
      </header>
    </div>
  );
}

export default App;
