
var dados = {
    "receitas": [
        {
            "titulo": "Cookie de chocolate",
            "imagem": "imgs/doce1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✔️Vegano",
            "texto": "<h5>INGREDIENTES</h5><ul><li>4 colheres (sopa) de açúcar mascavo</li><li>2 colheres (sopa) de leite de coco</li><li>2 colheres (sopa) de óleo de coco</li><li>1/4 de colher (chá) de essência de baunilha</li><li>1 pitada de sal</li><li>8 colheres (sopa) de farinha de trigo</li><li>1/2 colher (chá) de fermento em pó</li><li>chocolate amargo vegano picado a gosto</li></ul><h5>MODO DE PREPARO</h5><ol><li>Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</li><li>Acrescente a farinha de trigo e o fermento, misture bem.</li><li>Por último, adicione o chocolate amargo e misture.</li><li>Molde os cookies e coloque-os em uma forma.</li><li>Deixe na geladeira por 20 minutos.</li><li>Em seguida, leve ao forno preaquecido (200° C) por cerca de 20 minutos.</li></ol>"
        },
        {
            "titulo": "Sorvete de Chocolate",
            "imagem": "imgs/doce2.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✔️Vegano",
            "texto": "<h5>INGREDIENTES</h5><ul><li>Leite de coco concentrado – 2 xícaras (500 ml)</li><li>Chocolate 70% cacau, sem leite e picado – 3/4 xícara (120 g)</li><li>Açúcar demerara – 2/3 xícara (150 g)</li><li>Óleo de coco derretido – 3 colheres de sopa (45 ml)</li><li>Extrato de baunilha – 1 colher de chá (5 ml)</li><li>Sal – uma pitada (opcional)</li><h5>MODO DE PREPARO</h5><ol><li>Em uma panela média coloque o leite de coco, o açúcar, o óleo de coco, o extrato de baunilha e o sal. Mexa bem e leve ao fogo médio até levantar fervura.</li><li>Desligue o fogo e adicione o chocolate picado. Mexa bem até todos os pedaços derreterem e incorporar ao líquido.</li><li>Coloque a mistura no liquidificador e bata bem até ficar homogêneo, sem nenhum pedacinho de chocolate.</li><li>Transfira para um recipiente e espere esfriar completamente em temperatura ambiente.</li><li>Se você não tiver máquina de sorvete, leve a mistura ao freezer por cerca de 8 horas ou até endurecer. Retire de 1 em 1 hora e misture bem com uma colher. Leve de volta ao freezer e repita o processo até a mistura começar a ficar consistente. Apesar de ser uma etapa chata e trabalhosa, ela é importante para evitar a formação de cristais de gelo e deixar o sorvete cremoso.</li><li>Se você tiver máquina de sorvete, coloque a mistura na máquina e siga as instruções do fabricante até obter uma massa consistente e aerada. Transfira para um recipiente e leve ao freezer até endurecer.</li><li>Para servir, retire o sorvete do congelador 5 minutos antes para amolecer. Dura em torno de 10 dias congelado.</li></ol>"
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
                <div><h3 class="titulo">${receita.titulo}</h3></div>
                <img class="thumbnail" src="${receita.imagem}" alt="">
                <div class="creditos"><span>Fonte: ${receita.fonte}</span></div>
                <div><p class="tipo">${receita.tipo}</p></div>
                <button type="button" class="btnModal" data-toggle="modal"
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

function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest(),
        receitas = {};
    xhr.onload = exibeReceitas;
    xhr.open('GET', '');
    xhr.send();
}

document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);


