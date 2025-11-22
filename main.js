function pictureChange() {
    let pic = document.getElementById("pic")
    let pic1 = document.getElementById('pic1')
    pic.style.display="none"
    pic1.style.display="flex"
}

function secondPictureChange() {
    let pic1 = document.getElementById('pic1')
    let pic2 = document.getElementById("pic2")
    pic1.style.display="none"
    pic2.style.display="flex"
}

function thirdPictureChange() {
    let pic2 = document.getElementById("pic2")
    let pic = document.getElementById("pic")
    pic2.style.display="none"
    pic.style.display="flex"
}