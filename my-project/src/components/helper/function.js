const shortTitle = (title) => {
    const splitTitle = title.split(" ");
    const newTitle = `${splitTitle[0]} ${splitTitle[1]}`
    return newTitle
}

export {shortTitle}