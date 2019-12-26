import create from 'zustand'
import produce from 'immer'
import {Next} from './Pages/Main'

export const data = {
    pages: [{
        page: 0,
        type: "divergence",
        img: "https://cpb-us-w2.wpmucdn.com/blogs.baylor.edu/dist/c/3127/files/2015/12/DQ-Screen-Shot-2015-12-04-at-4.10.29-PM-29wbxtz.png",
        options: {
            choices: [
                { text: "A로 간다", result: () => { console.log("A로 간다") ; Next(0)} },
                { text: "B로 간다", result: () => { console.log("B로 간다") ; Next(0) } },
                { text: "C로 간다", result: () => { console.log("C로 간다") ; Next(0) } }
            ]
        },
        text: `In a village of La Mancha, the name of which I have no desire to call
    to mind, there lived not long since one of those gentlemen that keep a
    lance in the lance-rack, an old buckler, a lean hack, and a greyhound
    for coursing. An olla of rather more beef than mutton, a salad on most
    nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so
    extra on Sundays, made away with three-quarters of his income. The
    rest of it went in a doublet of fine cloth and velvet breeches and
    shoes to match for holidays, while on week-days he made a brave figure
    in his best homespun. He had in his house a housekeeper past forty, a
    niece under twenty, and a lad for the field and market-place, who used
    to saddle the hack as well as handle the bill-hook. The age of this
    gentleman of ours was bordering on fifty; he was of a hardy habit,
    spare, gaunt-featured, a very early riser and a great sportsman. They
    will have it his surname was Quixada or Quesada (for here there is
    some difference of opinion among the authors who write on the
    subject), although from reasonable conjectures it seems plain that he
    was called Quexana. This, however, is of but little importance to our
    tale; it will be enough not to stray a hair's breadth from the truth
    in the telling of it.`},
    {
        page: 1, type: "plain", text: `In a village of La Mancha, the name of which I have no desire to call
    to mind, there lived not long since one of those gentlemen that keep a
    lance in the lance-rack, an old buckler, a lean hack, and a greyhound
    for coursing. An olla of rather more beef than mutton, a salad on most
    nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so
    extra on Sundays, made away with three-quarters of his income. The
    rest of it went in a doublet of fine cloth and velvet breeches and
    shoes to match for holidays, while on week-days he made a brave figure
    in his best homespun. He had in his house a housekeeper past forty, a
    niece under twenty, and a lad for the field and market-place, who used
    to saddle the hack as well as handle the bill-hook. The age of this
    gentleman of ours was bordering on fifty; he was of a hardy habit,
    spare, gaunt-featured, a very early riser and a great sportsman. They
    will have it his surname was Quixada or Quesada (for here there is
    some difference of opinion among the authors who write on the
    subject), although from reasonable conjectures it seems plain that he
    was called Quexana. This, however, is of but little importance to our
    tale; it will be enough not to stray a hair's breadth from the truth
    in the telling of it.`}

    ],
}

export const [useStore] = create(set => ({
    count: { a: { b: 999 } },
    //   increase: () => set(state => ({ count: state.count + 1 })),
    set: (fn) => set(produce(fn))
}))