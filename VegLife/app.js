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
            "id": 1,
            "titulo": "Cookie de chocolate",
            "imagem": "imgs/doce1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>4 colheres (sopa) de açúcar mascavo</li>
                <li>2 colheres (sopa) de leite de coco</li>
                <li>2 colheres (sopa) de óleo de coco</li>
                <li>1/4 de colher (chá) de essência de baunilha</li>
                <li>1 pitada de sal</li>
                <li>8 colheres (sopa) de farinha de trigo</li>
                <li>1/2 colher (chá) de fermento em pó</li>
                <li>chocolate amargo vegano picado a gosto</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</li>
                <li>Acrescente a farinha de trigo e o fermento, misture bem.</li>
                <li>Por último, adicione o chocolate amargo e misture.</li>
                <li>Molde os cookies e coloque-os em uma forma.</li>
                <li>Deixe na geladeira por 20 minutos.</li>
                <li>Em seguida, leve ao forno preaquecido (200° C) por cerca de 20 minutos.</li>
            </ol>`,
        },
        {
            "id": 2,
            "titulo": "Sorvete de chocolate",
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
            </ol>`,
        },
        {
            "id": 3,
            "titulo": "Quibe de forno",
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
        },
        {
            "id": 4,
            "titulo": "Mousse de jabuticaba",
            "imagem": "imgs/doce3.jpg",
            "fonte": "MiMi Veg",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>3 xícaras de jabuticaba</li>
                <li>2 xícaras de água</li>
                <li>2 xícaras de leite de coco</li>
                <li>1/2 xícara de amido de milho</li>
                <li>2/3 xícara de açúcar cristal (ou demerara)</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Coloque as jabuticabas e a água numa panela e leve 
                    para cozinhar. Quando as cascas de todas as frutas 
                    se romper, desligue o fogo.</li>
                <li>Transfira o suco para um recipiente passando por uma
                    peneira, esmague bem as frutas para sair a polpa. Irá render 
                    aproximadamente 2 xícaras de suco.</li>
                <li>Numa panela, adicione o suco de jabuticaba, o leite de coco, 
                    o amido de milho e o açúcar cristal. Misture bem até o amido 
                    de milho dissolver e ficar homogêneo.</li>
                <li>Leve ao fogo médio e mexa sem parar até engrossar.</li>
                <li>Transfira para um recipiente e deixe esfriar em temperatura 
                    ambiente. Depois leve a geladeira por aproximadamente 4 horas, 
                    ou até a musse ficar gelada e consistente.</li>
            </ol>`

        },
        {
            "id": 5,
            "titulo": "Danette de chocolate",
            "imagem": "imgs/doce4.jpg",
            "fonte": "S.O.S Intolerante",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>1 xícara de castanha-de-caju (de molho em água por 8h)</li>
                <li>2 xícaras de água</li>
                <li>2 colheres (sopa) de cacau em pó</li>
                <li>2 colheres (sopa) de óleo de coco</li>
                <li>1 colher (chá) de essência de baunilha</li>
                <li>13 a 4 colheres (sopa) de melado</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <p>Dispense a água do molho da castanha e lave-a bem. Junte todos os ingredientes no liquidificador até homogeneizar (se achar muito grosso, pode acrescentar um pouquinho a mais de água). Disponha em potinhos e leve a gelar até firmar, cerca de 8h.</p>`
        },
        {
            "id": 6,
            "titulo": "Estrogonofe de carne de soja",
            "imagem": "imgs/salgado2.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "☑️Vegetariano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>2 xícaras de chá de carne de soja</li>
                <li>1 xícara de chá creme de leite</li>
                <li>1 lata de purê de tomate</li>
                <li>1/2 xícara de chá de mostarda</li>
                <li>1/2 xícara chá de água</li>
                <li>2 colheres sopa de óleo</li>
                <li>1/2 cebola ralada</li>
                <li>Sal e pimenta do reino a gosto</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma panela coloque o óleo.</li>
                <li>E em seguida frite a cebola.</li>
                <li>Junte o purê de tomate, a mostarda, a água e os temperos.Misture bem.</li>
                <li>Junte a seguir a carne de soja, deixe cozinhar em fogo baixo até engrossar.</li>
                <li>Desligue o fogo, acrescente o creme de leite e misture bem.Coloque na travessa e sirva.</li>
            </ol>`
        },
        {
            "id": 7,
            "titulo": "Mousse de Blueberry",
            "imagem": "imgs/doce5.jpg",
            "fonte": "Pati Bianco",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>1 xícara de leite de coco (ou outro leite vegetal cremoso de sua preferência)</li>
                <li>1 colher de sopa de araruta para engrossar (pode ser substituída por fécula de batata, amido de milho ou até tapioca!)</li>
                <li>1/2 xícara de mirtilos</li>
                <li>1 colher de café de essência de baunilha</li>
                <li>Stévia a gosto</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <p>Misture a araruta no leite até dissolver completamente. 
            Bata a com os mirtilos, a essência e a stévia no liquidificador 
            até obter a consistência que você preferir. Eu prefiro bater menos 
            para deixar alguns pedacinhos da fruta. Coloque nas tacinhas e deixe
            na geladeira por uns 20 minutos para ficar mais consistente. 
            Sobremesa, check!
            </p>
            <h5>Observações</h5>
            <p>Usei a araruta porque o mirtilo solta água e deixa o leite menos cremoso. Se for usar outro ingrediente em pó como cacau, por exemplo, pode descartá-la.</p>`
        },
        {
            "id": 8,
            "titulo": "Pappardelle com shitake",
            "imagem": "imgs/salgado3.jpg",
            "fonte": "Jornada Vegana",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>Massa fresca da sua preferência</li>
                <li>1 Colher de sopa de sal (para a água de cozimento do macarrão)</li>
                <li>1 Colher de sopa de óleo ou azeite (para o cozimento do macarrão)</li>
                <li>Água o quanto baste para o cozimento da massa</li>
                <li>200g de shitake fresco</li>
                <li>1/2 Copo de shoyu</li>
                <li>3 Dentes de alho</li>
                <li>3 Colheres de sopa de azeite ou manteiga vegetal</li>
                <li>Salsinha a gosto (usei desidratada)</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Comece preparando a sua massa fresca, após fazer a massa a embrulhe em um plástico filme e deixe descansando enquanto faz o molho de shitake.</li>
                <li>Para fazer o shitake descasque e pique o alho, coloque-o em uma panela com azeite ou manteiga vegetal e ligue o fogo baixo para dourar.Enquanto o alho doura é hora de cortar o shitake em cubinhos.</li>
                <li>Assim que o alho estiver dourado coloque o shitake na panela e misture bem para encorporar o sabor ao cogumelo.</li>
                <li>Acrescente o shoyu na panela, em fogo baixo deixe cozinhar por 4 minutos e em seguida desligue o fogo acrescentando a salsinha.</li>
                <li>Em uma bancada abra a sua massa, você pode fazer isso com o cilindro de massas ou com um rolo, se for abrir com o rolo de massas lembre-se de enfarinhar a sua bancada.</li>
                <li>Com a ajuda de uma carretilha ou faca corte as tiras do seu pappardelle deixando-o com cerca de 2 dedos de largura.</li>
                <li>Enquanto você estiver cortando a massa é interessante colocar bastante água em uma panela no fogo, assim ao terminar de cortar a massa a água estará fervendo pronta para receber o macarrão!</li>
                <li>Ao terminar de cortar coloque um pouco de sal na água que já deve estar fervendo e um fio de azeite ou óleo, em seguida adicione o pappardelle na panela.</li>
                <li>Ao colocar o pappardelle na água fervente conte 3 minutos, esse é o tempo para que a massa fique ao dente, tire a massa do fogo e escorra a água.</li>
                <li>Misture o pappardelle com o shitake, você pode religar o fogo da panela em que fez o shitake para aquecer o macarrão.</li>
            </ol>`
        },
        {
            "id": 9,
            "titulo": "Nhoque de banana da terra",
            "imagem": "imgs/salgado4.jpg",
            "fonte": "Jornada Vegana",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>5 Bananas da terra</li>
                <li>2 Xícaras de farinha – Usei a de arroz mas você pode usar amido de milho, farinha de grão de bico ou outra de sua preferência.</li>
                <li>1 Colher de chá de sal</li>
                <li>Azeite o quanto baste para selarÁgua o quanto baste para o cozimento da massa</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Comece colocando as bananas ainda com casca em um tabuleiro, leve-as para assar em forno alto por uns 15 minutos ou até que a casca fique completamente escura.</li>
                <li>Depois descasque as bananas e coloque-as num recipiente, amasse-as com a ajuda de um garfo para formar um purê homogêneo.</li>
                <li>Acrescente o sal e uma xícara e meia da sua farinha, mexa bem até obter uma mistura encorpada e consistente.</li>
                <li>Polvilhe um pouco do restante da farinha sobre uma bancada, é hora de colocar uma parte da massa do nosso nhoque de banana da terra sobre ela e com cuidado e delicadeza formar um rolinho, não é preciso sovar ou acrescentar mais farinha dentro da ‘massa’, apenas enrole com o auxilio da farinha da bancada.</li>
                <li>Corte o rolinho em pedaços iguais e vá reservando, repita o processo até acabar a massa.</li>
                <li>Com todo o nhoque cortado é hora de acrescentar azeite numa frigideira e selar os nhoques até que dourem em fogo médio, é bom usar uma frigideira antiaderente para que não grudem.</li>
            </ol>`
        },
        {
            "id": 10,
            "titulo": "Suflê de chuchu",
            "imagem": "imgs/salgado5.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "☑️Vegetariano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>4 chuchus cozidos</li>
                <li>1 xícara de leite</li>
                <li>1 colher (sopa) de manteiga</li>
                <li>1 colher (sopa) de farinha de trigo</li>
                <li>4 gemas</li>
                <li>4 colheres (sopa) de queijo parmesão ralado</li>
                <li>sal a gosto</li>
                <li>pimenta-do-reino a gosto</li>
                <li>4 claras</li>
                <li>50 g de queijo parmesão ralado</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma tigela, amasse os chuchus cozidos.</li>
                <li>Passe por uma peneira para retirar o líquido, reserve.</li>
                <li>No liquidificador, bata o leite com a manteiga e a farinha de trigo.</li>
                <li>Adicione o chuchu reservado, as gemas, o queijo parmesão ralado, o sal e a pimenta-do-reino, bata bem.</li>
                <li>À parte, bata as claras em neve.</li>
                <li>Em outra tigela, junte a mistura do liquidificador com as claras em neve.</li>
                <li>Mexa delicadamente.</li>
                <li>Transfira para uma tigela untada com manteiga e enfarinhada.</li>
                <li>Coloque o queijo parmesão ralado e leve ao forno preaquecido (180° C), por cerca de 25 minutos.</li>
            </ol>`
        },
        {
            "id": 11,
            "titulo": "Bolo de cenoura",
            "imagem": "imgs/doce6.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>3 cenouras em pedaços</li>
                <li>suco de 2 laranjas</li>
                <li>1/2 copo de óleo</li>
                <li>1 copo de açúcar</li>
                <li>3 copos de farinha de trigo</li>
                <li>1 colher de sopa de fermento químico</li>
            </ul>
            <h7>Cobertura:</h7>
            <ul>
                <li>200 ml de leite de coco</li>
                <li>7 colheres de sopa de cacau em pó</li>
                <li>7 colheres de sopa de açucar</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>No liquidificador bata todos os ingredientes, exceto a farinha de trigo e o fermento, que devem ser colocados em um recipiente à parte, e misturados com uma colher de pau aos ingredientes já batidos do liquidificador.</li>
                <li>Unte uma forma com óleo e polvilhe farinha de trigo.</li>
                <li>Despeje a massa do bolo que deve estar uniforme.</li>
                <li>Leve ao forno, preaquecido por aproximadamente 45 minutos.</li>
            </ol>
            <h7>Cobertura:</h7>
            <ol>
                <li>Em uma panelinha misture todos os ingredientes, leve ao fogo até que forme uma calda lisa, sem pedaços.</li>
                <li>Reserve a calda e a despeje sobre o bolo tão logo o tire do forno.</li>
            </ol>` 
        },
        {
            "id": 12,
            "titulo": "Abobrinha recheada",
            "imagem": "imgs/salgado6.jpg",
            "fonte": "Jornada Vegana",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>2 Abobrinhas</li>
                <li>100g de shitake</li>
                <li>Azeite o quanto baste</li>
                <li>2 Dentes de alho</li>
                <li>2 Colheres de sopa de shoyu</li>
                <li>Temperos em pó a gosto</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Comece ligando o forno a 180°C para pré-aquecer.</li>
                <li>Lave bem as abobrinhas e partindo-as ao meio no sentido do comprimento.</li>
                <li>Com uma colher remova o ‘miolo’ da abobrinha, é a parte que ficam as sementes e que é mais macia. Reserve essa parte do miolo da abobrinha.</li>
                <li>Descasque e pique o alho, coloque-o em uma panela para dourar com um fio de azeite, enquanto você pica o miolo da abobrinha.</li>
                <li>Acrescente o miolo da abobrinha picada na panela com o alho e deixe em fogo baixo, enquanto cozinha pique o shitake e logo em seguida acrescente-o na panela.</li>
                <li>Misture bem, adicione o shoyu e deixe cozinhar por 3 min. e coloque temperos de sua preferência.</li>
                <li>Coloque as abobrinhas num tabuleiro, acrescente o recheio e regue com um pouco de azeite por cima.</li>
                <li>Leve ao forno pré-aquecido, a 180°C por 20 min</li>
            </ol>` 
        }
    ],
    "salgados": [
        {
            "id": 1,
            "titulo": "Quibe de forno",
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
        },
        {
            "id": 2,
            "titulo": "Estrogonofe de carne de soja",
            "imagem": "imgs/salgado2.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "☑️Vegetariano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>2 xícaras de chá de carne de soja</li>
                <li>1 xícara de chá creme de leite</li>
                <li>1 lata de purê de tomate</li>
                <li>1/2 xícara de chá de mostarda</li>
                <li>1/2 xícara chá de água</li>
                <li>2 colheres sopa de óleo</li>
                <li>1/2 cebola ralada</li>
                <li>Sal e pimenta do reino a gosto</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma panela coloque o óleo.</li>
                <li>E em seguida frite a cebola.</li>
                <li>Junte o purê de tomate, a mostarda, a água e os temperos.Misture bem.</li>
                <li>Junte a seguir a carne de soja, deixe cozinhar em fogo baixo até engrossar.</li>
                <li>Desligue o fogo, acrescente o creme de leite e misture bem.Coloque na travessa e sirva.</li>
            </ol>`
        },
        {
            "id": 3,
            "titulo": "Pappardelle com shitake",
            "imagem": "imgs/salgado3.jpg",
            "fonte": "Jornada Vegana",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>Massa fresca da sua preferência</li>
                <li>1 Colher de sopa de sal (para a água de cozimento do macarrão)</li>
                <li>1 Colher de sopa de óleo ou azeite (para o cozimento do macarrão)</li>
                <li>Água o quanto baste para o cozimento da massa</li>
                <li>200g de shitake fresco</li>
                <li>1/2 Copo de shoyu</li>
                <li>3 Dentes de alho</li>
                <li>3 Colheres de sopa de azeite ou manteiga vegetal</li>
                <li>Salsinha a gosto (usei desidratada)</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Comece preparando a sua massa fresca, após fazer a massa a embrulhe em um plástico filme e deixe descansando enquanto faz o molho de shitake.</li>
                <li>Para fazer o shitake descasque e pique o alho, coloque-o em uma panela com azeite ou manteiga vegetal e ligue o fogo baixo para dourar.Enquanto o alho doura é hora de cortar o shitake em cubinhos.</li>
                <li>Assim que o alho estiver dourado coloque o shitake na panela e misture bem para encorporar o sabor ao cogumelo.</li>
                <li>Acrescente o shoyu na panela, em fogo baixo deixe cozinhar por 4 minutos e em seguida desligue o fogo acrescentando a salsinha.</li>
                <li>Em uma bancada abra a sua massa, você pode fazer isso com o cilindro de massas ou com um rolo, se for abrir com o rolo de massas lembre-se de enfarinhar a sua bancada.</li>
                <li>Com a ajuda de uma carretilha ou faca corte as tiras do seu pappardelle deixando-o com cerca de 2 dedos de largura.</li>
                <li>Enquanto você estiver cortando a massa é interessante colocar bastante água em uma panela no fogo, assim ao terminar de cortar a massa a água estará fervendo pronta para receber o macarrão!</li>
                <li>Ao terminar de cortar coloque um pouco de sal na água que já deve estar fervendo e um fio de azeite ou óleo, em seguida adicione o pappardelle na panela.</li>
                <li>Ao colocar o pappardelle na água fervente conte 3 minutos, esse é o tempo para que a massa fique ao dente, tire a massa do fogo e escorra a água.</li>
                <li>Misture o pappardelle com o shitake, você pode religar o fogo da panela em que fez o shitake para aquecer o macarrão.</li>
            </ol>`
        },
        {
            "id": 4,
            "titulo": "Nhoque de banana da terra",
            "imagem": "imgs/salgado4.jpg",
            "fonte": "Jornada Vegana",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>5 Bananas da terra</li>
                <li>2 Xícaras de farinha – Usei a de arroz mas você pode usar amido de milho, farinha de grão de bico ou outra de sua preferência.</li>
                <li>1 Colher de chá de sal</li>
                <li>Azeite o quanto baste para selarÁgua o quanto baste para o cozimento da massa</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Comece colocando as bananas ainda com casca em um tabuleiro, leve-as para assar em forno alto por uns 15 minutos ou até que a casca fique completamente escura.</li>
                <li>Depois descasque as bananas e coloque-as num recipiente, amasse-as com a ajuda de um garfo para formar um purê homogêneo.</li>
                <li>Acrescente o sal e uma xícara e meia da sua farinha, mexa bem até obter uma mistura encorpada e consistente.</li>
                <li>Polvilhe um pouco do restante da farinha sobre uma bancada, é hora de colocar uma parte da massa do nosso nhoque de banana da terra sobre ela e com cuidado e delicadeza formar um rolinho, não é preciso sovar ou acrescentar mais farinha dentro da ‘massa’, apenas enrole com o auxilio da farinha da bancada.</li>
                <li>Corte o rolinho em pedaços iguais e vá reservando, repita o processo até acabar a massa.</li>
                <li>Com todo o nhoque cortado é hora de acrescentar azeite numa frigideira e selar os nhoques até que dourem em fogo médio, é bom usar uma frigideira antiaderente para que não grudem.</li>
            </ol>`
        },
        {
            "id": 5,
            "titulo": "Suflê de chuchu",
            "imagem": "imgs/salgado5.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "☑️Vegetariano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>4 chuchus cozidos</li>
                <li>1 xícara de leite</li>
                <li>1 colher (sopa) de manteiga</li>
                <li>1 colher (sopa) de farinha de trigo</li>
                <li>4 gemas</li>
                <li>4 colheres (sopa) de queijo parmesão ralado</li>
                <li>sal a gosto</li>
                <li>pimenta-do-reino a gosto</li>
                <li>4 claras</li>
                <li>50 g de queijo parmesão ralado</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma tigela, amasse os chuchus cozidos.</li>
                <li>Passe por uma peneira para retirar o líquido, reserve.</li>
                <li>No liquidificador, bata o leite com a manteiga e a farinha de trigo.</li>
                <li>Adicione o chuchu reservado, as gemas, o queijo parmesão ralado, o sal e a pimenta-do-reino, bata bem.</li>
                <li>À parte, bata as claras em neve.</li>
                <li>Em outra tigela, junte a mistura do liquidificador com as claras em neve.</li>
                <li>Mexa delicadamente.</li>
                <li>Transfira para uma tigela untada com manteiga e enfarinhada.</li>
                <li>Coloque o queijo parmesão ralado e leve ao forno preaquecido (180° C), por cerca de 25 minutos.</li>
            </ol>`
        },
        {
            "id": 6,
            "titulo": "Abobrinha recheada",
            "imagem": "imgs/salgado6.jpg",
            "fonte": "Jornada Vegana",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>2 Abobrinhas</li>
                <li>100g de shitake</li>
                <li>Azeite o quanto baste</li>
                <li>2 Dentes de alho</li>
                <li>2 Colheres de sopa de shoyu</li>
                <li>Temperos em pó a gosto</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Comece ligando o forno a 180°C para pré-aquecer.</li>
                <li>Lave bem as abobrinhas e partindo-as ao meio no sentido do comprimento.</li>
                <li>Com uma colher remova o ‘miolo’ da abobrinha, é a parte que ficam as sementes e que é mais macia. Reserve essa parte do miolo da abobrinha.</li>
                <li>Descasque e pique o alho, coloque-o em uma panela para dourar com um fio de azeite, enquanto você pica o miolo da abobrinha.</li>
                <li>Acrescente o miolo da abobrinha picada na panela com o alho e deixe em fogo baixo, enquanto cozinha pique o shitake e logo em seguida acrescente-o na panela.</li>
                <li>Misture bem, adicione o shoyu e deixe cozinhar por 3 min. e coloque temperos de sua preferência.</li>
                <li>Coloque as abobrinhas num tabuleiro, acrescente o recheio e regue com um pouco de azeite por cima.</li>
                <li>Leve ao forno pré-aquecido, a 180°C por 20 min</li>
            </ol>` 
        }
    ],
    "doces": [
        {
            "id": 1,
            "titulo": "Cookie de chocolate",
            "imagem": "imgs/doce1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>4 colheres (sopa) de açúcar mascavo</li>
                <li>2 colheres (sopa) de leite de coco</li>
                <li>2 colheres (sopa) de óleo de coco</li>
                <li>1/4 de colher (chá) de essência de baunilha</li>
                <li>1 pitada de sal</li>
                <li>8 colheres (sopa) de farinha de trigo</li>
                <li>1/2 colher (chá) de fermento em pó</li>
                <li>chocolate amargo vegano picado a gosto</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</li>
                <li>Acrescente a farinha de trigo e o fermento, misture bem.</li>
                <li>Por último, adicione o chocolate amargo e misture.</li>
                <li>Molde os cookies e coloque-os em uma forma.</li>
                <li>Deixe na geladeira por 20 minutos.</li>
                <li>Em seguida, leve ao forno preaquecido (200° C) por cerca de 20 minutos.</li>
            </ol>`,
        },
        {
            "id": 2,
            "titulo": "Sorvete de chocolate",
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
            </ol>`,
        },
        {
            "id": 3,
            "titulo": "Mousse de jabuticaba",
            "imagem": "imgs/doce3.jpg",
            "fonte": "MiMi Veg",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>3 xícaras de jabuticaba</li>
                <li>2 xícaras de água</li>
                <li>2 xícaras de leite de coco</li>
                <li>1/2 xícara de amido de milho</li>
                <li>2/3 xícara de açúcar cristal (ou demerara)</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Coloque as jabuticabas e a água numa panela e leve 
                    para cozinhar. Quando as cascas de todas as frutas 
                    se romper, desligue o fogo.</li>
                <li>Transfira o suco para um recipiente passando por uma
                    peneira, esmague bem as frutas para sair a polpa. Irá render 
                    aproximadamente 2 xícaras de suco.</li>
                <li>Numa panela, adicione o suco de jabuticaba, o leite de coco, 
                    o amido de milho e o açúcar cristal. Misture bem até o amido 
                    de milho dissolver e ficar homogêneo.</li>
                <li>Leve ao fogo médio e mexa sem parar até engrossar.</li>
                <li>Transfira para um recipiente e deixe esfriar em temperatura 
                    ambiente. Depois leve a geladeira por aproximadamente 4 horas, 
                    ou até a musse ficar gelada e consistente.</li>
            </ol>`

        },
        {
            "id": 4,
            "titulo": "Danette de chocolate",
            "imagem": "imgs/doce4.jpg",
            "fonte": "S.O.S Intolerante",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>1 xícara de castanha-de-caju (de molho em água por 8h)</li>
                <li>2 xícaras de água</li>
                <li>2 colheres (sopa) de cacau em pó</li>
                <li>2 colheres (sopa) de óleo de coco</li>
                <li>1 colher (chá) de essência de baunilha</li>
                <li>13 a 4 colheres (sopa) de melado</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <p>Dispense a água do molho da castanha e lave-a bem. Junte todos os ingredientes no liquidificador até homogeneizar (se achar muito grosso, pode acrescentar um pouquinho a mais de água). Disponha em potinhos e leve a gelar até firmar, cerca de 8h.</p>`
        },
        {
            "id": 5,
            "titulo": "Mousse de Blueberry",
            "imagem": "imgs/doce5.jpg",
            "fonte": "Pati Bianco",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>1 xícara de leite de coco (ou outro leite vegetal cremoso de sua preferência)</li>
                <li>1 colher de sopa de araruta para engrossar (pode ser substituída por fécula de batata, amido de milho ou até tapioca!)</li>
                <li>1/2 xícara de mirtilos</li>
                <li>1 colher de café de essência de baunilha</li>
                <li>Stévia a gosto</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <p>Misture a araruta no leite até dissolver completamente. 
            Bata a com os mirtilos, a essência e a stévia no liquidificador 
            até obter a consistência que você preferir. Eu prefiro bater menos 
            para deixar alguns pedacinhos da fruta. Coloque nas tacinhas e deixe
            na geladeira por uns 20 minutos para ficar mais consistente. 
            Sobremesa, check!
            </p>
            <h5>Observações</h5>
            <p>Usei a araruta porque o mirtilo solta água e deixa o leite menos cremoso. Se for usar outro ingrediente em pó como cacau, por exemplo, pode descartá-la.</p>`
        },
        {
            "id": 6,
            "titulo": "Bolo de cenoura",
            "imagem": "imgs/doce6.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>3 cenouras em pedaços</li>
                <li>suco de 2 laranjas</li>
                <li>1/2 copo de óleo</li>
                <li>1 copo de açúcar</li>
                <li>3 copos de farinha de trigo</li>
                <li>1 colher de sopa de fermento químico</li>
            </ul>
            <h7>Cobertura:</h7>
            <ul>
                <li>200 ml de leite de coco</li>
                <li>7 colheres de sopa de cacau em pó</li>
                <li>7 colheres de sopa de açucar</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>No liquidificador bata todos os ingredientes, exceto a farinha de trigo e o fermento, que devem ser colocados em um recipiente à parte, e misturados com uma colher de pau aos ingredientes já batidos do liquidificador.</li>
                <li>Unte uma forma com óleo e polvilhe farinha de trigo.</li>
                <li>Despeje a massa do bolo que deve estar uniforme.</li>
                <li>Leve ao forno, preaquecido por aproximadamente 45 minutos.</li>
            </ol>
            <h7>Cobertura:</h7>
            <ol>
                <li>Em uma panelinha misture todos os ingredientes, leve ao fogo até que forme uma calda lisa, sem pedaços.</li>
                <li>Reserve a calda e a despeje sobre o bolo tão logo o tire do forno.</li>
            </ol>` 
        }
    ],
    "veganas": [
        {
            "id": 1,
            "titulo": "Cookie de chocolate",
            "imagem": "imgs/doce1.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>4 colheres (sopa) de açúcar mascavo</li>
                <li>2 colheres (sopa) de leite de coco</li>
                <li>2 colheres (sopa) de óleo de coco</li>
                <li>1/4 de colher (chá) de essência de baunilha</li>
                <li>1 pitada de sal</li>
                <li>8 colheres (sopa) de farinha de trigo</li>
                <li>1/2 colher (chá) de fermento em pó</li>
                <li>chocolate amargo vegano picado a gosto</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma tigela, misture o açúcar mascavo, o leite de coco, o óleo de coco, a essência de baunilha e o sal.</li>
                <li>Acrescente a farinha de trigo e o fermento, misture bem.</li>
                <li>Por último, adicione o chocolate amargo e misture.</li>
                <li>Molde os cookies e coloque-os em uma forma.</li>
                <li>Deixe na geladeira por 20 minutos.</li>
                <li>Em seguida, leve ao forno preaquecido (200° C) por cerca de 20 minutos.</li>
            </ol>`,
        },
        {
            "id": 2,
            "titulo": "Sorvete de chocolate",
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
            </ol>`,
        },
        {
            "id": 4,
            "titulo": "Mousse de jabuticaba",
            "imagem": "imgs/doce3.jpg",
            "fonte": "MiMi Veg",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>3 xícaras de jabuticaba</li>
                <li>2 xícaras de água</li>
                <li>2 xícaras de leite de coco</li>
                <li>1/2 xícara de amido de milho</li>
                <li>2/3 xícara de açúcar cristal (ou demerara)</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Coloque as jabuticabas e a água numa panela e leve 
                    para cozinhar. Quando as cascas de todas as frutas 
                    se romper, desligue o fogo.</li>
                <li>Transfira o suco para um recipiente passando por uma
                    peneira, esmague bem as frutas para sair a polpa. Irá render 
                    aproximadamente 2 xícaras de suco.</li>
                <li>Numa panela, adicione o suco de jabuticaba, o leite de coco, 
                    o amido de milho e o açúcar cristal. Misture bem até o amido 
                    de milho dissolver e ficar homogêneo.</li>
                <li>Leve ao fogo médio e mexa sem parar até engrossar.</li>
                <li>Transfira para um recipiente e deixe esfriar em temperatura 
                    ambiente. Depois leve a geladeira por aproximadamente 4 horas, 
                    ou até a musse ficar gelada e consistente.</li>
            </ol>`

        },
        {
            "id": 4,
            "titulo": "Danette de chocolate",
            "imagem": "imgs/doce4.jpg",
            "fonte": "S.O.S Intolerante",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>1 xícara de castanha-de-caju (de molho em água por 8h)</li>
                <li>2 xícaras de água</li>
                <li>2 colheres (sopa) de cacau em pó</li>
                <li>2 colheres (sopa) de óleo de coco</li>
                <li>1 colher (chá) de essência de baunilha</li>
                <li>13 a 4 colheres (sopa) de melado</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <p>Dispense a água do molho da castanha e lave-a bem. Junte todos os ingredientes no liquidificador até homogeneizar (se achar muito grosso, pode acrescentar um pouquinho a mais de água). Disponha em potinhos e leve a gelar até firmar, cerca de 8h.</p>`
        },
        {
            "id": 5,
            "titulo": "Mousse de Blueberry",
            "imagem": "imgs/doce5.jpg",
            "fonte": "Pati Bianco",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>1 xícara de leite de coco (ou outro leite vegetal cremoso de sua preferência)</li>
                <li>1 colher de sopa de araruta para engrossar (pode ser substituída por fécula de batata, amido de milho ou até tapioca!)</li>
                <li>1/2 xícara de mirtilos</li>
                <li>1 colher de café de essência de baunilha</li>
                <li>Stévia a gosto</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <p>Misture a araruta no leite até dissolver completamente. 
            Bata a com os mirtilos, a essência e a stévia no liquidificador 
            até obter a consistência que você preferir. Eu prefiro bater menos 
            para deixar alguns pedacinhos da fruta. Coloque nas tacinhas e deixe
            na geladeira por uns 20 minutos para ficar mais consistente. 
            Sobremesa, check!
            </p>
            <h5>Observações</h5>
            <p>Usei a araruta porque o mirtilo solta água e deixa o leite menos cremoso. Se for usar outro ingrediente em pó como cacau, por exemplo, pode descartá-la.</p>`
        },
        {
            "id": 6,
            "titulo": "Pappardelle com shitake",
            "imagem": "imgs/salgado3.jpg",
            "fonte": "Jornada Vegana",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>Massa fresca da sua preferência</li>
                <li>1 Colher de sopa de sal (para a água de cozimento do macarrão)</li>
                <li>1 Colher de sopa de óleo ou azeite (para o cozimento do macarrão)</li>
                <li>Água o quanto baste para o cozimento da massa</li>
                <li>200g de shitake fresco</li>
                <li>1/2 Copo de shoyu</li>
                <li>3 Dentes de alho</li>
                <li>3 Colheres de sopa de azeite ou manteiga vegetal</li>
                <li>Salsinha a gosto (usei desidratada)</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Comece preparando a sua massa fresca, após fazer a massa a embrulhe em um plástico filme e deixe descansando enquanto faz o molho de shitake.</li>
                <li>Para fazer o shitake descasque e pique o alho, coloque-o em uma panela com azeite ou manteiga vegetal e ligue o fogo baixo para dourar.Enquanto o alho doura é hora de cortar o shitake em cubinhos.</li>
                <li>Assim que o alho estiver dourado coloque o shitake na panela e misture bem para encorporar o sabor ao cogumelo.</li>
                <li>Acrescente o shoyu na panela, em fogo baixo deixe cozinhar por 4 minutos e em seguida desligue o fogo acrescentando a salsinha.</li>
                <li>Em uma bancada abra a sua massa, você pode fazer isso com o cilindro de massas ou com um rolo, se for abrir com o rolo de massas lembre-se de enfarinhar a sua bancada.</li>
                <li>Com a ajuda de uma carretilha ou faca corte as tiras do seu pappardelle deixando-o com cerca de 2 dedos de largura.</li>
                <li>Enquanto você estiver cortando a massa é interessante colocar bastante água em uma panela no fogo, assim ao terminar de cortar a massa a água estará fervendo pronta para receber o macarrão!</li>
                <li>Ao terminar de cortar coloque um pouco de sal na água que já deve estar fervendo e um fio de azeite ou óleo, em seguida adicione o pappardelle na panela.</li>
                <li>Ao colocar o pappardelle na água fervente conte 3 minutos, esse é o tempo para que a massa fique ao dente, tire a massa do fogo e escorra a água.</li>
                <li>Misture o pappardelle com o shitake, você pode religar o fogo da panela em que fez o shitake para aquecer o macarrão.</li>
            </ol>`
        },
        {
            "id": 7,
            "titulo": "Nhoque de banana da terra",
            "imagem": "imgs/salgado4.jpg",
            "fonte": "Jornada Vegana",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>5 Bananas da terra</li>
                <li>2 Xícaras de farinha – Usei a de arroz mas você pode usar amido de milho, farinha de grão de bico ou outra de sua preferência.</li>
                <li>1 Colher de chá de sal</li>
                <li>Azeite o quanto baste para selar</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Comece colocando as bananas ainda com casca em um tabuleiro, leve-as para assar em forno alto por uns 15 minutos ou até que a casca fique completamente escura.</li>
                <li>Depois descasque as bananas e coloque-as num recipiente, amasse-as com a ajuda de um garfo para formar um purê homogêneo.</li>
                <li>Acrescente o sal e uma xícara e meia da sua farinha, mexa bem até obter uma mistura encorpada e consistente.</li>
                <li>Polvilhe um pouco do restante da farinha sobre uma bancada, é hora de colocar uma parte da massa do nosso nhoque de banana da terra sobre ela e com cuidado e delicadeza formar um rolinho, não é preciso sovar ou acrescentar mais farinha dentro da ‘massa’, apenas enrole com o auxilio da farinha da bancada.</li>
                <li>Corte o rolinho em pedaços iguais e vá reservando, repita o processo até acabar a massa.</li>
                <li>Com todo o nhoque cortado é hora de acrescentar azeite numa frigideira e selar os nhoques até que dourem em fogo médio, é bom usar uma frigideira antiaderente para que não grudem.</li>
            </ol>`
        },
        {
            "id": 8,
            "titulo": "Bolo de cenoura",
            "imagem": "imgs/doce6.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>3 cenouras em pedaços</li>
                <li>suco de 2 laranjas</li>
                <li>1/2 copo de óleo</li>
                <li>1 copo de açúcar</li>
                <li>3 copos de farinha de trigo</li>
                <li>1 colher de sopa de fermento químico</li>
            </ul>
            <h7>Cobertura:</h7>
            <ul>
                <li>200 ml de leite de coco</li>
                <li>7 colheres de sopa de cacau em pó</li>
                <li>7 colheres de sopa de açucar</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>No liquidificador bata todos os ingredientes, exceto a farinha de trigo e o fermento, que devem ser colocados em um recipiente à parte, e misturados com uma colher de pau aos ingredientes já batidos do liquidificador.</li>
                <li>Unte uma forma com óleo e polvilhe farinha de trigo.</li>
                <li>Despeje a massa do bolo que deve estar uniforme.</li>
                <li>Leve ao forno, preaquecido por aproximadamente 45 minutos.</li>
            </ol>
            <h7>Cobertura:</h7>
            <ol>
                <li>Em uma panelinha misture todos os ingredientes, leve ao fogo até que forme uma calda lisa, sem pedaços.</li>
                <li>Reserve a calda e a despeje sobre o bolo tão logo o tire do forno.</li>
            </ol>` 
        },
        {
            "id": 9,
            "titulo": "Abobrinha recheada",
            "imagem": "imgs/salgado6.jpg",
            "fonte": "Jornada Vegana",
            "tipo": "✅Vegano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>2 Abobrinhas</li>
                <li>100g de shitake</li>
                <li>Azeite o quanto baste</li>
                <li>2 Dentes de alho</li>
                <li>2 Colheres de sopa de shoyu</li>
                <li>Temperos em pó a gosto</li>
            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Comece ligando o forno a 180°C para pré-aquecer.</li>
                <li>Lave bem as abobrinhas e partindo-as ao meio no sentido do comprimento.</li>
                <li>Com uma colher remova o ‘miolo’ da abobrinha, é a parte que ficam as sementes e que é mais macia. Reserve essa parte do miolo da abobrinha.</li>
                <li>Descasque e pique o alho, coloque-o em uma panela para dourar com um fio de azeite, enquanto você pica o miolo da abobrinha.</li>
                <li>Acrescente o miolo da abobrinha picada na panela com o alho e deixe em fogo baixo, enquanto cozinha pique o shitake e logo em seguida acrescente-o na panela.</li>
                <li>Misture bem, adicione o shoyu e deixe cozinhar por 3 min. e coloque temperos de sua preferência.</li>
                <li>Coloque as abobrinhas num tabuleiro, acrescente o recheio e regue com um pouco de azeite por cima.</li>
                <li>Leve ao forno pré-aquecido, a 180°C por 20 min</li>
            </ol>` 
        }
    ],
    "vegetarianas": [
        {
            "id": 1,
            "titulo": "Quibe de forno",
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
        },
        {
            "id": 2,
            "titulo": "Estrogonofe de carne de soja",
            "imagem": "imgs/salgado2.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "☑️Vegetariano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>2 xícaras de chá de carne de soja</li>
                <li>1 xícara de chá creme de leite</li>
                <li>1 lata de purê de tomate</li>
                <li>1/2 xícara de chá de mostarda</li>
                <li>1/2 xícara chá de água</li>
                <li>2 colheres sopa de óleo</li>
                <li>1/2 cebola ralada</li>
                <li>Sal e pimenta do reino a gosto</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma panela coloque o óleo.</li>
                <li>E em seguida frite a cebola.</li>
                <li>Junte o purê de tomate, a mostarda, a água e os temperos.Misture bem.</li>
                <li>Junte a seguir a carne de soja, deixe cozinhar em fogo baixo até engrossar.</li>
                <li>Desligue o fogo, acrescente o creme de leite e misture bem.Coloque na travessa e sirva.</li>
            </ol>`
        },
        {
            "id": 3,
            "titulo": "Suflê de chuchu",
            "imagem": "imgs/salgado5.jpg",
            "fonte": "Tudo Gostoso",
            "tipo": "☑️Vegetariano",
            "texto": `
            <h5>INGREDIENTES</h5>
            <ul>
                <li>4 chuchus cozidos</li>
                <li>1 xícara de leite</li>
                <li>1 colher (sopa) de manteiga</li>
                <li>1 colher (sopa) de farinha de trigo</li>
                <li>4 gemas</li>
                <li>4 colheres (sopa) de queijo parmesão ralado</li>
                <li>sal a gosto</li>
                <li>pimenta-do-reino a gosto</li>
                <li>4 claras</li>
                <li>50 g de queijo parmesão ralado</li>

            </ul>
            <h5>MODO DE PREPARO</h5>
            <ol>
                <li>Em uma tigela, amasse os chuchus cozidos.</li>
                <li>Passe por uma peneira para retirar o líquido, reserve.</li>
                <li>No liquidificador, bata o leite com a manteiga e a farinha de trigo.</li>
                <li>Adicione o chuchu reservado, as gemas, o queijo parmesão ralado, o sal e a pimenta-do-reino, bata bem.</li>
                <li>À parte, bata as claras em neve.</li>
                <li>Em outra tigela, junte a mistura do liquidificador com as claras em neve.</li>
                <li>Mexa delicadamente.</li>
                <li>Transfira para uma tigela untada com manteiga e enfarinhada.</li>
                <li>Coloque o queijo parmesão ralado e leve ao forno preaquecido (180° C), por cerca de 25 minutos.</li>
            </ol>`
        }
    ],
    "videos": [
        {
            "id":1,
            "titulo":"Lasanha vegana",
            "url":`<iframe width="560" height="315" src="https://www.youtube.com/embed/O0Hq9aikuFI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {
            "id":2,
            "titulo":"Escondidinho vegano",
            "url":`<iframe width="560" height="315" src="https://www.youtube.com/embed/8KGfE3cqZjI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        
        },
        {
            "id":3,
            "titulo":"Risoto de legumes vegano",
            "url":`<iframe width="560" height="315" src="https://www.youtube.com/embed/F9aTQu6NrjE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {
            "id":4,
            "titulo":"Pizza de frigideira vegana e sem glúten",
            "url":`<iframe width="560" height="315" src="https://www.youtube.com/embed/uQFN3uykRnU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {
            "id":5,
            "titulo":"Estrogonofe vegetariano de cogumelos e palmito",
            "url":`<iframe width="560" height="315" src="https://www.youtube.com/embed/Hih9D7zOIKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
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
                data-target="#Modal${receita.id}">
                <a href="#" class="card-text">Ver receita</a>
                </button>
            
                <div class="modal fade" id="Modal${receita.id}" tabindex="-1" role="dialog"
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
console.log(i);

/*function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest(),
        receitas = {};
    xhr.onload = exibeReceitas;
    xhr.open('GET', dados.receitas.titulo=query);
    xhr.send();
}

document.getElementById('btnPesquisa').addEventListener('click', executaPesquisa);*/


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
                data-target="#Modal${salgado.id}">
                <a href="#" class="card-text">Ver receita</a>
                </button>   
            
                <div class="modal fade" id="Modal${salgado.id}" tabindex="-1" role="dialog"
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

    /*document.getElementById("btnSalgados").style.background = "#01492a";*/
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
                data-target="#Modal${doce.id}">
                <a href="#" class="card-text">Ver receita</a>
                </button>   
            
                <div class="modal fade" id="Modal${doce.id}" tabindex="-1" role="dialog"
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
                data-target="#Modal${vegana.id}">
                <a href="#" class="card-text">Ver receita</a>
                </button>   
            
                <div class="modal fade" id="Modal${vegana.id}" tabindex="-1" role="dialog"
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
                data-target="#Modal${vegetariana.id}">
                <a href="#" class="card-text">Ver receita</a>
                </button>   
            
                <div class="modal fade" id="Modal${vegetariana.id}" tabindex="-1" role="dialog"
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


function exibeVideos() {
    var elemMain = document.getElementById('tela');
    var textoHTML = '';

    for (i = 0; i < dados.videos.length; i++) {

        var video = dados.videos[i];

        textoHTML = textoHTML + `
        <div id="box-videos">
            <h4>${video.titulo}</h4>
            <div class="video-block">
                <div class="embed-responsive embed-responsive-4by3">
                    ${video.url}
                </div>
            </div>
        </div>
        `;
    };

    elemMain.innerHTML = textoHTML;
}

document.getElementById('btnVideos').addEventListener('click', exibeVideos);