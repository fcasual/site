/*я ломаал стеклоо*/
"use strict";
/*let name =  prompt('имя твое как?'), admin = name;
alert(`Пошел нахуй ${admin}`);
let str = '';
let n = prompt('все простые чилса до n')
first: for(let i = 2; i<=n; i++){
    for(let j = 2; j<i; j++){
        if(i%j==0){continue first}
    }
    str += ' ' + i;
}
alert(str.trim());
function pow(a,b){
    let x = a;
    for(let i = 1; i<b;i++){
        x*=a;
    }
    return x
}
while(true) {
    let a = prompt("a"), b = prompt("b")
    alert(pow(+a,+b))
}*/
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
  }
  
  ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."))