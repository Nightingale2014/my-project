import React from "react";

function TagList() {
  const tags = ["수능공부", "자격증준비", "공무원시험", "토익", "임용고시", "컴퓨터활용능력"];

  return (
    <div className="tag-container">
      {tags.map((tag, index) => (
        <div key={index} className="tag-item">
          #{tag}
        </div>
      ))}
    </div>
  );
}

export default TagList;
