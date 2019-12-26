[한국어](README_KR.md) \
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h1>  EndZ - Minimal , but infinite reading experience </h1>

[Demo](https://build-dv43vhph1.now.sh/) - for mobile

## Purpose
The goal of this project is to maximaze reading experience in web. We can read text through web, but we don't fully use web's capability.  Thanks to great development on web,  web can do almost everything. (ex: 3D graphics, deep learning) We should use these great features to maximaze our reading exprience.
This is Open Source so users can made their desired feature themselves. (where Infinite comes from) And those features will be easily on&off like Chrome extensions. (where Minimal comes from)



## Project Design
- Each page needs its own plugin. (ex: img,divergence ) , plugins will be made by user. users gonna write single js file with single function. 
- Settings will be global store with Zustand and Immer
- Books will be shown as JSON


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




