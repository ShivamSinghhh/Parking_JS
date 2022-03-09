
 export default function setLocalStorage()
 {   
let parkingZone = {
    "bike": {
        "max" : 10,
        "avail" : 10
    },
    "car": {
        "max" : 5,
        "avail" : 5
    },
    "truck": { "max" : 4,
        "avail" : 4

    }
}


localStorage.setItem("parkingZone",JSON.stringify(parkingZone))

let carSlot = new Array(parkingZone.car.max).fill({ "avail": true, "username":null, "userId": null, "entry": null, "exit": null, "rate": null });

localStorage.setItem("carSlot",JSON.stringify(carSlot))

let bikeSlot = new Array(parkingZone.bike.max).fill({ "avail": true, "username":null, "userId": null, "entry": null, "exit": null, "rate": null });

localStorage.setItem("bikeSlot",JSON.stringify(bikeSlot))


let truckSlot = new Array(parkingZone.truck.max).fill({ "avail": true, "username":null, "userId": null, "entry": null, "exit": null, "rate": null });

localStorage.setItem("truckSlot",JSON.stringify(truckSlot))

 }







