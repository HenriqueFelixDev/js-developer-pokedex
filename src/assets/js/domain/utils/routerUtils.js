export function getRouteParams() {
    const paramEntries = decodeURIComponent(location.search)
        .replace('?', '')
        .split('&')
        .map(param => param.split('='))
        
    const params = new Map(paramEntries)

    return params
}