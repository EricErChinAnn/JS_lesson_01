//optional arguments
function netBill(bill,gst){
return bill*(1+gst);
}
console.log(netBill(100,0.07));

//2nd variable is option
function netBill(bill,gst=0.07){
    return bill*(1+gst);
    }
    console.log(netBill(200));
    console.log(netBill(1000,gst=0.08));       //use gst=0.08 to change the optional variable
    console.log(netBill(1000));