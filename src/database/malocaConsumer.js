import axios from 'axios'


var baseUrl = `https://malocadb-622a.restdb.io/rest/`;
var apikey = '6315f2900b7c265b2a0e77e1';
var malocaInfo={};

malocaInfo.getInfo = async() => {
    let response = await axios.get(baseUrl+"infos",
        {
            headers:
            {
                'cache-control': 'no-cache',
                'x-apikey': apikey
            }
        }).catch((err)=>{console.log(err)});
    
    return response.data[0]; 
}

malocaInfo.getServices = async() => {
    let response = await axios.get(baseUrl+"services",
        {
            headers:
            {
                'cache-control': 'no-cache',
                'x-apikey': apikey
            }
        }).catch((err)=>{console.log(err)});
    
    return response.data; 
}

malocaInfo.getProjects = async() => {
    let response = await axios.get(baseUrl+"projects",
        {
            headers:
            {
                'cache-control': 'no-cache',
                'x-apikey': apikey
            }
        }).catch((err)=>{console.log(err)});
    
    return response.data; 
}

malocaInfo.getTeam = async() => {
    let response = await axios.get(baseUrl+"team",
        {
            headers:
            {
                'cache-control': 'no-cache',
                'x-apikey': apikey
            }
        }).catch((err)=>{console.log(err)});
    
    return response.data; 
}

export default malocaInfo;