var censoredWords = ["sad","bad","mad"];
var customcensoredWords = [];
function censor (inStr) {
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx],"****");
	};
	for (idx in customcensoredWords) {
		inStr = inStr.replace(customcensoredWords[idx],"****");
	};
	return inStr;
}

function addCensoredWord (word) {
	customcensoredWords.push(word);
}

function getCensoredWords (argument) {
	return censoredWords.concat(customcensoredWords);
}

export.censor = censor;
export.addCensoredWord = addCensoredWord;
export.getCensoredWords = getCensoredWords;