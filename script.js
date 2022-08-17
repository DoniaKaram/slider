var imgList=Array.from(document.querySelectorAll(".item img"));
var lightContainer=document.querySelector(".lightContainer");
var lightItem=document.querySelector(".lightItem")
var nextbtn=document.getElementById('next');  
var prebtn=document.getElementById("prev");
var closebtn=document.getElementById("close");
var currentSlider=0;
for(var i=0;i<imgList.length;i++)
{
    imgList[i].addEventListener("click",function(e){
        var imgSrc=e.target.getAttribute("src");
        console.log(imgSrc);
        lightContainer.classList.replace("d-none","d-flex");
        lightItem.style.backgroundImage=`url(${imgSrc})`;

    })
}
function nextSlider()
{
    currentSlider++;
    if(currentSlider==imgList.length)
    {
        currentSlider=0;
    }
    var imageSrc=imgList[ currentSlider].getAttribute("src");
    lightItem.style.backgroundImage=`url(${imageSrc})`;
}
nextbtn.addEventListener("click",nextSlider);
function prevSlider()
{
    currentSlider--;
    if(currentSlider<0)
    {
        currentSlider=imgList.length-1;
    }
    var imageSrc=imgList[ currentSlider].getAttribute("src");
    lightItem.style.backgroundImage=`url(${imageSrc})`;
}
prebtn.addEventListener("click",prevSlider);
function close()
{
    lightContainer.classList.replace("d-flex","d-none");

}
closebtn.addEventListener("click",close);
