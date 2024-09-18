async function createApeToken(imageBase64, imageType, chainId, creator, name, symbol, description, telegram, twitter, website) {
  const formData = new FormData();
  const byteCharacters = atob(imageBase64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: imageType });
  formData.append('files', blob, 'image');
  formData.append('data.Chain', `${chainId}`);
  formData.append('data.Creator', creator);
  formData.append('data.Name', name);
  formData.append('data.Symbol', symbol);
  formData.append('data.Description', description);
  formData.append('data.Telegram', telegram);
  formData.append('data.Twitter', twitter);
  formData.append('data.Website', website);

  try {
    const response = await fetch('https://ape.store/api/token', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('createApeToken success: ', result);
    return result;
  } catch (error) {
    console.error('createApeToken error:', error);
    throw new Error(`createApeToken error: ${error}`);
  }
}

window.createApeToken = createApeToken;
