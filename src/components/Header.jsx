import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

function Home() {
    return (
        <div className="relative min-h-screen">
            {/* 오른쪽 상단 로그인/회원가입 버튼 */}
            <div className="flex justify-end p-6">
                <div className="flex space-x-4">
                    <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">로그인</Link>
                    <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded">회원가입</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
