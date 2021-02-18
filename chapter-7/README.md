# GraphQL

- [코드](https://github.com/parkjunyoung/fc-graphql-start))
- [공식 document](https://graphql-kr.github.io/)

목차

- GraphQL
- Express 연동
- 데이터 추가
- 데이터 수정, 삭제
- 클라이언트 사용하기

## Graph 이란?

Facebook에서 만든 API로 쿼리를 호출할 수 있습니다.

쿼리로 호출.

하나의 endpoint (/graphql)]

로컬 graphql : http://localhost:4000/graphql

### 타입

- Int : 부호가 있는 32비트 정수
- Float : 부호가 있는 부동소수점 값
- String : UTF-8 문자열
- Boolean : true / false

### 예제.

```json
{
  product(id:1){
    id
    price
    name
  },
  cart(user_id: 10) {
    thumbnail
    price
  }
}
```

### REST API 와 비교

REST API는 백엔드에서 직접 개발해야하기 때문에 의사소통과 작업이 필요합니다.

GraphQL은 프론트가 필요한대로 가져올 수 있습니다.

<br/>

## Express 와 연동

### code

```js
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`type Query { hello: String, nodejs: Int }`)

const root = {
  hello: () => 'Hello world!',
  nodejs: () => 20,
}

const app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:400/graphql')
})
```

호출 url : http://localhost:4000/graphql?query={hello}

output

```json
{
  "data": {
    "hello": "Hello world!"
  }
}
```

## 데이터 일기 / 쓰기 / 수정 / 삭제

코드는 `index.js` 참고.

### 읽기

호출 url

- http://localhost:4000/graphql?query={ getProduct(id : 2){ name price } }

### 쓰기

```json
{
  "query": "mutation addProduct($input: ProductInput) { addProduct(input: $input) { id } }",
  "variables": {
    "input": { "name": "세번째상품", "price": 3000, "description": "후후후" }
  }
}
```

### 수정하기

```json
{
  "query": "mutation updateProduct( $id : ID! , $input: ProductInput! ) { updateProduct( id : $id  , input: $input) { id } }",
  "variables": {
    "id": 1,
    "input": { "name": "수정상품", "price": 1000, "description": "후후후" }
  }
}
```

### 삭제하기

```json
{
  "query": "mutation deleteProduct( $id : ID! ) { deleteProduct( id : $id ) }",
  "variables": { "id": 1 }
}
```
