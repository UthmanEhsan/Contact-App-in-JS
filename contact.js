document.querySelector("#btn-add-contact").addEventListener("click", function(){
    const nameInput = document.querySelector("#nameinput");
    addContact(nameInput.value)
    nameInput.value = ""
})
function addContact(fullName){
     if(!fullName || !fullName.trim()) return
     let contactDiv = document.createElement("div");
     contactDiv.className = 'contact-entry';

     contactDiv.addEventListener("dblclick",function(){
        contactDiv.remove()
     })

     const nameInitialDiv = document.createElement("div")
     nameInitialDiv.className = "name-initial"
     nameInitialDiv.textContent = fullName.charAt(0).toUpperCase();
     nameInitialDiv.style.backgroundColor = randomColor()
     const fullNameDiv = document.createElement("div");
     fullNameDiv.className = "full-name";
     fullNameDiv.textContent = fullName

     // append on order
     contactDiv.append(nameInitialDiv);
     contactDiv.append(fullNameDiv);
     document.querySelector("#contacts-list").append(contactDiv);

}

function randomColor(){
    const colors = [
        "red",
        "blue",
        "green",
        "purple",
        "yellow",
        "black",
    ]
    return colors[Math.floor(Math.random()*colors.length)];
}

