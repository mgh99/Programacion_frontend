import axios from 'axios';
import React from 'react';


export const getUsers = async ()=> {
    return await axios({
        method: 'get',
        url: 'http://localhost:4000/people',
        headers: { 'Content-type': 'application/json' },
        data: {
        }
      });
}