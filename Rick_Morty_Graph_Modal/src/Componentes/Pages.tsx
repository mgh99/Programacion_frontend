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

}

export default Pages;