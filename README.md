# 概要
React + ReduxでGithub ViewerをSPAとして実装。  
Github REST API V3 を使用して、リポジトリのissueのCRUDが行える。  
https://git-tune.github.io/redux-saga-github-viewer/

# 説明
* Functional Component中心のReact開発
* Reduxでの状態管理  
* Atomicデザインでのコンポーネント設計  
* styled-componentを用いたスタイリング手法(レスポンシブ対応)  
* React Routerでのページ設定とページ遷移  
* 静的解析ツールのEslint + Prettierの導入  
* AjaxでのHTTPリクエストの実装  
* Redux Sagaを使用した非同期通信  
* モーダルの実装  
* メニューの実装  

# 補足
EslintとPrettierについて  
* [ESLintとPrettierを導入する](https://qiita.com/kobayashi-m42/items/ea2588686a477d083926)  

Atomic Designについて  
* [Atomic Design を分かったつもりになる](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B/)  

Reduxについて  
* [Redux.js公式](https://redux.js.org/introduction/getting-started)  
* [Redux入門【ダイジェスト版】10分で理解するReduxの基礎](https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7)  
* [Redux 入門 〜Reduxの基礎を理解する〜](https://qiita.com/soarflat/items/bd319695d156654bbe86)  

SPA(Single Page Application)について  
* [SPA(Single Page Application)ってなに？](https://digitalidentity.co.jp/blog/creative/about-single-page-application.html)  
* [シングルページアプリケーション（SPA）の導入メリット＆デメリット](https://www.oro.com/ja/technology/001/)  
* [SPA(Single Page Application)の基本](https://qiita.com/takanorip/items/82f0c70ebc81e9246c7a)  
* [React Router](https://reactrouter.com/web/guides/quick-start)  
* [ささっと学ぶReact Router v4](https://the2g.com/2789)  

REST APIについて  
* [HTTPリクエスト/レスポンスの構成要素を初心者にも分かるように解説してみた](https://qiita.com/koheiyamaguchi0203/items/5777c4653a01ae4c7b06)  
* [初心者目線でAjaxの説明](https://qiita.com/hisamura333/items/e3ea6ae549eb09b7efb9)  
* [RESTful APIとは何なのか](https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2)  
* [0からREST APIについて調べてみた](https://qiita.com/masato44gm/items/dffb8281536ad321fb08)  

HTTPクライアントのAxiosについて
* [Axios公式](https://github.com/axios/axios)  
* [axiosライブラリを使ってリクエストする](https://qiita.com/reflet/items/d5658d5d69e8e1ccd489)  
* [axios、async/awaitを使ったHTTPリクエスト(Web APIを実行)](https://qiita.com/shisama/items/61cdcc09dc69fd8d3127)  

JavaScriptのアドバンスな機能について  
* [Promiseの使い方、それに代わるasync/awaitの使い方](https://qiita.com/suin/items/97041d3e0691c12f4974)  
* [JavaScript の イテレータ を極める！](https://qiita.com/kura07/items/cf168a7ea20e8c2554c6)  
* [イテレーターとジェネレーター](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)  

Redux Sagaについて  
* [Redux Saga公式](https://redux-saga.js.org/) 
* [redux-sagaをざっくり入門したい](https://hogehuga.com/post-1932/)  
* [redux-sagaで非同期処理と戦う](https://qiita.com/kuy/items/716affc808ebb3e1e8ac)  
