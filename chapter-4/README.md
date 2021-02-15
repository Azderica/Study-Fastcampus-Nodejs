# Sequelize

[관련 소스 코드](https://github.com/parkjunyoung/sequelize-crud)

## Sequelize란.

Sequelize는 ORM(Object-Relational Mapping)

Nodejs로 mysql 또는 postgresql (db) 를 제어할 수 있게 해줍니다.

<br/>

## dotenv 설정

환경설정 파일을 dotenv에 저장해놓고, 이후에 다른 사용자가 편리하게 설정가능합니다.

```shell
npm install dotenv
```

`.env.sample`에서 가이드를 적어놓고, 실질적인 사용자가 필요한 내용은 `.env`에 설정합니다.

이를 통해서 `process.env.DB_USER` 와 같이 접근하여 사용 가능합니다.

<br/>

## Database 생성

- mysql 접속 (패스워드 입력)

```shell
mysql -u root -p
```

- 권한 설정

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '루트 비밀번호';
```

<br/>

## DB 접속

- sequelize 설치

```shell
npm install mysql2
```

- sequelize 설치

```shell
npm install sequelize@4.42.0
```

<br/>

## 모델 작성

<br/>

## DB 입력

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

<br/>

## DB 조회

## 상세페이지 작성 + Moment.js

Moment.js로 사용자 입장에서 편하게 볼 수 있도록 수정합니다.

```js
const moment = require('moment')

Products.prototype.dateFormat = (date) => moment(date).format('YYYY-MM-DD')
```

다음과 같이 진행하면 사용자가 보기 쉽게 수정합니다. `yyyy-mm-dd`의 형태로 출력합니다.
