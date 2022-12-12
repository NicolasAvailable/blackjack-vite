import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna el nuevo deck
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0) 
    throw new Error('los tiposDeCarta son necesarios');

    if( !tiposEspeciales || tiposEspeciales.length === 0) 
    throw new Error('los tiposEspeciales son necesarios');

    let deck = [];
 
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}



// esto se usa para que se sepa que este va a ser la función principal que va a 
// exportar y a la hora de importar solo se colocara un nombre sin las llaves ({})
export default crearDeck;