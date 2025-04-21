import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'; // ✨ 로그인 import 추가

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} /> {/* ✨ 로그인 경로 추가 */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
