// Galerie de Imagini:

// ● Sarcina 1: Creați o galerie de imagini HTML cu mai multe elemente <img>.
// ● Sarcina 2: Adăugați JavaScript pentru a schimba sursa unei imagini la apăsarea unui
// buton.
// ● Sarcina 3: Implementați butoane pentru a naviga la următoarele și anterioarele
// imagini din galerie.

let array = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
let imgNumber = 0;

function previousPicture() {
    if (imgNumber != 0) {
        imgNumber--;
        document.getElementById("image").src = array[imgNumber];
    }
}
console.log(imgNumber);

function nextPicture() {
    if (imgNumber < array.length-1) {
        imgNumber++;
        document.getElementById("image").src = array[imgNumber];
    }
}


