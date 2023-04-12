import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Dragons from './dragon';
import Profile from './missionProfile';
import Missions from './mission';
import Rockets from './rocket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            |
            <Route path="/myProfile" element={<Profile />} />
            <Route path="/dragons" element={<Dragons />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
