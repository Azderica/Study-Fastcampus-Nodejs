# JavaScript

소스코드의 원본은 아래의 링크에 있습니다.

[fc-javascript](https://github.com/parkjunyoung/fc-javascript))

## JavaScript란

- 브라우저를 제어하기 위해 넷스케이프에서 개발한 언어
- 사용자의 클릭, 계산기, 달력 등의 이벤트 조작에 대응하기 위한 언어
- 자바스크립트의 확대
  - AJAX 활용(구글맵) ->
  - Debug 툴에 발전 ->
  - V8엔진의 개발 ->
  - Nodejs 등장 ->
  - Desktop, IOT, 사용범위 확대 ->
  - 여러 플랫폼 제작사에서 JS 개발자를 끌어 안기 위한 환경 조성

### 과거의 JS

- var로 선언 (Ex. var s = 1;)
- 동적언어로 자료형을 선언할 필요없음
- 기본자료형과 객체로 나눠짐
  - 기본 자료형 : `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol`(ES6에서 추가, 유일 + 변경불가)

<br/>

## 프로토 타입

prototype의 기능에 추가를 하면 기능을 넣어줄 수 있습니다. JS는 프로토타입을 가지고 있고 이를 통해서 여러 데이터를 가지고 있습니다.

예제 1.

```js
function Car (a, b) {
  this.name = a
  this.color = b
}
Car.prototype.move = function () {
  console.log(this.name + ' is car, ' + this.color + ' is color')
}

var a = new Car('현대', '노랑')
a.move()

var b = new Car('기아', '노랑')
b.move()
```

예제 2.

```js
var a = [1, 2, 3, 4, 10]
Array.prototype.print = function () {
  for (var i = 0; i < this.length; i++) console.log(i)
}
```

<br/>

## 리터럴 객체

객체를 생성하는 방법이다. 아래의 방법은 선언과 동시에 생성된다.

```js
var a = {
  a: 110,
  b: 'hello',
  c: function () {
    console.log('gggg')
  }
}
console.log(a.b) // outptut : 'hello'
console.log(typeof a) // output : Object
```

<br/>

## 콜백함수 및 클로저

### 콜백함수

넘길 때 함수로 넘길 수 있습니다.

```js
function test (num, callback) {
  console.log(num)
  callback()
}
test(1, function () {
  console.log('This is callback')
})
```

### 클로저

함수 내에서 메모리처럼 사용하는 것

```js
function ex_cl () {
  var num = 0
  return function () {
    num++
    console.log(num)
  }
}

var test = ex_cl()
test() // output : 1
test() // output : 2
```

document에서 DOM을 컨트롤할때, 클로저를 종종 사용한다. 그 외에도 여러가지 사용하는 방법이 있다.

<br/>

## jQuery

Link : https://code.jquery.com/

요즘은 지양하고 있음.

Ajax가 나왔을 때, 초창기에는 브라우저마다 다 호출함수가 달랐다. 그래서 jQuery에서 통일하는 역할을 했는데 현재는 **표준화**가 생겼기 때문에 굳이 필요가 없다.

일반 코드와 jQuery의 코드 차이는 다음과 같다.

```html
숫자 :
<div id="num"></div>
<button id="plus">Plus</button>
```

일반적인 바닐라 js로 짠 코드

```js
var num = 1
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#num').innerHTML = num
})
document.querySelector('#plus').addEventListener('click', function () {
  num++
  document.querySelector('#num').innerHTML = num
})
```

jQuery로 짠 코드

```js
$(document).ready(function () {
  $('#num').html(num)
  $('#plus').click(function () {
    num++
    $('#num').html(num)
  })
})
```

### jQuery가 어떻게 짰는지.?

jQuery 코드 안에 아래와 같이 구성이 되어있다. 그래서 위에 예제처럼 돌아가게 구성되어 있다.

```js
function $ (selector) {
  var click = function (callback) {
    callback()
  }
  return {
    click: click
  }
}

$('#abc').click(function () {
  console.log('클릭을 만들어봤어요')
})
```

### jQuery가 어디서 유용한가?

Ex. datePicker

![image](https://user-images.githubusercontent.com/42582516/105580767-aacc5d00-5dd1-11eb-9da4-91319ee12cf5.png)

https://jqueryui.com/datepicker/

`view source`를 클릭해서 이러한 사이트의 예제등을 쉽게 사용할 수 있습니다.

<br/>

## ES6

클래스 문법 등이 생겨서, 다른 개발자 들이 개발하기 쉬워져서 가이드 라인이 잡히기 시작했다.

현재 지원되고 있는지 확인하는 방법은 다음과 같습니다.

https://kangax.github.io/compat-table/es6/

지원을 못하는 것은 babel로 바꿔준다.

[Babel LINK](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.12&externalPlugins=))

다양한 function 들이 있는데 이에 대한 내용은 직접 찾아보는 것이 더 좋을 듯합니다.
