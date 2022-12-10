export function roundDecimals(number, precision = 1) {
    const multiplier = Math.pow(10, precision)
    return Math.round(number * multiplier) / multiplier
}

export function convertDecimalToFeetAndInches(number) {
    const meterInFeet = 3.28084
    const realFeet = number * meterInFeet

    const feet = Math.floor(realFeet)
    const inches = roundDecimals((realFeet - feet) * 12)

    return `${feet}' ${inches}"`
}

export function convertKgToLibras(number) {
    const kgInLibras = 2.20462
    return number * kgInLibras
}