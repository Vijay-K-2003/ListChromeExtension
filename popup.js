document.getElementById("btn").addEventListener("click", addVal);

let arr = [];
let values;
function getData() {
    chrome.storage.local.get("valuesZ", function(result){
        if(result.key != undefined){
            values = result;
        }
    });    
}
getData();

const list = document.getElementById('list-content');
function addVal() {
    const listItem = document.getElementById(
        'list-item-new'
    );
    const val = listItem.value;
    arr.push(val);
    console.log(arr);
    values = "";
    
    for(var i = 0; i < arr.length; i++) {
        values += "<li>" + arr[i] + "</li>";
    }

    list.innerHTML = values;
    chrome.storage.local.set({"valuesZ": values});
    getData();
}