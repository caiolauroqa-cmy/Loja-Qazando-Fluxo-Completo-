const {faker} = require("@faker-js/faker");

function DadosCadastro() {
    return{
        nome:faker.person.fullName(),
        email:faker.internet.email(),
        senha:faker.internet.password()

    };
}

module.exports = {DadosCadastro}