// This content is hosted at: https://github.com/yadsendew/ape-scripts/blob/main/index.js 
async function mpLoadTokens(pageNumber) {
  try {
    const response = await fetch(`https://app.geckoterminal.com/api/p1/tags/pump-fun/pools?page=${pageNumber}&include=dex.network%2Ctokens&volume_24h%5Bgte%5D=30000&pool_creation_hours_ago%5Blte%5D=12`, {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "if-none-match": "W/\"ba0d9a51a476c533651215d5093d022e\"",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not;A=Brand\";v=\"24\", \"Chromium\";v=\"128\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
      },
      "referrer": "https://www.geckoterminal.com/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "omit"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('mpLoadTokens Success:', result);
    return result;
  } catch (error) {
    console.error('mpLoadTokens Error:', error);
  }
}

window.mpLoadTokens = mpLoadTokens;
