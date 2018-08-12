# Goodfood Admin 後台

## 協作者

* [Tomas](https://github.com/horsekitlin)
* Curt
* Arel Lin
* Hung Yu
* LeLe

## 目標

Good Food Slack App 的後台管理介面

## Mock API

後台尚未完成 所以要先裝一個假的後台

未來只要修改 `Domain` 就可以完成

[mockAPI](https://www.mockapi.io/)

### 檔案結構

├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── AllGroupsTabContent
│   │   │   └── index.js
│   │   ├── CreateTodo
│   │   │   ├── CreateTodoButton
│   │   │   │   └── index.js
│   │   │   ├── TodoInput
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── GroupTabContent
│   │   │   └── index.js
│   │   ├── Title
│   │   │   └── index.js
│   │   └── TodoList
│   │       ├── Todo
│   │       │   └── index.js
│   │       └── index.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── registerServiceWorker.js
└── test
    └── apiTests
        └── user.http

#### test/apiTest

使用 VScode 的可以安裝 rest client Extention

然後就可以使用 test/apiTest/xxx.http

中自動發 request 做 API 測試

[Rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
