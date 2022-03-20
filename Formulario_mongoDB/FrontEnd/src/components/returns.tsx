import React, { FC, useState } from 'react';
import "../layout/style.css";
import styled from '@emotion/styled';
import Logo from './img/logo10.jpeg'
import basura from './img/basura.png'
import { User } from './types';
import axios from 'axios';


type input = {
    refresh: (arr: Array<User>) => void;
}
type inputList = {
    refresh: (arr: Array<User>) => void;
    listin: Array<User>;
}

export const Principal: FC = () => {
    return (
        <header>
            <div>
                <img className="logo" src={Logo} width="130" />
            </div>
        </header>
    );
}


export const DataInput: FC<input> = ({ refresh }) => {
    const [name, setName] = useState<string>("");
    const [lastname, setLastame] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const fName = (texto: string) => { setName(texto) }
    const fLName = (texto: string) => { setLastame(texto) }
    const fEmai = (texto: string) => { setEmail(texto) }

    return (
        <Container>
            <div>
                <h1>Data</h1>
            </div>
            <InputsContainer>
                <Relleno type="text" placeholder="Introduce First name" value={name} onChange={(e) => fName(e.target.value as string)} />
                <Relleno type="text" placeholder="Introduce Last name" value={lastname} onChange={(e) => fLName(e.target.value as string)} />
                <Relleno type="text" placeholder="Introduce the email" value={email} onChange={(e) => fEmai(e.target.value as string)} />
                <Button onClick={async () => {
                    try {
                        await axios({
                            method: 'post',
                            url: 'http://127.0.0.1:4000/register',
                            headers: { 'Content-type': 'application/json' },
                            data: {
                                name: name,
                                lastname: lastname,
                                email: email
                            }
                        }).then(res => {
                            console.log(res)
                            refresh(res.data)
                        });
                    } catch (error) {
                        alert(`${error}
                        Error 409: Introduce un correo
                        Error 400: Correo ya registrado
                        Error 500: Algo ha ido mal al registrarse
                        `)
                    }


                }}><p>SEND</p></Button>
            </InputsContainer>
        </Container>
    );
}
export const Content: FC<inputList> = ({ refresh, listin }) => {
    return (
        <ContainerList>
            <div>
                <h1>List</h1>
            </div>
            <List>
                <ul>
                    {listin.map(elem => {
                        return (
                            <li key={listin.indexOf(elem)}>
                                <Person>
                                    <ul>
                                        <li>Name: {elem.name}</li>
                                        <li>Lastname: {elem.lastname}</li>
                                        <li>Email: {elem.email}</li>
                                    </ul>
                                    <BinButton onClick={async () => {
                                        try {
                                            await axios({
                                                method: 'post',
                                                url: 'http://127.0.0.1:4000/free',
                                                headers: { 'Content-type': 'application/json' },
                                                data: {
                                                    name: elem.name,
                                                    lastname: elem.lastname,
                                                    email: elem.email
                                                }
                                            }).then(res => {
                                                console.log(res.data)
                                                refresh(res.data)
                                            });
                                        } catch (error) {
                                            alert(`${error}
                                            Error 409: Introduce un correo
                                            Error 400: Correo ya registrado
                                            Error 500: Algo ha ido mal al registrarse
                                            `)
                                        }

                                    }}>
                                        <img className="Basura" src={basura} width="30px" />
                                    </BinButton>
                                </Person>
                            </li>
                        )
                    })}
                </ul>
            </List>
        </ContainerList>
    );
}
export const FootPage: FC = () => {
    return (
        <footer>
            <p><em>Created by <br />Santiago Molpeceres Díaz <br /> &#38; <br /> Maria Gonzalez Herrero</em></p>
        </footer>
    )
}




export default DataInput;





//styled

const Relleno = styled.input`
    width: 419px;
    height: 34px;
    padding: 7px;
    background-color: white;
    font-size: 16px;
    border-radius: 40px;
    color: black;
    font-weight: bold;
    margin: 12px;
`

const Container = styled.div`
    display: flex;
    background: linear-gradient(white,#A7ACB0,#B2DBF8,#B2DBF8,#99D0F6);
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    padding:27px;
    border: 50px;
    border-radius: 50px;
    -webkit-borser-radius:50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: -webkit-fill-available;
    & h1{
        color : white ;
    }
`

const InputsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: -webkit-fill-available;
justify-content: space-evenly;
`

const Button = styled.button`
width: 208px;
height: 43px;
padding: 3px;
margin: 12px;
border: 200px;
border-radius: 200px;
-webkit-borser-radius:200px;
background: radial-gradient(#53D4D0, white);
transition: .1s;
margin-top: 40px;
letter-spacing: 4px;


&:hover {
background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}
&:active{
    color: black;
    background: radial-gradient(aqua,white,aqua);
}
&:active p{
    color: black;
}
& p{
    color: white;
}
`

const ContainerList = styled.div`
    display: flex;
    padding: 27px;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    align-items: center;
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    border: 30px;
    border-radius: 30px;
    -webkit-borser-radius:30px;
    background-image: url(https://img4.viajar.elperiodico.com/ee/6b/f0/carpatos.jpg);
    background-size: cover;
    & h1{
        color:white;
    }
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    overflow-y: auto;
    & ul{
        height: -webkit-fill-available;
        width: -webkit-fill-available;
        list-style:none;
    }
`

const Person = styled.div`
display: flex;
background-color: #DDDDDD;
opacity: 80%;
justify-content: space-between;
height: 70px;
width: -webkit-fill-available;
margin: 8px;
flex-direction: row;
align-items: center;
border: 30px;
border-radius: 30px;
-webkit-borser-radius:30px;
& ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: -webkit-fill-available;
    list-style: square;
}
`
const BinButton = styled.button`
margin: 20px;
border: 1px solid;
border-radius:20px;
-webkit-borser-radius:20px;

&:hover{
    background: linear-gradient(white,pink, red);
}
&:active{
    background: red;
}
`