export default function bookTruckParking() {

    let user = document.getElementById("user");
    let type = document.getElementById("type");
    let numPlate = document.getElementById("numPlate");

    let parkingZone = JSON.parse(localStorage.getItem("parkingZone"));
    let span3 = document.getElementById("truckNum")

    if (parkingZone.truck.avail == 0) {
        window.alert("No Availability");
        return;
    } else {
        let truckSlot = JSON.parse(localStorage.getItem("truckSlot"));
        for (let i = 0; i < truckSlot.length; i++) {
            if (truckSlot[i].avail === false) { continue }
            else {
                truckSlot[i].avail = false;
                truckSlot[i].username = user.value;
                truckSlot[i].userId = i;
                truckSlot[i].entry = new Date().getMinutes();
                parkingZone.truck.avail = parkingZone.truck.avail - 1;
                localStorage.setItem("truckSlot", JSON.stringify(truckSlot));
                localStorage.setItem("parkingZone", JSON.stringify(parkingZone));
                window.alert(`Hello ${user.value}! Thank you for parking your Truck., your userToken = ${i}.`)
                span3.innerText = parkingZone.truck.avail;
                break;

            }
        }
    }

}