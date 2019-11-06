let rawConvertBtn =  document.getElementById('raw-convert-btn');
let fileConvertBtn =  document.getElementById('file-convert-btn');
let rawLoad = document.getElementById('raw-load');
let fileLoad = document.getElementById('file-load');
let rawJsonField = document.getElementById('raw-json-field');
let fileJsonField = document.getElementById('file-json-field');

rawConvertBtn.onclick = function() {
    this.textContent = 'processing';
	rawLoad.classList = 'm-2 fa fa-cog fa-spin fa-lg';
	let xmlString = document.getElementById('xml-field').value;
	let parser = new DOMParser();
	let xmlNode = parser.parseFromString(xmlString, 'text/xml');
	rawJsonField.value = JSON.stringify(convert(xmlNode));

	//Finished
	this.textContent = 'Processed';
	rawLoad.classList = 'm-2 fa fa-pass';
};

fileConvertBtn.onclick = function() {
    this.textContent = 'processing';
	fileLoad.classList = 'm-2 fa fa-cog fa-spin fa-lg';
};

function convert(xmlNode){
	let children = xmlNode.childNodes;
	let elementChildren = xmlNode.children;
	if (elementChildren.length > 1 && elementChildren[0].nodeName == elementChildren[1].nodeName) {
		jsonData = processArray(elementChildren)
	}
	else{
		jsonData = processObject(children);
	}

	return jsonData;
}

function processObject(children){
	let jsonData = {};
	for (let i = 0; i < children.length; i++){
		const child = children[i];
		if (child.nodeType == 3) {
			//check if it contains only white space
			if (child.nodeValue.trim() == '') {}
			else{
				jsonData[child.nodeName] = child.nodeValue;
			}
		}
		if (child.nodeType == 1) {
			if (child.childNodes.length == 1 && child.childNodes[0].nodeType == 3) {
				jsonData[child.nodeName] = child.childNodes[0].nodeValue;
			}
			else{
				jsonData[child.nodeName] = convert(child);
			}
		}
	}
	return jsonData;
}

function processArray(children){
	let jsonArray = [];
	for (let i = 0; i < children.length; i++){
		const child = children[i];
		jsonArray.push(convert(child));
	}
	return jsonArray;
}