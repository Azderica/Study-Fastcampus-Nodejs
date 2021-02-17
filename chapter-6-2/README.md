# puppeteer

## puppeteer란.

Puppeteer 는 Headless Chrome 혹은 Chromium 를 제어하도록 도와주는 라이브러리 이다.

[자세하게 보기](https://pks2974.medium.com/puppeteer-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-a252bffbb2a8))

[소스 코드](https://github.com/parkjunyoung/node-puppeteer)

다음 순으로 진행

```shell
mysql -u root -p
```

```sql
create database fastcampus2;
```

### 예제 코드 - 1.

template에 다음과 같이 구성하면 네이버 코스피를 확인할 수 있습니다.

```js
await page.goto(
  'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC',
  {
    timeout: 0,
    waitUntil: 'domcontentloaded',
  }
)

const tdName = await page.\$eval('.spt_con strong', (strong) =>
  strong.textContent.trim()
)
console.log(tdName)
```

### 예제코드 - 2.

테이블에 내용을 추가하고 수정하고 삭제를 합니다.

```js
const puppeteer = require('puppeteer')

//입력 할 텍스트
const insert_name = 'insert_' + Math.random().toString(36).substring(2, 15)
const insert_description =
  'insert_' + Math.random().toString(36).substring(2, 15)

//수정 할 텍스트
const modi_name = 'update_' + Math.random().toString(36).substring(2, 15)
const modi_description = 'update_' + Math.random().toString(36).substring(2, 15)

async function run() {
  // 브라우저 열기
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // 옵션은 무조건 예스로 처리
  page.on('dialog', (dialog) => {
    dialog.accept()
  })

  // 웹사이트 로딩
  await page.goto('http://localhost:3000/', {
    timeout: 0,
    waitUntil: 'domcontentloaded',
  })

  // 상단 테이블의 th 제목을 가져오고 싶은경우
  // const tdName = await page.$eval('table tr:nth-child(1) th:nth-child(1)', th => th.textContent.trim() );
  // console.log(tdName);

  await page.waitForSelector('.btn-default')
  await page.click('.btn-default')

  await page.waitForSelector('.btn-primary')

  // 추가

  await page.evaluate(
    (a, b) => {
      document.querySelector('input[name=name]').value = a
      document.querySelector('textarea[name=description]').value = b
      document.querySelector('.btn-primary').click()
    },
    insert_name,
    insert_description
  )

  // 수정
  await page.waitForSelector('.btn-default')

  await page.click('table tr:nth-child(2) td:nth-child(1) a')

  await page.waitForSelector('.btn-primary')
  await page.click('.btn-primary')
  await page.waitForSelector('.btn-primary')

  await page.evaluate(
    (a, b) => {
      document.querySelector('input[name=name]').value = a
      document.querySelector('textarea[name=description]').value = b
      document.querySelector('.btn-primary').click()
    },
    modi_name,
    modi_description
  )

  await page.waitForSelector('.btn-default')
  await page.click('.btn-default')
  await page.waitForSelector('.btn-default')

  // Confirm 이 있는 경우. 모두 yes로 처리
  // 삭제
  await page.click('.btn-danger')

  // 브라우저 닫기
  await browser.close()
}

run()
```
