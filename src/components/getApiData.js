async function getApiData(username = "Archaeologist03") {
    const api = `https://api.github.com/users/${username}`;

    let response = await fetch(api);
    let data = await response.json();

    return data;
}

export default getApiData;

