// This content is hosted at: https://github.com/yadsendew/ape-scripts/blob/main/index.js 
async function mpLoadTokens(url) {
  try {
    const response = await fetch(url, {
      "headers": {
        "accept": "application/json, text/plain, */*",
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
    return result;
  } catch (error) {
    console.error(`mpLoadTokens error: ${error}`);
  }
}

window.mpLoadTokens = mpLoadTokens;
