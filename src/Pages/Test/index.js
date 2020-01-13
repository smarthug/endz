import React, { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";

import { useStore, diversity, useStoryStore, history, storyAPI, rootAdder, refList } from "../../global"

import { Plugins } from "../../Plugins"

history.set("prologue", diversity.prologue);

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

function SlideRenderer(params) {

    const story = storyAPI.getState().story
    const nextPage = storyAPI.getState().nextPage
    const { index, key } = params;

    var PageComponent = Plugins[story[index].type]
    var tmp = story[index]

    return (
        <div key={key} >
            <PageComponent v={tmp} nextPage={nextPage} />
        </div>
    );
}


export default function Test() {
    const story = useStoryStore(state => state.story)
    const index = useStoryStore(state => state.index)
    const setIndex = useStoryStore(state => state.setIndex)
    const bookLength = useStoryStore(state => state.bookLength)



    const handleChangeIndex = index => {
        console.log(index)
        setIndex(index);
        // typing animation 시작 시키기 ... 어떻게 ? 
        // 그래 컴포넌트에 대한 레퍼런스를 모아놓자 .... 
        // ref.start() ,,,  
        if(story[index].type == "typeAnimation"){

            refList[0].start()
        }
    };
    // add auto nextpage ... callback .... typist ... audio reader ,  if page has auto play property ... 여기서 타이피스트등 끝나는거 캐치해서 발동 
    return (
        <div>

            {
                story[index].choices && story[index].choices.map((v, i) => {

                    return (
                        <button onClick={() => rootAdder(v.obj)}>{v.text}</button>
                    )
                })
            }

            <VirtualizeSwipeableViews
                index={index}
                onSwitching={(index, type)=>{console.log(index, type)}}
                onChangeIndex={handleChangeIndex}
                slideRenderer={SlideRenderer}
                slideCount={bookLength}
            />
        </div>
    );
}


