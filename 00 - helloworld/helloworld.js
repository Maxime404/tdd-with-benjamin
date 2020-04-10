export function helloWorld(name = 'World') {
    return typeof name === 'string' ? name === 'Majdi' ? 'Yooooo!' : `Hello, ${name}` : false;
}
