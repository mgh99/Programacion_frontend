import React, { FC, useEffect, useState } from 'react';
import { getUsers } from './logica';
import DataInput, { Content, FootPage, Principal } from './returns';
import { User } from './types';

export const Padre: FC = ({ children }) => {
    const [lista,setLista]=useState<Array<User>>([]);

    useEffect(()=>{
        const getPeople = async ()=>{
            const people= await getUsers();
            console.log(people.data.length);
            setLista(people.data)
        }
        getPeople();
    },[]);

    return (
        <>
        <Principal key={"NoNecesita1"}/>
        <main>
        <DataInput key={"NoNecesita2"} refresh={setLista}/>
        <Content key={lista.length.toString()} refresh={setLista} listin={lista}/>
        </main>
        <FootPage/>
        </>
    );
}
