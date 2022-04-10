import react, { FC } from "react";
import { GET_NEXTPAGES } from "./Query";
import { useQuery } from "@apollo/client";
import { PageProps, PagesTypes } from "./types";
import Error from "./Error";
import "./Styles/Pages.css";

const Pages: FC<PageProps> = ({ page, otherPage, totalPages }) => {

    const { data, loading, error, refetch } = useQuery<PagesTypes>(GET_NEXTPAGES);

    // Next 1 ... 7, 8, 9, ... 42 Prev => TOTAL

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    /*
    // Next 1
    //crea una constante para el boton de siguiente pagina
    const NextPageNumber = (IN: number) => {
        if (IN < data!.characters.info.pages) {
            refetch({ page: page + 1 });
        }
    };

    //Next 1 ... 7, 8
    //se crea una constante para el boton de primera pagina
    const FirstPageNumber = (IN: number) => {
        if (IN > 2) {
            return (
                <div className="firstPageNumber">
                    <pre className="size-first" onClick={() => { otherPage(data!.characters.info.pages) }}>1</pre>
                    <pre>...</pre>
                </div>
            )
        }
    };

    //Next 1 ... 7, 8, 9 ... 42
    //se crea una constante para el boton de ultima pagina
    const LastPageNumber = (IN: number) => {
        if (IN < data!.characters.info.pages) {
            <div className="lastPageNumber">
                <pre>...</pre>
                <pre onClick={() => { otherPage(data!.characters.info.pages) }}>{data?.characters.info.pages}</pre>
            </div>
        }
    };

    // Next 1 ... 7, 8, 9, ... 42 Prev
    //crea una constante para el boton de pagina anterior
    const PrevPageNumber = (IN: number) => {
        if (IN > 1) {
            return <pre onClick={() => { otherPage(page - 1) }} > {page - 1}</pre>
        }
    };*/


    if(data) {
        return(
            <div className = "content-pages">
            <div className = "pagination-wrapper">

                
                {page !== 1 && (<button className = "page-item" onClick={() => otherPage(page - 1)} type="button">
                        &lt;
                    </button>
                )}

                <button className = "page-number-item" onClick={() => otherPage(1)} type="button">{1}</button>

                {page > 3 && <div className = "dots">...</div>}

                {page === totalPages && totalPages > 3 && (
                    <button className = "page-number-item" onClick={() => otherPage(page - 2)} type="button">
                        {page - 2}
                    </button>
                )}

                {page > 2 && (
                    <button className = "page-number-item" onClick={() => otherPage(page - 1)} type="button">
                        {page - 1}
                    </button>
                )}

                {page !== 1 && page !== totalPages && (
                    <button className = "page-actual-number" onClick={() => otherPage(page)} type="button">
                        {page}
                    </button>
                )}

                {page < totalPages - 1 && (
                    <button className = "page-number-item" onClick={() => otherPage(page + 1)} type="button">
                        {page + 1}
                    </button>
                )}

                {page === 1 && totalPages > 3 && (
                    <button className = "page-number-item" onClick={() => otherPage(page + 2)} type="button">
                        {page + 2}
                    </button>
                )}

                {page < totalPages - 2 && <div className = "dots">...</div>}

                <button className = "page-number-item" onClick={() => otherPage(totalPages)} type="button">
                    {totalPages}
                </button>

                {page !== totalPages && (
                    <button className = "page-item" onClick={() => otherPage(page + 1)} type="button">
                        &gt;
                    </button>
                )}
            </div>
        </div>
        )
    } else {
        return (
            <div>
                <Error />
            </div>
        )
    }

    /*if (data) {
        return (
            <div className="pages">
                <button onClick={() => {
                    if (page > 1) { //si la pagina es mayor a 1
                        otherPage(page - 1); //se le resta 1 a la pagina
                    }
                }}>Prev</button>

                {FirstPageNumber(page)}
                {PrevPageNumber(page)}

                <pre className="hear" onClick={() => { otherPage(page) }}>{page}</pre> 

                {NextPageNumber(page)}
                {LastPageNumber(page)}

                <button onClick={() => {
                    if (page < data!.characters.info.pages) { //si la pagina es menor que el total de paginas
                        otherPage(page + 1); //se + 1 a la pagina
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
    }*/

}

export default Pages;