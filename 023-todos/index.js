const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/* 1. 삭제 버튼 추가
*  2. 저장 되게끔
*  3. 삭제 버튼 > 저장된 데이터 업데이트  
*/
//사용자가 입력한 투두를 저장
let todos = [];

//json 문자열로 저장해야 object 가 아니라 입력한 값이 text에 저장됨
const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const delItem = (event) => {
  //이벤트 연결이 잘 되었는지 확인
  //console.log('삭제');
  //button 태그 출력
  //console.log(event.target);  
  //button 태그를 포함하는 li 요소 찾기
  //console.log(event.target.parentElement);
  const target = event.target.parentElement;
  
  //특정 아이디값을 삭제하고, 새로운 배열을 저장하도록 
  console.log(target.id);  
  //target의 아이디는 String, todo의 id는 Number
  // 타입비교를 하지 않거나 String 타입을 parse
  todos = todos.filter((todo)=> todo.id !== parseInt(target.id));
  //console.log(todo.id, target.id);
  save();

  target.remove();  
};

const addItem = (todo) => {
  if (todo.text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    //등록 버튼 클릭 시 투두리스트 한 줄 씩 늘어남
    span.innerText = todo.text;
    button.innerText = '삭제';
    button.addEventListener('click', delItem);

    li.appendChild(span);
    li.appendChild(button);    
    //li.innerText = text;
    ul.appendChild(li);
    li.id = todo.id;
  }
}

const handler = (event) => {
  event.preventDefault();
  const todo = {
    id: Date.now(), 
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);
  save();

  //addItem(input.value);
  input.value = '';
}

const init = () => {
  //객체형태로 다시 parse 
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  if(userTodos){
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    toods = userTodos;  
  }
}

init();
form.addEventListener('submit',handler);

//개발자도구 > 저장용량 > 로컬 스토리지 > 사용자의 입력값을 저장
/* localStorage.setItem('hello', 'world');
* const data = localStorage.getItem('hello');
* console.log(data);
*/