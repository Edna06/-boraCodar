
IMask(document.querySelector('#cc-cvv'), {
  mask: '0000'
})

IMask(document.querySelector('#cc-number'), {
  mask: '0000 0000 0000 0000'
})

IMask(document.querySelector('#cc-validity'), {
  mask: 'MM{/}YY',
  // agora, eu tenho que dizer qual o valor que cada um irá receber
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 01,
      to: 12 //definindo o limite do mês a ser inserido
    },
    YY: {
      mask:IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2), //faz o recorte dos dois últimos números do ano atual 
      to: String(new Date().getFullYear() + 10).slice(2)//definindo ate 10 anos a frente 

    }
  }
})
