function setup()
{
    document.getElementById("miles").onclick=function(){setUnits(" kilometers");};
    document.getElementById("kilometers").onclick=function(){setUnits(" miles");};
}

function setUnits(unit)
{
    var label=document.getElementById("label");
    label.innerHTML=unit;
}

function convert()
{
    var kilometersButton=document.getElementById("kilometers");
    var distance=document.getElementById("distance");

    if(kilometersButton.checked)
    {
        convertToKilometers(distance.value);
    }
    else
    {
        convertToMiles(distance.value);
    }
}

function convertToKilometers(distanceInMiles)
{
    var kilometerDistance = distanceInMiles * 1.609;
    document.getElementById("answer").innerHTML=distanceInMiles + " miles converts to " + kilometerDistance.toFixed(1) + " kilometers."
}

function convertToMiles(distanceInKilometers)
{
    var mileDistance = distanceInKilometers * 0.621;
    document.getElementById("answer").innerHTML=distanceInKilometers + " kilometers converts to " + mileDistance.toFixed(1) + " miles."
}