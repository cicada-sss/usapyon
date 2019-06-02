import React from "react";

const Status = () => {
  let nowTime = Math.floor(Date.now() / 1000);
  return (
    <>
      <h1>ステータス</h1>
      <ul>
        <li>累計プレイ回数 : {launchTimes}回</li>
        <li>累計プレイ時間 : {playTime + nowTime - launchTime}秒</li>
        <li>累計うさぎ増やし数 : {totalUsagi + usagi}匹</li>
        <li>累計くま発見数 : {totalKuma + kuma}匹</li>
        <li>累計りす発見数 : {totalRisu + risu}匹</li>
        <li>累計あじゃ発見数 : {totalAja + aja}匹</li>
        {totalTori + tori >= 1 && (
          <li>累計鳥になった回数 : {totalTori + tori}回</li>
        )}
        {Number(localStorage.usapriTimes) >= 1 && (
          <li>累計うさプリ収監回数 : {localStorage.usapriTimes}回</li>
        )}
        {totalTairyou + tairyou >= 1 && (
          <li>累計大漁回数 : {totalTairyou + tairyou}回</li>
        )}
        <li>
          1プレイでの平均うさぎ増やし数 :{" "}
          {Math.round(((totalUsagi + usagi) / launchTimes) * 10) / 10}匹
        </li>
        <li>
          1プレイでの平均くま発見数 :{" "}
          {Math.round(((totalKuma + kuma) / launchTimes) * 10) / 10}匹
        </li>
        <li>
          1プレイでの平均りす発見数 :{" "}
          {Math.round(((totalRisu + risu) / launchTimes) * 10) / 10}匹
        </li>
        <li>
          1プレイでの平均あじゃ発見数 :{" "}
          {Math.round(((totalAja + aja) / launchTimes) * 10) / 10}匹
        </li>
        <li>
          スコア :{" "}
          {Math.round(
            (((Math.round(((totalUsagi + usagi) / launchTimes) * 10) / 10 +
              (Math.round(((totalKuma + kuma) / launchTimes) * 10) / 10) * 100 +
              (Math.round(((totalRisu + risu) / launchTimes) * 10) / 10) * 100 +
              (Math.round(((totalAja + aja) / launchTimes) * 10) / 10) * 2000 +
              (totalTori + tori) * 10 +
              Number(localStorage.usapriTimes) * 1000 +
              (totalTairyou + tairyou) *
                100 *
                (Number(localStorage.totalAchievement) + 10)) /
              10) *
              (Math.round(
                (playTime + Math.floor(Date.now() / 1000) - launchTime) / 60
              ) +
                10)) /
              10
          )}
          点
        </li>
      </ul>
    </>
  );
};

export default Status;