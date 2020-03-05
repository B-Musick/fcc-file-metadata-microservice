// GET FILE INPUT
let inputElement = document.getElementById("inputfield"); // File input
let fileButton = document.getElementById('button');
let form = document.getElementById('file-form');

// Method which is called on the class instance to listen for users input 
// inputElement.addEventListener("change", (e) => {
//     // If user wants to input from file instead of to genomeText input 
//     var file = document.getElementById('inputfield').files[0]; // Get the file input
//     let fileObject = {
//         name:file.name,
//         type: file.type,
//         size: file.size
//     }
//     inputElement.value = fileObject;
// });