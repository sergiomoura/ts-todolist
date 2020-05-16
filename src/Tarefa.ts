class Tarefa {
    
    public texto:string;
    public feita:boolean;
    public horaCriacao: Date;
    public horaRealizacao: Date;

    constructor(texto:string){
        this.texto = texto;
        this.feita = false;
        this.horaCriacao = new Date();
        this.horaRealizacao = null;
    }

}