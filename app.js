const memeImages = document.getElementById("image");
const memeBtnElement = document.getElementById("meme-btn");
const whatsappStatusBtnElement = document.getElementById("link-btn")


function randomImg() {
    var myImages = [
        "images/meme1.jpg", 
        "images/meme2.jpg", 
        "images/meme3.jpg", 
        "images/meme4.jpg",
        "images/meme5.jpg"
    ];

    var rnd = Math.floor(Math.random() * myImages.length);
    memeImages.src = myImages[rnd];
};

function openWhatsApp() {  
    window.open('https://web.whatsapp.com://send?text=' + memeImages.src);  
    window.open('whatsapp://send?text=' + memeImages.src);    
} 



memeBtnElement.addEventListener("click", randomImg);

whatsappStatusBtnElement.addEventListener("click", openWhatsApp)
