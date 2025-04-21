import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md">
            <div className="text-2xl font-bold"></div>
            {/* 왼쪽 (비워둠) */}

            <div className="flex space-x-4">
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-500">
                    로그인
                </Link>
                <Link to="/signup" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-500">
                    회원가입
                </Link>
            </div>
        </header>

    );
}

export default Header;
