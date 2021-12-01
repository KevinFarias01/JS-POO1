/*
Ser autenticavel significa ter ao método "autenticar"
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha);
    }
}