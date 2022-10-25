let words:string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'RETICULA',
    'ACENDRAR',
    'HELECHO',
    'LIQUEN',
    'MUSGO',
    'BUCARE',
    'ARAGUANEY',
    'GIRASOL',
    'ORQUIDEA',
    'ESQUIZOFRENIA',
    'POESIA',
    'MARACUYA',
    'MURCIELAGO',
    
]

export function getRandomWord() {

    const randomIndex =  Math.floor (Math.random() * words.length);

    return words[randomIndex];

}