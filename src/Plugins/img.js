import { data } from '../global'


export default function ImagePage(options){

     // 이부분도 img 타입으로 빼자 ... img plugin 으로 ... 
     var b = document.createElement("img")
     b.src = data.pages[options.pageNum].img
     b.width = window.screen.width;
     // 여기까지 함수로 빼고 b 를 반환하게 하고 ... 그후에 어펜드 > ㄱ
     options.sampleRef.current.appendChild(b)

     return () => {
          console.log(" script finished call back!")
     }

}