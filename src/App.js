import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Compare from './components/Compare';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='primary-container'>
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="compare" element={<Compare />}/>
            <Route path="timeline" element={<Timeline />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
