## 기초
1. 다양한 모듈 스펙
   - CommonJS 는 자바스크립트를 사용하는 모든 환경에서 모듈을 하는 것이 목표다. exports 키워드로 모듈을 만들고 require() 함수로 불러 들이는 방식이다. 대표적으로 서버 사이드 플래폼인 Node.js에서 이를 사용한다.
        ```javascript
        // math.js
        exports.sum = function(a, b) { return a + b; }
        ```
        ```javascript
        // math.js
        const math = require("./math.js")
        math.sum(1, 2) // 3
        ```
   >AMD(Asynchronous Module Definition)는 비동기로 로딩되는 환경에서 모듈을 사용하는 것이 목표다.<br>주로 브라우져 환경이다.<br>UMD(Universal Module Definition)는 AMD기반으로 CommonJS 방식까지 지원하는 통합 형태다.

2. 엔드리/아웃풋
   - 웹팩은 여러개 파일을 하나의 파일로 합쳐주는 번들러(bundler)다. 하나의 시작점(entry point)으로부터 의존적인 모듈을 전부 찾아내서 하나의 결과물을 만들어 낸다. app.js부터 시작해 math.js 파일을 찾은 뒤 하나의 파일로 만드는 방식이다
