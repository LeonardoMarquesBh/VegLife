const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

}

navSlide();



var dados = {
    "receitas": [
        {
            "titulo": "Cookie de chocolate",
            "imagem": "imgs/doce1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": "<h5>INGREDIENTES</h5><ul><li>4 colheres (sopa) de açúcar mascavo</li><li>2 colheres (sopa) de leite de coco</li><li>2 colheres (sopa) de óleo de coco</li><li>1/4 de colher (chá) de essência de baunilha</li><li>1 pitada de sal</li><li>8 colheres (sopa) de farinha de trigo</li><li>1/2 colher (chá) de fermento em pó</li><li>chocolate amargo vegano picado a gosto</li></ul><h5>MODO DE PREPARO</h5><ol><li>Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</li><li>Acrescente a farinha de trigo e o fermento, misture bem.</li><li>Por último, adicione o chocolate amargo e misture.</li><li>Molde os cookies e coloque-os em uma forma.</li><li>Deixe na geladeira por 20 minutos.</li><li>Em seguida, leve ao forno preaquecido (200° C) por cerca de 20 minutos.</li></ol>"
        },
        {
            "titulo": "Sorvete de Chocolate",
            "imagem": "imgs/doce2.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>Leite de coco concentrado – 2 xícaras (500 ml)</li>
                <li>Chocolate 70% cacau, sem leite e picado – 3/4 xícara (120 g)</li>
                <li>Açúcar demerara – 2/3 xícara (150 g)</li>
                <li>Óleo de coco derretido – 3 colheres de sopa (45 ml)</li>
                <li>Extrato de baunilha – 1 colher de chá (5 ml)</li>
                <li>Sal – uma pitada (opcional)</li>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma panela média coloque o leite de coco, o açúcar, o óleo de coco, 
                    o extrato de baunilha e o sal. Mexa bem e leve ao fogo médio até levantar 
                    fervura.</li>
                <li>Desligue o fogo e adicione o chocolate picado. Mexa bem até todos os 
                    pedaços derreterem e incorporar ao líquido.</li>
                <li>Coloque a mistura no liquidificador e bata bem até ficar homogêneo, 
                    sem nenhum pedacinho de chocolate.</li>
                <li>Transfira para um recipiente e espere esfriar completamente em 
                    temperatura ambiente.</li>
                <li>Se você não tiver máquina de sorvete, leve a mistura ao freezer 
                por cerca de 8 horas ou até endurecer. Retire de 1 em 1 hora e misture
                    bem com uma colher. Leve de volta ao freezer e repita o processo até 
                    a mistura começar a ficar consistente. Apesar de ser uma etapa chata e 
                    trabalhosa, ela é importante para evitar a formação de cristais de gelo 
                    e deixar o sorvete cremoso.</li>
                <li>Se você tiver máquina de sorvete, coloque a mistura na máquina e siga 
                as instruções do fabricante até obter uma massa consistente e aerada. 
                Transfira para um recipiente e leve ao freezer até endurecer.</li>
                <li>Para servir, retire o sorvete do congelador 5 minutos antes para 
                amolecer. Dura em torno de 10 dias congelado.</li>
            </ol>`
        },
        {
            "titulo": "Quibe de Forno",
            "imagem": "imgs/salgado1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "☑️Vegetariano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>1 xícara de trigo para quibe</li>
                <li>1 xícara de cenoura ralada</li>
                <li>1 xícara de abobrinha ralada</li>
                <li>1 cebola grande picada em cubos pequenos</li>
                <li>1 xícara de cheiro verde</li>
                <li>200g de mussarela</li>
                <li>Sal a gosto</li>
                <li>Pimenta do reino a gosto</li><li>Curry a gosto</li>
                <li>6 tomates maduros cortados em pequenos cubos</li>
                <li>Azeite de oliva</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Deixe a farinha de quibe em molho com água durante três horas, colocando 
                    a água até um centímetro acima do nível do quibe.</li> 
                <li>Depois, aperte bem a farinha retirando o excesso de água e coloque em 
                    uma vasilha à parte</li>
                <li>Em uma panela ou caçarola pequena, coloque o óleo de oliva e frite
                    metade das cebolas juntamente com uma pitada de sal, pimenta e curry.</li> 
                <li>Depois que as cebolas dourarem ligeiramente, coloque os tomates e deixe 
                    fritar em fogo baixo até reduzir a água.</li> 
                <li>Deixe o molho reservado.</li> 
                <li>Misture com a farinha de quibe hidratada a cenoura, a abobrinha, 
                    a cebola restante, o cheiro verde, um pouco de sal, pimenta-do-reino e uma 
                    pitada de curry.</li> 
                <li>Com as mãos misture bem os ingredientes amassando-os até dar liga, 
                    caso não dê liga pode-se acrescentar um pouco de farinha de trigo integral 
                    (apenas para dar liga à massa, não muito).</li> 
                <li>Em uma assadeira devidamente untada, coloque metade da massa de quibe 
                    e cubra o fundo, espalhe o molho de tomates que havia reservado e coloque a 
                    mussarela em cima e depois cubra com a massa restante.</li> 
                <li>Pessione a massa ligeiramente para que fique firme e compacta.</li> 
                <li>Leve ao forno pré-aquecido e asse em fogo médio por cerca de 20 a 30 
                    minutos.</li>
            </ol>`
        }
    ],
    "salgados": [
        {
            "titulo": "Quibe de Forno",
            "imagem": "imgs/salgado1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "☑️Vegetariano",
            "texto": "<h5>INGREDIENTES</h5><ul><li>4 colheres (sopa) de açúcar mascavo</li><li>2 colheres (sopa) de leite de coco</li><li>2 colheres (sopa) de óleo de coco</li><li>1/4 de colher (chá) de essência de baunilha</li><li>1 pitada de sal</li><li>8 colheres (sopa) de farinha de trigo</li><li>1/2 colher (chá) de fermento em pó</li><li>chocolate amargo vegano picado a gosto</li></ul><h5>MODO DE PREPARO</h5><ol><li>Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</li><li>Acrescente a farinha de trigo e o fermento, misture bem.</li><li>Por último, adicione o chocolate amargo e misture.</li><li>Molde os cookies e coloque-os em uma forma.</li><li>Deixe na geladeira por 20 minutos.</li><li>Em seguida, leve ao forno preaquecido (200° C) por cerca de 20 minutos.</li></ol>"
        }
    ],
    "doces": [
        {
            "titulo": "Cookie de chocolate",
            "imagem": "imgs/doce1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": "<h5>INGREDIENTES</h5><ul><li>4 colheres (sopa) de açúcar mascavo</li><li>2 colheres (sopa) de leite de coco</li><li>2 colheres (sopa) de óleo de coco</li><li>1/4 de colher (chá) de essência de baunilha</li><li>1 pitada de sal</li><li>8 colheres (sopa) de farinha de trigo</li><li>1/2 colher (chá) de fermento em pó</li><li>chocolate amargo vegano picado a gosto</li></ul><h5>MODO DE PREPARO</h5><ol><li>Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</li><li>Acrescente a farinha de trigo e o fermento, misture bem.</li><li>Por último, adicione o chocolate amargo e misture.</li><li>Molde os cookies e coloque-os em uma forma.</li><li>Deixe na geladeira por 20 minutos.</li><li>Em seguida, leve ao forno preaquecido (200° C) por cerca de 20 minutos.</li></ol>"
        },
        {
            "titulo": "Sorvete de Chocolate",
            "imagem": "imgs/doce2.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": "<h5>INGREDIENTES</h5><ul><li>Leite de coco concentrado – 2 xícaras (500 ml)</li><li>Chocolate 70% cacau, sem leite e picado – 3/4 xícara (120 g)</li><li>Açúcar demerara – 2/3 xícara (150 g)</li><li>Óleo de coco derretido – 3 colheres de sopa (45 ml)</li><li>Extrato de baunilha – 1 colher de chá (5 ml)</li><li>Sal – uma pitada (opcional)</li><h5>MODO DE PREPARO</h5><ol><li>Em uma panela média coloque o leite de coco, o açúcar, o óleo de coco, o extrato de baunilha e o sal. Mexa bem e leve ao fogo médio até levantar fervura.</li><li>Desligue o fogo e adicione o chocolate picado. Mexa bem até todos os pedaços derreterem e incorporar ao líquido.</li><li>Coloque a mistura no liquidificador e bata bem até ficar homogêneo, sem nenhum pedacinho de chocolate.</li><li>Transfira para um recipiente e espere esfriar completamente em temperatura ambiente.</li><li>Se você não tiver máquina de sorvete, leve a mistura ao freezer por cerca de 8 horas ou até endurecer. Retire de 1 em 1 hora e misture bem com uma colher. Leve de volta ao freezer e repita o processo até a mistura começar a ficar consistente. Apesar de ser uma etapa chata e trabalhosa, ela é importante para evitar a formação de cristais de gelo e deixar o sorvete cremoso.</li><li>Se você tiver máquina de sorvete, coloque a mistura na máquina e siga as instruções do fabricante até obter uma massa consistente e aerada. Transfira para um recipiente e leve ao freezer até endurecer.</li><li>Para servir, retire o sorvete do congelador 5 minutos antes para amolecer. Dura em torno de 10 dias congelado.</li></ol>"
        }
    ],
    "veganas":[
        {
            "titulo": "Cookie de chocolate",
            "imagem": "imgs/doce1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": "<h5>INGREDIENTES</h5><ul><li>4 colheres (sopa) de açúcar mascavo</li><li>2 colheres (sopa) de leite de coco</li><li>2 colheres (sopa) de óleo de coco</li><li>1/4 de colher (chá) de essência de baunilha</li><li>1 pitada de sal</li><li>8 colheres (sopa) de farinha de trigo</li><li>1/2 colher (chá) de fermento em pó</li><li>chocolate amargo vegano picado a gosto</li></ul><h5>MODO DE PREPARO</h5><ol><li>Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</li><li>Acrescente a farinha de trigo e o fermento, misture bem.</li><li>Por último, adicione o chocolate amargo e misture.</li><li>Molde os cookies e coloque-os em uma forma.</li><li>Deixe na geladeira por 20 minutos.</li><li>Em seguida, leve ao forno preaquecido (200° C) por cerca de 20 minutos.</li></ol>"
        },
        {
            "titulo": "Sorvete de Chocolate",
            "imagem": "imgs/doce2.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": "<h5>INGREDIENTES</h5><ul><li>Leite de coco concentrado – 2 xícaras (500 ml)</li><li>Chocolate 70% cacau, sem leite e picado – 3/4 xícara (120 g)</li><li>Açúcar demerara – 2/3 xícara (150 g)</li><li>Óleo de coco derretido – 3 colheres de sopa (45 ml)</li><li>Extrato de baunilha – 1 colher de chá (5 ml)</li><li>Sal – uma pitada (opcional)</li><h5>MODO DE PREPARO</h5><ol><li>Em uma panela média coloque o leite de coco, o açúcar, o óleo de coco, o extrato de baunilha e o sal. Mexa bem e leve ao fogo médio até levantar fervura.</li><li>Desligue o fogo e adicione o chocolate picado. Mexa bem até todos os pedaços derreterem e incorporar ao líquido.</li><li>Coloque a mistura no liquidificador e bata bem até ficar homogêneo, sem nenhum pedacinho de chocolate.</li><li>Transfira para um recipiente e espere esfriar completamente em temperatura ambiente.</li><li>Se você não tiver máquina de sorvete, leve a mistura ao freezer por cerca de 8 horas ou até endurecer. Retire de 1 em 1 hora e misture bem com uma colher. Leve de volta ao freezer e repita o processo até a mistura começar a ficar consistente. Apesar de ser uma etapa chata e trabalhosa, ela é importante para evitar a formação de cristais de gelo e deixar o sorvete cremoso.</li><li>Se você tiver máquina de sorvete, coloque a mistura na máquina e siga as instruções do fabricante até obter uma massa consistente e aerada. Transfira para um recipiente e leve ao freezer até endurecer.</li><li>Para servir, retire o sorvete do congelador 5 minutos antes para amolecer. Dura em torno de 10 dias congelado.</li></ol>"
        }
    ],
    "vegetarianas":[
        {
            "titulo": "Quibe de Forno",
            "imagem": "imgs/salgado1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "☑️Vegetariano",
            "texto": "<h5>INGREDIENTES</h5><ul><li>4 colheres (sopa) de açúcar mascavo</li><li>2 colheres (sopa) de leite de coco</li><li>2 colheres (sopa) de óleo de coco</li><li>1/4 de colher (chá) de essência de baunilha</li><li>1 pitada de sal</li><li>8 colheres (sopa) de farinha de trigo</li><li>1/2 colher (chá) de fermento em pó</li><li>chocolate amargo vegano picado a gosto</li></ul><h5>MODO DE PREPARO</h5><ol><li>Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</li><li>Acrescente a farinha de trigo e o fermento, misture bem.</li><li>Por último, adicione o chocolate amargo e misture.</li><li>Molde os cookies e coloque-os em uma forma.</li><li>Deixe na geladeira por 20 minutos.</li><li>Em seguida, leve ao forno preaquecido (200° C) por cerca de 20 minutos.</li></ol>"
        }
    ]
}

function exibeReceitas() {
    var elemMain = document.getElementById('tela');
    var textoHTML = '';

    for (i = 0; i < dados.receitas.length; i++) {

        var receita = dados.receitas[i];

        textoHTML = textoHTML + `
            <div class="box-receita">
                <div><h4 class="titulo">${receita.titulo}</h4></div>
                <img class="thumbnail" src="${receita.imagem}" alt="">
                <div class="creditos"><span>Fonte: ${receita.fonte}</span></div>
                <div><p class="tipo">${receita.tipo}</p></div>
                <button id="btnModal" type="button" class="btnModal" data-toggle="modal"
                data-target="#Modal">
                <a href="#" class="card-text">Ver receita</a>
                </button>   
            
                <div class="modal fade" id="Modal" tabindex="-1" role="dialog"
                    aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="ModalLabel">${receita.titulo}</h3>
                                <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img style="max-width: 200px;" src="${receita.imagem}" alt="">
                                ${receita.texto}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    elemMain.innerHTML = textoHTML;
}

window.onload = exibeReceitas();
document.getElementById('btnTudo').addEventListener('click', exibeReceitas);


function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest(),
        receitas = {};
    xhr.onload = exibeReceitas;
    xhr.open('GET', dados.receitas.titulo=query);
    xhr.send();
}

document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);


function exibeSalgados() {
    var elemMain = document.getElementById('tela');
    var textoHTML = '';

    for (i = 0; i < dados.salgados.length; i++) {

        var salgado = dados.salgados[i];

        textoHTML = textoHTML + `
            <div class="box-receita">
                <div><h4 class="titulo">${salgado.titulo}</h4></div>
                <img class="thumbnail" src="${salgado.imagem}" alt="">
                <div class="creditos"><span>Fonte: ${salgado.fonte}</span></div>
                <div><p class="tipo">${salgado.tipo}</p></div>
                <button id="btnModal" type="button" class="btnModal" data-toggle="modal"
                data-target="#Modal">
                <a href="#" class="card-text">Ver receita</a>
                </button>   
            
                <div class="modal fade" id="Modal" tabindex="-1" role="dialog"
                    aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="ModalLabel">${salgado.titulo}</h3>
                                <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img style="max-width: 200px;" src="${salgado.imagem}" alt="">
                                ${salgado.texto}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    elemMain.innerHTML = textoHTML;
}

document.getElementById('btnSalgados').addEventListener('click', exibeSalgados);

function exibeDoces() {
    var elemMain = document.getElementById('tela');
    var textoHTML = '';

    for (i = 0; i < dados.doces.length; i++) {

        var doce = dados.doces[i];

        textoHTML = textoHTML + `
            <div class="box-receita">
                <div><h4 class="titulo">${doce.titulo}</h4></div>
                <img class="thumbnail" src="${doce.imagem}" alt="">
                <div class="creditos"><span>Fonte: ${doce.fonte}</span></div>
                <div><p class="tipo">${doce.tipo}</p></div>
                <button id="btnModal" type="button" class="btnModal" data-toggle="modal"
                data-target="#Modal">
                <a href="#" class="card-text">Ver receita</a>
                </button>   
            
                <div class="modal fade" id="Modal" tabindex="-1" role="dialog"
                    aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="ModalLabel">${doce.titulo}</h3>
                                <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img style="max-width: 200px;" src="${doce.imagem}" alt="">
                                ${doce.texto}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    elemMain.innerHTML = textoHTML;
}

document.getElementById('btnDoces').addEventListener('click', exibeDoces);


function exibeVeganas() {
    var elemMain = document.getElementById('tela');
    var textoHTML = '';

    for (i = 0; i < dados.veganas.length; i++) {

        var vegana = dados.veganas[i];

        textoHTML = textoHTML + `
            <div class="box-receita">
                <div><h4 class="titulo">${vegana.titulo}</h4></div>
                <img class="thumbnail" src="${vegana.imagem}" alt="">
                <div class="creditos"><span>Fonte: ${vegana.fonte}</span></div>
                <div><p class="tipo">${vegana.tipo}</p></div>
                <button id="btnModal" type="button" class="btnModal" data-toggle="modal"
                data-target="#Modal">
                <a href="#" class="card-text">Ver receita</a>
                </button>   
            
                <div class="modal fade" id="Modal" tabindex="-1" role="dialog"
                    aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="ModalLabel">${vegana.titulo}</h3>
                                <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img style="max-width: 200px;" src="${vegana.imagem}" alt="">
                                ${vegana.texto}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    elemMain.innerHTML = textoHTML;
}

document.getElementById('btnVeganas').addEventListener('click', exibeVeganas);


function exibeVegetarianas() {
    var elemMain = document.getElementById('tela');
    var textoHTML = '';

    for (i = 0; i < dados.vegetarianas.length; i++) {

        var vegetariana = dados.vegetarianas[i];

        textoHTML = textoHTML + `
            <div class="box-receita">
                <div><h4 class="titulo">${vegetariana.titulo}</h4></div>
                <img class="thumbnail" src="${vegetariana.imagem}" alt="">
                <div class="creditos"><span>Fonte: ${vegetariana.fonte}</span></div>
                <div><p class="tipo">${vegetariana.tipo}</p></div>
                <button id="btnModal" type="button" class="btnModal" data-toggle="modal"
                data-target="#Modal">
                <a href="#" class="card-text">Ver receita</a>
                </button>   
            
                <div class="modal fade" id="Modal" tabindex="-1" role="dialog"
                    aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="ModalLabel">${vegetariana.titulo}</h3>
                                <button type="button" class="close" data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img style="max-width: 200px;" src="${vegetariana.imagem}" alt="">
                                ${vegetariana.texto}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    elemMain.innerHTML = textoHTML;
}

document.getElementById('btnVegetarianas').addEventListener('click', exibeVegetarianas);