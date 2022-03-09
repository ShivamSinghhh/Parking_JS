export default function exitParking(e) {
    e.preventDefault();
    let token = document.getElementById("token").value;
    let typeExit = document.getElementById("typeExit").value;       

    if (typeExit === "bike") { exitBikeParking(token) }
    else if (typeExit === "car") { exitCarParking(token) }
    else if (typeExit === "truck") { exitTruckParking(token) }

     document.getElementById("token").value = "";
     document.getElementById("typeExit").selectedIndex = 0;        

}