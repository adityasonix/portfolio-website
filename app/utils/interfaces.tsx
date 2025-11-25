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
    originallang: string,
    titlejp : string,
    titleen : string,
    author : string,
    category : string,
    genre : string,
    publisher : string,
    cover : string,
    bookmeter ?: string,
    amazon ?: string
}

export interface bookDetailFetch {
    id : number,
    originallang: string,
    titlejp : string,
    titleen : string,
    author : string,
    category : string,
    genre : string,
    publisher : string,
    cover : string,
    book_id: number,
    imagelinks: string,
    bookmeter ?: string,
    amazon ?: string
}

export interface projectContentType {
    id : string,
    title : string,
    description : string,
    techstack : string[],
    imgUrl : string,
    footerLinks : string[]
}