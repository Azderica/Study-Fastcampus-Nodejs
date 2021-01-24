# Express

## Start Express

Express.js란 HTTP 요청에 대하여 라우팅 및 미들웨어 기능을 제공하는 웹 프레임워크입니다.

### 왜 Express 를 사용해야하는가?

- 웹 서비스 관점
  - Express를 사용하지 않고 웹서버를 띄운다면 매우 귀찮을 것
- 프레임워크 선정시 고려해야 될점
  - node.js에서 가장 많이 사용됩니다.
  - 많은 references로 문제해결 및 유지보수에서 편하다.

#### Express 없이 웹 서버를 띄운다면?

![image](https://user-images.githubusercontent.com/42582516/105623904-caf72d00-5e60-11eb-8295-4e800e6fc864.png)

다음은 Express 없이 웹 서버를 띄우는 간단한 코드입니다.

```js
const http = require('http')

http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello Server')
    response.end()
  })
  .listen(3000)
```

> http 상태 코드

| 상태코드 | 설명                    |
| -------- | ----------------------- |
| 1XX      | 조건부응답              |
| 2XX      | 응답성공                |
| 3XX      | 리다이렉션              |
| 4XX      | 요청오류(ex. 404 error) |
| 5XX      | 서버오류                |

#### Express를 통해 웹을 띄원다면

```js
const { request, response } = require('express')
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello expres')
})

app.listen(port, () => {
  console.log('Express listening on port', port)
})
```

### nodemon

장점

- 소스의 변화를 감지해줍니다.
- 서버를 수동으로 내렸다가 올릴 필요없습니다.

사용방법

- 명령어 : `nodemon {your_js_file}`
  - 안되는 경우, 설치 명령어 : `sudo node install -g nodemon`
  - 안되는 경우, 다르게 사용방법 : `npx nodemon {your_js_file}`

<br/>

## Routing

라우팅(routing) 은 기본적으로 어플리케이션 서버에서 경로를 제어하는 목적을 가지고 있습니다.

즉, 목적지까지 갈 수 있는 여러 경로 중 한 가지 경로를 제어하는 목적입니다.

<br/>

## View Engine - Nunjucks

- [Express Template engines](https://expressjs.com/en/resources/template-engines.html)

<br/>

## 템플릿 상속

<br/>

## 미들웨어

미들웨어(middleware)은 중간에 껴 넣는다의 의미로 부가적인 기능이나 처리를 제공하는 목적을 가지고 있습니다.

환경을 연결해주는 소프트웨어를 의미합니다.

<br/>

## form (body-parser)

<br/>

## 정적파일

<br/>

## Global View Variable

<br/>

## 404, 500 Error handling

<br/>

## nunjucks macro

<br/>

## Express 권장 구조

<br/>
