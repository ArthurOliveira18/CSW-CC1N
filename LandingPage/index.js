const iconBG = document.getElementById('iconBG')
const header = document.querySelector('header')
const main = document.querySelector('main')
const a = document.querySelector('a')

iconBG.addEventListener('click' , function(){
    
    if(document.body.style.backgroundColor === "black"){

        document.body.style.backgroundColor = "white"
        document.body.style.color = "#000"

        header.style.backgroundColor = "#cad3db"
        a.style.color = "#000"

        iconBG.innerHTML = '<img src="icons/luaPreta.png" alt="icon da lua" >  '

    } else{
        
        document.body.style.backgroundColor = "black"
        document.body.style.color = "#fff"
        
        header.style.backgroundColor = "#333"

        a.style.color = "#fff"
        a.style.textDecoration = "none"


        iconBG.innerHTML = '<img src="icons/solPreto.png" alt="icon do sol">'
        
        
    }
})