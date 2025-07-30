import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import UseContextHook from './components/useContext/UseContextHook';
import UseEffectHook from './components/useEffect/UseEffectHook';
import UseMemoHook from './components/useMemo/UseMemoHook';
import UseRefHook from './components/useRef/UseRefHook';
import UseStateHook from './components/usestate/UseStateHook';
import UseStateInput from './components/usestate/UseStateInput';
import ToggleTheme from './components/ToggleTheme';
import UseCallbackHook from './components/useCallback/UseCallbackHook';
import UseReducerHook from './components/useReducer/UseReducerHook';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Hooks Demo</h1>
        <Navbar />
        
        <Routes>
          <Route path="/usestate" element={<UseStateHook />} />
          <Route path="/usestateinput" element={<UseStateInput />} />
          <Route path="/useeffect" element={<UseEffectHook />} />
          <Route path="/usecontext" element={<UseContextHook />} />
          <Route path="/useref" element={<UseRefHook />} />
          <Route path="/usememo" element={<UseMemoHook />} />
          <Route path="/toggle-theme" element={<ToggleTheme />} />
          <Route path="/usecallback" element={<UseCallbackHook />} />
          <Route path="/usereducer" element={<UseReducerHook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
