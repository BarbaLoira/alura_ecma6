class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document); // bind precisa pra manter a referencia do metodo a query a document
        //é boa pratica, para evitar ter q pecorrer o dom, toda vez q precisar desses campos nos metodos
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        // no ecma6 "..." (spread operator) organiza o array para que cara posicao seja o parametro 
        this._listaNegociacoes.adiciona(_criaNegociacao());
        this._limpaFormulario();
    }
    _criaNegociacao() {
        return new Negociacao(
            // o componente retorna uma string e precisar validar ela para uma data correta
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor = 0.0;

        this._inputData.focus();
    }

}