type csType = (...rest: Array<string>) => string

// Function for composing styles
const cs: csType = (...rest) => {
    return rest.join(" ")
}

export default cs;