
export const validateText = (index: number) => {
    if (index >= 100) {
        return `#${index}`
    } else if (index >= 10) {
        return `#0${index}`
    } else {
        return `#00${index}`
    }
};

export const validateSecondText = (index: number) => {
    if (index >= 100) {
        return `${index}`
    } else if (index >= 10) {
        return `0${index}`
    } else {
        return `00${index}`
    }
};


export const transformDecimal = (number: number) => {
    return number / 10
}

export const cardColor = (type: string) => {
    switch (type) {
        case 'grass':
            return '#74CB48'
        case 'fire':
            return '#F57D31'
        case 'water':
            return '#6493EB'
        case 'normal':
            return '#AAA67F'
        case 'rock':
            return '#B69E31'
        case 'ghost':
            return '#70559B'
        case 'fighting':
            return '#C12239'
        case 'steel':
            return '#B7B9D0'
        case 'flying':
            return '#A891EC'
        case 'poison':
            return '#A43E9E'
        case 'ground':
            return '#DEC16B'
        case 'psychic':
            return '#FB5584'
        case 'ice':
            return '#9AD6DF'
        case 'dark':
            return '#75574C'
        case 'electric':
            return '#F9CF30'
        case 'fairy':
            return '#E69EAC'
        case 'dragon':
            return '#7037FF'
        case 'bug':
            return '#A7B723'
    }
};

export const translateText = (text: string) => {
    switch (text.toLowerCase()) {
        case 'grama':
            return 'grass'
        case 'fogo':
            return 'fire'
        case 'água':
            return 'water'
        case 'agua':
            return 'water'
        case 'normal':
            return 'normal'
        case 'pedra':
            return 'rock'
        case 'fantasma':
            return 'ghost'
        case 'ludator':
            return 'fighting'
        case 'ferro':
            return 'steel'
        case 'voador':
            return 'flying'
        case 'venenoso':
            return 'poison'
        case 'terra':
            return 'ground'
        case 'psíquico' || 'psiquico':
            return 'psychic'
        case 'psiquico':
            return 'psychic'
        case 'gelo':
            return 'ice'
        case 'escuridão':
            return 'dark'
        case 'escuridao':
            return 'dark'
        case 'elétrico':
            return 'electric'
        case 'eletrico':
            return 'electric'
        case 'fada':
            return 'fairy'
        case 'dragão':
            return 'dragon'
        case 'dragao':
            return 'dragon'
        case 'inseto':
            return 'bug'
    }
}