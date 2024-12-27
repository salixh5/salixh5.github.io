// わづらふ、したたむ、まじらふ、きこしめす、さはる、かこつ、ありつる、おこす
// ぐす、やつす、まうく、おくる、たまはる、いむ、とぶらふ、おとなふ、はかる
// ためらふ、あそぶ、おこなふ、かたらふ、かまふ、わたる、おきつ、ひなぶ、しる、おぼす、まかる、さぶらふ、みゆ、まどふ
let verbs = {
	// v4?: 四段活用
	"驚く": {
	  "type": "v4k",
	  "gokan": "驚",
	  "yomi": "おどろく",
	  "gokanyomi": "おどろ"
	},
	"飽く": {
	  "type": "v4k",
	  "gokan": "飽",
	  "yomi": "あく",
	  "gokanyomi": "あ"
	},
	"被く": {
	  "type": "v4k",
	  "gokan": "被",
	  "yomi": "かづく",
	  "gokanyomi": "かづ"
	},
	"給ふ": {
	  "type": "v4h",
	  "gokan": "給",
	  "yomi": "たまふ",
	  "gokanyomi": "たま"
	},
	"移ろふ": {
	  "type": "v4h",
	  "gokan": "移ろ",
	  "yomi": "うつろふ",
	  "gokanyomi": "うつろ"
	},
	"頼む": {
	  "type": "v4m",
	  "gokan": "頼",
	  "yomi": "たのむ",
	  "gokanyomi": "たの"
	},
	"仕う奉る": {
		"type": "v4r",
		"gokan": "仕う奉",
		"yomi": "つかうまつる",
		"gokanyomi": "つかうまつ"
	},
	"罵る": {
		"type": "v4r",
		"gokan": "罵",
		"yomi": "ののしる",
		"gokanyomi": "ののし"
	},
	"参る": {
		"type": "v4r",
		"gokan": "参",
		"yomi": "まゐる",
		"gokanyomi": "まゐ"
	},
	"奉る": {
		"type": "v4r",
		"gokan": "奉",
		"yomi": "たてまつる",
		"gokanyomi": "たてまつ"
	},
	"畏まる": {
		"type": "v4r",
		"gokan": "畏ま",
		"yomi": "かしこまる",
		"gokanyomi": "かしこま"
	},
	"去る": {
		"type": "v4r",
		"gokan": "去",
		"yomi": "さる",
		"gokanyomi": "さ"
	},
	// v2?-k: 上二段
	"落つ": {
	  "type": "v2t-k",
	  "gokan": "落",
	  "yomi": "おつ",
	  "gokanyomi": "お"
	},
	"侘ぶ": {
	  "type": "v2b-k",
	  "gokan": "侘",
	  "yomi": "わぶ",
	  "gokanyomi": "わ"
	},
	// v2?-s: 下二段
	"得": {
	  "type": "v2a-s",
	  "gokan": "",
	  "yomi": "う",
	  "gokanyomi": ""
	},
	"愛づ": {
	  "type": "v2d-s",
	  "gokan": "愛",
	  "yomi": "めづ",
	  "gokanyomi": "め"
	},
	"眺む": {
		"type": "v2m-s",
		"gokan": "眺",
		"yomi": "ながむ",
		"gokanyomi": "なが"
	},
	"憧る": {
		"type": "v2r-s",
		"gokan": "憧",
		"yomi": "あくがる",
		"gokanyomi": "あくが"
	},
	"覚ゆ": {
		"type": "v2y-s",
		"gokan": "覚",
		"yomi": "おぼゆ",
		"gokanyomi": "おぼ"
	},
	"聞こゆ": {
		"type": "v2y-s",
		"gokan": "聞こ",
		"yomi": "きこゆ",
		"gokanyomi": "きこ"
	},
	// v1-k: 上一段
	"着る": {
	  "type": "v1-k",
	  "gokan": "着",
	  "yomi": "きる",
	  "gokanyomi": "き"
	},
	"似る": {
	  "type": "v1-k",
	  "gokan": "似",
	  "yomi": "にる",
	  "gokanyomi": "に"
	},
	"煮る": {
	  "type": "v1-k",
	  "gokan": "煮",
	  "yomi": "にる",
	  "gokanyomi": "に"
	},
	"見る": {
	  "type": "v1-k",
	  "gokan": "見",
	  "yomi": "みる",
	  "gokanyomi": "み"
	},
	"射る": {
	  "type": "v1-k",
	  "gokan": "射",
	  "yomi": "いる",
	  "gokanyomi": "い"
	},
	"居る": {
	  "type": "v1-k",
	  "gokan": "居",
	  "yomi": "ゐる",
	  "gokanyomi": "ゐ"
	},
	"率ゐる": {
	  "type": "v1-k",
	  "gokan": "率ゐ",
	  "yomi": "ひきゐる",
	  "gokanyomi": "ひきゐ"
	},
	// v1-s: 下一段
	"蹴る": {
	  "type": "v1-s",
	  "gokan": "蹴",
	  "yomi": "ける",
	  "gokanyomi": "け"
	},
	// vk: カ変
	"来": {
	  "type": "vk",
	  "gokan": "",
	  "yomi": "く",
	  "gokanyomi": ""
	},
	// vs/vz: サ変
	"為": {
	  "type": "vs",
	  "gokan": "",
	  "yomi": "す",
	  "gokanyomi": ""
	},
	"おはす": {
	  "type": "vs",
	  "gokan": "おは",
	  "yomi": "おはす",
	  "gokanyomi": "おは"
	},
	"物す": {
	  "type": "vs",
	  "gokan": "物",
	  "yomi": "ものす",
	  "gokanyomi": "もの"
	},
	"調ず": {
	  "type": "vz",
	  "gokan": "調",
	  "yomi": "てうず",
	  "gokanyomi": "てう"
	},
	// vn: ナ変
	"死ぬ": {
	  "type": "vn",
	  "gokan": "死",
	  "yomi": "しぬ",
	  "gokanyomi": "し"
	},
	"往ぬ": {
	  "type": "vn",
	  "gokan": "往",
	  "yomi": "いぬ",
	  "gokanyomi": "い"
	},
	// vr: ラ変
	"あり": {
	  "type": "vr",
	  "gokan": "あ",
	  "yomi": "あり",
	  "gokanyomi": "あ"
	},
	"居り": {
	  "type": "vr",
	  "gokan": "居",
	  "yomi": "をり",
	  "gokanyomi": "を"
	},
	"侍り": {
	  "type": "vr",
	  "gokan": "侍",
	  "yomi": "はべり",
	  "gokanyomi": "はべ"
	},
	"いまそかり": {
	  "type": "vr",
	  "gokan": "いまそか",
	  "yomi": "いまそかり",
	  "gokanyomi": "いまそか"
	}
  }