var testJson = require('./test.json');
const firebaseTokenVerifier = require('firebase-token-verifier');

const headers = {
    'Access-Control-Allow-Origin': '*'
}

// fetch the function logs
// serverless logs -f hello -t
module.exports.hello = async (event) =>{
    if (event.path === '/whoami' && event.httpMethod === 'GET'){
        return{
            statusCode: 200,
            headers,
            body: JSON.stringify({username: 'jh2695'})
        }
    }
    if (event.path === '/orders' && event.httpMethod === 'GET'){
        return{
            statusCode: 200,
            headers,
            body: JSON.stringify({username: 'jh2695'})
        }
    }
    if (event.path === '/tags' && event.httpMethod === 'GET'){
        const projectId = 'sadpandas-81a75'
        const token =  event.headers['Authorization']
        console.log(token)
        // If no token is provided, or it is "", return a 401
        if (!token) {
            return {
                statusCode: 401
            }
        }
        try {
            // validate the token from the request
            const decoded = await firebaseTokenVerifier.validate(token, projectId)
        } catch (err) {
            // the token was invalid,
            console.error(err)
            return {
              statusCode: 401
            }
        }
        return{
            statusCode: 200,
            headers,
            body: JSON.stringify(testJson)
        }
    }
    return{
        statusCode: 200,
        headers,
        body: JSON.stringify(
            {
                message: "hello world",
                input: event,
            },
            null,
            2
        ),
    };
};