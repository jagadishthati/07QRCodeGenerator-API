const main = document.querySelector(".main"),
qrInput=main.querySelector(" .main input"),
qrImg=main.querySelector(".main #img"),
generateBtn=main.querySelector(".main .submit");
generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText= "Generating QR Code....";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", ()=>{
        qrImg.style.display = 'inline';
        generateBtn.innerText= "Generate QR Code";
    })
   
});

qrInput.addEventListener("keyup", ()=>{
    if (!qrInput.value) {
        main.classList.remove("active");
    }
})