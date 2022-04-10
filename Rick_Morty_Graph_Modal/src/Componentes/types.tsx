import react from 'react';

export type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        id: number,
        name: string,
        type: string,
        dimension: string,
        created: string
    }
    location: {
        id: number,
        name: string,
        type: string,
        dimension: string,
        created: string
    }
    image: string,
    created: string
}

export type Characters = {
    characters: {
        info: {
            pages: number
        }
        results: Array<Character>  
    }
}

export type ICharactersProps = {
    page: number
}

export type PageProps = {
    totalPages: number,
    page: number,
    otherPage: (page: number) => void
}

export type PagesTypes = {
    characters: {
        info: {
            pages: number
        }
    }
}

export type ModalCharacter = {
    character: Character,
    show: boolean
}