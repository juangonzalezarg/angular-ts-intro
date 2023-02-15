/*
    ===== Código de TypeScript =====
*/

// Las clases me sirven para crear instancias

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}

class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number; // static: referencia a la propiedad sin instancia

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ) {
        super(
            nombreReal,
            'New York, USA'
        );
    }

}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);
