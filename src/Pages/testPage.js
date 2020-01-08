import React, { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";

// 과거를 바꾸면 미래꺼 다 날릴거임 ...

var diversity = {
  // 시작
  main: [1, 2, 3, 4],

  // 처음 분기
  rootA: ["A5", "A6", "A7", "A8"],
  rootB: ["B5", "B6", "B7", "B8"],

  // 두번쨰 분기
  rootC: ["C9", "C10", "C11", "C12"],
  rootD: ["D9", "D10", "D11", "D12"]
};

var story = [...diversity.main];

// 숫자는 불가능 hash table 처럼 가야한다 ..... 모든 diversity 컴포넌트 마다 있어야함 .... 어떤 성향 및 카르마로 분기가 나뉠수도 ...
// history 객체를 잘짜야할듯 .... 미리 짜여져 있는 객체가 아닌 .... 분기점마다 키 밸류 값이 추가되어가는 객체여야 할듯 ....  내가 해왔던 기록이 쌓여간다 ...
var history = new Map();
history.set("prologue", diversity.main);

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

function slideRenderer(params) {
  const { index, key } = params;

  return (
    <div key={key} style={{ height: "100vh" }}>
      {story[index]}
    </div>
  );
}

export default function Test() {
  //const [index, setIndex] = useState(0)
  const [index, setIndex] = useState(0);
  const [bookLength, setBookLength] = useState(story.length);

  useEffect(() => {}, []);

  const handleChangeIndex = index => {
    setIndex(index);
  };

  const rootAdderA = () => {
    var tmp = [];
    // 뒤에 시간대의 행동을 날려버리는 splice ...
    history.delete("second");
    history.set("first", diversity.rootA);

    for (var [key, value] of history) {
      tmp.push(...value);
    }

    var length = tmp.length -  diversity.rootA.length;

    //tmp.push(...diversity.rootA);
    story = tmp;
    setBookLength(story.length);
    setIndex(length);

    
  };

  const rootAdderB = () => {
    var tmp = [];
    history.delete("second");
    history.set("first", diversity.rootB);

    for (var [key, value] of history) {
      tmp.push(...value);
    }

    var length = tmp.length-  diversity.rootB.length;

    //tmp.push(...diversity.rootB);
    story = tmp;
    setBookLength(story.length);
    setIndex(length);

  };

  const rootAdderC = () => {
    var tmp = [];
    history.set("second", diversity.rootC);

    for (var [key, value] of history) {
      tmp.push(...value);
    }

    var length = tmp.length-  diversity.rootC.length;

    //tmp.push(...diversity.rootC);
    story = tmp;
    setBookLength(story.length);
    setIndex(length);

  };

  const rootAdderD = () => {
    var tmp = [];
    history.set("second", diversity.rootD);

    for (var [key, value] of history) {
      tmp.push(...value);
    }

    var length = tmp.length-  diversity.rootD.length;

    //tmp.push(...diversity.rootD);
    story = tmp;
    setBookLength(story.length);
    setIndex(length);

  };

  return (
    <div>
      <button>Setting</button>
      <button onClick={rootAdderA}>A</button>
      <button onClick={rootAdderB}>B</button>
      <button onClick={rootAdderC}>C</button>
      <button onClick={rootAdderD}>D</button>
      <VirtualizeSwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        slideRenderer={slideRenderer}
        slideCount={bookLength}
        // overscanSlideBefore={1}
      />
    </div>
  );
}

// slideCount={data.pages.length}
// 이걸 풀어야하나 ??
