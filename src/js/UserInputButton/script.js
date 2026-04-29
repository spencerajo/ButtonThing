const b = document.getElementById("mybutton"); //Create button 'b'.
b.onclick = handleClick; //Upon clicking the button, call the function.

function handleClick(){
    const textcontainer = document.getElementById("container"); //Get the div container to hold the new text. 
    textcontainer.innerText = ""; //Clear text that is present from previous runs.

    const username = document.getElementById("userInput").value; //Get the value of the text that is input into the textbox.
    const showntext = document.createElement("h2"); //Create a new, empty h2 element.

    showntext.innerText = "Hello, " + username + "!"; //Replace everything in the h2 element with this text.

    textcontainer.appendChild(showntext); //Put the new h2 element in the div container.
}
