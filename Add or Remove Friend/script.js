let istatus= document.querySelector('h5');
let btn=document.querySelector("#add")
// let remove=document.querySelector("#remove");
let flag=0;

btn.addEventListener('click', function() {
    if(flag==0){
    istatus.innerHTML ="Friends"
    istatus.style.color="green";
    btn.style.color="Blue"
    btn.innerHTML= "UnFriend"
    flag=1;
    }else{
        istatus.innerHTML ="Stranger"
        istatus.style.color="red"
        btn.style.color="Purple"
        btn.innerHTML="Add Friend"
        flag=0;
    }
    
});

// remove.addEventListener("click", function(){
//     istatus.innerHTML ="Stranger"
//     istatus.style.color="red"
//     remove.style.color="Purple"
// })


