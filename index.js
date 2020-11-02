var photos = ["images/liton.jpg","images/nature.jpg","images/tree.jpg"];
var imgTag = document.querySelector("img");

var count = 0;
function next() {
    count++;
    if(count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}

function prev() {
    count--;
    if(count < 0 ) {
        count = photos.length-1;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}
var text= prompt("Enter Any Word will you see The Character Length:");
var text =text length;
document.write(" Number of Character = "+ text);
