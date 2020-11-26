export interface Pokemon {
    id?: number;
    url: string;
    name: string;
    image?: string;
    abilities?: any[];
    stats?: any[];
    height?: number;
    weight?: number;
    types?: any[];
    base_experience?: number;
    moves?: any[];
}
