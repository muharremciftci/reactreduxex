import {LISTE_EKLE} from "../types.js"

export const listekle = (sayi) => {
    return {
        type:LISTE_EKLE,
        payload: sayi,
    };
};

