import React from "react";

const Status = () => {
  let nowTime = Math.floor(Date.now() / 1000);
  return (
    <>
      <h1>ステータス</h1>
      <ul>
        <li>累計プレイ回数 : {launchTimes}回</li>
        <li>累計プレイ時間 : {playTime + nowTime - launchTime}秒</li>
        <li>累計うさぎ増やし数 : {total.usagi + animals.usagi}匹</li>
        <li>累計くま発見数 : {total.kuma + animals.kuma}匹</li>
        <li>累計りす発見数 : {total.risu + animals.risu}匹</li>
        <li>累計あじゃ発見数 : {total.aja + animals.aja}匹</li>
        {total.tori + animals.tori >= 1 && (
          <li>累計鳥になった回数 : {total.tori + animals.tori}回</li>
        )}
        {Number(localStorage.usapriTimes) >= 1 && (
          <li>累計うさプリ収監回数 : {localStorage.usapriTimes}回</li>
        )}
        {total.tairyou + animals.tairyou >= 1 && (
          <li>累計大漁回数 : {total.tairyou + animals.tairyou}回</li>
        )}
        <li>
          1プレイでの平均うさぎ増やし数 :{" "}
          {Math.round((total.usagi + animals.usagi) / launchTimes * 10) / 10}
          匹
        </li>
        <li>
          1プレイでの平均くま発見数 :{" "}
          {Math.round((total.kuma + animals.kuma) / launchTimes * 10) / 10}匹
        </li>
        <li>
          1プレイでの平均りす発見数 :{" "}
          {Math.round((total.risu + animals.risu) / launchTimes * 10) / 10}匹
        </li>
        <li>
          1プレイでの平均あじゃ発見数 :{" "}
          {Math.round((total.aja + animals.aja) / launchTimes * 10) / 10}匹
        </li>
        <li>
          スコア :{" "}
          {Math.round((Math.round((total.usagi + animals.usagi) / launchTimes * 10) /
              10 +
              Math.round((total.kuma + animals.kuma) / launchTimes * 10) /
                10 *
                100 +
              Math.round((total.risu + animals.risu) / launchTimes * 10) /
                10 *
                100 +
              Math.round((total.aja + animals.aja) / launchTimes * 10) / 10 *
                2000 +
              (total.tori + animals.tori) * 10 +
              Number(localStorage.usapriTimes) * 1000 +
              (total.tairyou + animals.tairyou) *
                100 *
                (Number(localStorage.totalAchievement) + 10)) /
              10 *
              (Math.round((playTime + Math.floor(Date.now() / 1000) - launchTime) / 60) +
                10) /
              10)}
          点
        </li>
      </ul>
    </>
  );
};

export default Status;
