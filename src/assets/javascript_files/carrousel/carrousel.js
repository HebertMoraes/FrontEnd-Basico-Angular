
var count = 1;

function TesteCarrousel() {
    count++;

    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}

function SkipSlideLeft(){
    document.getElementById("radio" + count - 1).checked = true;
}
function SkipSlideRight(){
    document.getElementById("radio" + count + 1).checked = true;
}
