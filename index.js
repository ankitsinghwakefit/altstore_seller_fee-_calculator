
function commissionCalculator(){
    var selling_price = document.getElementById("s_price").value;
    var profit = document.getElementById("profit").value;
    var gst = document.getElementById("gst").value;
    console.log(profit);
    console.log(selling_price);
    console.log(gst);
    var net_profit = selling_price*(profit/100);
    var commission = selling_price-(net_profit*.80);
    document.getElementById("final_earning").innerHTML= `You will Earn with AltStore ₹ ${commission}`;
}
