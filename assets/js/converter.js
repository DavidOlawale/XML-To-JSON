let rawConvertBtn =  document.getElementById('raw-convert-btn');
let fileConvertBtn =  document.getElementById('file-convert-btn');
let rawLoad = document.getElementById('raw-load');
let fileLoad = document.getElementById('file-load');
let rawJsonField = document.getElementById('raw-json-field');
let fileJsonField = document.getElementById('file-json-field');

rawConvertBtn.onclick = function() {
    this.textContent = 'processing';
	rawLoad.classList = 'm-2 fa fa-cog fa-spin fa-lg';
	let xmlData = document.getElementById('xml-field').value;
	rawJsonField.value = xmlData;
	this.textContent = 'Processed';
	rawLoad.classList = 'm-2 fa fa-pass';
};

fileConvertBtn.onclick = function() {
    this.textContent = 'processing';
	fileLoad.classList = 'm-2 fa fa-cog fa-spin fa-lg';
};