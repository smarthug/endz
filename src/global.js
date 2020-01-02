import create from 'zustand'
import produce from 'immer'
import { Next } from './Pages/Main'

export const data = {
    pages: [{
        page: 0,
        type: "divergence",
        img: "https://cpb-us-w2.wpmucdn.com/blogs.baylor.edu/dist/c/3127/files/2015/12/DQ-Screen-Shot-2015-12-04-at-4.10.29-PM-29wbxtz.png",
        options: {
            choices: [
                { text: "A로 간다", result: () => { console.log("A로 간다"); Next(0) } },
                { text: "B로 간다", result: () => { console.log("B로 간다"); Next(0) } },
                { text: "C로 간다", result: () => { console.log("C로 간다"); Next(0) } }
            ]
        },
        text: `요즘 주요 인사들 사이에서 참인 관념과 거짓인 관념에 관하여 격렬한 논쟁이 일어나고 있고, 데카르트 조차 만족스럽게 해결하지 못한 이 문제가 진리의 인식에 있어 매우 중요한 문제이기 때문에, 나는 관념과 인식 사이에 차이와 구별 기준에 대한 나의 견해를 간단히 설명하려 한다.


        인식은 애매하거나 명석하다.
        
        
        인식은 다시 모호하거나 판명하다.
        
        
        판명한 인식은 비충전적이거나 충전적이다.
        
        
        그리고 마찬가지로 충전적인 인식은 상징적이거나 직관적이다.
        
        
        가장 완전한 인식은 충전적이면서 동시에 직관적인 인식이다.
        
        
        예를 들어 내가 전에 한번 본일이 있는 꽃이나 동물을 기억하려 하는데, 그것을 다시 인식하거나 나에게 나타나는 다른 비슷한 사물과 구별하는 것이 충분하지 못할때와 같이, 제시된 사물을 다시 인식하기에 충분하지 않은 개념은 애매하다.
        
        
        또는 내가 아리스토텔레스의 엔텔레키나, 질료, 형상, 작용, 목적 들에 있어서 공통적인 한에 있어서의 원인, 그리고 우리가 긔에 대하여 어떠한 확실한 정의도 가지고 있지 않는 다른 이러한 종류의 개념들과 같이 학교에서 충분히 설명되지 않은 하나의 용어를 고찰할 때, 그러한 개념들이 사용되는 명제도 또한 애매하다.`},
    {
        page: 1, type: "text", text: `따라서 하나의 인식은, 그것이 표현하는 사물을 다시 인시하는 것이 가능하도록 내가 그 인식을 소유할 때, 명석하다.


        그리고 이 인식은 다시금 모호하거나 판명하다.
        
        
        어떤 사물이 그의 개념이 그 안으로 분해될 수 있는 특징들과 규정들을 가지고 있음에도 불구하고, 내가 그 사물을 달느 것으로부터 구별하기 위하여 그 특징들을 개별적으로 열거할 수 없을 때, 그 인식은 모호하다.
        
        
        따라서 우리들은 색, 냄새, 맛, 그리고 다른 특수한 감각 대상들을 충분히 명석하게 다시 인식하고 서로를 구별하긴 하나, 단순한 증거를 통하여 그렇게 할 뿐, 진술 가능한 특징들을 통하여 인식하고 식별하지는 못한다.
        
        
        그러므로 비록, 이 성질들이 그 개념들의 근거들을 소유하고 있기 때문에, 이 성질들의 개념들이 복합되어 있고 분해될 수 있다는 사실이 확실하기는 하지만, 그 사물을 보고, 냄새 맡고, 맞볼수 있도록 우리가 그들을 현존하는 사물 앞으로 인도하지 않거나, 또는 그들로 하여금 최소한 이전의 그와 유사한 것을 다른 사람들에게 명백히 제시하지도 못한다.
        
        
        유사한 방식으로 우리는, 화가와 다른 예술가들이 가끔 자신들의 판단 근거를 제시하지 못하면서도 예술작품에 있어서 무엇이 잘됐고, 무엇이 잘못돼 있는지를 적절하게 인식하고, 질문하는 사람들에게 자신들에게 맘에 들지 않는 작품들 안에 그것이 무엇인지 모르지만 어던 것이 있었으면 좋겠다고 말하는 것을 본다.
        
        
        그러나 판명한 개념이란, 주화 감식가가 한 주화를 그의 특징들과 충분한 조사를 통하여 다른 모든 사물들로부터 구별함에 있어 금에 대하여 가지고 있는 개념이다.
        
        
        우리는 수, 크기, 형태 등과 같이 여럭 감관들에 공통으로 관계되는 개념들과, 희망과 공포와 같은 영혼의 많은 정서들에 대하여, 즉 우리가 충분한 특징들의 열거에 다름 아닌 명목적 정의를 갖는 모든 것들에 대하여 흔히 그런 개념을 갖는다.
        
        
        그렇지만 한 개념이 근원적이거나 또는 자기 자신의 특징일 때, 즉 그것이 분해될 수 없고 다닞 자기 자신을 통해서만 인식되고 어떤 다른 규정들을 가지고 잇지 않을 때는 정의가 불가능한 개념에 대해서도 판명한 인식이 존재한다.
        
        
        그러나 금의 특징에 속하는 무게, 색, 왕수 [1] 그리고 기타의 특징들 처럼 복합 개념들 안에서는 개별적인 특징들이 종종 명석하기는 하지만 모호한 방식으로만 인식되기 때문에, 금에 대한 이러한 인식은 판명하기는 하지만, 비충전적인 인식이다.
        
        
        그러나 판명한 개념 안에 있는 모든 것이 다시금 판명하게 인식되면, 따라서 분석이 끝까지 수행되면, 그 인식은 충전적이다.
        
        
        이에 대해 사람들이 완전한 사례를 들 수 있을지 나는 알지 못한다.
        
        
        그러나 수에 관한 인식이 이러한 인식에 매우 가깝다.`},
    {
        page: 2, type: "text", text: `In a village of La Mancha, the name of which I have no desire to call
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
        page: 3, type: "plain", text: `In a village of La Mancha, the name of which I have no desire to call
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

    ],
}

export const [useStore] = create(set => ({
    count: { a: { b: 999 } },
    //   increase: () => set(state => ({ count: state.count + 1 })),
    set: (fn) => set(produce(fn))
}))