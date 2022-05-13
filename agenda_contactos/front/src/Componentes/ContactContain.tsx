import { FC } from 'react';
import { Contacts } from './Types/Types';
import styled from '@emotion/styled';
import "./Styles/Componentes.css";

const ContactContain: FC<{ Contacts: Contacts[] }> = ({ Contacts }) => {
    console.log(Contacts);
    return (
        <div className="contactContain">
            {Contacts.map(elem =>
                <ContainerFather>
                    <AtributsName>{elem.name}{" "}{elem.lastNames}</AtributsName>
                    <Atributs>{elem.phone}</Atributs>
                    <Atributs>{elem.email}</Atributs>
                </ContainerFather>
            )}
        </div>
    )
};

export default ContactContain;

const ContainerFather = styled.div`
    padding: 18px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #43ceae60 ;    
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
        background-color: #43ceae;
    }
`

const AtributsName = styled.div`
    font-size: 30px;
    font-weight: bold;
    width: 700px;
`

const Atributs = styled.div`
    font-size: 25px;
`