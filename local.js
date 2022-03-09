
    
let parkingSchema = {
    "bike": {
        "max" : 10,
        "avail" : 10
    },
    "car": {
        "max" : 5,
        "avail" : 5
    },
    "tempo": { "max" : 4,
        "avail" : 4

    }
}


localStorage.setItem("parking",JSON.stringify(parkingSchema))

let carSlotSchema = new Array(parkingSchema.car.max).fill({ "avail": true, "userId": null, "entry": null, "exit": null, "rate": null });

localStorage.setItem("carSlot",JSON.stringify(carSlotSchema))

let bikeSlotSchema = new Array(parkingSchema.bike.max).fill({ "avail": true, "userId": null, "entry": null, "exit": null, "rate": null });

localStorage.setItem("bikeSlot",JSON.stringify(bikeSlotSchema))


let tempoSlotSchema = new Array(parkingSchema.tempo.max).fill({ "avail": true, "userId": null, "entry": null, "exit": null, "rate": null });

localStorage.setItem("tempoSlot",JSON.stringify(tempoSlotSchema))


    






