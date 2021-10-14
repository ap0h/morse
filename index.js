const { sendResult, getToken } = require('./client')
const { decode } = require('jsonwebtoken')

const MORSE_MAPPING = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----',
    ':': '---...',
    ' ': '/',
}

const main = async () => {
    const token = await getToken()
    const { exp } = decode(token.value)
    let text = `Vega IT Omega : ${exp}`;
    const result = text.replace(/./gm, ([x]) => `${MORSE_MAPPING[x.toLowerCase()]} `).trim();
    console.log('🚀 -> file: index.js -> line 50 -> main -> result', result)

    const message = await sendResult({
        firstName: 'Nemanja',
        lastName: 'Stankovic',
        email: 'neca.rxrx@gmail.com',
        githubUrl: 'https://github.com/ap0h/morse.git',
        result
    })
    console.log('🚀 -> file: index.js -> line 59 -> main -> message', message)

}

main()