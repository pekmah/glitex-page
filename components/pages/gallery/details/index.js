import React from 'react';
import Layout from "../../../main/layout";
import GalleryCards from "./gallery_cards";


function GalleryDetails({galleryItem}) {
    return (
        <Layout backgroundColor={"var(--primary)"}>
            <GalleryCards galleryItem={galleryItem}/>
        </Layout>
    );
}

export default GalleryDetails;