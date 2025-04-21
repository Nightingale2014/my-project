import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/test.css"; // 스타일 파일 연결

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const defaultTags = [
    "수능공부", "자격증준비", "공무원시험", "토익", "임용고시", "컴퓨터활용능력"
  ];

  // 🔥 태그 버튼 클릭하면 input에 세팅
  const handleTagClick = (tag) => {
    setInputValue(tag);
  };

  // 🔥 검색 버튼 클릭
  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      navigate(`/search?query=${inputValue.trim()}`);
      setInputValue(""); // 검색 후 input 비워주기
    }
  };

  // 🔥 엔터로 검색
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
      <div className="search-wrapper">
        <div className="search-container">
          <h1 className="title">STUDYLOG</h1>

          <div className="search-bar-wrapper">
            <div className="search-bar">
              <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="search-input"
              />
              <button onClick={handleSearch} className="search-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>

              </button>
            </div>

            <div className="tags-wrapper">
              {defaultTags.map((tag, index) => (
                  <button
                      key={index}
                      onClick={() => handleTagClick(tag)}
                      className="tag-button"
                  >
                    #{tag}
                  </button>
              ))}
            </div>

          </div>
        </div>
      </div>
  );
}

export default SearchBar;
