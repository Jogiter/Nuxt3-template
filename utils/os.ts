// https://www.npmjs.com/package/ua-parser-js
import Parser from 'ua-parser-js'

export const parser = new Parser()

/**
 * use navigator to detect os
 * ! should not use this in server side
 */
export const isIOS = () => parser.getOS().name === 'iOS'
export const isAndroid = () => parser.getOS().name === 'Android'
