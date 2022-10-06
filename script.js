console.log("page loaded...");


const userName=document.querySelector("#name");
function changeName(){
    userName.innerHTML="Irida";
}

const connRequest=document.querySelector("#firstR");
function hide(){
    connRequest.remove();
}

const secConnRequest=document.querySelector("#secondR");
function secondhide(){
    secConnRequest.remove();
}


const yourConnectionsNr=document.querySelector("#badgeId2");
var count=418;
function addConnectionNr(){
    count++;
    yourConnectionsNr.innerHTML=count;
}


const connectionsReq=document.querySelector("#badgeId")
var count2=2;
function subtractConnectionNr(){
    count2--;
    connectionsReq.innerHTML=count2;
}
