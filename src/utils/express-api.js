class api {
  constructor(url) {
    this._url = url;
  };

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    };
  };
};

const expressApi = new api('http://localhost:3001/');

export default expressApi;