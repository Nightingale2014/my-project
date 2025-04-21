import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-3xl font-bold mb-6">로그인</h2>

            {/* 아이디 입력창 */}
            <input
                type="text"
                placeholder="아이디"
                className="w-80 p-2 mb-4 border border-gray-300 rounded"
            />

            {/* 비밀번호 입력창 */}
            <input
                type="password"
                placeholder="비밀번호"
                className="w-80 p-2 mb-4 border border-gray-300 rounded"
            />

            {/* 로그인 버튼 */}
            <button className="w-80 p-2 bg-blue-900 text-white font-bold rounded hover:bg-blue-700 transition">
                로그인
            </button>

            {/* 회원가입 링크 */}
            <Link to="/signup" className="text-blue-700 hover:text-blue-900 font-semibold mt-4">
                회원이 아니신가요?
            </Link>
        </div>
    );
}

export default Login;
