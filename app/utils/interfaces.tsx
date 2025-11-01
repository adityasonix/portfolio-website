export interface routeOptionType {
    routeOption : {
        id: string,
        text: string,
        icon: string,
        link: string
    };
}

export interface expDetailType {
    expDetail : {
        id: string,
        timeline: string,
        title: string,
        expText: string
    }
}

export interface bookOverviewType {
    bookOverview : {
        id : string,
        titleen : string,
        author : string,
        category : string,
        genre : string
    }
}

export interface bookDetailType {
    bookDetail ?: {
        id : string,
        titlejp : string,
        titleen : string,
        author : string,
        category : string,
        genre : string,
        publisher : string,
        bookmeter : string,
        bookwalker : string
    }
}