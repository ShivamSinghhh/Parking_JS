export default function bookBikeParking() {

    let user = document.getElementById("user");
    let type = document.getElementById("type");
    let numPlate = document.getElementById("numPlate");

    let parkingZone = JSON.parse(localStorage.getItem("parkingZone"));
    let span1 = document.getElementById("bikeNum")

    if (parkingZone.bike.avail == 0) {
        window.alert("No Availability");
        return;
    } else {
        let bikeSlot = JSON.parse(localStorage.getItem("bikeSlot"));
        for (let i = 0; i < bikeSlot.length; i++) {
            if (bikeSlot[i].avail === false) { continue }
            else {
                bikeSlot[i].avail = false;
                bikeSlot[i].username = user.value;
                bikeSlot[i].userId = i;
                bikeSlot[i].entry = new Date().getMinutes();
                parkingZone.bike.avail = parkingZone.bike.avail - 1;
                localStorage.setItem("bikeSlot", JSON.stringify(bikeSlot));
                localStorage.setItem("parkingZone", JSON.stringify(parkingZone));
                window.alert(`Hello ${user.value}! Thank you for parking your Bike. your userToken = ${i}.`)
                span1.innerText = parkingZone.bike.avail;
                break;

            }
        }
    }


}