export interface routeOptionType {
    routeOption : {
        id: string,
        text: string,
        icon: string,
        link: string
    },
    iteratorIndex : number
}

export interface expDetailType {
    expDetail : {
        id: string,
        timeline: string,
        title: string,
        expText: string
    }
}

export interface bookDetailType {
    id : number,
    titlejp : string,
    titleen : string,
    author : string,
    category : string,
    genre : string,
    publisher : string,
    cover : string,
    bookmeter ?: string
}

export interface bookDetailFetch {
    id : number,
    titlejp : string,
    titleen : string,
    author : string,
    category : string,
    genre : string,
    publisher : string,
    cover : string,
    book_id: number,
    imagelinks: string,
    bookmeter ?: string
}