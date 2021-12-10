let pessoa = {
    nome: 'stivem',
    idade: 19,
    nomeDaMae: 'maria',
    nomeDoPai: 'jose',
    cpf: 10214578445
}
exibirPropriedades(pessoa);
function exibirPropriedades(obj) {
    for (let chave in obj) {
        if (typeof obj[chave] === 'string') {
            console.log(chave,obj[chave]);
        }
    }
}