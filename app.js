“}
let stamps=Number(localStorage.getItem(‘stamps’))||0;
let visits=Number(localStorage.getItem(‘visits’))||0;

const STAFF_PASS=‘0358’;

const today=new Date().toLocaleDateString();

const lastStampDate=localStorage.getItem(‘lastStampDate’);

const ranks=[
‘見習い海賊’,
‘一等航海士’,
‘副船長’,
‘船長’,
‘四皇’
];

function render(){

const area=document.getElementById(‘stamps’);

area.innerHTML=’’;

for(let i=1;i<=30;i++){

const div=document.createElement(‘div’);

div.className=‘stamp ‘+(i<=stamps?‘active’:’’);

div.innerHTML=i<=stamps?‘☠️’:‘⚓’;

area.appendChild(div);

}

let reward=‘来店してスタンプを集めよう！’;

if(stamps>=30){

reward=‘🎉 宝箱OPEN！裏メニュー解放！’;

}else if(stamps>=20){

reward=‘🍺 ドリンク1杯無料！’;

}else if(stamps>=10){

reward=‘🫛 枝豆サービス！’;

}

document.getElementById(‘reward’).innerHTML=reward;

let rankIndex=Math.floor(visits/10);

if(rankIndex>4){
rankIndex=4;
}

document.getElementById(‘rank’).innerHTML=ranks[rankIndex];

document.getElementById(‘visit’).innerHTML=’来店回数 ’+visits+‘回’;

localStorage.setItem(‘stamps’,stamps);

localStorage.setItem(‘visits’,visits);

}

function addStamp(){

let pass=prompt(‘店舗暗証番号を入力’);

if(pass!==STAFF_PASS){

alert(‘暗証番号が違います’);

return;

}

if(lastStampDate===today){

alert(‘本日は既にスタンプ済みです’);

return;

}

if(stamps<30){

stamps++;

visits++;

localStorage.setItem(‘lastStampDate’,today);

render();

}

}

function resetCard(){

let pass=prompt(‘店舗暗証番号’);

if(pass!==STAFF_PASS){

alert(‘暗証番号が違います’);

return;

}

if(confirm(‘カードをリセットしますか？’)){

stamps=0;

visits=0;

localStorage.removeItem(‘lastStampDate’);

render();

}

}

render