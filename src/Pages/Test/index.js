import React, { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";

import { useStore, diversity, useStoryStore, history, storyAPI, rootAdder } from "../../global"

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
        setIndex(index);
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
                onChangeIndex={handleChangeIndex}
                slideRenderer={SlideRenderer}
                slideCount={bookLength}
            />
        </div>
    );
}


