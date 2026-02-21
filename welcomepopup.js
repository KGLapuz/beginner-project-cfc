window.addEventListener("load", function(){
    setTimeout(
        function open(event) {
            document.querySelector(".welcome-popup").style.display = "flex";
        },
        1000
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".welcome-popup").style.display = "none";
});