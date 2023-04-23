export const formatDate = dateProps => {
    let yy = dateProps.slice(0, 4)
    let mm = dateProps.slice(5, 7)
    let dd = dateProps.slice(8, 10)

    return dd + '.' + mm + '.' + yy
}