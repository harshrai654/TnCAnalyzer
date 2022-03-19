function getURLAndText() {
   
	var privacyPolicy = document.URL + " " + document.getElementsByTagName("body")[0].innerText;
	return privacyPolicy;
}

chrome.extension.sendMessage({
    action: "returnPrivacyPolicy",
    source: getURLAndText(document)
});