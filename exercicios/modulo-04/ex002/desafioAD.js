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
var b1
var c1
var d1
var e1
var a2
var b2
