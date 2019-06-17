import React from "react";

const DeleteButton = () => {
  const handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri === true) {
      alert("消せません");
    } else {
      const del = confirm("全てのデータを初期化します。よろしいですか？");
      if (del) {
        localStorage.clear();
        clearInterval(setInterval(achievement, 10));
        location.reload();
      }
    }
  };

  return (
    <button style={{ fontSize: "100%" }} onClick={handleClick}>
      データ消去（消えます）
    </button>
  );
};

export default DeleteButton;
