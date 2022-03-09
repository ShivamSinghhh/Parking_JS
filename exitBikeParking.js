export default function exitBikeParking(token) {
    let parkingZone = JSON.parse(localStorage.getItem("parkingZone"));
    let span1 = document.getElementById("bikeNum")
    let bikeSlot = JSON.parse(localStorage.getItem("bikeSlot"));
    let flag = true;
    for (let i = 0; i < bikeSlot.length; i++) {
        if (i > token) { break }
        else if (token != i) { continue }
        else {
            if (bikeSlot[i].avail == true) { break }
            else {
                flag = false;
                let rate = 10;
                let exitTime = new Date().getMinutes();
                let diff = exitTime - bikeSlot[i].entry;
                console.log("diff =", diff)
                let cost = rate * diff;
                window.alert(`Hello ${bikeSlot[i].username} Please pay ₹ ${cost}`)
                bikeSlot[i].avail = true;
                bikeSlot[i].userId = null;
                bikeSlot[i].username = null;
                bikeSlot[i].entry = null;
                parkingZone.bike.avail = parkingZone.bike.avail + 1;                   
                localStorage.setItem("bikeSlot", JSON.stringify(bikeSlot));
                localStorage.setItem("parkingZone", JSON.stringify(parkingZone));                  
                span1.innerText = parkingZone.bike.avail;                   
                break;
            }

        }
    }
    if(flag) {window.alert(`There is no Vehicle parked with this TokenID`)}  

}