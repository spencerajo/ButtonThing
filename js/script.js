const b = document.getElementById("mybutton");
b.onclick = show;

function show(){
    const showntext = document.createElement("h2");
    showntext.innerText = "Hi Spencer!";

    const textcontainer = document.getElementById("container");
    textcontainer.appendChild(showntext);
}