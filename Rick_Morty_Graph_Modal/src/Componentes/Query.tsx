import { gql } from "@apollo/client"

export const GET_CHARACTERS = gql`
    
    query characters($page: Int) {
        characters(page: $page) {
            info { pages }
            results {
                id,
                name,
                status,
                species,
                type,
                gender,
                origin {
                    id, name, type, dimension, created
                }
                location {
                    id, name, type, dimension, created
                }
                image,
                created
            }
        }
    }

`

export const GET_NEXTPAGES = gql`
    query pages {
        characters {
            info {pages}
        }
    }
`