import React, { useState } from "react";

function SearchBar() {
    const [inputValue, setInputValue] = useState("");
    const [tags, setTags] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            e.preventDefault();
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="search-container">
            <div className="search-box">
                {tags.map((tag, index) => (
                    <div className="tag" key={index}>
                        #{tag}
                        <span className="remove-tag" onClick={() => removeTag(index)}>×</span>
                    </div>
                ))}
                <input
                    type="text"
                    placeholder="태그를 입력하세요"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="search-input"
                />
            </div>
        </div>
    );
}

export default SearchBar;
