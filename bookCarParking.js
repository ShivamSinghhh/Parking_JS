export default function bookCarParking() {

    let user = document.getElementById("user");
    let type = document.getElementById("type");
    let numPlate = document.getElementById("numPlate");


    let parkingZone = JSON.parse(localStorage.getItem("parkingZone"));
    let span2 = document.getElementById("carNum")

    if (parkingZone.car.avail == 0) {
        window.alert("No Availability");
        return;
    } else {
        let carSlot = JSON.parse(localStorage.getItem("carSlot"));
        for (let i = 0; i < carSlot.length; i++) {
            if (carSlot[i].avail === false) { continue }
            else {
                carSlot[i].avail = false;
                carSlot[i].username = user.value;
                carSlot[i].userId = i;
                carSlot[i].entry = new Date().getMinutes();
                parkingZone.car.avail = parkingZone.car.avail - 1;
                localStorage.setItem("carSlot", JSON.stringify(carSlot));
                localStorage.setItem("parkingZone", JSON.stringify(parkingZone));
                window.alert(`Hello ${user.value}! Thank you for parking your Car. your userToken = ${i}.`)
                span2.innerText = parkingZone.car.avail;
                break;

            }
        }
    }

}
