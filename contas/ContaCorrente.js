
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0

    constructor(cliente, agencia) {

        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }



    sacar(valor) {
        const taxa = 1.1
        return this.logicaSacar(valor, taxa)
    }
}
