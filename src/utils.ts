
export const format = (val: string) => `$` + val
export const parse = (val: string) => val.replace(/^\$/, '')
