import { data } from '../global'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


toast.configure({ autoClose: false, position: "bottom-center" })


export default function DivergencePage(options) {
    const page = data.pages[options.pageNum]

    const notify = (text, cb) => toast(text, { onClick: cb });


    var img = document.createElement("img")
    img.src = page.img
    img.width = window.screen.width;

    options.sampleRef.current.appendChild(img)

    return () => {
        
        page.options.choices.map((v, i) => {
            notify(v.text, v.result)
        })
    }

}