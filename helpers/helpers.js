export const initRequiredProperties = () => {
    //let's set a global document,sessionStorage and localStorage variable to avoid reference errors.
    global.document = undefined;
    global.window = undefined;
    global.localStorage = undefined;
    global.sessionStorage = undefined;
}
