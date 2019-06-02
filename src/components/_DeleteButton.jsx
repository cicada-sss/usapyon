import React from "react";

const DeleteButton = () => {
  handleClick = e => {
    e.preventDefault();
    if (localStorage.usapri == 1) {
      alert("消せません");
    } else {
      var del = confirm("全てのデータを初期化します。よろしいですか？");
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
