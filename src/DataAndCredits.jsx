import React from "react";
import ReactDOM from "react-dom";

import SettingSounds from "./components/_SettingSounds.jsx";
import SettingData from "./components/_SettingData.jsx";
import Status from "./components/_Status.jsx";
import AchievementList from "./components/_AchievementList.jsx";

const DataAndCredits = () => {
  return (
    <>
      バージョン番号を再クリックで閉じる
      <hr />
      <SettingSounds />
      <hr />
      <SettingData />
      <hr />
      <Status />
      <hr />
      <AchievementList />
      <hr />
      <h1>クレジット</h1>
      <ul>
        <li>
          <b>原案</b> :{" "}
          <a href="https://mastodon.cloud/@SugaryAlice" target="_blank" rel="noopener noreferrer">
            ありす
          </a>
        </li>
        <li>
          <b>プログラム</b> :{" "}
          <a href="https://mastodon.cloud/@cs3" target="_blank" rel="noopener noreferrer">
            せせせ
          </a>
        </li>
        <li>
          <b>画像</b> :{" "}
          <a href="http://www.irasutoya.com/" target="_blank" rel="noopener noreferrer">
            いらすとや
          </a>
          , umezy12
        </li>
        <li>
          <b>楽曲</b> :{" "}
          <a href="https://mastodon.cloud/@hc85f" target="_blank" rel="noopener noreferrer">
            HC
          </a>
          ,{" "}
          <a href="http://classical-sound.seesaa.net/" target="_blank" rel="noopener noreferrer">
            クラシック名曲サウンドライブラリー
          </a>
        </li>
        <li>
          <b>効果音</b> :{" "}
          <a href="https://soundeffect-lab.info/" target="_blank" rel="noopener noreferrer">
            効果音ラボ
          </a>
        </li>
        <li>
          <b>出演</b> :{" "}
          <a href="https://mastodon.cloud/@thethreegraces1" target="_blank" rel="noopener noreferrer">
            しまくま
          </a>
          ,{" "}
          <a href="https://mastodon.cloud/@njp2" target="_blank" rel="noopener noreferrer">
            FUBAR
          </a>
          ,{" "}
          <a href="https://mastodon.cloud/@awa" target="_blank" rel="noopener noreferrer">
            あじゃ
          </a>
        </li>
        <li>
          <b>スペシャルサンクス</b> :{" "}
          <a href="https://mastodon.cloud" target="_blank" rel="noopener noreferrer">
            mastodon.cloud
          </a>
        </li>
        <li>(敬称略)</li>
      </ul>
      <hr />
      <h1>更新履歴</h1>
      <ul>
        <li>●○ でかい更新</li>
        <li>○● 細かい修正・バグ修正</li>
        <li>○● ver.1.1.1β コード修正 (2018.01.31)</li>
        <li>●○ ver.1.1β 実績削除 (2017.09.03)</li>
        <li>
          ●○ ver.1β ステータス表示を実装,新実績を実装,その他細かい修正
          (2017.09.02)
        </li>
        <li>
          ●○ ver.0.11.0β
          解除済実績の一覧表示を実装,新実績を実装,その他細かい修正
          (2017.09.01～)
        </li>
        <li>
          ●○ ver.0.10.0β プレイ時間の測定を実装,新実績を実装,その他細かい修正
        </li>
        <li>●○ ver.0.9.0β 新実績を実装 (～2017.09.01)</li>
        <li>○● ver.0.8.1β 大漁が出ないバグを修正 (2017.08.30～)</li>
        <li>●○ ver.0.8.0β 音設定を実装</li>
        <li>○● ver.0.7.1β うさプリ救済措置の出現確率を調整</li>
        <li>●○ ver.0.7.0β うさプリBGM差し替え,救済措置を実装 (～2017.08.30)</li>
        <li>●○ ver.0.6.0β 設定を実装 (2017.08.25)</li>
        <li>
          ●○ ver.0.5.0β バージョン番号とクレジット表示を実装 (2017.08.24～)
        </li>
        <li>●○ ver.0.4.0β うさプリを実装,うさプリ関連の実績を実装</li>
        <li>●○ ver.0.3.0β 鳥関連の実績を実装</li>
        <li>●○ ver.0.2.0β Twitterで共有ボタンを実装 (～2017.08.24)</li>
        <li>●○ ~ver.0.1.0β バージョン記録開始 (～2017.08.21)</li>
      </ul>
    </>
  );
};

setInterval(function() {
  ReactDOM.render(<DataAndCredits />, document.getElementById("data-credits"));
}, 1000);
