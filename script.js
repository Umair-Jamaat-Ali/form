var users = []

function onSubmit(){
    const username = document.getElementById("name").value
    const userphone = document.getElementById("phone").value
    const useremail = document.getElementById("email").value
}
 var newUser = {
    name: userName,
    phone: userphone,
    email: useremail,
 }
 users.push(newUser)

 function displayResult() {
    var result = ""
    for (let index = 0; index < users.length; index++) {
        const user = users[index];

        result = result + `<div> <h1> </div>`
        
        
    }
    
 }