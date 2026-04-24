const b = document.getElementById("mybutton"); //Create button 'b'.
b.onclick = show; //Upon clicking the button, call the 'show()' function.

function show(){
    const showntext = document.createElement("h2"); //Create a new, empty h2 element.
    showntext.innerText = "Hi Spencer!"; //Fill the h2 element with text.

    const textcontainer = document.getElementById("container"); //Get the div container to hold the new text.
    textcontainer.appendChild(showntext); //Put the new h2 element in the div container.
}