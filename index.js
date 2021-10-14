const { sendResult, getToken } = require('./client')
const { decode } = require('jsonwebtoken')
const MORSE_MAPPING = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
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
    ' ': ' ',
}

const main = async () => {
    const token = await getToken()
    console.log('🚀 -> file: index.js -> line 46 -> main -> token', token)
    const { exp } = decode(token.value)
    let text = `Vega IT Omega : ${exp}`;
    console.log('🚀 -> file: index.js -> line 49 -> main -> text', text)
    const r1 = text.replace(/./gm, ([x]) => `${MORSE_MAPPING[x.toUpperCase()]} `).trim();

    console.log(r1)

}
main();