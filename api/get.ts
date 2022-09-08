import headers from './headers';

const get = async (url:string, signal?) => {
  try {
    const response = await fetch(url, {
      headers: {
        ...headers
      },
      signal: signal,
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default get;
