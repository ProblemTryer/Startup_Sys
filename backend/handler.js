var testJson = require('./test.json');
const firebaseTokenVerifier = require('firebase-token-verifier');

// Create DynamoDB document client
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });

const headers = {
    'Access-Control-Allow-Origin': '*'
}

const checkUser = async (event) => {
    const token = event.headers['Authorization']
    if (!token) {
        throw new Error('Missing token')
    }
    const decodedUser = await firebaseTokenVerifier.validate(token, projectId)
    return decodedUser
}

const putVideo = (UserID, ClubName, JoureyTitle, ProblemIndex, timeStamp, data) => {
    return docClient
    .put({
        TableName: "ClubVideos",
        Item: {
            user_id: UserID,
            club_name: ClubName,
            title: JoureyTitle,
            problem_index: ProblemIndex,
            time_stamp: timeStamp,
            data: ''
        },
    })
    .promise();
};

const getUserVideo = (user_id) => {
    return docClient
        .query({
            TableName: "ClubVideos",
            KeyConditionExpression: "user_id = :user_id",
            ExpressionAttributeValues: {
                ":user_id": user_id,
            },
        })
        .promise()
        .then((response) => response.Items);
};
    

const getUserSClubVideo = (user_id, club_name) => {
    return docClient
        .query({
            TableName: "ClubVideos",
            KeyConditionExpression: "user_id = :user_id and club_name = :club_name",
            ExpressionAttributeValues: {
                ":user_id": user_id,
                ":club_name": club_name,
            },
        })
        .promise()
        .then((response) => response.Items);
};


const getUserSOneVideo = (user_id, timeStamp ) => {
    return docClient
        .query({
            TableName: "ClubVideos",
            KeyConditionExpression: "user_id = :user_id and timeStamp = :timeStamp",
            ExpressionAttributeValues: {
                ":user_id": user_id,
                ":timeStamp": timeStamp,
            },
        })
        .promise()
        .then((response) => response.Items);
};



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
            body: JSON.stringify({
                data: new Date(),
                headers})
        }
    }
    if (event.path === '/tags' && event.httpMethod === 'GET'){
        const projectId = 'sadpandas-81a75'
        const token =  event.headers['Authorization']
        console.log(token)
        // If no token is provided, or it is "", return a 401
        if (!token) {
            return {
                headers,
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
                headers,
                statusCode: 401
            }
        }
        return{
            statusCode: 200,
            headers,
            body: JSON.stringify(testJson)
        }
    }

    if (event.path === '/getVideo' && event.httpMethod === 'POST'){
        const video = await putVideo(token, "LonelyPandas", "My Experience in COVID", "P1", Date.now() , '')
    }

    if (event.path === '/getVideo' && event.httpMethod === 'GET'){
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

        const video = await putVideo(token, "LonelyPandas", "My Experience in COVID", "P1", Date.now() , '')
        // const UserVideo = await getUserVideo(token)
        return{
            statusCode: 200,
            headers,
            body: JSON.stringify(video)
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