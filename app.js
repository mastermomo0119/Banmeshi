let stamps=Number(localStorage.getItem('stamps'))||0;
let visits=Number(localStorage.getItem('visits'))||0;

const STAFF_PASS = "4590";

const ranks=[
'見習い海賊',
'一等航海士',
'副船長',
'船長',
'四皇'
];

function render(){

const area=document.getElementById('stamps');
area.innerHTML='';

for(let i=1;i<=30;i++){

const div=document.createElement('div');

div.className='stamp '+(i<=stamps?'active':'');

div.innerHTML=i<=stamps?'☠️':'⚓';

area.appendChild(div);

}

let reward='来店してスタンプを集めよう！';

if(stamps>=30){

reward='🎉 裏メニューが注文できます！';

}else if(stamps>=20){

reward='🍺 ドリンク1杯無料！';

}else if(stamps>=10){

reward='🫛 枝豆サービス！';

}

document.getElementById('reward').innerHTML=reward;

let rankIndex=Math.floor(visits/10);

if(rankIndex>4){
rankIndex=4;
}

document.getElementById('rank').innerHTML=ranks[rankIndex];

document.getElementById('visit').innerHTML='来店回数 '+visits+'回';

localStorage.setItem('stamps',stamps);

localStorage.setItem('visits',visits);

}

function addStamp(){

let pass=prompt('店員パスワードを入力');

if(pass!==STAFF_PASS){

alert('パスワードが違います');

return;

}

if(stamps<30){

stamps++;

render();

}

}

function addVisit(){

let pass=prompt('店員パスワードを入力');

if(pass!==STAFF_PASS){

alert('パスワードが違います');

return;

}

visits++;

render();

}

function resetCard(){

let pass=prompt('リセット用パスワード');

if(pass!==STAFF_PASS){

alert('パスワードが違います');

return;

}

if(confirm('スタンプカードをリセットしますか？')){

stamps=0;

visits=0;

render();

}

}

render();