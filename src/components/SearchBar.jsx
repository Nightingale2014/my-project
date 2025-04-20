import React, { useState } from "react";
import "../style/test.css"; // 스타일 연결

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  
  const defaultTags = [
    "수능공부", "자격증준비", "공무원시험", "토익", "임용고시", "컴퓨터활용능력"
  ];

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
    <div className="search-wrapper">
      <div className="search-container">
        <h1 className="title">STUDYLOG</h1>

        <div className="search-bar-wrapper">
          <div className="search-bar">
            {/* ✅ 기존 태그들을 검색창 왼쪽에 박히게 */}
            {tags.map((tag, index) => (
              <div key={index} className="tag-inside">
                #{tag}
                <button onClick={() => removeTag(index)} className="remove-tag-button">×</button>
              </div>
            ))}
            {/* ✅ 입력창 */}
            <input
              type="text"
              placeholder="태그를 입력하세요"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="search-input"
            />
            {/* ✅ 검색 버튼 */}
            <button onClick={handleSearch} className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          {/* 기본 태그들은 아래 출력 */}
          <div className="tags-wrapper">
            {defaultTags.map((tag, index) => (
              <div key={index} className="tag">
                #{tag}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchBar;
