export const initRequiredProperties = () => {
    //let's set a global document,sessionStorage and localStorage variable to avoid reference errors.
    global.document = undefined;
    global.window = undefined;
    global.localStorage = undefined;
    global.sessionStorage = undefined;
}


export const getGallerySlug = (gallery, index) => {
    return `/gallery/${gallery?.name?.replace(/ /g, "-")}-${index}`;
}

export const getServiceSlug = (service, index) => {
    return `/services/${service?.title?.replace(/ /g, "-")}-${index}`;
}