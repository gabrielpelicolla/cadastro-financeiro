    let usuarios={}
let transacoes= {}

function criarUsuario() {
    let nome=  prompt("Digite seu nome completo")
    let email= prompt("Digite seu e-mail")
    let conta= Math.round((Math.random()*10000)+1000)
    let senha= prompt(`Sua conta é #${conta}. Insira uma senha`)
    let usuario= {
        nome,email,conta,senha
    }
    usuarios[conta]=usuario
    transacoes[conta]=[]

}
function depositar (){
    let numConta=  prompt("Informe sua conta")
    let conta= transacoes[numConta]
    let senhaConta= usuarios[numConta].senha
    if (!conta) {
        alert("Conta não encontrada.")
    } else {
        let senha= prompt("Insira a senha da conta")

        if (senha !== senhaConta) {
            alert('Senha invalida')
        } else {
            let valor= Number(prompt("Insira o valor a ser depositado"))
            conta.push(valor)
            console.log(transacoes[numConta])
            calcularSaldo(numConta)
        }
    }
}
function sacar (){
    let numConta = prompt("Informe sua conta")
    let conta= transacoes[numConta]
    let senhaConta= usuarios[numConta].senha
    if (!conta) {
        alert("Conta não encontrada.")
    } else {
        let senha= prompt("Insira a senha da conta")

        if (senha !== senhaConta) {
            alert('Senha invalida')
        } else {
            let valor= Number(prompt("Insira o valor a ser sacado"))*-1
            conta.push(valor)
            console.log(transacoes[numConta])
            calcularSaldo(numConta)
        }
    }
}
    
function calcularSaldo (numConta){
    let conta= transacoes[numConta]
    let saldo= 0
    for(i=0;i<conta.length;i++){
        saldo= saldo+conta[i]
    }
    alert(`Seu saldo é ${saldo}`)
}