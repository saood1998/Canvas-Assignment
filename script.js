let imgInput = document.getElementById("imageInput");
let myCanvas = document.getElementById("myCanvas");
let myContext = myCanvas.getContext("2d");

myContext.beginPath();
myContext.fillStyle = "rgb(192,192,192)";
myContext.fillRect(0, 0, 400, 30);
myContext.fillRect(0, 270, 400, 30);
myContext.lineWidth = "2";
myContext.strokeStyle = "black";
myContext.stroke();

imgInput.addEventListener("change", (event)=>{
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = (event)=>{
      let myImage = new Image();
      myImage.src = event.target.result;
      myImage.onload = ()=>{
        myContext.drawImage(myImage, 0, 30, 400, 240);
      };
    };
});


function addHeader() {
  let headerInputText = document.getElementById("header-input").value;
  myContext.font = "15px Arial";
  myContext.fillStyle = "black";
  myContext.fillText(headerInputText, 160, 18);
}

function addFooter() {
  let footerInputText = document.getElementById("footer-input").value;
  myContext.font = "15px Arial";
  myContext.fillStyle = "black";
  myContext.fillText(footerInputText, 160, 290);
}

document.getElementById("text-btn").onclick = ()=>{
  let imageInputText = document.getElementById("canvas-text").value;
  myContext.font = "30px Arial";
  myContext.fillStyle = "black";
  myContext.fillText(imageInputText, 160, 150);
};

function downloadImage() {
  let download = document.getElementById("download");
  let image = document.getElementById("myCanvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
}
