import react, { FC } from "react";
import { GET_NEXTPAGES } from "./Query";
import { useQuery } from "@apollo/client";
import { PageProps, PagesTypes } from "./types";
import Error from "./Error";
import "./Styles/Pages.css";

const Pages: FC<PageProps> = ({ page, otherPage }) => {

    const { data, loading, error, refetch } = useQuery<PagesTypes>(GET_NEXTPAGES);

    //crea una constante para el boton de siguiente pagina
    const NextPageNumber = (IN: number) => {
        if (IN < data!.characters.info.pages) {
            refetch({ page: page + 1 });
        }
    }

    //crea una constante para el boton de pagina anterior
    const PrevPageNumber = (IN: number) => { 
        if (IN > 1) { 
            return <pre onClick={() => { otherPage(page - 1) }} > {page - 1}</pre>
        }
    };

    //se crea una constante para el boton de ultima pagina
    const LastPageNumber = (IN: number) => {
        if (IN < data!.characters.info.pages) {
            <div className = "lastPageNumber">
            <pre>...</pre> 
            <pre onClick={() => { otherPage(data!.characters.info.pages) }}>{data!.characters.info.pages}</pre> 
        </div>
        }
    };

    //se crea una constante para el boton de primera pagina
    const FirstPageNumber = (IN: number) => { 
        if (IN > 2) { 
            return (
                <div className = "firstPageNumber">
                    <pre className = "size-first" onClick={() => { otherPage(data!.characters.info.pages) }}>1</pre> 
                    <pre>...</pre>
                </div>
            )
        }
    }

    if (loading) {
        return <pre>...</pre>
    }

    if (data) {
        return (
            <div className="pages">
                <button onClick={() => {
                    if (page > 1) {
                        otherPage(page - 1);
                    }
                }}>Prev</button>

                {FirstPageNumber(page)}
                {PrevPageNumber(page)}

                <pre className="hear" onClick={() => { otherPage(page) }}>{page}</pre>

                {NextPageNumber(page)}
                {LastPageNumber(page)}

                <button onClick={() => {
                    if (page < data!.characters.info.pages) {
                        otherPage(page + 1);
                    }
                }}>Next</button>
            </div>
        );

    } else {
        return (
            <div>
                <Error />
            </div>
        )
    }

}

export default Pages;