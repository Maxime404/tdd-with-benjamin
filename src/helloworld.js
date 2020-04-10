export function helloWorld (name = '') {
    let toReturn = ''

    if (name === '') toReturn = 'Hello, World'

    if (name === 'Majdi') toReturn = 'Yooooo!'

    if (name !== '' && name !== 'Majdi') toReturn = `Hello, ${name}`

    return toReturn
}
