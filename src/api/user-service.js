import req from './https.js'

export const apiUserGetToken = () => req('get','/Authorize/Token')
export const apiUserLoging = params => req('post','/Authorize',params)