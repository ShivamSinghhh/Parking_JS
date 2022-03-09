export default function exitCarParking(token) {
    let parkingZone = JSON.parse(localStorage.getItem("parkingZone"));
    let span2 = document.getElementById("carNum")
    let carSlot = JSON.parse(localStorage.getItem("carSlot"));
    let flag = true;
    for (let i = 0; i < carSlot.length; i++) {
        if (i > token) { break }
        else if (token != i) { continue }
        else {
            if (carSlot[i].avail == true) { break }
            else {
                flag = false;
                let rate = 40;
                let exitTime = new Date().getMinutes();
                let diff = exitTime - carSlot[i].entry;
                console.log("diff =", diff)
                let cost = rate * diff;
                window.alert(`Hello ${carSlot[i].username} Please pay ₹ ${cost}`)
                carSlot[i].avail = true;
                carSlot[i].userId = null;
                carSlot[i].username = null;
                carSlot[i].entry = null;
                parkingZone.car.avail = parkingZone.car.avail + 1;                   
                localStorage.setItem("carSlot", JSON.stringify(carSlot));
                localStorage.setItem("parkingZone", JSON.stringify(parkingZone));                  
                span2.innerText = parkingZone.car.avail;                   
                break;
            }

        }
    }
    if(flag) {window.alert(`There is no Vehicle parked with this TokenID`)}  

}
