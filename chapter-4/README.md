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

## DB 접속

- sequelize 설치

```shell
npm install mysql2
```

- sequelize 설치

```shell
npm install sequelize@4.42.0
```
