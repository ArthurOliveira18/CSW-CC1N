




const myButton = document.getElementById("myButton")

myButton.addEventListener("click" , () =>{
    alert("Clicou")

    const name = prompt("Qual o seu nome??")
    const h2 = document.createElement("h2")
    h2.textContent = `O Nome digitado foi: ${name}`

    const container = document.getElementById("container")

    container.append(h2)

    
})



const btnNome = document.getElementById("btnNome")

btnNome.addEventListener("click", () => {
    const nameInp = document.getElementById("nameInp")

    
    console.log(nameInp.value)

    alert(`Olá Senhor:${nameInp.value}`)
    

})