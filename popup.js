let arr=[];
const input=document.getElementById("list-item-new");
const action=document.getElementById("btn");
const container=document.getElementById("list-content");
action.addEventListener('click',()=>{
    let values=input.value;
    let str="";
    const a=`<li>${values}</li>`;
    container.insertAdjacentHTML("beforeend",a);
    arr.push(values);
    for(var i=0;i<arr.length;i++){
           str+=`<li>${arr[i]}</li>`;
    }
    input.value="";
})