//TO LOAD TEXT FROM THE FILE
//let fileReader = new FileReader();

//var srtingData = '';

var text = "If you look at what you have in life you will always have more. If you look at what you donot have in life you will never have enough. Your time is limited so donot waste it living someone else life. Donot be trapped by dogma which is living with the results of other people thinking. If you set your goals ridiculously high and it is a failure you will fail above everyone else success. Life is what happens when you are busy making other plans. If life were predictable it would cease to be life and be without flavor.";

var order = 4;
var ngrams = {};
var output = [];

//TO LOAD TEXT FROM THE FILE
//CAN USE EITHER METHOD

//const fileUrl = 'description.txt' // provide file location

// fetch("./description.json")
//     .then(function(resp) {
//         return resp.json();
//     })
//     .then(function(data) {
//         //srtingData += data.text;
//         console.log(data.text);
//     });
//console.log(srtingData);



// fileReader.onload = function(e) {
//     var fileContents;
//     fileContents.innerText = fileReader.result;
// }
// fileReader.readAsText("description.txt");


// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Generate";

// 2. Append somewhere
var body = document.getElementById("generate-button");
body.appendChild(button);

// 3. Add event handler
button.addEventListener("click", function markovIt() {
    //Creating Markov generated text
    var container = document.getElementById("container");
    var content = document.createElement("span");
    //content.style.color = "red";
    content.innerHTML = output + "<p><p></p></p>"

    var currentGram = text.substring(0, order);
    output = currentGram;

    for (var i = 0; i < 100; i++) {
        var possibilities = ngrams[currentGram];
        possible_length = possibilities.length;

        var pos = Math.floor(Math.random() * possible_length);
        var next = possibilities[pos];

        //console.log(next);
        output += next;
        var len = output.length;
        currentGram = output.substring(len - order, len);
    }

    container.appendChild(content);
});

setup();

//Splitting the contents of the text and vearting ngrams

function setup() {

    for (var i = 0; i <= text.length - order; i++) {
        var gram = text.substring(i, i + order);

        if (!ngrams[gram]) {
            ngrams[gram] = [];
        }
        ngrams[gram].push(text.charAt(i + order))

    }
    console.log(ngrams);
}

// function markovIt() {
//     var container = document.getElementById("container");
//     var content = document.createElement("span");
//     content.style.color = "red";
//     content.innerHTML = "Hello World!";
//     container.appendChild(content);
// }