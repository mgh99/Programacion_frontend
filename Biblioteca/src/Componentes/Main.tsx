import React, {FC} from 'react';
import styled from '@emotion/styled';
import Library from './Library';
import "./Main.css";

const Main: FC = () => {

    const [search, setSearch] = React.useState<string>("");
    const [state, setState] = React.useState<string>();

    return(
        <PadreContainer>
            <HeaderTitle><h1>TIENDA DE LIBROS</h1></HeaderTitle>
            <Container>
                <InputBook type = "text" onChange={(e) => {
                    setSearch(e.target.value);
                    setState("");
                }}></InputBook>
                <BotonSearch onClick={(elem) => setState("searching")}>Search</BotonSearch>
            </Container>
            {!state && (<p>Click on Search to continue</p>)};

            {state && <Library text = {search}></Library>}
        </PadreContainer>
    )
};

export default Main;

const PadreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 80%;
    background-color: #f5f5f574;
    border-radius: 10px;
    
    font-size: 30px;
`;

const Container = styled.div`
    display: flex;
   
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 80%;
`;

const InputBook = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 90%;
    background-color: #f5f5f5;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 40px;
`;

const BotonSearch = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 10%;
    background-color: #f5f5f5;
    border-radius: 10px;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 40px;

`;