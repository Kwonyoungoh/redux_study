import {createStore} from "redux";
//data를 저장하는 곳 Store
//state는 변화하는 data in my app

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {//default state를 initializing해주는 거임(초기화)
  console.log(action);
  // 액션을 통해 수정하는거임

  if (action.type==="ADD"){
    return count + 1;
  }
  return count;
};//data를 수정하는 함수다.
//reducer든 modifier든 리턴하는 건 app의 count = state(data)

const countStore = createStore(countModifier);

countStore.dispatch({type:"ADD"});

console.log(countStore.getState());

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

