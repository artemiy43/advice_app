class Api {
    
    _checkStatus(res) {
        if (res.ok) {
        return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getAdvice() {
    return fetch('https://api.adviceslip.com/advice', {
        method: 'GET',
      })
      .then((res) =>{
        return this._checkStatus(res);
      });
    }
}

export const api = new Api();