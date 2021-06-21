import React, { createContext, useContext, useState } from 'react';
import {Keyboard} from "react-native";

import {
    Hero
} from '../shared/types';


import api from "../services/api";



export interface ContextProps {
    heros: Hero[],
    heroname:any,
    loading: boolean,
    errors: any[],
    fetchHeros: () =>void,
    fetchHero: (heroname : Hero[]) =>void,
    searchHero:(navigation  ) =>void,
    setHeroName: (text: string) =>void,
}

export const HeroContext = createContext<ContextProps>({} as ContextProps);

export const HeroProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState([]);
    const [heros, setHeros] = useState([]);
    const [heroname ,setHeroName] = useState('')
    
    const generateRandomHeroIds = () => {
        let ids = [];
        for (let i = 0; i < 10; i++) {
            ids = [...ids, Math.floor(Math.random() * (731 - 1 + 1)) + 1];
        }
        return ids;
    }

    const fetchHeros = async () => {
        setLoading(true);
        const heroIds = generateRandomHeroIds();
        const promises = await heroIds.map(async (id: number) => {
            return api
                .get("/" + id)
                .then(function (response) {
                    return {
                        data: response.data,
                    };
                })
                .catch(function (error) {
                    setErrors(e => [...e, error]);
                });
        })
        const response = await Promise.all(promises);
        setLoading(false);
        setHeros(response);
    }

    const fetchHero = async (heroname) => {
        setLoading(true);
        const heroresponse = await  api
                .get("/search/" + heroname)
                .then(function (response) {
                    return response.data.results
                })
                .catch(function (error) {
                    setErrors(e => [...e, error]);
                });
        setLoading(false);
        setHeroName('')
        return heroresponse
        
    }

    const searchHero = async (navigation) =>{
    Keyboard.dismiss()
    const data = await fetchHero(heroname)
    if (data !== undefined){
    navigation.push("Details", {
      hero: data[0],
    })}else{
      alert('Name not Found')
    }
  }

    return (
        <HeroContext.Provider value={{
            loading,
            errors,
            heros,
            fetchHeros,
            fetchHero,
            heroname,
            setHeroName,
            searchHero
        }}>
            {children}
        </HeroContext.Provider>
    )
}

export const useHeroContext = () => {
    const context = useContext(HeroContext);

    if (!context) {
        throw Error("useHeroContext must be in HeroProvider");
    }
    
    return context;
}