// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            /*alterar "cidade" para bairro e "email" para endereço. Não consegui 
            fazer sem bugar o código*/

            // Savassi
            "id": 1,
            "nome": "Verdemar Savassi",
            "cidade": "Savassi",
            "categoria": "Supermercado",
            "email": "R. Fernandes Tourinho, 471",
            "telefone": "(31)2595-0909",
        },
        {
            "id": 2,
            "nome": "Verdemar Pátio Savassi",
            "cidade": "Savassi",
            "categoria": "Supermercado",
            "email": "Av. do Contorno, 6061 ",
            "telefone": "(31)4040-4455",
        },
        {
            "id": 3,
            "nome": "Mundo Verde",
            "cidade": "Savassi",
            "categoria": "Mercado",
            "email": "Av. Getúlio Vargas, 1595",
            "telefone": "(31)3646-1190"
        },
        //Funcionários
        {
            "id": 4,
            "nome": "Fito Produtos Orgânicos",
            "cidade": "Funcionários",
            "categoria": "Mercado",
            "email": "Rua Rio Grande do Norte, 982",
            "telefone": "(31)3296-1934",
        },
        {
            "id": 5,
            "nome": "EstudioNHNH Calçados Veganos",
            "cidade": "Funcionários",
            "categoria": "Loja",
            "email": "R. Outono, 77",
            "telefone": "(31)98773-4290",
        },
        {
            "id": 6,
            "nome": "Mundo Verde",
            "cidade": "Funcionários",
            "categoria": "Mercado",
            "email": "Av. Afonso Pena, 2.706",
            "telefone": "(31)3267-1190"
        },
        {
            "id": 7,
            "nome": "Super Nosso",
            "cidade": "Funcionários",
            "categoria": "Supermercado",
            "email": "R. Gonçalves Dias, 603",
            "telefone": "(31)3359-3244"
        },
        {
            "id": 8,
            "nome": "Super Nosso Ceará",
            "cidade": "Funcionários",
            "categoria": "Supermercado",
            "email": "R. Ceará, 1118",
            "telefone": "(31)3359-3264"
        },

        //Sion
        {
            "id": 9,
            "nome": "Verdemar Sion",
            "cidade": "Sion",
            "categoria": "Supermercado",
            "email": "Av. Nossa Sra. do Carmo, 1900",
            "telefone": "(31)2105-0101",
        },

        //Centro
        {
            "id": 10,
            "nome": "Naturíssima",
            "cidade": "Centro",
            "categoria": "Mercado",
            "email": "Av. Augusto de Lima, 744 (Loja 71)",
            "telefone": "(31)3213-3083",
        },
        {
            "id": 11,
            "nome": "Super Nosso",
            "cidade": "Centro",
            "categoria": "Supermercado",
            "email": "R. São Paulo, 1.326",
            "telefone": "(31)3359-3267"
        },


        //Lourdes
        {
            "id": 12,
            "nome": "Verdemar Diamond",
            "cidade": "Lourdes",
            "categoria": "Supermercado",
            "email": "Av. Olegário Maciel, 1600",
            "telefone": "(31)3292-9071",
        },
        {
            "id": 13,
            "nome": "Mundo Verde",
            "cidade": "Lourdes",
            "categoria": "Mercado",
            "email": "R. Curitiba, 1982",
            "telefone": "(31)3309-5226"
        },
        {
            "id": 14,
            "nome": "Super Nosso",
            "cidade": "Lourdes",
            "categoria": "Supermercado",
            "email": "R. Gonçalves Dias, 2001",
            "telefone": "(31)3359-3252"
        },


        //Anchieta
        {
            "id": 15,
            "nome": "Mundo Verde",
            "cidade": "Anchieta",
            "categoria": "Mercado",
            "email": " R. Francisco Deslandes, 855",
            "telefone": "(31)3222-0972",
        },


        //Cidade Nova
        {
            "id": 16,
            "nome": "Verdemar Cidade Nova",
            "cidade": "Cidade Nova",
            "categoria": "Supermercado",
            "email": "Av. Cristiano Machado, 2130",
            "telefone": "(31)4040-4770",
        },


        //Santa Lúcia
        {
            "id": 17,
            "nome": "Pachamama",
            "cidade": "Santa Lúcia",
            "categoria": "Loja",
            "email": "R. Tatuhi, 31",
            "telefone": "(31)2520-8003"
        },

        //Gutierrez
        {
            "id": 18,
            "nome": "Viveg Culturas Veganas",
            "cidade": "Gutierrez",
            "categoria": "Loja",
            "email": "Rua André Cavalcanti, 336/303",
            "telefone": "(31)971700013"
        },
        {
            "id": 19,
            "nome": "Mundo Verde",
            "cidade": "Gutierrez",
            "categoria": "Mercado",
            "email": "R. Estácio de Sá, 10",
            "telefone": "(31)3018-3713"
        },
        {
            "id": 20,
            "nome": "Super Nosso",
            "cidade": "Gutierrez",
            "categoria": "Supermercado",
            "email": "Rua André Cavalcanti, 223",
            "telefone": "(31)3359-3251"
        },

        //Santa Efigênia
        {
            "id": 21,
            "nome": "Venne Vegan",
            "cidade": "Santa Efigênia",
            "categoria": "Loja",
            "email": "R. Gregório de Matos, 228",
            "telefone": "(31)3582-5094"
        },
        {
            "id": 22,
            "nome": "Mundo Verde",
            "cidade": "Santa Efigênia",
            "categoria": "Mercado",
            "email": "Rua dos Otoni, 939",
            "telefone": "(31)3234-4000"
        },
        {
            "id": 23,
            "nome": "Mundo Verde",
            "cidade": "Santa Efigênia",
            "categoria": "Mercado",
            "email": "Av. dos Andradas, 3002",
            "telefone": "(31)2555-5560"
        },

        //Jardim América
        {
            "id": 24,
            "nome": "Vegan Sisters Empório Vegano",
            "cidade": "Jardim América",
            "categoria": "Mercado",
            "email": "R. Lindolfo de Azevedo, 1021",
            "telefone": "(31)3582-5094"
        },

        //Nova Esperança
        {
            "id": 25,
            "nome": "Cleópatra Natural Cosmético Vegano",
            "cidade": "Nova Esperança",
            "categoria": "Loja",
            "email": "R. Avelino dos Santos, 218 (Sala 301)",
            "telefone": "(31)991984270"
        },


        //São Pedro
        {
            "id": 26,
            "nome": "Armazém Vegan Club BH",
            "cidade": "São Pedro",
            "categoria": "Mercado",
            "email": "Rua Major Lopes, 240",
            "telefone": "(31)25111926"
        },
        {
            "id": 27,
            "nome": "Verdemar São Pedro",
            "cidade": "São Pedro",
            "categoria": "Supermercado",
            "email": "R. Viçosa, 572",
            "telefone": "(31) 3296-7458"
        },

        //Serra
        {
            "id": 28,
            "nome": "Verdemar Serra",
            "cidade": "Serra",
            "categoria": "Supermercado",
            "email": "Rua do Ouro, 195",
            "telefone": "(31)40404080"
        },

        //Jardim Canadá
        {
            "id": 29,
            "nome": "Verdemar Jardim Canadá",
            "cidade": "Jardim Canadá",
            "categoria": "Supermercado",
            "email": "R. Vancouver, 40 ",
            "telefone": "(31) 3541-6011"
        },

        //Santo Antônio
        {
            "id": 30,
            "nome": "Mundo Verde",
            "cidade": "Santo Antônio",
            "categoria": "Mercado",
            "email": "Av. Prudente de Morais, 563",
            "telefone": "(31)2512-5678"
        },

        //Pampulha
        {
            "id": 31,
            "nome": "Mundo Verde",
            "cidade": "Pampulha",
            "categoria": "Mercado",
            "email": "Av. Presidente Carlos Luz, 3001",
            "telefone": "(31)3991-9777"
        },
        {
            "id": 32,
            "nome": "Verdemar Pampulha",
            "cidade": "Pampulha",
            "categoria": "Supermercado",
            "email": "Av. Santa Rosa, 846",
            "telefone": "(31) 2391-0010"
        },
        {
            "id": 33,
            "nome": "Super Nosso",
            "cidade": "Pampulha",
            "categoria": "Supermercado",
            "email": "Av. Portugal, 2481",
            "telefone": "(31)3359-3249"
        },

        //Buritis
        {
            "id": 34,
            "nome": "Mundo Verde",
            "cidade": "Buritis",
            "categoria": "Mercado",
            "email": "Av. Professor Mário Werneck, 1225",
            "telefone": "(31)3140-3734"
        },
        {
            "id": 35,
            "nome": "Verdemar Buritis",
            "cidade": "Buritis",
            "categoria": "Supermercado",
            "email": "Av. Professor Mário Werneck, 1500",
            "telefone": "(31) 3313-4223"
        },
        {
            "id": 36,
            "nome": "Super Nosso",
            "cidade": "Buritis",
            "categoria": "Supermercado",
            "email": "Av. Professor Mário Werneck, 2273",
            "telefone": "(31)3359-3241"
        },

        //Belvedere
        {
            "id": 37,
            "nome": "Mundo Verde",
            "cidade": "Belvedere",
            "categoria": "Mercado",
            "email": "Av. Luiz Paulo Franco, 977",
            "telefone": "(31)3654-8395"
        },

        //União
        {
            "id": 38,
            "nome": "Mundo Verde",
            "cidade": "União",
            "categoria": "Mercado",
            "email": "R. Alberto Cintra, 430",
            "telefone": "(31)4101-1172"
        },
        {
            "id": 39,
            "nome": "Super Nosso",
            "cidade": "União",
            "categoria": "Supermercado",
            "email": "R. Arthur de Sá, 305",
            "telefone": "(31)3359-3278"
        },

        //Castelo
        {
            "id": 40,
            "nome": "Mundo Verde",
            "cidade": "Castelo",
            "categoria": "Mercado",
            "email": "Av. dos Engenheiros, 560",
            "telefone": "(31)2516-2091"
        },
        {
            "id": 41,
            "nome": "Verdemar Castelo",
            "cidade": "Castelo",
            "categoria": "Supermercado",
            "email": "Av. Pres. Tancredo Neves, 2700",
            "telefone": "(31)4040-4774"
        },

        //Caiçara
        {
            "id": 42,
            "nome": "Super Nosso",
            "cidade": "Caiçara",
            "categoria": "Supermercado",
            "email": "R. Belmiro Braga, 1350",
            "telefone": "(31)3359-3273"
        },

        //Barro Preto
        {
            "id": 43,
            "nome": "Super Nosso",
            "cidade": "Barro Preto",
            "categoria": "Supermercado",
            "email": "R. Paracatu, 737",
            "telefone": "(31)3359-3265"
        },

        //Cruzeiro
        {
            "id": 44,
            "nome": "Super Nosso",
            "cidade": "Cruzeiro",
            "categoria": "Supermercado",
            "email": "Av. Afonso Pena, 3328",
            "telefone": "(31)3359-3250"
        },


    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email": contato.email,
        "telefone": contato.telefone,
        "cidade": contato.cidade,
        "categoria": contato.categoria,
        "website": contato.website
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
        db.data[index].email = contato.email,
        db.data[index].telefone = contato.telefone,
        db.data[index].cidade = contato.cidade,
        db.data[index].categoria = contato.categoria,
        db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}