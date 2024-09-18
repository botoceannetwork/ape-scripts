async function createApeToken(imageBase64, imageType, chainId, creator, name, symbol, description, telegram, twitter, website) {
  const formData = new FormData();
  const blob = base64ToBlob(imageBase64, imageType);
  formData.append('files', blob, imageType);
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
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

function base64ToBlob(base64, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(base64.split(',')[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

window.createApeToken = createApeToken;
