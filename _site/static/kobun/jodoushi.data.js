/*
* 0 = 未然形
* 1 = 連用形
* 2 = 終止形（ラ変は連体形）
* 3 = 連体形（不使用）
* 4 = 已然形（り　だけ）
* 5 = 命令形（不使用）
*/

let jodoushi = {
	// 未然形につく
	"る": { // 受身
		"connection": 0,
		"validVerbs": ["v4", "vn", "vr"],
		"conj": ["れ", "れ", "る", "るる", "るれ", "れよ"],
		"jodoushi": "る",
		"question": "る・らる",
		"alternative": "らる"
	},
	"らる": {
		"connection": 0,
		"validVerbs": ["v2-k", "v2-s", "v1-k", "v1-s", "vk", "vs"],
		"conj": ["られ", "られ", "らる", "らるる", "らるれ", "られよ"],
		"jodoushi": "らる",
		"question": "る・らる",
		"alternative": "る"
	},
	"す": { // 使役
		"connection": 0,
		"validVerbs": ["v4", "vn", "vr"],
		"conj": ["せ", "せ", "す", "する", "すれ", "せよ"],
		"jodoushi": "す",
		"question": "す・さす",
		"alternative": "さす"
	},
	"さす": {
		"connection": 0,
		"validVerbs": ["v2-k", "v2-s", "v1-k", "v1-s", "vk", "vs"],
		"conj": ["させ", "させ", "さす", "さする", "さすれ", "させよ"],
		"jodoushi": "さす",
		"question": "す・さす",
		"alternative": "す"
	},
	"しむ": {
		"connection": 0,
		"validVerbs": ["all"],
		"conj": ["しめ", "しめ", "しむ", "しむる", "しむれ", "しめよ"],
		"jodoushi": "しむ",
		"question": "しむ"
	},
	// ず　本活用
	"ず": { // 打消
		"connection": 0,
		"validVerbs": ["all"],
		"conj": ["ず", "ず", "ず", "ぬ", "ね", ""],
		"jodoushi": "ず",
		"question": "ず"
		//"set": ["ず1", "ず2"]
	},
	// ず　補助活用（直後に助動詞があるとき）
	/*"ず2": {
		"connection": 0,
		"validVerbs": ["all"],
		"conj": ["ざら", "ざり", "ず", "ざる", "ざれ", "ざれ"],
		"jodoushi": "ず",
		"set": ["ず1", "ず2"]
	},*/
	"じ": { // む　の打消
		"connection": 0,
		"validVerbs": ["all"],
		"conj": ["", "", "じ", "じ", "じ", ""],
		"jodoushi": "じ",
		"question": "じ"
	},
	"む": { // 推量
		"connection": 0,
		"validVerbs": ["all"],
		"conj": ["", "", "む", "む", "め", ""],
		"jodoushi": "む",
		"question": "む"
	},
	"むず": { // む　の強調バージョン
		"connection": 0,
		"validVerbs": ["all"],
		"conj": ["", "", "むず", "むずる", "むずれ", ""],
		"jodoushi": "むず",
		"question": "むず"
	},
	"まし": { // 反実仮想、ためらい
		"connection": 0,
		"validVerbs": ["all"],
		"conj": ["ましか", "", "まし", "まし", "ましか", ""],
		"jodoushi": "まし",
		"question": "まし"
	},
	"まほし": { // 希望
		"connection": 0,
		"validVerbs": ["all"],
		"conj": ["まほしく", "まほしく", "まほし", "まほしき", "まほしけれ", ""],
		"jodoushi": "まほし",
		"question": "まほし"
	},
	
	// 連用形につく
	"き": { // 体験過去
		"connection": 1,
		"validVerbs": ["all"],
		"conj": ["せ", "", "き", "し", "しか", ""],
		"jodoushi": "き",
		"question": "き"
	},
	"けり": { // 過去伝聞
		"connection": 1,
		"validVerbs": ["all"],
		"conj": ["けら", "", "けり", "ける", "けれ", ""],
		"jodoushi": "けり",
		"question": "けり"
	},
	"つ": { // 強意
		"connection": 1,
		"validVerbs": ["all"],
		"conj": ["て", "て", "つ", "つる", "つれ", "てよ"],
		"jodoushi": "つ",
		"question": "つ"
	},
	"ぬ": { // 強意
		"connection": 1,
		"validVerbs": ["all"],
		"conj": ["な", "に", "ぬ", "ぬる", "ぬれ", "ね"],
		"jodoushi": "ぬ",
		"question": "ぬ"
	},
	"たり": {
		"connection": 1,
		"validVerbs": ["all"],
		"conj": ["たら", "たり", "たり", "たる", "たれ", "たれ"],
		"jodoushi": "たり",
		"question": "たり"
	},
	//"たし"
	"けむ": { // 過去推量、らむ　の過去バージョン
		"connection": 1,
		"validVerbs": ["all"],
		"conj": ["", "", "けむ", "けむ", "けめ", ""],
		"jodoushi": "けむ",
		"question": "けむ"
	},
	
	// 終止形につく（ラ変は連体形）
	"べし": {  // 推量などなど
		"connection": 2,
		"validVerbs": ["all"],
		"conj": ["べく", "べく", "べし", "べき", "べけれ", ""],
		"jodoushi": "べし",
		"question": "べし"
	},
	"らし": {  // 確実推量
		"connection": 2,
		"validVerbs": ["all"],
		"conj": ["", "", "らし", "らし", "らし", ""],
		"jodoushi": "らし",
		"question": "らし"
	},
	"まじ": {  // べし　の打消
		"connection": 2,
		"validVerbs": ["all"],
		"conj": ["まじく", "まじく", "まじ", "まじき", "まじけれ", ""],
		"jodoushi": "まじ",
		"question": "まじ"
	},
	"らむ": {  // 現在推量、けむ　の過去バージョン
		"connection": 2,
		"validVerbs": ["all"],
		"conj": ["", "", "らむ", "らむ", "らめ", ""],
		"jodoushi": "らむ",
		"question": "らむ"
	},
	"めり": {  // 婉曲推量
		"connection": 2,
		"validVerbs": ["all"],
		"conj": ["", "めり", "めり", "める", "めれ", ""],
		"jodoushi": "めり",
		"question": "めり"
	},
	"なり": {  // 伝聞推量
		"connection": 2,
		"validVerbs": ["all"],
		"conj": ["", "なり", "なり", "なる", "なれ", ""],
		"jodoushi": "なり",
		"question": "なり"
	},
	
	// り　は　サ未四已（さみしい）
	"り1": {
		"connection": 0,
		"validVerbs": ["vs"],
		"conj": ["ら", "り", "り", "る", "れ", "れ"],
		"jodoushi": "り",
		"question": "り",
		"alternative": "り2"
	},
	"り2": {
		"connection": 4,
		"validVerbs": ["v4"],
		"conj": ["ら", "り", "り", "る", "れ", "れ"],
		"jodoushi": "り",
		"question": "り",
		"alternative": "たり"
	},
}