class DateHelper {
    constructor() {
        //evitar q se instancia essa classe
        throw new Error('Esta classse não pode ser instanciada');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}${data.getFullYear()}}`;
    }

    static textoParaData(texto) {
        //verificar se veio no formato certo de data
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
        //caso indice seja 1 eh o mes e return value do item -1 beacause range is 0-11  
        return new Date(...this._inputData.value.split('-').map((item, indice) => item - indice % 2));
    }

}