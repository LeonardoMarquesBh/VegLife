// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            /*alterar "cidade" para bairro e "email" para endereço. Não consegui 
            fazer sem bugar o código*/

            // Savassi
            "id": 1,
            "nome": "Bem Natural",
            "cidade": "Savassi",
            "categoria": "Vegetariano",
            "email": "Rua Alagoas 911",
            "telefone": "(31) 3261-5676",
        },

        {
            "id": 2,
            "nome": "Yan Shan Zay",
            "cidade": "Savassi",
            "categoria": "Vegetariano",
            "email": "Av. Getúlio Vargas, 1220",
            "telefone": "(31) 99110-8953",
            
        },

        {
            "id": 3,
            "nome": "Vegans 2Go",
            "cidade": "Savassi",
            "categoria": "Vegano",
            "email": "Av. Getúlio Vargas, 1423",
            "telefone": "(31) 3221-1910",
            
        }, 

        {
            "id": 4,
            "nome": "Casa Amora",
            "cidade": "Savassi",
            "categoria": "Vegetariano",
            "email": "Rua Paraíba, 941",
            "telefone": "(31) 3261-5794",
            
        }, 

        {
            "id": 5,
            "nome": "Nectar da Serra (Savassi)",
            "cidade": "Savassi",
            "categoria": "Vegetariano",
            "email": "R. Santa Rita Durão, 929",
            "telefone": "(31) 3261-2969",
            
        }, 

        //Funcionários
        {
            "id": 6,
            "nome": "San Ro",
            "cidade": "Funcionários",
            "categoria": "Vegetariano",
            "email": "Rua Professor Moraes, 651",
            "telefone": "(31) 3264-9236",
        },

        {
            "id": 7,
            "nome": "Camaraderia Gastrobar",
            "cidade": "Funcionários",
            "categoria": "Vegano",
            "email": "Rua Cláudio Manoel, 555",
            "telefone": "(31) 3646-4616",
        },

        {
            "id": 8,
            "nome": "Lanchonete Vegana",
            "cidade": "Funcionários",
            "categoria": "Vegano",
            "email": "Rua Fernandes Tourinho, 292",
            "telefone": "(31) 3234-4504",
        },

        {
            "id": 9,
            "nome": "VillaVeg",
            "cidade": "Funcionários",
            "categoria": "Vegano",
            "email": "Rua dos Timbiras, 715",
            "telefone": "(31) 3568-5749",
        },

        {
            "id": 10,
            "nome": "POKE SIM",
            "cidade": "Funcionários",
            "categoria": "Vegetariano",
            "email": "R. Antônio de Albuquerque, 629 ",
            "telefone": "indisponível",
        },

        //Sion
        {
            "id": 11,
            "nome": "Nascente um Gosto de Sol",
            "cidade": "Sion",
            "categoria": "Vegetariano",
            "email": "Rua Paraguai, 86",
            "telefone": "(31) 3227-3781",
        },

        //Centro
        {
            "id": 12,
            "nome": "Pé de Couve",
            "cidade": "Centro",
            "categoria": "Vegano",
            "email": "Rua. Goiás, 307",
            "telefone": "(31) 99634-8496",
        },

        {
            "id": 13,
            "nome": "Fonte",
            "cidade": "Centro",
            "categoria": "Vegetariano",
            "email": "Rua dos Guajajaras, 619",
            "telefone": "(31) 3224-9630",
        },

        {
            "id": 14,
            "nome": "Grão Alimentação",
            "cidade": "Centro",
            "categoria": "Vegano",
            "email": "Rua Espírito Santo, 1489",
            "telefone": "(31) 98519-0823",
        },

        {
            "id": 15,
            "nome": "Las Chicas Vegan",
            "cidade": "Centro",
            "categoria": "Vegano",
            "email": "Av. Augusto de Lima, 233",
            "telefone": "(31) 3309-3746",
        },

        {
            "id": 16,
            "nome": "Bem Natural (Centro)",
            "cidade": "Centro",
            "categoria": "Vegetariano",
            "email": "Av. Afonso Pena, 941 - Loja 4",
            "telefone": "(31) 3309-3746",
        },


        //Lourdes
        {
            "id": 17,
            "nome": "Capim da Serra",
            "cidade": "Lourdes",
            "categoria": "Vegetariano",
            "email": "Rua. Espírito Santo, 2324B",
            "telefone": "(31) 3309-5117",
        },

        {
            "id": 18,
            "nome": "Espaço Herbalife",
            "cidade": "Lourdes",
            "categoria": "Vegano",
            "email": "Rua São Paulo, 1628 - Loja 03",
            "telefone": "(31) 99981-6106",
        },

        {
            "id": 19,
            "nome": "Espaço Namah",
            "cidade": "Lourdes",
            "categoria": "Vegano",
            "email": "Rua Tomás Gonzaga, 531",
            "telefone": "(31) 2515-6200",
        },

        //São Pedro
        {
            "id": 20,
            "nome": "VEGAN CLUB BH",
            "cidade": "São Pedro",
            "categoria": "Vegano",
            "email": "Rua Major Lopes, 240",
            "telefone": "(31) 2511-1926",
        },

           //Floresta
        {
            "id": 21,
            "nome": "Bio Natural",
            "cidade": "Floresta",
            "categoria": "Vegetariano",
            "email": "Rua Curvelo, 72",
            "telefone": "(31) 3213-3089",
        },
        
        {
            "id": 22,
            "nome": "MesaZem",
            "cidade": "Floresta",
            "categoria": "Vegetariano",
            "email": "Rua Mármore, 386",
            "telefone": "(31) 98383-2690",
        },

        //Barro Preto
        {
            "id": 23,
            "nome": "Saladeria 365",
            "cidade": "Barro Preto",
            "categoria": "Vegetariano",
            "email": "Rua Mato Grosso, 365",
            "telefone": "(31) 3568-2162",
        },

        //Padre Eustáquio
        {
            "id": 24,
            "nome": "Yuan Lai",
            "cidade": "Padre Eustáquio",
            "categoria": "Vegetariano",
            "email": "R. Vila Rica, 648a",
            "telefone": "(31) 3462-6606",
        },

        //Cidade Nova
        {
            "id": 25,
            "nome": "O Troll Vegano",
            "cidade": "Cidade Nova",
            "categoria": "Vegano",
            "email": "Rua Prof. Pimenta da Veiga, 545 ",
            "telefone": "(31) 99851-1701",
        },

        //Nova Suíça
        {
            "id": 26,
            "nome": "Restaurante Mesa do Sábio",
            "cidade": "Nova Suíça",
            "categoria": "Vegetariano",
            "email": "Rua Campos Sales, 665",
            "telefone": "(31) 3371-3941",
        },

        //Horto
        {
            "id": 27,
            "nome": "Vegan Burgueria",
            "cidade": "Horto",
            "categoria": "Vegano",
            "email": "Rua Pouso Alegre, 1911",
            "telefone": "(31) 97359-7011",
        },

        //Santo Agostinho
        {
            "id": 28,
            "nome": "Formoso Cozinha Natural",
            "cidade": "Santo Agostinho",
            "categoria": "Vegetariano",
            "email": "Rua Araguari, 1000",
            "telefone": "(31) 2520-0958",
        },

        //Gutierrez
        {
            "id": 29,
            "nome": "Viveg Culturas Veganas",
            "cidade": "Gutierrez",
            "categoria": "Vegetariano",
            "email": "Rua André Cavalcanti, 336/303",
            "telefone": "(31) 97170-0013",
        },

        //Cruzeiro
        {
            "id": 30,
            "nome": "Nectar da Serra",
            "cidade": "Cruzeiro",
            "categoria": "Vegetariano",
            "email": "Av. dos Bandeirantes, 1839",
            "telefone": "(31) 3281-1466",
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
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
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