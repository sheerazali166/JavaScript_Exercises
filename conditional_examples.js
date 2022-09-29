
var light = "green";

if (light == "green"){
    
    console.log("Drive");

} else if (light == "orange"){

    console.log("Get ready");

} else if (light == "red"){

    console.log("Dont' drive");
} else{

    console.log("The car is not green, orange, or red");
}

switch(light){
    case "green":
        console.log("Drive");
        break;
    case "orange":
        console.log("Get ready");
        break;
     case "red":
        console.log("Don't drive");
        break;
    default:
        console.log("The light is not green, orange, or red");
        break;

}
