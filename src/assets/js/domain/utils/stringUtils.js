export function capitalize(text) {
    if (text.length === 0) return ''

    return text[0].toUpperCase() + text.substring(1)
}