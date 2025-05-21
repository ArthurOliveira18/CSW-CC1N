const idade = document.getElementById("numberIdade")
const button = document.getElementById("myButton")


const crianca = (idade) =>{ 
    if(idade >= 1 && idade <= 11){
        alert("Tu é criança")
    }
}

const jovem = (idade) =>{ 
    if(idade >= 12 && idade <= 17){
        alert("Tu é adolescente")
    }
}


const adulto = (idade) =>{ 
    if(idade >= 19 && idade <= 59){
        alert("Tu é adulto")
    }
}


const idoso = (idade) =>{ 
    if(idade > 60){
        alert("Tu é idoso")
    }
}

button.addEventListener("click" , () =>{
    suaIdade = idade.value

    crianca(suaIdade)
    jovem(suaIdade)
    adulto(suaIdade)
    idoso(suaIdade)
})