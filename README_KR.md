[English](README.md) \
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h1>  EndZ - 최소한, 하지만 무한한 읽기 경험</h1>


## Purpose
이 프로젝트의 목표는 웹에서의 독서 경험을 극대화하는 것입니다. 웹을 통해 텍스트를 읽을 수 있지만 웹 기능을 완전히 사용하지는 않습니다. 웹의 큰 발전 덕분에 웹은 거의 모든 것을 할 수 있습니다. (예 : 3D 그래픽, 딥 러닝) 이러한 훌륭한 기능을 사용하여 독서 경험을 극대화해야합니다.
이것은 오픈 소스이므로 사용자가 원하는 기능을 직접 만들 수 있습니다. (무한한) Chrome 확장 프로그램과 같이 쉽게 탈부착할 수 있습니다. (최소한)



## Project Design
- 각 페이지에는 자체 플러그인이 필요합니다. (예 : img, 분기) 플러그인은 사용자가 작성합니다. 사용자는 하나의 함수를 가진 하나의 js 파일을 작성합니다.
- Zustand 및 Immer를 통해 설정 전역 관리
- 책의 내용은 JSON으로 표시됩니다


## Data Schema
```js
{
    pages: [
        {
            page: 0,
            type: "img/divergence",
            img: "https://cpb-us-PM-29wbxtz.png",
            options: {
                choices: [
                    { text: "hello", result:... },
                    { text: "hello", result:... }
                ]
            },
            text: `text`
        },
        {
            page: 1, type: "plain", text: `text`
        }

    ],
}
```





## Design Reference
-   https://gall.dcinside.com/mgallery/board/lists?id=tgijjdd
-   https://gall.dcinside.com/mgallery/board/lists/?id=seoul2033
-   https://chatie.me/studio



## Install 

1. Install Node.js
2. Create a directory and clone this repository
3. Run below commands

```
npm install
npm start
```


## Project Overview
- Novel - on priority
- Novel Platform - second priority
- Novel editor - last , going to use VSCode for now
