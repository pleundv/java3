const age = 18;
const isFemale = true;
const driverStatus = "bob";
const yourName = "sarah";
const youName = "Bram";
const totalAmount = 121;


if (age >= 18) {
    console.log("Je mag naar binnen");
} else {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
    );
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Je betaald de volle mep")
}

if (yourName === "sarah" || youName === "bram") {
    console.log("je ontvangt een gratis biertje")
} else {
    console.log("geen gratis biertje voor jou")
}

if (totalAmount > 100) {
    console.log("je ontvangt een gratis fles champagne")
} else if (totalAmount > 50) {
    console.log("Je ontvangt gratis portie nachos")
} else if (totalAmount > 20) {
    console.log("Je ontvangt gratis vega bitterbalen")
}