
function process() {
    //TODO: call backend to get the result output
    var output = "YES";
    var coin = document.getElementById("coins");
    var selec_index = coin.selectedIndex;
    var coin_type = coin.options[selec_index].text;
    alert("processing on " + coin_type + "...");
    document.getElementById("result").textContent = output;
}