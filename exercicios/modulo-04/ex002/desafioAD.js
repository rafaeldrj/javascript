var caixa = 12
var carrinho = 49

var teste = () => {
  if (carrinho < caixa) {
    const firstBox = !(caixa - carrinho)
    return caixa - carrinho
  } else {
    const unidadesFaltando = caixa - (carrinho % caixa)
    return unidadesFaltando
  }
}

console.log(teste())

var a1