

/**
 * Esta función crea el html de las cartas
 * @param {String} carta
 * @returns {HTMLImageElement} 
 */

export const crearCartaHtml = ( carta ) => {

    if( !carta ) throw new Error('el argumento carta es necesario');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}