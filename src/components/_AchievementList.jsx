import React from "react";

const AchievementList = () => (
    <>
    <h1>解除済実績一覧</h1>
    <ul>
      {typeof localStorage.achievement1_1 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんLv.1</span> - 累計うさぎ数100匹突破
        </li>
      )}
      {typeof localStorage.achievement1_2 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんLv.2</span> - 累計うさぎ数500匹突破
        </li>
      )}
      {typeof localStorage.achievement1_3 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんLv.3</span> - 累計うさぎ数1000匹突破
        </li>
      )}
      {typeof localStorage.achievement1_4 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんLv.4</span> - 累計うさぎ数5000匹突破
        </li>
      )}
      {typeof localStorage.achievement1_5 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんLv.5</span> - 累計うさぎ数10000匹突破
        </li>
      )}
      {typeof localStorage.achievement2_1 !== "undefined" && (
        <li>
          <span className="notice">くまぴょんLv.1</span> - くま発見
        </li>
      )}
      {typeof localStorage.achievement2_2 !== "undefined" && (
        <li>
          <span className="notice">くまぴょんLv.2</span> - 累計くま発見数5匹突破
        </li>
      )}
      {typeof localStorage.achievement2_3 !== "undefined" && (
        <li>
          <span className="notice">くまぴょんLv.3</span> - 累計くま発見数10匹突破
        </li>
      )}
      {typeof localStorage.achievement2_4 !== "undefined" && (
        <li>
          <span className="notice">くまぴょんLv.4</span> - 累計くま発見数50匹突破
        </li>
      )}
      {typeof localStorage.achievement2_5 !== "undefined" && (
        <li>
          <span className="notice">くまぴょんLv.5</span> - 累計くま発見数100匹突破
        </li>
      )}
      {typeof localStorage.achievement3_1 !== "undefined" && (
        <li>
          <span className="notice">トッテナムLv.1</span> - りす発見
        </li>
      )}
      {typeof localStorage.achievement3_2 !== "undefined" && (
        <li>
          <span className="notice">トッテナムLv.2</span> - 累計りす発見数5匹突破
        </li>
      )}
      {typeof localStorage.achievement3_3 !== "undefined" && (
        <li>
          <span className="notice">トッテナムLv.3</span> - 累計りす発見数10匹突破
        </li>
      )}
      {typeof localStorage.achievement3_4 !== "undefined" && (
        <li>
          <span className="notice">トッテナムLv.4</span> - 累計りす発見数50匹突破
        </li>
      )}
      {typeof localStorage.achievement3_5 !== "undefined" && (
        <li>
          <span className="notice">トッテナムLv.5</span> - 累計りす発見数100匹突破
        </li>
      )}
      {typeof localStorage.achievement4_1 !== "undefined" && (
        <li>
          <span className="notice">あじゃぴょんLv.1</span> - あじゃ発見
        </li>
      )}
      {typeof localStorage.achievement4_2 !== "undefined" && (
        <li>
          <span className="notice">あじゃぴょんLv.2</span> - 累計あじゃ発見数3匹突破
        </li>
      )}
      {typeof localStorage.achievement4_3 !== "undefined" && (
        <li>
          <span className="notice">あじゃぴょんLv.3</span> - 累計あじゃ発見数5匹突破
        </li>
      )}
      {typeof localStorage.achievement4_4 !== "undefined" && (
        <li>
          <span className="notice">あじゃぴょんLv.4</span> -
          累計あじゃ発見数10匹突破
        </li>
      )}
      {typeof localStorage.achievement4_5 !== "undefined" && (
        <li>
          <span className="notice">あじゃぴょんLv.5</span> -
          累計あじゃ発見数30匹突破
        </li>
      )}
      {typeof localStorage.achievement5_1 !== "undefined" && (
        <li>
          <span className="notice">鳥貴族Lv.1</span> - 鳥になった回数1回突破
        </li>
      )}
      {typeof localStorage.achievement5_2 !== "undefined" && (
        <li>
          <span className="notice">鳥貴族Lv.2</span> - 鳥になった回数5回突破
        </li>
      )}
      {typeof localStorage.achievement5_3 !== "undefined" && (
        <li>
          <span className="notice">鳥貴族Lv.3</span> - 鳥になった回数10回突破
        </li>
      )}
      {typeof localStorage.achievement5_4 !== "undefined" && (
        <li>
          <span className="notice">鳥貴族Lv.4</span> - 鳥になった回数30回突破
        </li>
      )}
      {typeof localStorage.achievement5_5 !== "undefined" && (
        <li>
          <span className="notice">鳥貴族Lv.5</span> - 鳥になった回数50回突破
        </li>
      )}
      {typeof localStorage.achievement6_1 !== "undefined" && (
        <li>
          <span className="notice">うさプリズナーLv.1</span> - うさプリ収監
        </li>
      )}
      {typeof localStorage.achievement6_2 !== "undefined" && (
        <li>
          <span className="notice">うさプリズナーLv.2</span> - うさプリ収監3回突破
        </li>
      )}
      {typeof localStorage.achievement6_3 !== "undefined" && (
        <li>
          <span className="notice">うさプリズナーLv.3</span> - うさプリ収監5回突破
        </li>
      )}
      {typeof localStorage.achievement6_4 !== "undefined" && (
        <li>
          <span className="notice">うさプリズナーLv.4</span> - うさプリ収監10回突破
        </li>
      )}
      {typeof localStorage.achievement6_5 !== "undefined" && (
        <li>
          <span className="notice">うさプリズナーLv.5</span> - うさプリ収監30回突破
        </li>
      )}
      {typeof localStorage.achievement7_1 !== "undefined" && (
        <li>
          <span className="notice">うさぴょん中毒Lv.1</span> -
          累計プレイ時間10秒突破
        </li>
      )}
      {typeof localStorage.achievement7_2 !== "undefined" && (
        <li>
          <span className="notice">うさぴょん中毒Lv.2</span> -
          累計プレイ時間60秒突破
        </li>
      )}
      {typeof localStorage.achievement7_3 !== "undefined" && (
        <li>
          <span className="notice">うさぴょん中毒Lv.3</span> -
          累計プレイ時間600秒突破
        </li>
      )}
      {typeof localStorage.achievement7_4 !== "undefined" && (
        <li>
          <span className="notice">うさぴょん中毒Lv.4</span> -
          累計プレイ時間3600秒突破
        </li>
      )}
      {typeof localStorage.achievement7_5 !== "undefined" && (
        <li>
          <span className="notice">うさぴょん中毒Lv.5</span> -
          累計プレイ時間43200秒突破
        </li>
      )}
      {typeof localStorage.achievement8_1 !== "undefined" && (
        <li>
          <span className="notice">大漁Lv.1</span> - 大漁1回突破
        </li>
      )}
      {typeof localStorage.achievement8_2 !== "undefined" && (
        <li>
          <span className="notice">大漁Lv.2</span> - 大漁5回突破
        </li>
      )}
      {typeof localStorage.achievement8_3 !== "undefined" && (
        <li>
          <span className="notice">大漁Lv.3</span> - 大漁10回突破
        </li>
      )}
      {typeof localStorage.achievement8_4 !== "undefined" && (
        <li>
          <span className="notice">大漁Lv.4</span> - 大漁50回突破
        </li>
      )}
      {typeof localStorage.achievement8_5 !== "undefined" && (
        <li>
          <span className="notice">大漁Lv.5</span> - 大漁100回突破
        </li>
      )}
      {typeof localStorage.achievement9_1 !== "undefined" && (
        <li>
          <span className="notice">奇跡のあじゃ</span> - 最初にあじゃを出した
        </li>
      )}
      {typeof localStorage.achievement9_2 !== "undefined" && (
        <li>
          <span className="notice">幸運のくま</span> - 最初にくまを出した
        </li>
      )}
      {typeof localStorage.achievement9_3 !== "undefined" && (
        <li>
          <span className="notice">運命のトッテナム</span> - 最初にりすを出した
        </li>
      )}
      {typeof localStorage.achievement9_4 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんプレイヤーの鑑</span> -
          うさぎのみで大漁を達成した
        </li>
      )}
      {typeof localStorage.achievement10_1 !== "undefined" && (
        <li>
          <span className="notice">Thank you for playing</span> - エンディングを見た
        </li>
      )}
      {typeof localStorage.achievement11_1 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんマスターLv.1</span> - 実績10個解除
        </li>
      )}
      {typeof localStorage.achievement11_2 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんマスターLv.2</span> - 実績20個解除
        </li>
      )}
      {typeof localStorage.achievement11_3 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんマスターLv.3</span> - 実績30個解除
        </li>
      )}
      {typeof localStorage.achievement11_4 !== "undefined" && (
        <li>
          <span className="notice">うさぴょんマスターLv.4</span> - 実績40個解除
        </li>
      )}
      {typeof localStorage.achievement11_5 !== "undefined" && (
        <li>
          <span className="notice">Congratulations!</span> - 全実績解除
        </li>
      )}
    </ul>
    </>
);

export default AchievementList;
