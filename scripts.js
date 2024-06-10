const list = document.querySelector('ul')
const buttonEach = document.querySelector('.button-each')
const buttonMap = document.querySelector('.button-map')
const buttonReduce = document.querySelector('.button-reduce')
const buttonFilter = document.querySelector('.button-filter')


const mostrarTudo = (listaProduto) => {
    let concatenaLi = ''
    listaProduto.forEach(item => {
        concatenaLi += `<li>
            <img src=${item.src}>
            <p>${item.name}</p>
            <p class="valor">R$${item.price.toFixed(2)}</p>
        </li>`
    });
    list.innerHTML = concatenaLi
}

const calculaDesconto = () => {
    const produtoDesconto = menuOptions.map(item => {
        const newProduto = {
            ...item,
            price: item.price - (item.price * 0.10),
        }
        return newProduto
    })
    console.log(produtoDesconto)
    mostrarTudo(produtoDesconto)
}

const somaProdutos = () => {
    const resultadoSoma = menuOptions.reduce((acc, curr) => acc + curr.price,0) 

    list.innerHTML = 
    `<li>           
            <p> Valor total é: R$${resultadoSoma.toFixed(2)}</p>
        </li>`
}

const filtraProdutos = () => {
    
    const listVegano = menuOptions.filter(item => item.vegan)
    mostrarTudo(listVegano)
}

buttonEach.addEventListener("click", () => mostrarTudo(menuOptions));
buttonMap.addEventListener("click", calculaDesconto)
buttonReduce.addEventListener("click", somaProdutos)
buttonFilter.addEventListener("click", filtraProdutos)

