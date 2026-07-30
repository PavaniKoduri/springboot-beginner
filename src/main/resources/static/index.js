// console.log("Hello from javascript");
// alert("Hello from javascript");

var users=[
    {
        "image":"/images/john.png",
        "name": "John Doe",
        "gender": "male"
    },
    {
        "image":"/images/jane.png",
        "name": "Jane Doe",
        "gender": "female"
    }
]
var id=0;

function toggleUser(){
    id=(id+1)%users.length;
    var userImage =document.getElementById("user-image");
    var userName= document.getElementById("user-name");
    var userGender= document.getElementById("user-gender");
    userImage.src=users[id].image;
    userName.innerHTML =users[id].name;
    userGender.innerHTML=users[id].gender;
}

function randomUser(){
    console.log("function called");
    fetch("https://randomuser.me/api")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            var userImage = document.getElementById("user-image");
            var userName = document.getElementById("user-name");
            var userGender = document.getElementById("user-gender");

            userImage.src = data.results[0].picture.large;
            userName.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
            userGender.innerHTML = data.results[0].gender;

        })
        .catch(function(err){
            console.log(err);
        })
}