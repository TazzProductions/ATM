//////////////////////////////////////////////////////////////////////Global Varible Assignment//////////////////////////////////////////////////////////////////
var screenOutput = document.getElementById('screenOutput');
var hint = document.getElementById("hint");
var nonChar = "";
//////////////////////////////////////////////////////////////////////Varible Assignment//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////User Accounts////////////////////////////////////////////////////
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
        accountnumber: 1111,
    },
};
//////////////////////////////////////////////////User Accounts////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////Reciept///////////////////////////////////////////////
var RecentT = {
    W: [],
    D: [],
    T: [],
    B: [],
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
//////////////////////////////////////////////////////////////////////Reciept///////////////////////////////////////////////


////////////////////balance//////////////////////////////////////////////
function Ubalance(){
    var newbalance = parseFloat(users.user001.balance - 3.75);
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance ;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    RecentT.B += '<h5>Your Cureent balance is:</h5>' + newbalance;
    var chang8 = document.getElementsByTagName("input");
    chang8[0].setAttribute("onClick", "Continue();");
    chang8[1].setAttribute("onClick", "Continue();");
    chang8[2].setAttribute("onClick", "Continue();");
    chang8[3].setAttribute("onClick", "enterPage()");
    chang8[4].setAttribute("onClick", "enterPage()");
    chang8[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.B;
}
////////////////////balance//////////////////////////////////////////////


//////////////////////////////////////////////////////For-pin//////////////////////////////////////////////////////
function enterpin(){
    screenOutput.innerHTML = '<input type="password" id="pin" class="keyInput" maxlength="4" placeholder="enter pin"/>';
    hint.innerHTML = '<p>Use the pin code "1234" to access the users account</p>'
    var change = document.getElementsByTagName("input");
    change[1].setAttribute("onClick", "validPin();");
    chang8[2].setAttribute("onClick", "validPin();");
    chang8[3].setAttribute("onClick", "validPin();");
    chang8[4].setAttribute("onClick", "validPin()");
    chang8[5].setAttribute("onClick", "validPin()");
    chang8[6].setAttribute("onClick", "validPin()");
};

function validPin(){
    hint.innerHTML = ''
    var pin = document.getElementById('pin');
    if (Number(pin.value) === users.user001.pin){
        screenOutput.innerHTML = "<h1>"+ users.user001.ID +"</h1><br>"+ '<h4>Would you like to : </h4><br>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="w"><pre class"tab" >Withdraw                    Transfer</pre></h5><h5  class="d"><pre class"tab" >Deposit                      Balance</pre></h5><h5  class="rt"><pre class"tab" >Recent Transactions            Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
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

function enterPage(){
    screenOutput.innerHTML = "<h1>"+ users.user001.ID +"</h1><br>"+ '<h4>Would you like to : </h4><br>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="w"><pre class"tab" >Withdrawl                   Transfer</pre></h5><h5  class="d"><pre class"tab" >Deposit                      Balance</pre></h5><h5  class="rt"><pre class"tab" >Recent Transactions            Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change2 = document.getElementsByTagName("input");
    change2[0].setAttribute("onClick", "withdrawl();");
    change2[1].setAttribute("onClick", "deposit();");
    change2[2].setAttribute("onClick", "RecentTransaction();");
    change2[3].setAttribute("onClick", "transfer();");
    change2[4].setAttribute("onClick", "Ubalance();");
    change2[5].setAttribute("onClick", "Cancel();");


}
//////////////////////////////////////////////////////For-pin//////////////////////////////////////////////////////


/////////////////////////////////////////////////////////withdawl Amounts//////////////////////////////////////////////////////////////
/////////////////////////////////Withdrawl///////////////////////////////
function withdrawl(){
    screenOutput.innerHTML = '<h4>What Amount Would you like to Withdrawl There will be a $3.75 charge for each transactiion?</h4><br><div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >20                    80</pre></h5><h5 class="d"><pre class"tab" >40                    100</pre></h5><h5  class="rt"><pre class"tab" >60                    120</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5 class="c"></h5></div></div></div></div></div></div>';
    var change3 = document.getElementsByTagName("input");
    change3[0].setAttribute("onClick", "confirmWT();");
    change3[1].setAttribute("onClick", "confirmWF();");
    change3[2].setAttribute("onClick", "confirmWS();");
    change3[3].setAttribute("onClick", "confirmWE();");
    change3[4].setAttribute("onClick", "confirmWO();");
    change3[5].setAttribute("onClick", "confirmWOT();");
    console.log(change3)

};
/////////////////////////////////Withdrawl///////////////////////////////

///////////////////////////////////confirm Withdrawl/////////////////////////////
function confirmWT(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Withdrawl $20.00?</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "twenty();");
    change10[1].setAttribute("onClick", "twenty();");
    change10[2].setAttribute("onClick", "twenty();");
    change10[3].setAttribute("onClick", "withdrawl();");
    change10[4].setAttribute("onClick", "withdrawl();");
    change10[5].setAttribute("onClick", "withdrawl();");
}

function confirmWF(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Withdrawl $40.00?</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "forty();");
    change10[1].setAttribute("onClick", "forty();");
    change10[2].setAttribute("onClick", "forty();");
    change10[3].setAttribute("onClick", "withdrawl();");
    change10[4].setAttribute("onClick", "withdrawl();");
    change10[5].setAttribute("onClick", "withdrawl();");

}

function confirmWS(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Withdrawl $60.00?</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "sixty();");
    change10[1].setAttribute("onClick", "sixty();");
    change10[2].setAttribute("onClick", "sixty();");
    change10[3].setAttribute("onClick", "withdrawl();");
    change10[4].setAttribute("onClick", "withdrawl();");
    change10[5].setAttribute("onClick", "withdrawl();");
}

function confirmWE(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Withdrawl $80.00?</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "eighty();");
    change10[1].setAttribute("onClick", "eighty();");
    change10[2].setAttribute("onClick", "eighty();");
    change10[3].setAttribute("onClick", "withdrawl();");
    change10[4].setAttribute("onClick", "withdrawl();");
    change10[5].setAttribute("onClick", "withdrawl();");
}

function confirmWO(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Withdrawl $100.00?</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "onehundred();");
    change10[1].setAttribute("onClick", "onehundred();");
    change10[2].setAttribute("onClick", "onehundred();");
    change10[3].setAttribute("onClick", "withdrawl();");
    change10[4].setAttribute("onClick", "withdrawl();");
    change10[5].setAttribute("onClick", "withdrawl();");
}

function confirmWOT(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Withdrawl $120.00?</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "onetwenty();");
    change10[1].setAttribute("onClick", "onetwenty();");
    change10[2].setAttribute("onClick", "onetwenty();");
    change10[3].setAttribute("onClick", "withdrawl();");
    change10[4].setAttribute("onClick", "withdrawl();");
    change10[5].setAttribute("onClick", "withdrawl();");
}
///////////////////////////////////confirm Withdrawl/////////////////////////////
/////////////////////////////////Withdrawl Amounts///////////////////////////////

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
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var cash = document.getElementById("cash");
    // cash.innerHTML = '<div class="cash-out"><img src="imgs/cash-out.jpg" alt=""></div>';
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
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
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
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
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
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
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
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
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
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");

    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.W;
}
/////////////////////////////////Withdrawl Amounts///////////////////////////////


/////////////////////////////////////////////////////////withdawl Amounts//////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////Deposits//////////////////////////////////////////////////////////////////////
function deposit(){
    screenOutput.innerHTML = '<h4>What Amount Would you like to Deposit?</h4><br>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >20                    80</pre></h5><h5 class="d"><pre class"tab" >40                    100</pre></h5><h5  class="rt"><pre class"tab" >60                    120</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5 class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "confirmDtwenty();");
    change10[1].setAttribute("onClick", "confirmDforty();");
    change10[2].setAttribute("onClick", "confirmDsixty();");
    change10[3].setAttribute("onClick", "confirmDeighty();");
    change10[4].setAttribute("onClick", "confirmDonehundered();");
    change10[5].setAttribute("onClick", "confirmDonetwenty();");
}

//////////////////////Deposit_Amounts//////////////////////////////////////
function Dtwenty(){
    var newbalance = users.user001.balance + 20 - 3.75;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $20.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}

function Dforty(){
    var newbalance = users.user001.balance + 40 - 3.75;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $40.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}

function Dsixty(){
    var newbalance = users.user001.balance + 60 - 3.75;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $60.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}

function Deighty(){
    var newbalance = users.user001.balance + 80 - 3.75;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $80.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}

function Donehundred(){
    var newbalance = users.user001.balance + 100 - 3.75;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $100.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}

function Donetwenty(){
    var newbalance = users.user001.balance + 120 - 3.75;
    users.user001.balance = newbalance;
    var ywd = "<br><h4>You Deposited $120.00 into your account</h4>";
    RecentT.D += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML = '<h2>Your Cureent balance is:</h2>' + newbalance;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change9 = document.getElementsByTagName("input");
    change9[0].setAttribute("onClick", "Continue();");
    change9[1].setAttribute("onClick", "Continue();");
    change9[2].setAttribute("onClick", "Continue();");
    change9[3].setAttribute("onClick", "enterPage()");
    change9[4].setAttribute("onClick", "enterPage()");
    change9[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.D;
}
/////////////////////////////////////////confirm-Deposit////////////////////////////////////////////////////////

function confirmDtwenty(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Deposit $20.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "Dtwenty();");
    change10[1].setAttribute("onClick", "Dtwenty();");
    change10[2].setAttribute("onClick", "Dtwenty();");
    change10[3].setAttribute("onClick", "deposit();");
    change10[4].setAttribute("onClick", "deposit();");
    change10[5].setAttribute("onClick", "deposit();");
    // document.createElement("button").setAttribute("onclick","enterPage()")
}

function confirmDforty(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Deposit $40.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "Dforty();");
    change10[1].setAttribute("onClick", "Dforty();");
    change10[2].setAttribute("onClick", "Dforty();");
    change10[3].setAttribute("onClick", "deposit();");
    change10[4].setAttribute("onClick", "deposit();");
    change10[5].setAttribute("onClick", "deposit();");
}

function confirmDsixty(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Deposit $60.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "Dsixty();");
    change10[1].setAttribute("onClick", "Dsixty();");
    change10[2].setAttribute("onClick", "Dsixty();");
    change10[3].setAttribute("onClick", "deposit();");
    change10[4].setAttribute("onClick", "deposit();");
    change10[5].setAttribute("onClick", "deposit();");
}

function confirmDeighty(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Deposit $80.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "Deighty();");
    change10[1].setAttribute("onClick", "Deighty();");
    change10[2].setAttribute("onClick", "Deighty();");
    change10[3].setAttribute("onClick", "deposit();");
    change10[4].setAttribute("onClick", "deposit();");
    change10[5].setAttribute("onClick", "deposit();");
}

function confirmDonehundered(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Deposit $100.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "Donehundred();");
    change10[1].setAttribute("onClick", "Donehundred();");
    change10[2].setAttribute("onClick", "Donehundred();");
    change10[3].setAttribute("onClick", "deposit();");
    change10[4].setAttribute("onClick", "deposit();");
    change10[5].setAttribute("onClick", "deposit();");
}

function confirmDonetwenty(){
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Deposit $120.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "Donetwenty();");
    change10[1].setAttribute("onClick", "Donetwenty();");
    change10[2].setAttribute("onClick", "Donetwenty();");
    change10[3].setAttribute("onClick", "deposit();");
    change10[4].setAttribute("onClick", "deposit();");
    change10[5].setAttribute("onClick", "deposit();");
}
/////////////////////////////////////////confirm-Deposit////////////////////////////////////////////////////////
//////////////////////Deposit_Amounts//////////////////////////////////////
/////////////////////////////////////////////////////////Deposits//////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////Transfer//////////////////////////////////////////////////////////////////////

function transfer(){
    hint.innerHTML = "<p>Use the pin code '1111' to access the second users account to transfer funds from the current account's balance</p>"

    screenOutput.innerHTML = '<h4>What is the Account Number<br> for your desired Transaction?</h4><br><p>Use the right sided buttons to return to the prvious page & the left hand side to verify the Account Number</p>';
    screenOutput.innerHTML += '<input type="password" id="accountnum" class="keyInput" maxlength="4" value="" placeholder="Enter ACCOUNT NUMBER"/>';
    nonChar = '';
    var change4 = document.getElementsByTagName("input");
    change4[1].setAttribute("onClick", "verifyTransfer()");
    change4[2].setAttribute("onClick", "verifyTransfer()");
    change4[3].setAttribute("onClick", "verifyTransfer()");
    change4[4].setAttribute("onClick", "enterPage()");
    change4[5].setAttribute("onClick", "enterPage()");
    change4[6].setAttribute("onClick", "enterPage()");
}

function verifyTransfer(){
    nonChar = '';
    var AccountNumber = document.getElementById("accountnum");
    console.log(AccountNumber)
    if (Number(AccountNumber.value) === users.user002.accountnumber){
        // alert("ran through");
        screenOutput.innerHTML = '<h4>What Amount Would you like to Transfer?</h4><br>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >20                    80</pre></h5><h5 class="d"><pre class"tab" >40                    100</pre></h5><h5  class="rt"><pre class"tab" >60                    120</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5 class="c"></h5></div></div></div></div></div></div>';
        var change6 = document.getElementsByTagName("input");
        change6[0].setAttribute("onClick", "confirmtransaOne()");
        change6[1].setAttribute("onClick", "confirmtransaTwo()");
        change6[2].setAttribute("onClick", "confirmtransaThree()");
        change6[3].setAttribute("onClick", "confirmtransaFour()");
        change6[4].setAttribute("onClick", "confirmtransaFive()");
        change6[5].setAttribute("onClick", "confirmtransaSix()");
    }else{
        alert("User account not found");
    }
}
////////////////////Transfer Amount/////////////////////////////////////////////

function transaOne(){
    var newbalance = users.user001.balance - 20 - 3.75;
    users.user001.balance = newbalance;
    users.user002.balance = users.user002.balance + 20;
    screenOutput.innerHTML = "<h4>Transfer Complete<br><h5>Your Current Amount is:" + newbalance + "</h4>";
    var ywd = "<br><h4>You Transfered $20.00 from your account</h4>";
    RecentT.T += '<h5>Your Cureent balance is:</h5>' + newbalance + ywd ;
    screenOutput.innerHTML += "<h4>Would you like to Make anoter transaction?</h4>";
    var change7 = document.getElementsByTagName("input");
    change7[0].setAttribute("onClick", "Continue();");
    change7[1].setAttribute("onClick", "Continue();");
    change7[2].setAttribute("onClick", "Continue();");
    change7[3].setAttribute("onClick", "enterPage()");
    change7[4].setAttribute("onClick", "enterPage()");
    change7[5].setAttribute("onClick", "enterPage()");
    var printReciept = document.getElementById("reciept");
    printReciept.innerHTML += RecentT.T;
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
};

function transaTwo(){
    var newbalance = users.user001.balance - 40 - 3.75;
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
    change7[3].setAttribute("onClick", "enterPage()");
    change7[4].setAttribute("onClick", "enterPage()");
    change7[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
    
};

function transaThree(){
    var newbalance = users.user001.balance - 60 - 3.75;
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
    change7[3].setAttribute("onClick", "enterPage()");
    change7[4].setAttribute("onClick", "enterPage()");
    change7[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
};

function transaFour(){
    var newbalance = users.user001.balance - 80 - 3.75;
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
    change7[3].setAttribute("onClick", "enterPage()");
    change7[4].setAttribute("onClick", "enterPage()");
    change7[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
};

function transaFive(){
    var newbalance = users.user001.balance - 100 - 3.75;
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
    change7[3].setAttribute("onClick", "enterPage()");
    change7[4].setAttribute("onClick", "enterPage()");
    change7[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
};

function transaSix(){
    var newbalance = users.user001.balance - 120 - 3.75;
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
    change7[3].setAttribute("onClick", "enterPage()");
    change7[4].setAttribute("onClick", "enterPage()");
    change7[5].setAttribute("onClick", "enterPage()");
    screenOutput.innerHTML += '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="rt"><pre class="tab"> Continue                 Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5 class="c"></h5></div></div></div>';
};
////////////////////Transfer Amount/////////////////////////////////////////////
///////////////////Confirm-Transaction//////////////////////////////////////////////
function confirmtransaOne(){
    screenOutput.innerHTML = '<h4>Are you sure you would like to deposit/transfer $20.00 into this account</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaOne();");
    change10[1].setAttribute("onClick", "transaOne();");
    change10[2].setAttribute("onClick", "transaOne();");
    change10[3].setAttribute("onClick", "Caution();");
    change10[4].setAttribute("onClick", "Caution();");
    change10[5].setAttribute("onClick", "Caution();");
};

function confirmtransaTwo(){
    screenOutput.innerHTML = '<h4>Are you sure you would like to deposit/transfer $40.00 into this account</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaTwo();");
    change10[1].setAttribute("onClick", "transaTwo();");
    change10[2].setAttribute("onClick", "transaTwo();");
    change10[3].setAttribute("onClick", "Cautiontwo();");
    change10[4].setAttribute("onClick", "Cautiontwo();");
    change10[5].setAttribute("onClick", "Cautiontwo();");
};

function confirmtransaThree(){
    screenOutput.innerHTML = '<h4>Are you sure you would like to deposit/transfer $60.00 into this account</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaThree();");
    change10[1].setAttribute("onClick", "transaThree();");
    change10[2].setAttribute("onClick", "transaThree();");
    change10[3].setAttribute("onClick", "Cautionthree();");
    change10[4].setAttribute("onClick", "Cautionthree();");
    change10[5].setAttribute("onClick", "Cautionthree();");
};

function confirmtransaFour(){
    screenOutput.innerHTML = '<h4>Are you sure you would like to deposit/transfer $80.00 into this account</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaFour();");
    change10[1].setAttribute("onClick", "transaFour();");
    change10[2].setAttribute("onClick", "transaFour();");
    change10[3].setAttribute("onClick", "Cautionfour();");
    change10[4].setAttribute("onClick", "Cautionfour();");
    change10[5].setAttribute("onClick", "Cautionfour();");
};

function confirmtransaFive(){
    screenOutput.innerHTML = '<h4>Are you sure you would like to deposit/transfer $100.00 into this account</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaFive();");
    change10[1].setAttribute("onClick", "transaFive();");
    change10[2].setAttribute("onClick", "transaFive();");
    change10[3].setAttribute("onClick", "Cautionfive();");
    change10[4].setAttribute("onClick", "Cautionfive();");
    change10[5].setAttribute("onClick", "Cautionfive();");
};

function confirmtransaSix(){
    screenOutput.innerHTML = '<h4>Are you sure you would like to deposit/transfer $120.00 into this account</h4>' + '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaSix();");
    change10[1].setAttribute("onClick", "transaSix();");
    change10[2].setAttribute("onClick", "transaSix();");
    change10[3].setAttribute("onClick", "Cautionsix();");
    change10[4].setAttribute("onClick", "Cautionsix();");
    change10[5].setAttribute("onClick", "Cautionsix();");

};

/////////////////////////////////////////////////////////Transfer//////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////Caution_leaving_transfer//////////////////////////////////////////////////////////////////////

function Caution(){
    alert("If you cancel you Will be prompt to ReEnter the the Account Number");
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Transfer $20.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaone();");
    change10[1].setAttribute("onClick", "transaone();");
    change10[2].setAttribute("onClick", "transaone();");
    change10[3].setAttribute("onClick", "transfer();");
    change10[4].setAttribute("onClick", "transfer();");
    change10[5].setAttribute("onClick", "transfer();");
}
function Cautiontwo(){
    alert("If you cancel you Will be prompt to ReEnter the the Account Number");
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Transfer $40.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaTwo();");
    change10[1].setAttribute("onClick", "transaTwo();");
    change10[2].setAttribute("onClick", "transaTwo();");
    change10[3].setAttribute("onClick", "transfer();");
    change10[4].setAttribute("onClick", "transfer();");
    change10[5].setAttribute("onClick", "transfer();");
}
function Cautionthree(){
    alert("If you cancel you Will be prompt to ReEnter the the Account Number");
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Transfer $60.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaThree();");
    change10[1].setAttribute("onClick", "transaThree();");
    change10[2].setAttribute("onClick", "transaThree();");
    change10[3].setAttribute("onClick", "transfer();");
    change10[4].setAttribute("onClick", "transfer();");
    change10[5].setAttribute("onClick", "transfer();");
}
function Cautionfour(){
    alert("If you cancel you Will be prompt to ReEnter the the Account Number");
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Transfer $80.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaFour();");
    change10[1].setAttribute("onClick", "transaFour();");
    change10[2].setAttribute("onClick", "transaFour();");
    change10[3].setAttribute("onClick", "transfer();");
    change10[4].setAttribute("onClick", "transfer();");
    change10[5].setAttribute("onClick", "transfer();");
}
function Cautionfive(){
    alert("If you cancel you Will be prompt to ReEnter the the Account Number");
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Transfer $100.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaFive();");
    change10[1].setAttribute("onClick", "transaFive();");
    change10[2].setAttribute("onClick", "transaFive();");
    change10[3].setAttribute("onClick", "transfer();");
    change10[4].setAttribute("onClick", "transfer();");
    change10[5].setAttribute("onClick", "transfer();");
}
function Cautionsix(){
    alert("If you cancel you Will be prompt to ReEnter the the Account Number");
    screenOutput.innerHTML = '<h4>Are you Sure you would like to Transfer $120.00</h4>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="mw"><pre class"tab" >Yes                 NO</pre></h5><h5  class="d"><pre class"tab"4>Yes                      NO</pre></h5><h5  class="rt"><pre class"tab" >Yes            NO</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change10 = document.getElementsByTagName("input");
    change10[0].setAttribute("onClick", "transaSix();");
    change10[1].setAttribute("onClick", "transaSix();");
    change10[2].setAttribute("onClick", "transaSix();");
    change10[3].setAttribute("onClick", "transfer();");
    change10[4].setAttribute("onClick", "transfer();");
    change10[5].setAttribute("onClick", "transfer();");
}
/////////////////////////////////////////////////////////Caution_leaving_transfer//////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////Continue/Cancel///////////////////////////////////////////////
function Continue(){
    screenOutput.innerHTML = "<h1>"+ users.user001.ID +"</h1><br>"+ '<h4>Would you like to : </h4><br>'+ '<div class="container"><div class="row"><div class="transaction-1 com-sm-6"><h5 class="w"><pre class"tab" >Withdrawl                   Transfer</pre></h5><h5  class="d"><pre class"tab" >Deposit                      Balance</pre></h5><h5  class="rt"><pre class"tab" >Recent Transactions            Cancel</pre></h5></div><div class="transaction-2 com-sm-6"><h5  class="t"></h5><h5  class="b"></h5><h5  class="c"></h5></div></div></div></div></div></div>';
    var change2 = document.getElementsByTagName("input");
    change2[0].setAttribute("onClick", "withdrawl();");
    change2[1].setAttribute("onClick", "deposit();");
    change2[2].setAttribute("onClick", "RecentTransaction();");
    change2[3].setAttribute("onClick", "transfer();");
    change2[4].setAttribute("onClick", "Ubalance();");
    change2[5].setAttribute("onClick", "enterPage();");
}
function Cancel(){
    var canceled = document.getElementById('body');
    canceled.innerHTML = '<div class="entire-AtmScreen-1"></div><div class="entire-AtmScreen">'+'<div class="bank-of scroll-left"><h1>International Bank of Tazz</h1></div><br><div class="keyboard"><div class="insert card-slot">'+'<img src="imgs/insert-card.jpg" alt="Ensert card"><div class="card"><a href="atm(2)accept-card.html">'+'<img src="imgs/actual-card.png" alt=""></a></div></div><div class="reciept-out"></div><div class="reciept">' +'<img class="reciept" src="imgs/reciept.jpg" alt="">'+'</div><div class="output-buttons"><input type="button" class="buttons-position-1"><input type="button" class="buttons-position-2">'+'<input type="button" class="buttons-position-3"><input type="button" class="buttons-position-4"><input type="button" class="buttons-position-5"><input type="button" class="buttons-position-6"></div><div class="screen-output">'+ '</div><div class="container"><div class="row">'+'<div class="hint-screen"></div><div class="cash-out">';
    canceled.innerHTML+= '<img src="imgs/cash-out.jpg" alt=""></div><div class="numbers col-sm-4"><input type="button" id="num0" class="btn" value="1" /><input type="button" id="num1" class="btn" value="2"/><input type="button" id="num2" class="btn" value="3"/><input type="button" id="num3" class="btn" value="4"/><input type="button" id="num4" class="btn" value="5"/><input type="button" id="num5" class="btn" value="6"/><input type="button" id="num6" class="btn" value="7"/><input type="button" id="num7" class="btn" value="8"/><input type="button" id="num8" class="btn" value="9"/><input type="button" id="num9" class="btn" value="0"/><input type="button" id="Clr" class="btnDC" value="CLR" onclick ="clearPassword()"/><input type="button" id="Del" class="btnDC" value="DEL" onClick="deleteChar()"/></div></div></div></div></div><div class="entire-AtmScreen-2"></div>'
}
//////////////////////////////////////////////////////////////////////Continue/Cancel///////////////////////////////////////////////