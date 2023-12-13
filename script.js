/*
Selecionar Elementos Existentes:

Quando você usa o jQuery para selecionar elementos existentes no DOM, você está buscando elementos que já estão presentes na página.
Isso é feito usando seletores CSS, semelhantes aos que você usaria em CSS puro. Por exemplo, $('ul') seleciona todos os elementos <ul> na página.
A operação de seleção retorna um objeto jQuery que representa os elementos selecionados.
Exemplo:

javascript
Copy code
var lista = $('ul'); // Seleciona todos os elementos <ul> na página e armazena em uma variável.
Criar Elementos: 

Quando você usa o jQuery para criar novos elementos, você está construindo elementos HTML dinamicamente no código.
Isso é feito envolvendo o conteúdo desejado em $('<...>'). O que está dentro das aspas é interpretado como HTML e usado para criar um novo elemento jQuery.
Esses elementos recém-criados não estão no DOM até que você decida adicioná-los.
Exemplo:

javascript
Copy code
var novoItem = $('<li>Novo Item</li>'); // Cria um novo elemento <li> com o conteúdo "Novo Item".
Adicionar Elementos ao DOM:

Depois de criar um novo elemento, você pode adicioná-lo ao DOM usando métodos como appendTo, prependTo, insertAfter, etc.
Estes métodos indicam onde o novo elemento deve ser inserido.
Exemplo:

javascript
Copy code
novoItem.appendTo('ul'); // Adiciona o novoItem ao final de todos os elementos <ul> na página.
Então, para simplificar:

Selecionar: Use $(...) com um seletor CSS para buscar elementos existentes.
Criar: Use $('<...>') para criar novos elementos.
Adicionar: Use métodos como appendTo, prependTo, etc., para colocar elementos no DOM.
Espero que isso ajude a esclarecer a diferença entre buscar e adicionar elementos com jQuery!
*/


//Para selecionar no jQuery nós usamos $(), ele que faz a busca do item
//Vou descrever cada item do código abaixo

$(document).ready(function(){ //Buscar documento. Quando estiver pronto o documento, rodar função
    $('header button').click(function(){ //buscar botão em header. Ao clicar, execute a função:
        $('form').slideDown();//Buscar formulário. slideup nele
    })
})

//Perceba que é sempre a busca do item + o que fazer com ele


$('header button').click(function(){ //Busque botão em header. Ao clicar, execute a função

})

$('form').on('submit', function(e){ //Busque formulário. Ao clicar "submeter", rode a função(e)
    e.preventDefault(); //evento, não deixa a página atualizar
    const endereçoDaNovaImagem=$('#endereçoImagemNova').val() //cria a variável com "endereçoImagemNova.valor"
    const novoItem=$(`<li style="display:none"></li>`); //cria variável com <li> do início ao fim (</li>)
    //Essa parte de baixo já é mais complicado. Primeiro vou buscar o input e adicionar um novo item
    //Depois vai adicionar uma nova imagem com a variável endereçoDaNovaImagem e adicionar o cópia do "novoItem"
    //Vou adicionar então também uma div com regras, assim como link e texto
    //Preciso então escrever o que quero adicionar com $('') e ao final colocar .appenTo('ul') para adicionar no ul
    //Se fosse pra adicionar em um li seria $('').appendTo('li')
    //Para então adicionar esse novoItem no <ul>
    //Por fim, o input eu vou limpar com o "$('#endereçoImagemNova').val('')"
    $(`<img src="${endereçoDaNovaImagem}"/>`).appendTo(novoItem);
    $(`
    <div class="overlay-imagem-link">
        <a href="${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(700);
    $('#endereçoImagemNova').val('')
})

//Buque o botaoCancelar, ao clicar rode a função
$('#botaoCancelar').click(function(){
    $('form').slideUp(); //busque formulário. Dê slideUp nele
    
})

