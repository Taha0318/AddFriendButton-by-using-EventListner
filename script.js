var a = document.querySelector("h5");

var btn = document.querySelector("#Add");

var check = 0

btn.addEventListener("click", function(){
if(check ==0){
a.innerHTML = "Friend";
a.style.color = "green";
a.innerHTML="RemoveFriend";
check = 1;
}  else{
    a.innerHTML = "Friend";
    a.style.color = "green";
    a.innerHTML="Add Friend";
    check = 0; 
}
});
