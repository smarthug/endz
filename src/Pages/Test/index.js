import React, { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { virtualize , bindKeyboard  } from "react-swipeable-views-utils";

import { useStore, diversity, useStoryStore, history, storyAPI, rootAdder } from "../../global"

import { Plugins } from "../../Plugins"







// 숫자는 불가능 hash table 처럼 가야한다 ..... 모든 diversity 컴포넌트 마다 있어야함 .... 어떤 성향 및 카르마로 분기가 나뉠수도 ...
// history 객체를 잘짜야할듯 .... 미리 짜여져 있는 객체가 아닌 .... 분기점마다 키 밸류 값이 추가되어가는 객체여야 할듯 ....  내가 해왔던 기록이 쌓여간다 ...

history.set("prologue", diversity.prologue);

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

function SlideRenderer(params) {

    const story = storyAPI.getState().story
    const { index, key } = params;

    
    var PageComponent 
    var tmp
    if(index>=storyAPI.getState().bookLength){
        PageComponent = Plugins[story[0].type]
        tmp = story[0]
    } else {
        console.log(index)
        // 분기만 따로 관리하는게 편할려나 ... 
        PageComponent = Plugins[story[index].type]
        tmp = story[index]
    }

    return (
        <div key={key} >
            <PageComponent v={tmp} />
        </div>
    );
}
//style={{ height: "100vh" }}

export default function Test() {
    //const [index, setIndex] = useState(0)
    const story = useStoryStore(state => state.story)
    const index = useStoryStore(state => state.index)
    const setIndex = useStoryStore(state => state.setIndex)
    const bookLength = useStoryStore(state => state.bookLength)



    const handleChangeIndex = index => {
        setIndex(index);
    };







    return (
        <div>
           
            {/* <button onClick={()=>rootAdder(story[index].choices[0].obj)}>A</button>
            <button onClick={()=>rootAdder(story[index].choices[1].obj)}>B</button> */}

            {
               story[index].choices  && story[index].choices.map((v,i) => {

                    return(
                        <button onClick={()=>rootAdder(v.obj)}>{v.text}</button>
                    )
                })
            }

            <VirtualizeSwipeableViews
                index={index}
                onChangeIndex={handleChangeIndex}
                slideRenderer={SlideRenderer}
                slideCount={bookLength}
                resistance
            
            />
        </div>
    );
}

// slideCount={data.pages.length}
// 이걸 풀어야하나 ??
