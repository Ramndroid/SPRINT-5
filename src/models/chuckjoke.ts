import { IChuckJoke } from "./interfaces/ichuckjoke.js";
import { updateUiJoke } from '../ui/uiJoke.js';

// CLASE CHUCKJOKE: modelo para cada broma obtenida de dad-joke
@updateUiJoke
export class ChuckJoke implements IChuckJoke {    
    constructor (
        public id: string,
        public joke: string,
        public url: string,
        public icon_url: string
    ) {}    
}