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
        <div className="login-container">
            <h2>로그인</h2>
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
                <button type="submit" className="login-button">로그인</button>
            </form>
            <Link to="/signup" className="login-link">아직 회원이 아니신가요?</Link>
        </div>
    );
}

export default Login;
