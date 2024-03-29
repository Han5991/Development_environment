### **1. NPM을 이용한 방법**

- 배경

  - 크로스 브라우징
    > 사용하는 말이 달라서 바벨탑이 실패했듯이, 브라우져마다 사용하는 언어가 달라서 프론트엔트 코드는 일관적이지 못할 때가 많다.<br>스팩과 브라우져가 개선되고 있지만, 여전히 인터넷 익스플로러는 프라미스를 이해하지 못한다. 작년까지만 해도 사파리 최신 브라우져는 Promise.prototype.finally 메소드를 사용할 수 없었다.<br>프론트엔드 개발에서 크로스브라우징 이슈는 코드의 일관성을 해치고 초심자를 불안하게 만든다.<br>히브리어로 바벨이 '혼돈'이란 뜻인 것처럼 말이다.<br>크로스브라우징의 혼란을 해결해 줄 수 있는 것이 바벨이다.<br>ECMAScript2015+로 작성한 코드를 모든 브라우져에서 동작하도록 호환성을 지켜준다. 타입스크립트, JSX처럼 다른 언어로 분류되는 것도 포함한다.
  - 트랜스파일과 빌드
    > 이렇게 변환하는 것을 "트랜스파일" 한다라고 표현한다.<br>변환 전후의 추상화 수준이 다른 빌드와는 달리 트랜스파일은 추상화 수준을 유지한 상태로 코드를 변환한다.<br>타입스크립트 → 자바스크립트, JSX → 자바스크립트처럼 트랜스파일 후에도 여전히 코드를 읽을 수 있다.<br>요즘에는 이 둘을 구분하지 않고 사용하는 것 같다.

- 최신 버전의 react를 NPM 저장소에서 찾아 우리 프로젝트로 다운로드 하는 명령어다. package.json에는 설치한 패키지 정보를 기록한다.
