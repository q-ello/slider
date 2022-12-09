function initSlider(){
    let arrows = document.querySelectorAll(".arrow");
    let dots = document.querySelector(".dots");
    let images = document.querySelector(".images");
    let links = document.querySelector(".compro-items");
    let length = images.querySelectorAll(".image").length;
    console.log(arrows);
    arrows.forEach(arrow => {
        arrow.addEventListener("click", function(){
            let currNumber = +images.querySelector(".active").dataset.index;
            let nextNumber;
            console.log(arrow);
            if (arrow.classList.contains("left")){
                nextNumber = currNumber === 0? length - 1 : currNumber - 1;
            }
            else nextNumber = currNumber === length - 1? 0 : currNumber + 1;
            moveSlider(nextNumber);
        });
    })

    function moveSlider(num){
        images.querySelector(".active").classList.remove("active");
        images.querySelector(".n" + num).classList.add("active");
        dots.querySelector(".active").classList.remove("active");
        dots.querySelector(".n" + num).classList.add("active");
        links.querySelector(".active").classList.remove("active");
        links.querySelector(".n" + num).classList.add("active");
    }

    dots.querySelectorAll(".circle").forEach((dot, index) => {
        dot.addEventListener("click", function(){
            moveSlider(index);
        })
    });

    links.querySelectorAll(".compro-item").forEach((link, index) => {
        link.addEventListener("click", function(){
            moveSlider(index);
        })
    })
}

document.addEventListener("DOMContentLoaded", initSlider);