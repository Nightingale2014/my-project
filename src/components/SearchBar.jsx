import React, { useState } from "react";

function SearchBar() {
    const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState([
        "수능공부", "자격증준비", "공무원시험", "토익", "임용고시", "컴퓨터활용능력"
    ]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            e.preventDefault();
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleSearch = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="search-container">
            <h1 className="title">STUDYLOG</h1>

            <div className="search-bar-wrapper">
                {/* 🔵 검색창 부분 */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="태그를 입력하세요"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="search-input"
                    />
                    <button onClick={handleSearch} className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>

                {/* 🟢 태그 리스트 바로 검색창 아래에 */}
                <div className="tags-wrapper">
                    {tags.map((tag, index) => (
                        <div className="tag" key={index}>
                            #{tag}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default SearchBar;
