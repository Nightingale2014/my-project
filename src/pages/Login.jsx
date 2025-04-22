import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("로그인 시도: " + JSON.stringify(form));
    };

    return (
        <div className="background">
            <div className="login-card">
                {/* 스터디로그 로고 */}
                <div className="logo-container">
                    <img src="/studylog_logo.png" alt="스터디로그 로고" className="logo-image" />
                </div>

                {/* 로그인 폼 */}
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        className="login-input"
                        type="email"
                        name="email"
                        placeholder="이메일 입력"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <input
                        className="login-input"
                        type="password"
                        name="password"
                        placeholder="비밀번호 입력"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <button type="submit" className="login-button">
                        로그인
                    </button>
                </form>

                {/* 비밀번호 찾기 / 회원가입 */}
                <div className="login-footer">
                    <Link to="#">비밀번호 찾기</Link> |
                    <Link to="/signup">회원가입</Link> |
                    <Link to="#">아이디(이메일) 찾기</Link>
                </div>

                {/* 로그인 상태 유지 */}
                <div className="login-keep">
                    <input type="checkbox" id="keepLogin" />
                    <label htmlFor="keepLogin">로그인 상태 유지</label>
                </div>
            </div>
        </div>
    );
}

export default Login;
