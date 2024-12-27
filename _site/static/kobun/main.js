
/*
* 0 = 未然形
* 1 = 連用形
* 2 = 終止形
* 3 = 連体形
* 4 = 已然形
* 5 = 命令形
*/

var currentVerb;
var currentQuestion;
var currentJodoushi;
var currentVerbKumi;
var currentQuestionKumi;
const allVerbKeys = Object.keys(verbs);
const allJodoushi = Object.keys(jodoushi);
const allVerbCount = allVerbKeys.length;
const allJodoushiCount = allJodoushi.length;
const questions = ["未然形", "連用形", "終止形", "連体形", "已然形", "命令形"];
const connExamples = ["ず", "たり", "。", "時", "ども", "！！"]

function compareVerbKumiAnswer(answerVerb, answerJodoushi) {
	if (currentVerbKumi["type"] == "vr" && currentJodoushi["connection"] == 2) {
		// ラ変 needs 連体形 for 終止形 connection 助動詞
		var correctVerb = currentVerbKumi["conjyomi"][3];
	} else {
		var correctVerb = currentVerbKumi["conjyomi"][currentJodoushi["connection"]];
	}	
	var correctJodoushi = currentJodoushi["conj"][currentQuestionKumi];
	console.log(correctVerb + " + " + correctJodoushi);
	if (answerVerb != correctVerb || answerJodoushi != correctJodoushi) {
		document.getElementById("verbKumiResult").textContent = "✖︎";
		document.getElementById("verbKumiResult").style.opacity = "1";
		setTimeout(function(){ document.getElementById("verbKumiResult").style.opacity = "0"; }, 400);
		return false;
	}
	document.getElementById("verbKumiResult").textContent = "☑️";
	document.getElementById("verbKumiResult").style.opacity = "1";
	setTimeout(function(){ document.getElementById("verbKumiResult").style.opacity = "0"; }, 400);
	loadNextVerbKumiQuestion();
}

function loadNextVerbKumiQuestion(presetVerb = null, presetJodoushi = null) {
	document.getElementById("verbKumiVerbAnswer").value = "";
	document.getElementById("verbKumiJodoushiAnswer").value = "";
	if (!presetVerb) {
		currentVerbKumi = getRandomVerb();
	} else {
		currentVerbKumi = presetVerb;
	}
	if (!presetJodoushi) {
		currentJodoushi = getRandomJodoushi();
	} else {
		currentJodoushi = presetJodoushi;
	}
	currentQuestionKumi = 6 * Math.random() << 0;
	
	// check for invalid combinations
	if (currentJodoushi["validVerbs"] != "all" && !currentJodoushi["validVerbs"].includes(jodoushiTypeMap[currentVerbKumi["type"]])) {
		//console.log("invalid combination verb+jodoushi");
		//console.log(currentVerbKumi);
		//console.log(currentJodoushi);
		loadNextVerbKumiQuestion(
			currentVerbKumi,
			jodoushi[
				currentJodoushi["alternative"]
			]
		);
		return;
	}
	if (currentJodoushi["conj"][currentQuestionKumi] == "") {
		//console.log("invalid combination jodoushi+conjugation");
		//console.log(currentJodoushi);
		//console.log(questions[currentQuestionKumi]);
		loadNextVerbKumiQuestion(currentVerbKumi, currentJodoushi);
		return;
	}
	
	document.getElementById("currentVerbKumi").textContent = currentVerbKumi["verb"];
	document.getElementById("currentVerbYomiKumi").textContent = currentVerbKumi["yomi"];
	document.getElementById("currentJodoushi").textContent = currentJodoushi["question"];
	document.getElementById("verbKumiQuestion").textContent = questions[currentQuestionKumi];
	document.getElementById("verbKumiAnswerConnectionEx").textContent = connExamples[currentQuestionKumi];
}

function compareVerbAnswer(answer) {
	var correct = currentVerb["conjyomi"][currentQuestion];
	console.log(correct);
	if (answer != correct) {
		document.getElementById("verbResult").textContent = "✖︎";
		document.getElementById("verbResult").style.opacity = "1";
		setTimeout(function(){ document.getElementById("verbResult").style.opacity = "0"; }, 400);
		return false;
	}
	document.getElementById("verbResult").textContent = "☑️";
	document.getElementById("verbResult").style.opacity = "1";
	setTimeout(function(){ document.getElementById("verbResult").style.opacity = "0"; }, 400);
	loadNextVerbQuestion();
}

function loadNextVerbQuestion() {
	document.getElementById("verbAnswer").value = "";
	currentQuestion = 6 * Math.random() << 0;
	currentVerb = getRandomVerb();
	document.getElementById("currentVerb").textContent = currentVerb["verb"];
	document.getElementById("currentVerbYomi").textContent = currentVerb["yomi"];
	document.getElementById("verbQuestion").textContent = questions[currentQuestion];
	document.getElementById("verbAnswerConnectionEx").textContent = connExamples[currentQuestion];
}

function getRandomJodoushi() {
	return jodoushi[allJodoushi[ allJodoushiCount * Math.random() << 0]];
}

function getRandomVerb() {
	return getVerb(allVerbKeys[ allVerbCount * Math.random() << 0]);
}

function getVerb(searchText) {
	// Get verb data
	// console.log(verbs[searchText]);
	var verbData = verbs[searchText];
	if (!verbData) return;
	// Get conjugation data
	// console.log(types[verbData["type"]]);
	var typeData = types[verbData["type"]];
	if (!typeData) return;
	// Generate full conjugations
	verbData["conj"] = typeData.map((gobi) =>
		verbData["gokan"] + gobi
	);
	verbData["conjyomi"] = typeData.map((gobi) =>
		verbData["gokanyomi"] + gobi
	);
	// Add key itself
	verbData["verb"] = searchText;
	return verbData;
}

document.getElementById("verbForm").addEventListener('submit', e => {
  e.preventDefault();
  compareVerbAnswer(document.getElementById("verbAnswer").value);
});
document.getElementById("verbKumiForm").addEventListener('submit', e => {
  e.preventDefault();
  compareVerbKumiAnswer(document.getElementById("verbKumiVerbAnswer").value, document.getElementById("verbKumiJodoushiAnswer").value);
});
loadNextVerbQuestion();
loadNextVerbKumiQuestion();