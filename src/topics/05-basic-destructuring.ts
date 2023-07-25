interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mi canción',
    details: {
        author: 'Yo mero',
        year: 2023
    }
}


const {
    song: anotherSong,
    songDuration: duration,
    details
} = audioPlayer;

const { author } = details;

console.log(
    'song: '+anotherSong,
    'duration: '+duration,
    'author: '+author
);



// Desestructuración de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const personaje4 = dbz[3] || 'No hay personaje';
console.info(' Personaje 1: ', personaje4);

const [p1, p2, trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.info('Personaje 2: ', trunks);

const [ , , trunks2]: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.info('Personaje 3: ', trunks2);

const [, , trunks3 = 'Not found']: string[] = ['Goku', 'Vegeta'];
console.error('Personaje 4: ', trunks3);


export {};