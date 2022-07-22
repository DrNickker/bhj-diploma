/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;

    const formData = new FormData();
    let queryParams = '';
    if (options.data !==undefined) {
        if (options.method === 'GET') {
            queryParams = '?' + Object.entries(options.data).map(
                ([Key, value]) => '${encodeURIComponent(key)}=${encodeURIComponent(value)}'
             ).join('&');
        } else {
            Object.entries(options.data).forEach(v => formData.append(...v));
        }
    }





    

xhr.open(options.method, options.url + queryParams);
xhr.send(formData);
    

};
