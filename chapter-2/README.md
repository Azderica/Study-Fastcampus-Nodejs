# Node.js 기초

## Node.js 란

- 웹브라우저에서 쓰이는 자바스크립트를 서버에서 사용가능
  - 자바스크립트 문법 서버에서 사용 가능
- V8의 탑재로 인해 가능하다
  - V8 : 크롬에 탑재된 자바스크립트 엔진
- 대용량 서비스를 위해 Ryan Lienhart Dahldl roqkf

<br/>

## Node.js 설치

- [Link](https://nodejs.org/ko/download/)

<br/>

## Editor

- VScode 사용

<br/>

## 모듈 패턴

- 내보낼 때 : `Module.exports 변수`
- 불러올 때 : `require 파일명`

<br/>

## Npm

- [NPMJS](https://www.npmjs.com/)
- `package.json`을 통해서, 모듈을 어떤 것을 사용하는 지를 알 수 있고, 다른 사용자에게 전달할 때 node_modules 파일을 보내지 않아도 상대방이 사용가능합니다.
- `package-lock.json`
  - 각 모듈의 버전과 필요한 부분 등을 유지합니다.
  - 이를 통해서 충돌을 방지합니다.
