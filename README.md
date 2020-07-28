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

# 実装
- [ ]  yarnでのパッケージインストール  
  - [ ] redux, react-reduxのインストール
  - [ ] redux-devtoolのインストール
  - [ ] react-routerのインストール
  - [ ] styled-componentsのインストール
  - [ ] eslint+prettierのインストール
  - [ ] react-modalのインストール
  - [ ] react-notifyのインストール
  - [ ] redux-sagaのインストール
  - [ ] axiosのインストール
- [ ] ヘッダーの実装
  - [ ] ヘッダーロゴの実装
  - [ ] ヘッダーリンクの実装
  - [ ] メニューの実装（ライブラリを使わずに実装)
- [ ]  topページの実装
  - [ ] タブの実装(react-router等ライブラリは使わずに実装）
- [ ] issueページの実装
  - [ ] 一覧表示
  - [ ] issueフィルタ機能の実装
  - [ ] issue作成(react-modalを使って実装)
  - [ ] issue更新(react-modalを使って実装)
  - [ ] issue削除(全て選択のチェックボックスも実装）
  - [ ] リクエスト成功時のトーストの表示
  - [ ] リクエスト失敗時のトーストの表示
- [ ] プロフィールページの実装（userストアにデータベタ書きしたものを表示だけ）
  - [ ] ユーザ情報のAPI経由での取得
  - [ ] フォロー数等々ユーザ情報の表示
- [ ] レスポンシブ対応
