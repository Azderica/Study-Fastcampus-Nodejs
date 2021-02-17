# Crawling

[Git Code](https://github.com/parkjunyoung/node-crawling))

목차

- Crawling 개요
- 배송위치 추적
- Puppeteer

## 크롤링 순서

1. URL에서 HTML을 가져옵니다.
2. 내가 원하는 부분을 가져옵니다.

이를 정리하면 다음과 같습니다.

- request : url로 호출후 데이터를 가져오고
- cheerio : jQuery 방식으로 DOM을 가져와서 데이터를 정제합니다.

### 참고 코드.

네이버 코드를 가져오는 샘플코드는 다음과 같습니다.

```js
const request = require('request')

// 네이버 주소 가져오기
const url = 'https://www.naver.com'

request(url, (error, response, body) => {
  console.log(body)
})
```

다음 html을 다 받아서, 내가 필요한 정보를 찾아서 정제하면 됩니다.
