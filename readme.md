weather
================
react native app 

expo 사용법 다음 참고
https://expo.io/learn

expo 프로젝트 미리 보기

    $ expo start

폰에 expo 앱 설치 후 QR 코드를 읽힌다. (아이폰은 카메라 앱으로 QR코드 인식)

빌드방법
------
app.json 정보 기반으로 빌드가 된다.  
스토어 개발자 가입, 키 발급등의 과정은 생략(이 부분이 제대로 되어야지 앱등록 가능)  

    $ expo build:android        // 안드로이드 앱 빌드
    $ expo build:ios            // ios 앱 빌드

날씨정보
------
https://openweathermap.org/ 