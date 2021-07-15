import React from 'react';
import Layout from "../../main/layout";
import styles from './css/gallery.module.scss';
import bootstrapStyles from '../../css/bootstrap-grid.module.css';
import {portfolio} from "../../../providers/portfolio/data";
import {getGallerySlug} from "../../../helpers/helpers";

function TheGallery(props) {
    return (
        <Layout title={"Gallery"}>
            <div
                style={{
                    marginTop: "14rem",
                    marginLeft: 0,
                    marginRight: 0,
                }}
                className={bootstrapStyles.row}>
                {
                    portfolio.map((galleryItem, index) =>
                        <SingleGalleryItem key={galleryItem?.id} index={index} galleryItem={galleryItem}/>
                    )
                }
            </div>
        </Layout>
    );
}

function SingleGalleryItem({
                               galleryItem,
                               index
                           }) {
    return (
        <div style={{
            paddingBottom: "3rem",
            cursor: "pointer"
        }}
             onClick={() => {
                 window.location.href = getGallerySlug(galleryItem, index);
             }}
             className={`${bootstrapStyles['col-lg-4']} ${bootstrapStyles['col-md-6']}`}>
            <div
                style={{
                    backgroundImage: `url(${galleryItem.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
                className={styles.container}>
                <div className={styles.center}/>

                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }} className={styles.bottom}>
                    <h2 style={{
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem"
                    }} className="display-3">
                        {galleryItem.name}
                    </h2>
                    <p>
                        {galleryItem.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TheGallery;