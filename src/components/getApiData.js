async function getApiData(username = "archaeologist03") {
    const api = `https://api.github.com/users/${username}`;

    let response = await fetch(api);
    let data = await response.json();

    // return data.url ? data : data.message
    console.log(data.message);
    

    return data;
}

export default getApiData;

