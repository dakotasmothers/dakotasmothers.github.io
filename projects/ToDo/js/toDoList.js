var submitButton = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function createListElement(){
    //Create a new li element
    var li = document.createElement("li");
    //Add content to it
    li.innerHTML = input.value;
    //Add it to our ul
    ul.appendChild(li);
    //Clear out text input after creating new list item
    input.value = "";
    //Function to handle showing a list item as complete

    function markDone(){
        li.classList.toggle("done");
    }
    //This will be used to create a list element when the submit button is tapped
    li.addEventListener("click", markDone);

    //Create the delete button that will be added to our list item
    var deleteButton = document.createElement("button");
    //Give the button the text of X
    deleteButton.innerText = "X";
    //Add the button as a child of the li
    li.appendChild(deleteButton);

    function deleteListItem() {
        li.classList.add("delete")
    }

    deleteButton.addEventListener("click", deleteListItem);
}

function createListItemSubmitButton(){
    //Check to make sure our input has text
    if (input.value.length > 0){
        createListElement();
    }
    

}

function createListItemEnterKey(event){
    if (input.value.length > 0 && event.keyCode == 13){
        createListElement();
    }
}
    //Make it so that when the submit button is clicked, the createListElement function is called.
    submitButton.addEventListener("click", createListItemSubmitButton);
    
    //This event listener will detect when keys are pressed while the input is active
    input.addEventListener("keypress", createListItemEnterKey);