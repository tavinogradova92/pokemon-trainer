import { Sprites } from './sprites';
import { Types } from './types';
import { Stats } from './stats';

export interface Pokemon {
    id?: number;
    url: string;
    name: string;
    image?: string;
    sprites?: Sprites;
    types?: Types[];
    stats?: Stats[];
    height?: number;
    weight?: number;
}
