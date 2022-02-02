import { IDadJoke } from './idadjoke.js';
import { showJoke } from '../../ui/showJoke.js';

// CLASE DADJOKE: modelo para cada broma obtenida de dad-joke
@showJoke
export class DadJoke implements IDadJoke {    
    constructor (
        public id: string,
        public joke: string,
        public status: number
    ) {}    
}