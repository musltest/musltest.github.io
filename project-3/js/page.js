var bottom =document.getElementsByClassName("light")[0]
links=document.getElementsByClassName("link")

bottom.hover="background:white"
bottom.addEventListener('click',function name(params) {
    document.body.style.background="black"
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('onmouseover',function name(params) {
            links[i].style.background="black"
        })
        links[i].addEventListener('onmousemove',function name(params) {
            links[i].style.background="#f0f8ff5c"
        })
        
    }
   
    }
)