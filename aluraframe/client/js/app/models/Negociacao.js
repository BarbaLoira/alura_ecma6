class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime()); // object freeze nao consegui congelar prop objectos, tem q fazer uma nova instancia pra manter essa prop segura 
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // faz com que as propriedades nao sejam acessadas e alteradas
    }

    get volume() { return this._quantidade * this._valor; }

    get data() { return new Date(this._data.getTime); }

    get quantidade() { return this._quantidade }

    get valor() { return this._valor; }


}