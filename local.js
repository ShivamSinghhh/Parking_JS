
 export default function setLocalStorage()
 {   
let parkingZone = {
    "bike": {
        "max" : 50,
        "avail" : 50
    },
    "car": {
        "max" : 20,
        "avail" : 20
    },
    "truck": { "max" : 15,
        "avail" : 15

    }
}


localStorage.setItem("parkingZone",JSON.stringify(parkingZone))

let carSlot = new Array(parkingZone.car.max).fill({ "avail": true, "username":null, "userId": null, "entry": null, "exit": null,"vehicle_No": null});

localStorage.setItem("carSlot",JSON.stringify(carSlot))

let bikeSlot = new Array(parkingZone.bike.max).fill({ "avail": true, "username":null, "userId": null, "entry": null, "exit": null,"vehicle_No": null});

localStorage.setItem("bikeSlot",JSON.stringify(bikeSlot))


let truckSlot = new Array(parkingZone.truck.max).fill({ "avail": true, "username":null, "userId": null, "entry": null, "exit": null,"vehicle_No": null});

localStorage.setItem("truckSlot",JSON.stringify(truckSlot))

 }







