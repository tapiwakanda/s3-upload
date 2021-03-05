const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.s3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secreteAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const filename = 'Login.png';

const uploadFile = () => {
    fs.readFile(filename, (err, data) => {
        if (err) throw err;
        const params = {
            Bucket: 'tkanda123',
            Key: 'Login.png',
            Body: JSON.stringify(data, null, 2)
        };
        s3.upload(params, function(sErr, data){
            if (sErr) throw sErr
            console.log(`File Uploaded successfully at ${data.Location}` )
        })
    })
}
uploadFile();


