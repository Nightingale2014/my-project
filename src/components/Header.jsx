import { Link } from "react-router-dom";
import '../style/header.css'; // 정확하게 경로랑 파일명 맞춰서

function Header() {
    return (
        <div className="header-container">
            <Link to="/login" className="header-link">로그인</Link>
            <Link to="/signup" className="header-link">회원가입</Link>
        </div>
    );
}

export default Header;
