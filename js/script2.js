$(".cu").click(function () {
    $(".navmenu").addClass("open-menu");
});
$(".navmenu .i1").animate({
    opacity: "1",
    paddingTop: "25px"
}, 2100);
$(".navmenu .i2").animate({
    opacity: "1",
    paddingTop: "25px"
}, 2200);
$(".navmenu .i3").animate({
    opacity: "1",
    paddingTop: "25px"
}, 2300);
$(".navmenu .i4").animate({
    opacity: "1",
    paddingTop: "25px"
}, 2400);
$(".navmenu .i5").animate({
    opacity: "1",
    paddingTop: "25px"
}, 2500);
$(".navmenu .i6").animate({
    opacity: "1",
    paddingTop: "25px"
}, 2600);


var 
   allMovies=[],
    result = document.getElementById("rows"),
    category = "";

getMovies();



function getMovies(e) {
    e = new XMLHttpRequest;
    e.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
     e.send();
      e.onreadystatechange = function () {
        if (e.readyState == 4 && e.status == 200) {
            allMovies = (allMovies = JSON.parse(e.response)).results;
            displayMovies();
        }
    }
}
var ph = "https://image.tmdb.org/t/p/w500";
var temp = ""

function displayMovies() {
    for (var i = 0; i < allMovies.length; i++)
        temp +=
        `<div class="col-md-6 col-lg-4 my-3">
          <div class="movie shadow rounded position-relative">
            <div class="post">   
            <img src=` + ph + allMovies[i].poster_path + ` class="img-fluid rounded"/>
             <div class="layer d-flex align-items-center ">
              <div class="info p-0"> 
                                                                     
              <h2>`+allMovies[i].original_title+`</h2>
              <p>` + allMovies[i].overview + `</p> 
               <p >rate: ` + allMovies[i].vote_average + `</p>
                <p>` + allMovies[i].release_date + `</p> 
                </div>
                    </div>   
                    </div>  
                            </div>             
                              </div>`
    result.innerHTML = temp
};


let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let userPassword = document.getElementById("password");
let rePassword = document.getElementById("rePassword");
let notifyE = document.getElementById("checkE");
let notifyPh = document.getElementById("checkPh");
let notifyPass = document.getElementById("checkPass");
let notifyPass2 = document.getElementById("checkPass2");
let userAge = document.getElementById("age");
let userAgeAlert = document.getElementById("agealert");
//first validation 
function EmailValid() {
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(userEmail.value)) {
        notifyE.style.display = "none";
    } else {
        notifyE.style.display = "block";
    }

}
userEmail.addEventListener("keyup", EmailValid);

//second validation 
function PhoneValid() {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)) {
        notifyPh.style.display = "none";
    } else {
        notifyPh.style.display = "block";
    }

}
userPhone.addEventListener("keyup", PhoneValid);

//third validation
function PasswordValid() {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)) {
        notifyPass.style.display = "none";
    } else {
        notifyPass.style.display = "block";
    }

}
userPassword.addEventListener("keyup", PasswordValid);

function rePasswordValid() {
    if (userPassword.value == rePassword.value ) {
        notifyPass2.style.display = "none";
    } else {
        notifyPass2.style.display = "block";
    }

}
rePassword.addEventListener("keyup", rePasswordValid);

function agecheck() {
    if (/^[1-9][0-9]?$|^100$/.test(userAge.value) ) {
        userAgeAlert.style.display = "none";
    } else {
        userAgeAlert.style.display = "block";
    }

}
userAge.addEventListener("keyup", agecheck);


