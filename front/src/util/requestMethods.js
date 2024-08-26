/* ====== Common Post Request Function ====== */
export async function postRequest(url, options) {
  const defaultOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };
  return await fetch(url, defaultOptions).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}
