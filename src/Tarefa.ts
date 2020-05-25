export class Tarefa {
    
    public texto:string;
    private _feita:boolean;
    private _horaCriacao: Date;
    private _horaRealizacao: Date;

    constructor(texto:string){
        this.texto = texto;
        this._feita = false;
        this._horaCriacao = new Date();
        this._horaRealizacao = null;
    }

    set feita(valor:boolean){
        this._feita = valor;
        this._horaRealizacao = valor ? new Date() : null;
    }

    get feita():boolean{
        return this._feita;
    }

    get horaCriacao():Date{
        return this._horaCriacao;
    }

    get horaRealizacao():Date{
        return this._horaRealizacao;
    }

}