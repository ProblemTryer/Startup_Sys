


// fetch the function logs
// serverless logs -f hello -t
module.exports.hello = async (event) =>{
    if (event.path === '/whoami' && event.httpMethod === 'GET'){
        return{
            statusCode: 200,
            body: JSON.stringify({username: 'jh2695'})
        }
    }
    return{
        statusCode: 200,
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