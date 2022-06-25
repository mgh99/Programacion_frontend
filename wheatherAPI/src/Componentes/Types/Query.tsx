import {gql} from '@apollo/client';

export const QUERY_COUNTRY = gql`
    query getCountry($name: String!) {
        countries(where: {name: {eq: $name}}) {
            continent {
                name
            }
            currencies {
                name
            }
            languages {
                name
            }
            capital {
                name
                location {
                    lat
                    long
                }
            }
            name
            alpha2Code
        }
    }
`

export const QUERY_CITY = gql`
    query getCity($name: String!) {
        cities(where: {name: {eq: $name}}) {
            name
            population
            location {
                lat
                long
            }
            country {
                name
                alpha2Code
            }
            timeZone {
                name
            }
        }
    }
`