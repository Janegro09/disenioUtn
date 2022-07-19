import { heroes } from '../data/heroes';


export const getHeroesByPublisher = (publisher) => {

    // Creo la lista de publicadores que proviene del array de heroes
    let validPublishers = [];
    validPublishers = heroes.map(heroe => heroe.publisher)
    
    
    // Filtro la lista de publicadores para evitar duplicados
    validPublishers = validPublishers.filter( (heroe, index) => {
        return validPublishers.indexOf(heroe) === index
        
    })
    
    // Valido que sea un publisher válido
    if( !validPublishers.includes(publisher) ) {
        throw new Error(`${publisher} is not a valid publisher`)
    }

    // Retorno los heroes con el publisher solicitado
    return heroes.filter( heroe  => heroe.publisher === publisher)

    // console.log(validPublishers)
}