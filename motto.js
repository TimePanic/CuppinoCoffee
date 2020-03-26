var motto = [
    "Life begins with Good Coffee",
    "No one can understand the truth until he drinks of coffee’s frothy goodness",
    "Coffee is a way of stealing time which should by rights belong to your older self",
    "Coffee makes us severe, and grave, and philosophical",
    "I orchestrate my mornings to the tune of coffee",
    "Coffee is the best thing to douse the sunrise with"
];

function selectMotto(){
    var number = (Math.random() * (motto.length - 1)).toFixed(0);
    document.getElementById("motto").innerHTML = motto[number];
}