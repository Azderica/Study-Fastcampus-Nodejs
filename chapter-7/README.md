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

하나의 endpoint (/graphql)

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
