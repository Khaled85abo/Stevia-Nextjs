import Commerce from '@chec/commerce.js'

let commerce = null ;
function getCommerce(commercePublickey){
    if(commerce){
        return commerce
    
    } else {
        const publicKey  = commercePublickey || process.env.COMMERCE_PUBLIC_KEY;
        const devEnvironment = process.env.NODE.Env === 'development'
        if(devEnvironment && !publicKey){
            throw Error('Commerce publiv API key is not found.')
        }
        commerce = new Commerce(publicKey, devEnvironment)
        return commerce
    }
}

export default getCommerce;