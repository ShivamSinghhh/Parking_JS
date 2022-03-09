export default function exitTruckParking(token) {
    let parkingZone = JSON.parse(localStorage.getItem("parkingZone"));
    let span3 = document.getElementById("truckNum")
    let truckSlot = JSON.parse(localStorage.getItem("truckSlot"));
    let flag = true;
    for (let i = 0; i < truckSlot.length; i++) {
        if (i > token) { break }
        else if (token != i) { continue }
        else {
            if (truckSlot[i].avail == true) { break }
            else {
                flag = false;
                let rate = 50;
                let exitTime = new Date().getMinutes();
                let diff = exitTime - truckSlot[i].entry;
                console.log("diff =", diff)
                let cost = rate * diff;
                window.alert(`Hello ${truckSlot[i].username} Please pay ₹ ${cost}`)
                truckSlot[i].avail = true;
                truckSlot[i].userId = null;
                truckSlot[i].username = null;
                truckSlot[i].entry = null;
                parkingZone.truck.avail = parkingZone.truck.avail + 1;                   
                localStorage.setItem("truckSlot", JSON.stringify(truckSlot));
                localStorage.setItem("parkingZone", JSON.stringify(parkingZone));                  
                span3.innerText = parkingZone.truck.avail;                   
                break;
            }

        }
    }
    if(flag) {window.alert(`There is no Vehicle parked with this TokenID`)}
  

}
