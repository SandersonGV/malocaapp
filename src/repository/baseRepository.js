import axios from 'axios';

var baseurl= 'https://data.mongodb-api.com/app/data-zmzdo/endpoint/data/v1/action/';
var baseData = {
    "collection": "malocaInfo",
    "database": "malocadb",
    "dataSource": "Maloca",

};

var config = {
    method: 'post',
    url: baseurl,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'qjospAZINXgAXKmV8XhUdAlBZpO2QBMJwYbUDWAn2RbZjCeb7gz3EoxrmSvPAyTa',
    },

};
var BaseRepository ={};

BaseRepository.findOne = async function(id) {
    let data = baseData;
    data.filter = { "_id": id };
    config.url += 'findOne';
    config.data = JSON.stringify(data);

    let response = await axios(config);
    return response.data;
}

BaseRepository.insertOne = async function (obj){
    let data = baseData;
    data.document = obj;
    config.url += 'insertOne';
    config.data = JSON.stringify(data);

    let response = await axios(config);
    return response.data;
}

BaseRepository.updateOne = async function (id, obj)  {
    let data = baseData;
    data.filter = { "_id": id };
    data.update = obj;
    config.url += 'updateOne';
    config.data = JSON.stringify(data);

    let response = await axios(config);
    return response.data;
}

export default BaseRepository;