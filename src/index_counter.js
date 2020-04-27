import {createStore} from "redux";
//data를 저장하는 곳 Store
//state는 변화하는 data in my app

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0

//ACTIONS
const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {//default state를 initializing해주는 거임(초기화)
switch (action.type) {
  case ADD:
    return count + 1;
  case MINUS:
    return count - 1;
  default:
    return count;
}
};//data를 수정하는 함수다.
//reducer든 modifier든 리턴하는 건 app의 count = state(data)
const countStore = createStore(countModifier);

const handleAdd = () =>{
  countStore.dispatch({type: ADD});
}

const handleMin = () =>{
  countStore.dispatch({type: MINUS});
}

const onChange = () => {
  number.innerText = countStore.getState()
}

countStore.subscribe(onChange);

add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMin)


// countStore.dispatch({type:"ADD"});//리듀서에게 액션을 보낸다.
// countStore.dispatch({type:"ADD"});// 그러면 리듀서가 액션 타입에 맞게 data 즉 state를 바꿔준다 업데이트의 개념으로 알면안된다.
// countStore.dispatch({type:"ADD"});
// countStore.dispatch({type:"ADD"});

// console.log(countStore.getState());

// let count = 0;//이게 state임
// number.innerText = count;

// const updateText = () => {
//   //이와같은 함수를 이용해 바꿔주는것이다.
//   //repaint? 뭐 여튼 그런거라고 한다.
//   number.innerText = count;
// }

// const handleadd = () => {//액션이 일어 날때마다 함수를 하나 생성해야한다.
//   count ++;//직접적으로 업데이트하는것이아니라
//   updateText();

// };
// const handleminus = () => {
//  count --;
//  updateText();
// };

