# Sequelize & Promise

[관련 소스 코드](https://github.com/parkjunyoung/sequelize-crud)

## Sequelize

### Sequelize란.

Sequelize는 ORM(Object-Relational Mapping)

Nodejs로 mysql 또는 postgresql (db) 를 제어할 수 있게 해줍니다.

### dotenv 설정

환경설정 파일을 dotenv에 저장해놓고, 이후에 다른 사용자가 편리하게 설정가능합니다.

```shell
npm install dotenv
```

`.env.sample`에서 가이드를 적어놓고, 실질적인 사용자가 필요한 내용은 `.env`에 설정합니다.

이를 통해서 `process.env.DB_USER` 와 같이 접근하여 사용 가능합니다.

### Database 생성

- mysql 접속 (패스워드 입력)

```shell
mysql -u root -p
```

- 권한 설정

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '루트 비밀번호';
```

### DB 접속

- sequelize 설치

```shell
npm install mysql2
```

- sequelize 설치

```shell
npm install sequelize@4.42.0
```

### 모델 작성

### DB 입력

```js
exports.post_products_write = (req, res) => {
  models.Products.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  }).then(() => {
    res.redirect('/admin/products')
  })

  // models.Products.create(req.body).then(() => {
  //   res.redirect('/admin/products')
  // })
}
```

삭선 처리한 것처럼 모델 생성할 수 있습니다. (자동으로 json 형식으로 만들어 주기 때문에.)

js는 non-blocking이기 때문에 순서를 보장할려면 이를 개선해야하는 로직을 추가해야합니다. 데이터를 넣고 조회하는 순서의 로직이 필요하므로... 이를 해결하는 코드가 필요합니다.

### DB 조회

### 상세페이지 작성 + Moment.js

Moment.js로 사용자 입장에서 편하게 볼 수 있도록 수정합니다.

```js
const moment = require('moment')

Products.prototype.dateFormat = (date) => moment(date).format('YYYY-MM-DD')
```

다음과 같이 진행하면 사용자가 보기 쉽게 수정합니다. `yyyy-mm-dd`의 형태로 출력합니다.

### DB 수정

`write.html`에서 action을 비워놓음으로서 수정이나 신규 작성 시, action을 자동으로 처리해줍니다. 똑같이 post를 사용하지만 다른 결과를 만들 수 있습니다.

### DB 삭제.

---

## 정리

CRUD 구현 ( select, insert, update, delete)

- `models.테이블명.create(데이터)`
- `models.테이블명.findAll(조회조건)`
- `models.테이블명.findByPk(primary key)`
- `models.테이블명.findOne(조회조건)`
- `models.테이블명.update(데이터, 조회조건)`
- `models.테이블명.deatroy(조회조건)`

다음과 같이 crud를 쉽게 구현할 수 있습니다.

해당 프로젝트의 구성은 mvc의 구조입니다.

/admin

/contacts

- Contact.js

와 같이 정리하는 것도 좋을 듯합니다.

---

<br/>

## Promise

### Promise란

Callback Hell을 막을 수 있습니다.

Promise 만드는 방법

1. resolve와 reject를 인자로 가지는 함수를 만듭니다.
2. 내가 원하는 시점을 resolve로 받아오자

#### Promise 예제

```js
const aa = new Promise((resolve, reject) => {
  resolve(console.log('Promise 이행!!'))
})

aa.then(() => {
  console.log('Promise 실행 완료!')
})
```

**output**

```
Promise 이행!!
Promise 실행 완료.
```

admin.ctrl.js를 보면 이 코드들이 모두 Promise임을 확인할 수 있습니다.

#### 인자 사용시

```js
const aa = new Promise((resolve, reject) => {
  resolve('Promise 123')
})

aa.then((result) => {
  console.log(result)
})
```

#### Time 설정

```js
const wait1second = new Promise((resolve, reject) => {
  console.log('Start!!')
  setTimeout(() => {
    resolve('1초뒤 출력!!!')
  }, 1000)
})

wait1second.then((result) => {
  console.log('Promise 종료')
})
```

reject를 통해 나중에 에러처리를 할 수 있습니다.

```js
const wait1second = new Promise((resolve, reject) => {
  console.log('Start!!')
  setTimeout(() => {
    reject('1초뒤 출력!!!')
  }, 1000)
})

wait1second.then((result) => {
  console.log('Promise 종료')
})
```

**output**

```shell
(node:37435) UnhandledPromiseRejectionWarning: 1초뒤 출력!!!
(node:37435) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:37435) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

또한 reject 시 catch로 잡을 수 있습니다.

```js
const wait1seconds = new Promise((resolve, reject) => {
  reject('Error!')
})

wait1seconds
  .then(() => {
    console.log('Promise 이행완료')
  })
  .catch((err) => {
    console.log(err)
  })
```

### Promise Chaining, Promise all

예제 코드는 다음과 같습니다.

```js
const p1 = new Promise((resolve, reject) => {
  //1초 뒤에 찍습니다.
  setTimeout(() => {
    resolve({ p1_text: 'p1의 텍스트' })
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  //3초 뒤에 찍습니다.
  setTimeout(() => {
    resolve({ p2_text: 'p2의 텍스트' })
  }, 3000)
})

p1.then((result1) => {
  console.log('p1 = ' + result1.p1_text)
  return p2
}).then((result2) => {
  console.log('p2 = ' + result2.p2_text)
})

Promise.all([p1, p2]).then((result) => {
  console.log('p1 = ' + result[0].p1_text)
  console.log('p2 = ' + result[1].p2_text)
})
```

### async await

```js
const models = require('./models')

async function getProducts() {
  try {
    const product1 = await models.Products.findByPk(1)
    const product4 = await models.Products.findByPk(4)

    console.log(product1.dataValues)
    console.log(product4.dataValues)
  } catch (err) {
    console.log(err)
  }
}

getProducts()
```

**output**

```json
Executing (default): SELECT `id`, `name`, `price`, `description`, `createdAt`, `updatedAt` FROM `Products` AS `Products` WHERE `Products`.`id` = 1;
{
  id: 1,
  name: '제품명2',
  price: 1500,
  description: 'ㅎㅎㅎㅎ',
  createdAt: 2021-02-15T13:14:26.000Z,
  updatedAt: 2021-02-15T13:43:45.000Z
}
Executing (default): SELECT `id`, `name`, `price`, `description`, `createdAt`, `updatedAt` FROM `Products` AS `Products` WHERE `Products`.`id` = 4;
{
  id: 4,
  name: '상품',
  price: 5000,
  description: '안녕하세요',
  createdAt: 2021-02-16T13:49:37.000Z,
  updatedAt: 2021-02-16T13:49:37.000Z
}
```

다음과 같이 확인할 수 있습니다.

이처럼 async 와 await를 통해서 데이터를 받아 올 수 있습니다.
