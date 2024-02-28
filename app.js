document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "https://rhythmartgallery.com/wp-content/uploads/2023/08/Dnyaneshwar-Mane-Rhythm-Art-Gallery-Mumbai-Artist.jpg",
        "https://rhythmartgallery.com/wp-content/uploads/2023/08/Govind-Dumbre-30-x-60-inches-Acrylic-on-canvas-.jpeg",
        "https://rhythmartgallery.com/wp-content/uploads/2023/05/Manish-Chavda-Landscape-Nature-Rhythm-Art-Gallery-Mumbai-Artist.jpg"
    ];

    var popBox = document.querySelector(".pop-box");

    // Retrieve the last index from local storage or set a default value
    var currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

    // Set the initial image
    popBox.style.backgroundImage = 'url("' + images[currentIndex] + '")';

    // Change image on reload
    window.addEventListener('beforeunload', function () {
        currentIndex = (currentIndex + 1) % images.length;
        localStorage.setItem('currentIndex', currentIndex);
    });
    document.querySelector('body').style.overflow="hidden";
    window.scrollTo(0, 0);
});

function abc(){
    document.querySelector('.bg-popContainer').style.display="flex";
}
function show()
{
let e=document.getElementsByClassName("bg-popContainer")
}
const bg_container=document.querySelector(".bg-popContainer")
const cancelPop = document.getElementById("close");
cancelPop.addEventListener("click", CancelPopOut);
function CancelPopOut(e) {
    e.preventDefault();
    document.querySelector(".bg-popContainer").style.display = "none";
    document.querySelector('body').style.overflow="scroll";
}
function change(){
    document.querySelector('.copy').style.color='green';
    document.querySelector('.copy').textContent="Copied Successfully";
}
function openlogin(){
    document.querySelector('.parent').style.display="grid";
    document.querySelector('.forbackground').style.visibility="visible";
    document.querySelector('body').style.overflow="hidden";

}
function closelogin(){
    document.querySelector('.parent').style.display="none";
    document.querySelector('.forbackground').style.visibility="hidden";
    document.querySelector('body').style.overflow="scroll";

}
// let follow_btn=document.getElementsByClassName('.follow');
// follow_btn.querySelector('button').addEventListener('click',function(){
//     follow_btn.querySelector('button').innerText="Followed";
// });