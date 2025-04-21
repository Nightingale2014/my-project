import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Home() {
    return (
        <div className="relative min-h-screen"> {/* 부모 relative */}

            {/* 로그인 + 회원가입 버튼 */}
            <div className="absolute top-6 right-8 flex space-x-4 z-50">
                <Link to="/login" className="signup-link">
                    로그인
                </Link>
                <Link to="/signup" className="signup-link">
                    회원가입
                </Link>
            </div>

            {/* 가운데 정렬된 콘텐츠 */}
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-5xl font-bold text-blue-900 mb-6">STUDYLOG</h1>
                <SearchBar />
            </div>
        </div>
    );
}
export default Home;


