import React from 'react';
import AllServices from "../../components/pages/services";
import {services} from "../../providers/services/data";

function Services({service}) {
    return (
        <AllServices service={service}/>
    );
}

export const getStaticProps = async ({params}) => {
    let service;
    try {
        const {id} = params;
        service = services[id.substr(id.lastIndexOf("-") + 1)];
    } catch (e) {
        console.log(e);
    }

    return {
        props: {service: service}
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    return {paths: [], fallback: 'blocking'}
}
export default Services;