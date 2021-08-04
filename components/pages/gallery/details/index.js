import React from 'react';
import Layout from "../../../main/layout";
import GalleryCards from "./gallery_cards";
import Head from 'next/head';


function GalleryDetails({galleryItem}) {
    return (
        <Layout backgroundColor={"var(--primary)"}>
            <Head>
                <title>{galleryItem?.name}</title>
            </Head>
            <GalleryCards galleryItem={galleryItem}/>
        </Layout>
    );
}

export default GalleryDetails;