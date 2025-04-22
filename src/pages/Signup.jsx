import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("회원가입 완료! 🎉");
    };

    return (
        <div className="signup-container">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    className="login-input"
                    type="text"
                    name="name"
                    placeholder="이름 입력"
                    value={form.name}
                    onChange={handleChange}
                />
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
                <button type="submit" className="login-button">회원가입</button>
            </form>
            <Link to="/login" className="login-link">이미 회원이신가요?</Link>
        </div>
    );
}

export default Signup;
