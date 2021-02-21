import React, { Fragment,useState,useEffect } from 'react';
import axios from "axios";
import Layout from "../components/layout";
import Search from '../components/Search/search';
import Jokes from "../components/Jokes/Jokes";

export default function Index () {
    const [jokes, setJokes] = useState([]);
    const [searchJoke, setSearchJoke] = useState("");
    const setJokesQuery = (text) => {
        setSearchJoke(text);
        getSomeJokes(text);
    }
    const getSomeJokes = async (searchJoke) => {
        const res = await axios.get(`https://icanhazdadjoke.com/search?term=${searchJoke}`, {
            headers: {
                "Accept":"application/json"
            }
        });
        setJokes(res.data.results);
        if (searchJoke == undefined) {
            const res = await axios.get(`https://icanhazdadjoke.com/search`, {
                headers: {
                    "Accept":"application/json"
                }
            });
            setJokes(res.data.results);
        }
    }
    useEffect(() => {
        getSomeJokes();
    }, [jokes]);
    return (
        <Fragment>
            <Layout title="Random Dad Jokes">
                <Search text={searchJoke} onTextChange={setJokesQuery} />
                <Jokes jokes={jokes} />
            </Layout>
        </Fragment>
    );
}
