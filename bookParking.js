export default function bookParking(e) {
    e.preventDefault();

    let user = document.getElementById("user");
    let type = document.getElementById("type");
    let numPlate = document.getElementById("numPlate");

    console.log(user, type, numPlate)

    if (type.value === "bike") { bookBikeParking() }

    else if (type.value === "car") { bookCarParking() }

    else if (type.value === "truck") { bookTruckParking() }

    document.getElementById("user").value = "";
    document.getElementById('type').selectedIndex = 0;
    document.getElementById("numPlate").value = "";
}
