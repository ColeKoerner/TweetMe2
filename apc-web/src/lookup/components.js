function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export function backendLookup(method, endpoint, callback, data){
    let jsonData;
    if (data){
        jsonData = JSON.stringify(data);
    }

    const xhr = new XMLHttpRequest()
    const url = `http://localhost:8000/api${endpoint}`
    xhr.responseType = "json"
    const csrftoken = getCookie('csrftoken');
    xhr.open(method, url)
    xhr.setRequestHeader("Content-Type", "application/json")
    if (csrftoken) {
        // xhr.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest")
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
        xhr.setRequestHeader("X-CSRFToken", csrftoken)
    }
    xhr.onload = function() {
        if(xhr.status === 403){
            const detail = xhr.response.detail
            if (detail === "Authentication credentials were not provided."){
                if (window.location.href.indexOf("login") === -1) {
                    window.location.href = "/login?showLoginRequired=true"
                }
            }
        }
        callback(xhr.response, xhr.status)
    }
    xhr.onerror = function (e) {
        callback({"message": "The request was an error"}, 400)
    }
    xhr.send(jsonData)
}

export function billLookup(method, callback){
    // let jsonData;
    // if (data){
    //     jsonData = JSON.stringify(data);
    // }

    const xhr = new XMLHttpRequest()
    const url = 'https://v3.openstates.org/bills?jurisdiction=Kansas&sort=latest_action_desc&page=1&per_page=10&apikey=c642c09c-35fd-4d20-9291-c0c01fe0c28b'
    xhr.responseType = "json"
    const csrftoken = getCookie('csrftoken');
    xhr.open(method, url)
    xhr.setRequestHeader("Content-Type", "application/json")
    if (csrftoken) {
        // xhr.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest")
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
        xhr.setRequestHeader("X-CSRFToken", csrftoken)
    }
    xhr.onload = function() {
        if(xhr.status === 403){
            const detail = xhr.response.detail
            if (detail === "Authentication credentials were not provided."){
                if (window.location.href.indexOf("login") === -1) {
                    window.location.href = "/login?showLoginRequired=true"
                }
            }
        }
        callback(xhr.response, xhr.status)
    }
    xhr.onerror = function (e) {
        callback({"message": "The request was an error"}, 400)
    }
    // xhr.send(jsonData)
    xhr.send()
}