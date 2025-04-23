import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-[#0c1f4a] text-white py-3 shadow-md">
            <div className="w-full px-6 flex justify-between items-center">
                {/* 왼쪽 로고 */}
                <Link to="/" className="flex items-center text-white font-bold text-lg">
                    <img src="/studylog_logo.png" alt="로고" className="h-6 mr-2" />
                </Link>

                {/* 오른쪽 메뉴 */}
                <nav className="space-x-6 text-sm">
                    <Link to="/">홈</Link>
                    <Link to="/board">게시판</Link>
                    <Link to="/login">로그인</Link>
                    <Link to="/signup">회원가입</Link>
                    <Link to="/find-password">비밀번호 찾기</Link>
                    <Link to="/find-email">아이디(이메일) 찾기</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
