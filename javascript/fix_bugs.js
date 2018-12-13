/////////Varible assignment//////////////////
var screenOutput = document.getElementById('screenOutput');
var nonChar = "";
var nonChara = "";
/////////Reciept///////////////////////////////////
// var Reciept = RecentT;
// var printReciept = document.getElementById("reciept");
// printReciept.innerHTML += Reciept;
/////////Reciept///////////////////////////////////

/////////Users//////////////////////////////
var users = {
    user001: {
        ID: 'Tazz',
        pin: 1234,
        RT: [],
        balance: 2000, 
    },
    user002: {
        ID: "John",
        pin: 4321,
        RT: [],
        balance: 1000,
        accountnumber:0000
        
    },
};
var RecentT = {
    W: [],
    D: [],
    T: [],
    B: []
};
/////////Users//////////////////////////////
/////////For-pin/////////////////////////
function enterpin(){
    screenOutput.innerHTML = '<input type="password" id="pin" class="keyInput" maxlength="4" placeholder="enter pin"/>';
    var change = document.getElementsByTagName("input");
    change[0].setAttribute("onClick", "validPin();");
};
function validPin(){

    
    var pin = document.getElementById('pin');
    if (Number(pin.value) === users.user001.pin){
        screenOutput.innerHTML = "<h1>"+ users.user001.ID +"</h1><br>"+ '<h4>Would you like to : </h4><br>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="w"><pre class"tab" >Withdrawl                   Transfer</pre></h5><h5  class="d"><pre class"tab" >Deposit                      Balance</pre></h5><h5  class="rt"><pre class"tab" >Recent Transactions            Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
        var change2 = document.getElementsByTagName("input");
        change2[0].setAttribute("onClick", "withdrawl();");
        change2[1].setAttribute("onClick", "deposit();");
        change2[2].setAttribute("onClick", "RecentTransaction();");
        change2[3].setAttribute("onClick", "transfer();");
        change2[4].setAttribute("onClick", "Ubalance();");
        change2[5].setAttribute("onClick", "Cancel();");

    }else{
        alert("invalid Pin, Press the 'OK' button to continue with you CORRECT pin")
    };
};
function RecentTransaction(){
    screenOutput.innerHTML = RecentT.W  ;
    screenOutput.innerHTML += RecentT.T  ;
    screenOutput.innerHTML+= RecentT.D;

    var change11 = document.getElementsByTagName("input");
    change11[0].setAttribute("onClick", "Continue();");
    change11[1].setAttribute("onClick", "Continue();");
    change11[2].setAttribute("onClick", "Continue();");
    change11[3].setAttribute("onClick", "Cancel()");
    change11[4].setAttribute("onClick", "Cancel()");
    change11[5].setAttribute("onClick", "Cancel()");
}
function verifyTransfer(){
    var AccountNumber = document.getElementById("accountnum");
    var change5 = document.getElementsByTagName("input");
    change5[6].setAttribute("onClick", "showClickedButton(this.value);");
   change5[7].setAttribute("onClick", "showClickedButton(this.value);");
   change5[8].setAttribute("onClick", "showClickedButton(this.value);");
   change5[9].setAttribute("onClick", "showClickedButton(this.value);");
   change5[10].setAttribute("onClick", "showClickedButton(this.value);");
   change5[11].setAttribute("onClick", "showClickedButton(this.value);");
   change5[12].setAttribute("onClick", "showClickedButton(this.value);");
   change5[13].setAttribute("onClick", "showClickedButton(this.value);");
   change5[14].setAttribute("onClick", "showClickedButton(this.value);");
   change5[15].setAttribute("onClick", "showClickedButton(this.value);");
   change5[16].setAttribute("onClick", "showClickedButton(this.value);");
   change5[17].setAttribute("onClick", "showClickedButton(this.value);");
    if (Number(AccountNumber.value) === users.user002.accountnumber){
        screenOutput.innerHTML = '<h4>What Amount Would you like to Transfer?</h4><br>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >20                   80</pre></h5><h5  class="d"><pre class"tab" >40                      100</pre></h5><h5  class="rt"><pre class"tab" >60            120</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
        var change6 = document.getElementsByTagName("input");
    change6[0].setAttribute("onClick", "transaOne()");
    change6[1].setAttribute("onClick", "transaTwo()");
    change6[2].setAttribute("onClick", "transaThree()");
    change6[3].setAttribute("onClick", "transaFour()");
    change6[4].setAttribute("onClick", "transaFive()");
    change6[5].setAttribute("onClick", "transaSix()");
    nonChar = ''
    }
}
/////////For-pin/////////////////////////
///////////Functions/////////////////////////
function withdrawl(){
    // event.preventDefault();
    screenOutput.innerHTML = '<h4>What Amount Would you like to Withdrawl There will be a $3.75 charge for each transactiion?</h4><br><div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >20                   80</pre></h5><h5  class="md"><pre class"tab" >40                      100</pre></h5><h5  class="mrt"><pre class"tab" >60            120</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="mt"></h5><h5  class="mb"></h5><h5  class="mc"></h5></div></div></div></div></div></div>';
    var change3 = document.getElementsByTagName("input");
        change3[0].setAttribute("onClick", "twenty();");
        change3[1].setAttribute("onClick", "forty();");
        change3[2].setAttribute("onClick", "sixty();");
        change3[3].setAttribute("onClick", "eighty();");
        change3[4].setAttribute("onClick", "onehundred();");
        change3[5].setAttribute("onClick", "onetwenty();");

        
};
function transfer(){
    screenOutput.innerHTML = '<h4>What is the Account Number<br> for your desired Transaction?</h4>';
    screenOutput.innerHTML += '<input type="password" id="accountnum" class="keyInput" maxlength="4" placeholder="Enter ACCOUNT NUMBER"/>';
    nonChar = '';
    var change4 = document.getElementsByTagName("input");
    change4[0].setAttribute("onClick", "verifyTransfer()");
    change4[1].setAttribute("onClick", "verifyTransfer()");
    change4[2].setAttribute("onClick", "verifyTransfer()");
    change4[3].setAttribute("onClick", "verifyTransfer()");
    change4[4].setAttribute("onClick", "verifyTransfer()");
    change4[5].setAttribute("onClick", "verifyTransfer()");
}
////////////////////Deposit/////////////////////////////////////
function deposit(){
    screenOutput.innerHTML = '<h4>What Amount Would you like to Deposit?</h4><br>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >20                 80</pre></h5><h5  class="d"><pre class"tab"4>40                      100</pre></h5><h5  class="rt"><pre class"tab" >60           120</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
        change10[0].setAttribute("onClick", "Dtwenty();");
        change10[1].setAttribute("onClick", "Dforty();");
        change10[2].setAttribute("onClick", "Dsixty();");
        change10[3].setAttribute("onClick", "Deighty();");
        change10[4].setAttribute("onClick", "Donehundred();");
        change10[5].setAttribute("onClick", "Donetwenty();");
}
////////////////////Deposit/////////////////////////////////////


////////////////////Deposit Amounts/////////////////////////////////////\
function Dtwenty(){
    var newbalance = users.user001.balance + 20;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $20.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}
function Dforty(){
    var newbalance = users.user001.balance + 40;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $40.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}
function Dsixty(){
    var newbalance = users.user001.balance + 60;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $60.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}
function Deighty(){
    var newbalance = users.user001.balance + 80;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $80.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}
function Donehundred(){
    var newbalance = users.user001.balance + 100;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $100.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}
function Donetwenty(){
    var newbalance = users.user001.balance + 120;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $120.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}
////////////////////Deposit Amounts/////////////////////////////////////


////////////////////withdawl Amounts/////////////////////////////////////
function twenty(){
    var newbalance = users.user001.balance - 20 - 3.75;
    users.user001.balance = newbalance;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    var ywd = "<br><h4>You widtdrew $20.00 from your account</h4>";
    RecentT.W += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    document.getElementById("cash")
    cash.innerHTML = '<div class="cash-out"><img src="imgs/cash-out.jpg" alt=""></div>'
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.W;
}
function forty(){
    var newbalance = users.user001.balance - 40 - 3.75;
    users.user001.balance = newbalance;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    var ywd = "<br><h4>You widtdrew $40.00 from your account</h4>";
    RecentT.W += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.W;
}
function sixty(){
    var newbalance = users.user001.balance - 60 - 3.75;
    users.user001.balance = newbalance;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    var ywd = "<br><h4>You widtdrew $60.00 from your account</h4>";
    RecentT.W += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.W;
}
function eighty(){
    var newbalance = users.user001.balance - 80 - 3.75;
    users.user001.balance = newbalance;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    var ywd = "<br><h4>You widtdrew $80.00 from your account</h4>";
    RecentT.W += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.W;
}
function onehundred(){
    var newbalance = users.user001.balance - 100 - 3.75;
    users.user001.balance = newbalance;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    var ywd = "<br><h4>You widtdrew $100.00 from your account</h4>";
    RecentT.W += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.W;
}
function onetwenty(){
    var newbalance = users.user001.balance - 120 - 3.75;
    users.user001.balance = newbalance;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    var ywd = "<br><h4>You widtdrew $120.00 from your account</h4>";
    RecentT.W += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";    
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "Cancel()");
    change9[4].setAttribute("onClick", "Cancel()");
    change9[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.W;
}
////////////////////balance//////////////////////////////////////////////
function Ubalance(){
    var newbalance = users.user001.balance
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + users.user001.balance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    RecentT.B
     += '<h5>Your Cureent balance is:</h5>' + newbalance;
    var chang8 = document.getElementsByTagName("input");
    chang8[0].setAttribute("onClick", "Continue();");
    chang8[1].setAttribute("onClick", "Continue();");
    chang8[2].setAttribute("onClick", "Continue();");
    chang8[3].setAttribute("onClick", "Cancel()");
    chang8[4].setAttribute("onClick", "Cancel()");
    chang8[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.B;
    
}
////////////////////balance//////////////////////////////////////////////


////////////////////withdawl Amounts/////////////////////////////////////

////////////////////Transfer/////////////////////////////////////////////
////////////////////Transfer Amount/////////////////////////////////////////////
function transaOne(){
    var newbalance = users.user001.balance - 20;
    users.user001.balance = newbalance;
    screenOutput.innerHTML = "<h4>Transfer Complete<br><h5>Your Current Amount is:" + newbalance + "</h4>";
    users.user002.balance = users.user002.balance + 20;
    var ywd = "<br><h4>You Transfered $20.00 from your account</h4>";
    RecentT.T += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change7 = document.getElementsByTagName("input");
    change7[0].setAttribute("onClick", "Continue();");
    change7[1].setAttribute("onClick", "Continue();");
    change7[2].setAttribute("onClick", "Continue();");
    change7[3].setAttribute("onClick", "Cancel()");
    change7[4].setAttribute("onClick", "Cancel()");
    change7[5].setAttribute("onClick", "Cancel()");
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.T;
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
}
function transaTwo(){
    var newbalance = users.user001.balance - 40;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Transfered $40.00 from your account</h4>";
    RecentT.T += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = "<h4>Transfer Complete<br><h5>Your Current Amount is:" + newbalance + "</h4>";
    users.user002.balance = users.user002.balance + 40;
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.T;
    var change7 = document.getElementsByTagName("input");
    change7[0].setAttribute("onClick", "Continue();");
    change7[1].setAttribute("onClick", "Continue();");
    change7[2].setAttribute("onClick", "Continue();");
    change7[3].setAttribute("onClick", "Cancel()");
    change7[4].setAttribute("onClick", "Cancel()");
    change7[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';

}
function transaThree(){
    var newbalance = users.user001.balance - 60;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Transfered $60.00 from your account</h4>";
    RecentT.T += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = "<h4>Transfer Complete<br><h5>Your Current Amount is:" + newbalance + "</h4>";
    users.user002.balance = users.user002.balance + 60;
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.T;
    var change7 = document.getElementsByTagName("input");
    change7[0].setAttribute("onClick", "Continue();");
    change7[1].setAttribute("onClick", "Continue();");
    change7[2].setAttribute("onClick", "Continue();");
    change7[3].setAttribute("onClick", "Cancel()");
    change7[4].setAttribute("onClick", "Cancel()");
    change7[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
}
function transaFour(){
    var newbalance = users.user001.balance - 80;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Transfered $80.00 from your account</h4>";
    RecentT.T += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = "<h4>Transfer Complete<br><h5>Your Current Amount is:" + newbalance + "</h4>";
    users.user002.balance = users.user002.balance + 80;
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.T;
    var change7 = document.getElementsByTagName("input");
    change7[0].setAttribute("onClick", "Continue();");
    change7[1].setAttribute("onClick", "Continue();");
    change7[2].setAttribute("onClick", "Continue();");
    change7[3].setAttribute("onClick", "Cancel()");
    change7[4].setAttribute("onClick", "Cancel()");
    change7[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
}
function transaFive(){
    var newbalance = users.user001.balance - 100;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Transfered $100.00 from your account</h4>";
    RecentT.T += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = "<h4>Transfer Complete<br><h5>Your Current Amount is:" + newbalance + "</h4>";
    users.user002.balance = users.user002.balance + 100;
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.T;
    var change7 = document.getElementsByTagName("input");
    change7[0].setAttribute("onClick", "Continue();");
    change7[1].setAttribute("onClick", "Continue();");
    change7[2].setAttribute("onClick", "Continue();");
    change7[3].setAttribute("onClick", "Cancel()");
    change7[4].setAttribute("onClick", "Cancel()");
    change7[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
}
function transaSix(){
    var newbalance = users.user001.balance - 120;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Transfered $120.00 from your account</h4>";
    RecentT.T += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = "<h4>Transfer Complete<br><h5>Your Current Amount is:" + newbalance + "</h4>";
    users.user002.balance = users.user002.balance + 120;
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.T;
    var change7 = document.getElementsByTagName("input");
    change7[0].setAttribute("onClick", "Continue();");
    change7[1].setAttribute("onClick", "Continue();");
    change7[2].setAttribute("onClick", "Continue();");
    change7[3].setAttribute("onClick", "Cancel()");
    change7[4].setAttribute("onClick", "Cancel()");
    change7[5].setAttribute("onClick", "Cancel()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
}
////////////////////Transfer Amount/////////////////////////////////////////////

////////////////////Transfer/////////////////////////////////////////////


function Continue(){
    screenOutput.innerHTML = "<h1>"+ users.user001.ID +"</h1><br>"+ '<h4>Would you like to : </h4><br>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="w"><pre class"tab" >Withdrawl                   Transfer</pre></h5><h5  class="d"><pre class"tab" >Deposit                      Balance</pre></h5><h5  class="rt"><pre class"tab" >Recent Transactions            Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change2 = document.getElementsByTagName("input");
    change2[0].setAttribute("onClick", "withdrawl();");
    change2[1].setAttribute("onClick", "deposit();");
    change2[2].setAttribute("onClick", "RecentTransaction();");
    change2[3].setAttribute("onClick", "transfer();");
    change2[4].setAttribute("onClick", "Ubalance();");
    change2[5].setAttribute("onClick", "Cancel();");
}
function Cancel(){
    var canceled = document.getElementById('body');
    canceled.innerHTML = '<div class="entire-AtmScreen-1"></div><div class="entire-AtmScreen">'+'<div class="bank-of scroll-left"><h1>International Bank of Tazz</h1></div><br><div class="keyboard"><div class="insert card-slot">'+'<img src="imgs/insert-card.jpg" alt="Ensert card"><div class="card"><a href="atm(2)accept-card.html">'+'<img src="imgs/actual-card.png" alt=""></a></div></div><div class="reciept-out"></div><div class="reciept">' +'<img class="reciept" src="imgs/reciept.jpg" alt="">'+'</div><div class="output-buttons"><input type="button" class="buttons-position-1"><input type="button" class="buttons-position-2">'+'<input type="button" class="buttons-position-3"><input type="button" class="buttons-position-4"><input type="button" class="buttons-position-5"><input type="button" class="buttons-position-6"></div><div class="screen-output">'+ '</div><div class="container"><div class="row">'+'<div class="hint-screen"></div><div class="cash-out">';
    canceled.innerHTML+= '<img src="imgs/cash-out.jpg" alt=""></div><div class="numbers col-sm-4"><input type="button" id="num0" class="btn" value="1" /><input type="button" id="num1" class="btn" value="2"/><input type="button" id="num2" class="btn" value="3"/><input type="button" id="num3" class="btn" value="4"/><input type="button" id="num4" class="btn" value="5"/><input type="button" id="num5" class="btn" value="6"/><input type="button" id="num6" class="btn" value="7"/><input type="button" id="num7" class="btn" value="8"/><input type="button" id="num8" class="btn" value="9"/><input type="button" id="num9" class="btn" value="0"/><input type="button" id="Clr" class="btnDC" value="CLR" onclick ="clearPassword()"/><input type="button" id="Del" class="btnDC" value="DEL" onClick="deleteChar()"/></div></div></div></div></div><div class="entire-AtmScreen-2"></div>'
}
////////////////////Key-pad/////////////////////////////////////////////
function clearPassword() {
    clickedButton(nonChar="")  
};
function deleteChar(){
    clickedButton(nonChar = nonChar.substring(0,nonChar.length-1))
};   
function clickedButton(btn){
    var key = document.querySelector('.keyInput');
    key.value = btn;
    console.log(btn);
};   
function showClickedButton(btn){
    clickedButton(nonChar+=btn)
    console.log(btn);
};  
///////////Functions///////////////////////

// function clickedButtona(btna){
//     var transfera = document.getElementById("ta");
    
//     transfera.value = btna;
//     console.log(btna);
// };   
// function showClickedButtona(btna){
//     clickedButtona(nonChar+=btna)
//     console.log(btna);
    
// };  

////////////////////Key-pad/////////////////////////////////////////////
    // function clickedButtona(btna){
    //     var AccountNumber = document.getElementById("accountnum");
    
    //     AccountNumber.value = btna;
    //     console.log(btna);
    // };   
    // function showClickedButtona(btna){
    //     clickedButtona(nonChara+=btna)
    //     console.log(btna);
        
    // };  

// function displayPassword(){
//     box = document.querySelector("#plainPsWord");
//       if (box.checked ==false){
//       psword.type = "password";
//     }    
//   else{
//       psword.type = "text"
//   }
// }

// '<div class="container"><div class="row"><div class="col-sm-2"><a href="withdrawl.html"><button>Withdrawl</button></a><a href="#"><button>Deposit</button></a><a href="#"><button>Tractions</button></a></div><div class="col-sm-2"><a href="#"><button>Transfer</button></a><a href="#"><button>Balance</button></a><a href="#"><button>Cancel</button></a></div><div class="col-sm-2"></div><div class="col-sm-2"></div><div class="col-sm-2"></div><div class="col-sm-2"></div></div></div>';

// "<h3>What amount would <br>you like to withdrawl?</h3>" + '<br>' + '<input type="radio" value="100" name="choice1" id="complereW" onclick="Amount();">100</input><input type="radio" value="120" name="choice2" onclick="Amount();">120</input><input type="radio" value="140" name="choice3" onclick="Amount();">140</input>'