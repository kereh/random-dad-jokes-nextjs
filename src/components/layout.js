import React, { Fragment,Component } from 'react';
import Head from "next/head";
import { Container } from 'react-bootstrap';
import Header from './Header/header';

export default function layout ({title, children}) {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Container>
                    <Header/>
                    {children}
                </Container>
            </main>
        </Fragment>
    );
}
