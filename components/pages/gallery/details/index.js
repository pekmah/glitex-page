import React from 'react';
import Layout from "../../../main/layout";
import GalleryCards from "./gallery_cards";

const cards = [
    'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg',
    '/images/portfolio/nuru_app/nuru_app.jpg',
    '/images/portfolio/services_app/services_app.jpg',
    '/images/portfolio/destiny_capsules/destiny_capsules.jpg',
]

function GalleryDetails() {
    return (
        <Layout>
            <GalleryCards cards={cards}/>
        </Layout>
    );
}

export default GalleryDetails;