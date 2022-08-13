

export const getItem = (key: string) => {
    const item = localStorage.getItem(key)
    if (!item) return null
    return JSON.parse(item)
}

export const setItem = (key: string, value: any) => {
    const stringValue = JSON.stringify(value)
    localStorage.setItem(key, stringValue)
}