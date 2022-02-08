import { IDadJoke } from './interfaces/idadjoke.js';
import { updateUiJoke } from '../ui/uiJoke.js';

// CLASE DADJOKE: modelo para cada broma obtenida de dad-joke
@updateUiJoke
export class DadJoke implements IDadJoke {    
    constructor (
        public id: string,
        public joke: string,
        public status: number
    ) {}    
}