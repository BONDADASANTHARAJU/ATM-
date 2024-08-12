console.log("Welcome to ATM")
let pin =parseInt(prompt("Enter PIN number"))
let AC=1000;

let userExist=false;
for(let i=0;i<100;i++)
{
    if(i==pin){
        console.log("User Exists")
        userExist=true;
        break
    }
}
if(!userExist){
    console.log("User not exist")
}
else{
    while(true)
    {
        console.log("1.Deposit\n2.Withdraw\n3.Balance Enquiry\n4.Exit")
        let choice=parseInt(prompt("Enteryour choice"))
        if(choice===1){
            let dep=parseInt(prompt("Enter Amount to deposit:"))
            AC=AC+dep;
                console.log("Now your account balance is",AC)
        }
        else if(choice===2){
            let wth=parseInt(prompt("Enter Amount to withdraw:"))
            AC=AC-wth; 
                console.log("Now your account balance is",AC)
        }
        else if(choice===3){
            console.log("Your Account Balance is",AC)
        }
        else if(choice===4){
            console.log("Thanks for coming,Visit Again")
            break;
        }
        else{
            console.log("Invalid input")
            break;
        }
        let next = prompt("Enter Yes or NO")
        if(next.toLowerCase()==="no"){
            console.log("Thanks for coming,Visit again")
            break;
        }
    }
}