// This content is hosted at: https://github.com/yadsendew/ape-scripts/blob/main/index.js 
async function mpLoadTokens(pageNumber) {
  try {
    const response = await fetch(`https://app.geckoterminal.com/api/p1/tags/pump-fun/pools?page=${pageNumber}&include=dex.network%2Ctokens&volume_24h%5Bgte%5D=30000&pool_creation_hours_ago%5Blte%5D=12`, {
        "cache": "default",
        "credentials": "omit",
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.9",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Priority": "u=3, i"
        },
        "method": "GET",
        "mode": "cors",
        "redirect": "follow",
        "referrer": "https://www.geckoterminal.com/",
        "referrerPolicy": "strict-origin-when-cross-origin"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('createApeToken Success:', result);
    return result;
  } catch (error) {
    console.error('createApeToken Error:', error);
  }
}

window.mpLoadTokens = mpLoadTokens;
