import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Switch,
} from 'react-router-dom';
import Landing from './components/layout/Landing';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    </Router>
);

export default App;
