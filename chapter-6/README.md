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

### 참고 코드 - 1

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

### 참고 코드 - 2

송장 번호를 확인할 수 있는 코드는 다음과 같습니다.

```js
const express = require('express')

// 모듈선언
const request = require('request-promise')
const cheerio = require('cheerio')

const app = express()
const port = 3000

app.get('/shipping/:invc_no', async (req, res) => {
  try {
    //대한통운의 현재 배송위치 크롤링 주소
    const url = `https://www.doortodoor.co.kr/parcel/ \ doortodoor.do?fsp_action=PARC_ACT_002&fsp_cmd=retrieveInvNoACT&invc_no=${req.params.invc_no}`
    let result = [] //최종 보내는 데이터

    const html = await request(url)
    const $ = cheerio.load(
      html,
      { decodeEntities: false } //한글 변환
    )

    const tdElements = $('.board_area').find('table.mb15 tbody tr td') //td의 데이터를 전부 긁어온다
    // 아래 주석을 해제하고 콘솔에 찍어보세요.
    // console.log(tdElements)

    res.send('111')
  } catch (e) {
    console.log(e)
  }
})

app.listen(port, function () {
  console.log('Express listening on port', port)
})
```

데이터를 가져올 때는 unique한 클래스나, id를 가져와야합니다.
