class TarefaComDataLimite extends Tarefa{

    public dataLimite: Date;

    constructor(texto: string, dataLimite: Date){

        super(texto);
        this.dataLimite = dataLimite;

    }

}