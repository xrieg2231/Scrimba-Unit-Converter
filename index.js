function converter(valNum) {
    document.getElementById("outputLengthFeets").innerHTML = String(valNum) + " Meters = " + Math.round(((valNum * 3.2808399) + Number.EPSILON) * 100)/100 + " Feets | ";
    document.getElementById("outputLengthMeters").innerHTML = String(valNum) + " Feets = "+ Math.round(((valNum * 0.3048) + Number.EPSILON) * 100)/100 + " Meters";
    document.getElementById("outputVolumeGallons").innerHTML = String(valNum) + " Liters = " + Math.round(((valNum * 0.264172052) + Number.EPSILON) * 100)/100 + " Gallons";
    document.getElementById("outputVolumeLiters").innerHTML = String(valNum) + " Gallons = " + Math.round(((valNum * 3.78541178) + Number.EPSILON) * 100)/100 + " Liters | ";
    document.getElementById("outputMassPounds").innerHTML = String(valNum) + " Kilograms = " + Math.round(((valNum * 2.20462262) + Number.EPSILON) * 100)/100 + " Pounds";
    document.getElementById("outputMassKilograms").innerHTML = String(valNum) + " Pounds = " + Math.round(((valNum * 0.45359237) + Number.EPSILON) * 100)/100 + " Kilograms | ";
}
