var g_characters = [
	"Fiona",
	"Evie",
	"Delia",
	"Karok",
	"Vella",
	"Miri",
	"Kai",
	"Sylas",
	"Arisha",
	"Hurk",
	"Lynn",
	"Lann"
]

var g_charactersLookup = {
	"Fiona":"Best class",
	"Evie":"Healslut",
	"Delia":"Also slut",
	"Karok":"Carrot",
	"Vella":"Marta is angry",
	"Sylas":"Korea",
	"Miri":"Boobs",
	"Arisha":"More boobs",
	"Lynn":"Stupid jailbait",
	"Kai":"Robina",
	"Hurk":"Biggus dickus",
	"Lann":"What is this again?"

}

var g_weaponTypes = {
	"Fiona":{
		"longsword":true,
		"long_hammer":true,
		"smallshield":true,
		"largeshield":true,
	},
	"Evie":{
		"staff" :true,
		"battle_scythe" :true,
		"book": true,
		"fomorian": true
	},
	"Delia":{
		"bastard_sword" :true,
		"book": true
	},
	"Karok":{
		"cestuse" :true,
		"pillar" :true,
		"book": true
	},
	"Kai":{
		"bow" : true,
		"cross_gun": true,
		"book": true
	},
	"Vella":{
		"twin_chainblade":true,
		"twin_sword":true,
		"book": true
	},
	"Lann":{
		"twin_spear":true,
		"twin_sword":true,
		"book": true
	},
	"Lynn":{
		"glaive":true,
		"blute":true,
		"book": true
	},
	"Arisha":{
		"spellsword":true,
		"focus":true,
		"whip":true,
	},
	"Miri":{
		"dragonspine":true,
		"book": true
	},
	"Sylas":{
		"phantom_dagger":true,
		"book": true,
		"fomorian":true
	},
	"Hurk":{
		"greatsword":true,
		"teide":true,
		"book": true
	}
}

var g_attackStats = {
	"Fiona" : "att",
	"Evie" : "matt",
	"Delia": "att",
	"Karok": "att",
	"Arisha": "matt",
	"Lynn": "att",
	"Sylas": "matt",
	"Hurk": "att",
	"Miri": "att",
	"Lann": "att",
	"Kai": "att",
	"Vella": "att",
}

// prettified casing
var g_niceStrings = {
	"att":"Att",
	"matt":"mAtt"
}

var g_baseAtt = {
	"att":485,
	"matt":700
}

var g_qualityStats = {
	"str":true,
	"wil":true,
	"int":true,
	"agi":true
}

var g_locations =
{
	"hat":1,
	"weapon":2,
	"offhand":3,
	"chest":4,
	"gloves":5,
	"legs":6,
	"feet":7,
	"rings":8,
	"earrings":9,
	"artifact":10,
	"brooch":11,
	"necklace":12
}

var g_scrollable =
{
	"earrings": true,
	"hat": true,
	"wings": false,
	"weapon": true,
	"chest": true,
	"offhand": true,
	"secondary":false,
	"legs": true,
	"gloves": true,
	"belt": true,
	"feet": true,
	"brooch": true,
	"rings": true,
	"artifact": true,
	"bracelet": false,
	"necklace": true
}

var g_qualityEffects= {
	"hat": g_armourQualityEffects,
	"chest": g_armourQualityEffects,
	"gloves": g_armourQualityEffects,
	"feet": g_armourQualityEffects,
	"legs": g_armourQualityEffects,
	"weapon": [
		{
			"name":'1'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 0.8,
				"Att Mod": 0.96
			}
		},
		{
			"name":'2'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.0,
				"Att Mod": 1.0
			}
		},
		{
			"name":'3'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.15,
				"Att Mod": 1.02
			}
		},
		{
			"name":'4'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.2,
				"Att Mod": 1.04
			}
		},
		{
			"name":'5'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.25,
				"Att Mod": 1.06
			}
		}
	]

}

var g_armourQualityEffects = [
		{
			"name":'1'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 0.8,
				"Att Mod": 0.96
			}
		},
		{
			"name":'2'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.0,
				"Att Mod": 1.0
			}
		},
		{
			"name":'3'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.15,
				"Att Mod": 1.02
			}
		},
		{
			"name":'4'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.2,
				"Att Mod": 1.04
			}
		},
		{
			"name":'5'+String.fromCharCode(0x2605),
			"stats": {
				"Stat Mod": 1.25,
				"Att Mod": 1.06
			}
		}
	]



var g_armourEnhancementEffects = [
	{
		"name" : "+0",
		"stats": {
		}
	},
	{
		"name" : "+10",
		"stats": {
			"add":130
		}
	},
	{
		"name" : "+11",
		"stats": {
			"add":200
		}
	},
	{
		"name" : "+12",
		"stats": {
			"add":300
		}
	},
	{
		"name" : "+13",
		"stats": {
			"add":400
		}
	},
	{
		"name" : "+14",
		"stats": {
			"add":500
		}
	},
	{
		"name" : "+15",
		"stats": {
			"add":600
		}
	},
	{
		"name" : "+16",
		"stats": {
			"add":750
		}
	},
	{
		"name": "+17",
		"stats": {
			"add":900
		}
	},
	{
		"name": "+18",
		"stats": {
			"add":1140
		}
	},
	{
		"name": "+19",
		"stats": {
			"add":1440
		}
	},
	{
		"name": "+20",
		"stats": {
			"add":2500
		}
	}



]

var g_enhancementEffects = {
	"hat": g_armourEnhancementEffects,
	"chest": g_armourEnhancementEffects,
	"gloves": g_armourEnhancementEffects,
	"feet": g_armourEnhancementEffects,
	"legs": g_armourEnhancementEffects,
	"weapon":[
	{
		"name" : "+0",
		"stats": {
		}
	},
	{
		"name" : "+10",
		"stats": {
			"speed":20,
			"att":1000,
			"matt":1000,
			"add":650
		}
	},
	{
		"name" : "+11",
		"stats": {
			"speed":23,
			"att":1500,
			"matt":1500,
			"add":1000
		}
	},
	{
		"name" : "+12",
		"stats": {
			"speed":26,
			"att":2000,
			"matt":2000,
			"add":1500
		}
	},
	{
		"name" : "+13",
		"stats": {
			"speed":30,
			"att":2600,
			"matt":2600,
			"add":2000
		}
	},
	{
		"name" : "+14",
		"stats": {
			"speed":34,
			"att":3300,
			"matt":3300,
			"add":2500
		}
	},
	{
		"name" : "+15",
		"stats": {
			"speed":38,
			"att":4100,
			"matt":4100,
			"add":3000
		}
	},
	{
		"name" : "+16",
		"stats": {
			"speed":42,
			"att":4900,
			"matt":4900,
			"add":3750
		}
	},
		{
		"name" : "+17",
		"stats": {
			"speed":46,
			"att":5700,
			"matt":5700,
			"add":4500
		}
	},
		{
		"name" : "+18",
		"stats": {
			"speed":50,
			"att":6600,
			"matt":6600,
			"add":5700
		}
	},
		{
		"name" : "+19",
		"stats": {
			"speed":54,
			"att":7500,
			"matt":7500,
			"add":7200
		}
	},
		{
		"name" : "+20",
		"stats": {
			"speed":58,
			"att":8500,
			"matt":8500,
			"add":12500
		}
	},
	]
}


var g_major_infusions = [
	"+2 crit",
	"+1 crit",
	"+2 balance",
	"+1 balance",
	"+1 speed",
]

var g_alr_toplegs = [0-180]
var g_alr_helmglovesboots = [0-120]


var g_chests = [
	{
		"name":"Lugh Lamhfada",
		"type": "cloth",
		"level": 90
	},
	{
		"name":"Terminus Sentinel",
		"type": "light",
		"level": 90
	},
	{
		"name":"Braha",
		"type":"heavy",
		"level": 90
	},
	{
		"name":"Regina",
		"type": "plate",
		"level": 90
	},
		{
		"name":"Dullahan",
		"type": "plate",
		"level":95
	},
		{
		"name":"Astera",
		"type": "plate",
		"level":100
	},
			{
		"name":"Milletian",
		"type": "plate",
		"level":105
	}
]

var g_legs = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth",
		"level": 90
	},
	{
		"name":"Terminus Sentinel",
		"type":"light",
		"level": 90
	},
	{
		"name":"Braha",
		"type":"heavy",
		"level": 90
	},
	{
		"name":"Regina",
		"type": "plate",
		"level": 90
	},
		{
		"name":"Dullahan",
		"type": "plate",
		"level": 95
	},
		{
		"name":"Astera",
		"type": "plate",
		"level":100
	},
				{
		"name":"Milletian",
		"type": "plate",
		"level":105
	}
]

var g_feet = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth",
		"level": 90
	},
	{
		"name":"Terminus Sentinel",
		"type":"light",
		"level": 90
	},
	{
		"name":"Braha",
		"type":"heavy",
		"level": 90
	},
	{
		"name":"Regina",
		"type": "plate",
		"level": 90
	},
		{
		"name":"Dullahan",
		"type": "plate",
		"level": 95
	},
		{
		"name":"Astera",
		"type": "plate",
		"level":100
	},
				{
		"name":"Milletian",
		"type": "plate",
		"level":105
	}
]

var g_gloves = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth",
		"level": 90
	},
	{
		"name":"Terminus Sentinel",
		"type":"light",
		"level": 90
	},
	{
		"name":"Braha",
		"type":"heavy",
		"level": 90
	},
	{
		"name":"Regina",
		"type": "plate",
		"level": 90
	},
	{
		"name":"Dullahan",
		"type": "plate",
		"level": 95
	},
		{
		"name":"Astera",
		"type": "plate",
		"level":100
	},
				{
		"name":"Milletian",
		"type": "plate",
		"level":105
	}
]

var g_hats = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth",
		"level": 90
	},
	{
		"name":"Terminus Sentinel",
		"type":"light",
		"level": 90
	},
	{
		"name":"Braha",
		"type":"heavy",
		"level": 90
	},
	{
		"name":"Regina",
		"type":"plate",
		"level": 90
	},
		{
		"name":"Dullahan",
		"type":"plate",
		"level": 95
	},
		{
		"name":"Astera",
		"type": "plate",
		"level":100
	},
				{
		"name":"Milletian",
		"type": "plate",
		"level":105
	}
]

var g_rings = [
	{
		"name":"Thunder Ring",
		"stats":{
			"str":120,
			"agi":60,
			"wil":60,
			"int":60
		},
	},
	{
		"name":"Crescent Moon Announcement",
		"stats":{
			"str":130,
			"agi":70,
			"wil":70,
			"int":70,
			"hp":100
		},
	},
	{
		"name":"Crescent Moonlight Ring",
		"stats":{
			"str":60,
			"agi":60,
			"wil":60,
			"int":120
		},
	},
	{
		"name":"Ocean Depths Monster",
		"stats":{
			"str":70,
			"agi":70,
			"wil":70,
			"int":130,
			"hp":100
		},
	},
	{
		"name":"Frozen Thorn",
		"stats":{
			"balance": 1,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125
		},
		"sets":["Lv90Rings"]
	},
	{
		"name":"Frozen Dagger",
		"stats":{
			"balance": 1,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125
		},
		"sets":["Lv90Rings"]
	},
	{
		"name":"Frozen Will",
		"stats":{
			"balance": 1,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 125
		},
		"sets":["Lv90Rings"]
	},
	{
		"name":"Frozen Witch",
		"stats":{
			"balance": 1,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 125
		},
		"sets":["Lv90Rings"]
	},
		{
		"name":"Daybreak Trailblazer",
		"stats":{
			"balance": 2,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125,
			"crit": 1
		},
		"sets":["Lv100Rings"]
	},
	{
		"name":"Daybreak Pioneer",
		"stats":{
			"balance": 2,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125,
			"crit": 1
		},
		"sets":["Lv100Rings"]
	},
	{
		"name":"Daybreak Conquest",
		"stats":{
			"balance": 2,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 140,
			"crit": 1
		},
		"sets":["Lv100Rings"]
	},
	{
		"name":"Daybreak Transcendence",
		"stats":{
			"balance": 2,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 140,
                        "crit": 1
		},
		"sets":["Lv100Rings"]
	}
]

var g_belts = [
	{
		"name":"Emerald Belt",
		"stats":{
			"str":95,
			"agi":80,
			"wil":80
		}
	},
	{
		"name":"Peridot Belt",
		"stats":{
			"str":120,
			"agi":90,
			"wil":90
		}
	},
	{
		"name":"Ruby Belt",
		"stats":{
			"int":95,
			"agi":80,
			"wil":80
		}
	},
	{
		"name":"Amethyst Belt",
		"stats":{
			"int":188,
			"agi":90,
			"wil":90
		}
	},
	{
		"name":"Grim Belt",
		"stats":{
			"balance":2,
			"int":140,
			"agi":90,
			"wil":100
		}
	},
	{
		"name":"Woeful Belt",
		"stats":{
			"balance":2,
			"str":140,
			"agi":90,
			"wil":100
		}
	},
	{
		"name":"Seal Belt",
		"stats":{
			"balance":3,
			"str":145,
			"agi":95,
			"wil":105
		}
	},
	{	"name":"Barrier Belt",
	 	"stats":{
			"balance":3,
			"int":193,
			"agi":95,
			"wil":105
		}
	}
]

var g_artifacts  = [
	{
		"name":"Artifact"
	},
	{
		"name":"Greater Artifact"
	}
]

var g_offhands = [
	{
		"name":"Shield",
		"type":"smallshield"
	},
	{
		"name":"Fomorian Book",
		"type":"fomorian",
		"stats":{
			"crit":3,
			"int":80
		}
	},
	{
		"name":"The Book of Legacy",
		"type":"book",
		"stats":{
			"crit":3,
			"def":40,
			"str":60,
			"int":80,
			"critres":1
		}
	},
	{
		"name":"Runic Focus",
		"type":"focus",
		"stats":{
			"matt":545,
			"def":700,
			"agi":51,
			"int":144,
			"wil":49,
			"critres":7
		}
	},
	{
		"name":"Shining Focus",
		"type":"focus",
		"stats":{
			"matt":545,
			"def":1478,
			"agi":90,
			"int":243,
			"wil":80,
			"critres":9
		}
	},
	{
		"name":"The Book of Succession",
		"type":"book",
		"stats":{
			"def": 1040,
			"crit": 3,
			"speed": 3,
			"int": 243,
			"str":180,
			"critres": 5,
			"wil": 80,
			"agi": 90
		}
	},
	{
		"name":"The Book of the Milletian",
		"type":"book",
		"stats":{
			"def": 1890,
			"crit": 3,
			"speed": 3,
			"int": 243,
			"str":180,
			"critres": 10,
			"wil": 80,
			"agi": 90,
			"att": 210,
			"matt": 210
		}
	},
	{
		"name":"Milletian Focus",
		"type":"focus",
		"stats":{
			"def": 1890,
			"crit": 3,
			"speed": 3,
			"int": 243,
			"str":180,
			"critres": 10,
			"wil": 80,
			"agi": 90,
			"matt": 210
		}

	},
	{
		"name":"Milletian Shield",
		"type":"smallshield",
		"stats":{
			"def": 1890,
			"crit": 3,
			"speed": 3,
			"int": 243,
			"str":180,
			"critres": 10,
			"wil": 80,
			"agi": 90,
			"matt": 210
		}

	}


]

var g_earrings = [
	{
		"name":"Earrings"
	},
	{
		"name":"Innocent Cry",
		"stats":{
			"crit":1,
			"str":120,
			"agi":45,
			"wil":53,
			"stamina":3
		}

	},
	{
		"name":"Innocent Tear",
		"stats":{
			"crit":1,
			"int":162,
			"agi":45,
			"wil":53,
			"stamina":3
		}
	},
	{
		"name":"Devil's Tear",
		"stats":{
			"crit":2,
			"int":167,
			"agi":50,
			"wil":58,
			"stamina":4
		}
	},
	{
		"name":"Devil's Cry",
		"stats":{
			"crit":2,
			"str":145,
			"agi":50,
			"wil":58,
			"stamina":4
		}
	},
	{
		"name":"Silent Determination",
		"stats":{
			"crit":3,
			"str":125,
			"agi":50,
			"wil":58,
			"stamina":4
		}
	},
		{
		"name":"Silent Unity",
		"stats":{
			"crit":3,
			"int":167,
			"agi":50,
			"wil":58,
			"stamina":4
		}
	}

]

var g_brooches = [
	{
		"name":"Ruler's Brooch",
		"stats":{
			"str":25,
			"wil":25,
			"int":25,
			"agi":25
		}
	},
	{
		"name":"Blue Kitty Brooch",
		"stats":{
			"crit":1,
			"def":50,
			"str":33,
			"agi":33,
			"int":33,
			"wil":33
		}
	},
	{
		"name":"Red Moon Brooch",
		"stats":{
			"crit":1,
			"speed":2,
			"def":50,
			"str":50,
			"agi":50,
			"int":50,
			"wil":50
		}
	},
	{
		"name":"White Kitty Brooch",
		"stats":{
			"speed":2,
			"agi":48,
			"str":48,
			"int":48,
			"wil":48
		}
	},
	{
		"name":"Moonlight Sapphire Brooch",
		"stats":{
			"crit": -1,
			"speed": -1,
			"str": 41,
			"int": 41,
			"agi": 37,
			"wil": 36,
		}
	}
]

var g_bracelets = [
	{
		"name":"Bracelet",
		"components": {
			"list":["ruby", "emerald", "sapphire", "diamond"]
		}
	},
	{
		"name":"Bracelet (combined)",
		"components": {
			"list":["combined_gem"]
		}
	}
]

var g_necklaces = [
	{
		"name":"Kitty Necklace",
		"stats":{
			"wil":3,
			"agi":16,
			"str":3,
			"int":3
		}
	},
	{
		"name":"Blue Kitty Necklace",
		"stats":{
			"wil":5,
			"agi":5,
			"str":5,
			"int":5,
			"hp":100
		}
	},
	{
		"name":"White Kitty Necklace",
		"stats":{
			"wil":10,
			"agi":10,
			"str":10,
			"int":10,
			"def":50
		}
	},
	{
		"name":"Red Kitty Necklace",
		"stats":{
			"wil":10,
			"agi":16,
			"str":10,
			"int":10,
			"def":50,
			"hp":100
		}
	}
]


var all_armor = [
"hat", "chest", "gloves", "legs", "feet"
]

var all_acc = [
	"rings", "earrings", "artifact", "brooch", "necklace", "belt"
]

var armor_types = [
	"plate",
	"heavy",
	"light",
	"cloth"
]

var g_enhanceable = {
	"weapon": true,
	"smallshield": true,
	"largeshield": true,
	"gloves": true,
	"hat": true,
	"chest": true,
	"legs": true,
	"feet": true,
	"offhand": true
}

var g_quality = {
	"weapon": true,
	"offhand": true,
	"gloves": true,
	"hat": true,
	"chest": true,
	"legs": true,
	"feet": true,
	"earrings": true,
	"brooch": true,
	"necklace": true,
	"rings": true,
	"belt": true
}

var g_weaponFragments = {
	"Regina" : {
		"name" : "Regina",
		"stats": {
			"speed" : [3,4],
			"att": [6584, 7080],
			"matt": [6584, 7080]
		}
	},
	"Braha" : {
		"name" : "Braha",
		"stats":{
			"speed" : [3,4],
			"att": [6584, 7080],
			"matt": [6584, 7080]
		}
	},
	"Terminus" : {
		"name" :"Terminus",
		"stats":{
			"speed" : [3,4],
			"att": [6584, 7080],
			"matt": [6584, 7080]
		}
	},
	"Lugh" : {
		"name" : "Lugh",
		"stats":{
			"speed" : [3,4],
			"att": [6584, 7080],
			"matt": [6584, 7080]
		}
	},

	"Perfect" : {
		"name" : "Perfect",
		"stats":{
			"att": [4390, 4720],
			"matt": [4390, 4720],
			"str": [53,66],
			"agi": [29,36],
			"int": [71,89],
			"wil": [38,48]
		}
	},
	"Keen" : {
		"name" : "Keen",
		"stats":{
			"balance": [27,30],
			"crit": [28,31]
		}
	},
	"Stable" : {
		"name" :"Stable",
		"stats":{
			"balance": [41,45],
			"str": [35,44],
			"agi": [19,24],
			"int": [47,59],
			"wil": [26,32]
		}
	},
	"Lightweight" : {
		"name" : "Lightweight",
		"stats":{
			"crit": [19,21],
			"speed": [4,5]
		}
	},
	"Dullahan": {
		"name" : "Dullahan",
		"stats":{
			"speed": [3,4],
			"att": [8258,8880],
			"matt": [8258,8880]
		}
	},
	"C.Perfect" : {
		"name" : "C.Perfect",
		"stats":{
			"att" : [5506,5920],
			"matt": [5506,5920],
			"str": [53,66],
			"agi": [29,36],
			"int": [71,89],
			"wil": [38,48]
		}
	},
	"C.Keen" : {
		"name" : "C.Keen",
		"stats":{
			"balance": [24,27],
			"crit": [36,40]
		}
	},
	"C.Stable" : {
		"name" : "C.Stable",
		"stats":{
			"balance": [37,41],
			"str": [35,44],
			"agi": [19,24],
			"int": [47,59],
			"wil": [26,32]
		}
	},
	"C.Lightweight" : {
		"name" : "C.Lightweight",
		"stats":{
			"crit": [24,27],
			"speed": [4,5]
		}
	},
	"Astera": {
		"name": "Astera",
		"stats":{
			"speed":[3,4],
			"att":[10490,11280],
			"matt":[10490,11280]
		}
	},
	"A.Perfect": {
		"name":"A.Perfect",
		"stats":{
			"att" : [6994,7520],
			"matt": [6994,7520],
			"str": [53,66],
			"agi": [29,36],
			"int": [71,89],
			"wil": [38,48]
		}
		},
	"A.Keen": {
		"name": "A.Keen",
		"stats":{
			"crit": [44-49],
			"balance":[21-23]
		}
	},
	"A.Stable": {
		"name": "A.Stable",
		"stats":{
			"balance": [31,35],
			"str": [35,44],
			"agi": [19,24],
			"int": [47,59],
			"wil": [26,32]
		}
	},
	"A.Lightweight":{
		"name": "A.Lightweight",
		"stats":{
			"crit":[30-33],
			"speed":[4-5]
		}
	},
	"Milletian": {
		"name": "Milletian",
		"stats":{
			"speed":[3,4],
			"att":[12722,13680],
			"matt":[12722,13680]
		}
	},
	"M.Perfect": {
		"name":"M.Perfect",
		"stats":{
			"att" : [8482,9120],
			"matt": [8482,9120],
			"str": [53,66],
			"agi": [29,36],
			"int": [71,89],
			"wil": [38,48]
		}
		},
	"M.Keen": {
		"name": "M.Keen",
		"stats":{
			"crit": [52-58],
			"balance":[18-20]
		}
	},
	"M.Stable": {
		"name": "M.Stable",
		"stats":{
			"balance": [28,31],
			"str": [35,44],
			"agi": [19,24],
			"int": [47,59],
			"wil": [26,32]
		}
	},
	"M.Lightweight":{
		"name": "M.Lightweight",
		"stats":{
			"crit":[35-39],
			"speed":[4-5]
		}
	}
}

var g_braceGems = {
	"ruby" : {
		"name" : "Ruby",
		"stats" : {
			"att": [25,115],
			"matt": [25,115],
			"def": [25,115],
			"hp": [75,650]
		},
	},
	"emerald" : {
		"name":"Emerald",
		"stats":{
			"att": [25,115],
			"matt": [25,115],
			"def": [50,583],
			"hp": [25,115]
		}
	},
	"sapphire" : {
		"name":"Sapphire",
		"stats":{
			"att": [25,115],
			"matt": [50,505],
			"def": [25,115],
			"hp": [25,115]
		}
	},
	"diamond" : {
		"name": "Diamond",
		"stats":{
			"att": [50,503],
			"matt": [25,115],
			"def": [25,115],
			"hp": [25,115]
		}
	},
	"combined_gem": {
		"name" : "Total",
		"stats":{
			"att": [25,848],
			"matt": [25, 850],
			"def": [25, 928],
			"hp" : [25,995]
		}
	}
}
var braceSideComment = "Up to 25 for a normal gem, 70 for a Fine, 115 for a Superior"
var g_braceGemComments = {
	"ruby" : {
		"att": braceSideComment,
		"matt": braceSideComment,
		"def": braceSideComment,
		"hp": "75-250 for a normal gem,\n 175-450 for a Fine,\n 300-650 for a Superior"
	},
	"emerald" : {
		"att": braceSideComment,
		"matt": braceSideComment,
		"def": "50-225 for a normal gem, 150-450 for a Fine, 275-583 for a Superior",
		"hp": braceSideComment,
	},
	"sapphire" : {
		"att": braceSideComment,
		"matt": "50-175 for a normal gem, 125-350 for a Fine, 250-505 for a Superior",
		"def": braceSideComment,
		"hp": braceSideComment,
	},
	"diamond" : {
		"att": "50-175 for a normal gem, 125-350 for a Fine, 250-503 for a Superior",
		"matt": braceSideComment,
		"def": braceSideComment,
		"hp": braceSideComment,
	}
}


var g_sides = {
	"weapon": ['Perfect', 'Keen', 'Stable', 'Lightweight'],
	"hat": ["Solid"],
	"chest": ["Solid", "Smooth"],
	"gloves": ["Solid"],
	"legs": ["Solid", "Smooth"],
	"feet": ["Solid"]
}

var g_componentData = {
	90: {
		"weapon": {
			"name": "Core",
			"stats": {
				"speed": [3, 4],
				"att": [6584, 7080]
			}
		},
		"chest": {
			"name": "Core",
			"stats": {
				"def": [793, 932],
				"critres": [3,4]
			}
		},
		"legs": {
			"name": "Core",
			"stats": {
				"def": [726, 855],
				"critres": [3, 4]
			}
		},
		"gloves": {
			"name": "Core",
			"stats": {
				"def": [1255, 1476],
				"critres": 3
			}
		},
		"feet": {
			"name": "Core",
			"stats": {
				"def": [1255, 1476],
				"critres": 3
			}
		},
		"hat": {
			"name": "Core",
			"stats": {
				"def": [1255, 1476],
				"critres": 3
			}
		},
		"Perfect": {
			"name": "Perfect",
			"stats": {
				"att": [4390, 4720],
				"matt": [4390, 4720],
				"str": [53, 66],
				"agi": [29, 36],
				"int": [71, 89],
				"wil": [38, 48]
			}
		},
		"Keen": {
			"name": "Keen",
			"stats": {
				"balance": [27, 30],
				"crit": [28, 31]
			}
		},
		"Stable": {
			"name": "Stable",
			"stats": {
				"balance": [41, 45],
				"str": [35, 44],
				"agi": [19, 24],
				"int": [47, 59],
				"wil": [26, 32]

			}
		},
		"Lightweight": {
			"name": "Lightweight",
			"stats": {
				"crit": [19, 21],
				"speed": [4, 5]
			}
		},
		"Solid": {
			"name": "Solid",
			"stats": {
				"str": [144, 180],
				"agi": [72, 90],
				"int": [194, 243],
				"wil": [64, 80],
				"critres": [10, 13]
			}
		},
		"Smooth": {
			"name": "Smooth",
			"stats": {
				"def": [629, 740],
				"critres": [3, 4]
			}
		}
	},
	95: {
		"weapon": {
			"name": "Core",
			"stats": {
				"speed": [3, 4],
				"att": [8258, 8880]
			}
		},
		"chest": {
			"name": "Core",
			"stats": {
				"def": [997, 1172],
				"critres": [4, 5]
			}
		},
		"legs": {
			"name": "Core",
			"stats": {
				"def": [913, 1075],
				"critres": [6, 8]
			}
		},
		"gloves": {
			"name": "Core",
			"stats": {
				"def": [1578, 1856],
				"critres": [3, 4]
			}
		},
		"feet": {
			"name": "Core",
			"stats": {
				"def": [1578, 1856],
				"critres": [3, 4]
			}
		},
		"hat": {
			"name": "Core",
			"stats": {
				"def": [1578, 1856],
				"critres": [3, 4]
			}
		},
		"Perfect": {
			"name": "Perfect",
			"stats": {
				"att": [5506, 5920],
				"matt": [5506, 5920],
				"str": [53, 66],
				"agi": [29, 36],
				"int": [71, 89],
				"wil": [38, 48]
			}
		},
		"Keen": {
			"name": "Keen",
			"stats": {
				"balance": [24, 27],
				"crit": [36, 40]
			}
		},
		"Stable": {
			"name": "Stable",
			"stats": {
				"balance": [37, 41],
				"str": [35, 44],
				"agi": [19, 24],
				"int": [47, 59],
				"wil": [26, 32]
			}
		},
		"Lightweight": {
			"name": "Lightweight",
			"stats": {
				"crit": [24, 27],
				"speed": [4, 5]
			}
		},
		"Solid": {
			"name": "Solid",
			"stats": {
				"str": [144, 180],
				"agi": [72, 90],
				"int": [194, 243],
				"wil": [64, 80],
				"critres": [11, 13]
			}
		},
		"Smooth": {
			"name": "Smooth",
			"stats": {
				"def": [714, 840],
				"critres": [3, 4]
			}
		}

	},
	100: {
		"weapon": {
			"name": "Core",
			"stats": {
				"speed": [3, 4],
				"att": [10490, 11280]
			}
		},
		"chest": {
			"name": "Core",
			"stats": {
				"def": [1303, 1532],
				"critres": [4, 5]
			}
		},
		"legs": {
			"name": "Core",
			"stats": {
				"def": [1194, 1405],
				"critres": [7, 9]
			}
		},
		"gloves": {
			"name": "Core",
			"stats": {
				"def": [2062, 2426],
				"critres": [4, 5]
			}
		},
		"feet": {
			"name": "Core",
			"stats": {
				"def": [2062, 2426],
				"critres": [4, 5]
			}
		},
		"hat": {
			"name": "Core",
			"stats": {
				"def": [2062, 2426],
				"critres": [4, 5]
			}
		},
		"Perfect": {
			"name": "Perfect",
			"stats": {
				"att": [6994, 7520],
				"matt": [6994, 7520],
				"str": [53, 66],
				"agi": [29, 36],
				"int": [71, 89],
				"wil": [38, 48]
			}
		},
		"Keen": {
			"name": "Keen",
			"stats": {
				"balance": [21, 23],
				"crit": [44, 49]
			}
		},
		"Stable": {
			"name": "Stable",
			"stats": {
				"balance": [31, 35],
				"str": [35, 44],
				"agi": [19, 24],
				"int": [47, 59],
				"wil": [26, 32]
			}
		},
		"Lightweight": {
			"name": "Lightweight",
			"stats": {
				"crit": [30, 33],
				"speed": [4, 5]
			}
		},
		"Solid": {
			"name": "Solid",
			"stats": {
				"str": [144, 180],
				"agi": [72, 90],
				"int": [194, 243],
				"wil": [64, 80],
				"critres": [12, 14]
			}
		},
		"Smooth": {
			"name": "Smooth",
			"stats": {
				"def": [814, 940],
				"critres": [3, 4]
			}
		}

	},
	105: {
		"weapon": {
			"name": "Core",
			"stats": {
				"speed": [3, 4],
				"att": [12622, 13680]
			}
		},
		"chest": {
			"name": "Core",
			"stats": {
				"def": [1609, 1892],
				"critres": [8, 10]
			}
		},
		"legs": {
			"name": "Core",
			"stats": {
				"def": [1474, 1735],
				"critres": [12, 15]
			}
		},
		"gloves": {
			"name": "Core",
			"stats": {
				"def": [2547, 2996],
				"critres": [7, 9]
			}
		},
		"feet": {
			"name": "Core",
			"stats": {
				"def": [2547, 2996],
				"critres": [7, 9]
			}
		},
		"hat": {
			"name": "Core",
			"stats": {
				"def": [2547, 2996],
				"critres": [7, 9]
			}
		},
		"Perfect": {
			"name": "Perfect",
			"stats": {
				"att": [8482, 9120],
				"matt": [8482, 9120],
				"str": [53, 66],
				"agi": [29, 36],
				"int": [71, 89],
				"wil": [38, 48]
			}
		},
		"Keen": {
			"name": "Keen",
			"stats": {
				"balance": [18, 20],
				"crit": [52, 58]
			}
		},
		"Stable": {
			"name": "Stable",
			"stats": {
				"balance": [28, 31],
				"str": [35, 44],
				"agi": [19, 24],
				"int": [47, 59],
				"wil": [26, 32]
			}
		},
		"Lightweight": {
			"name": "Lightweight",
			"stats": {
				"crit": [35, 39],
				"speed": [4, 5]
			}
		},
		"Solid": {
			"name": "Solid",
			"stats": {
				"str": [144, 180],
				"agi": [72, 90],
				"int": [194, 243],
				"wil": [64, 80],
				"critres": [12, 15]
			}
		},
		"Smooth": {
			"name": "Smooth",
			"stats": {
				"def": [884, 1040],
				"critres": [3, 4]
			}
		}

	}

}

var g_charaStats = {
	"Fiona":[
		{
			"label": "Other sources of Att",
			"stat":"att",
			"spec": {
				"tips" : [
					"Other sources of att (eg scroll bonuses that I haven't implemented)",
					"VIP gives 171 att if you are maxed level. I think?"
				],
				"defaults": [
					0,
					0

				],
				"labels": [
					"Other",
					"VIP etc"
				]
			}
		}
	],
	"Evie": [
		{
			"label":"Other sources of mAtt",
			"stat":"matt",
			"spec": {
				"tips" : [
					"Other sources of mAtt (eg scroll bonuses that I haven't implemented)",
					"VIP gives 171 mAtt if you are maxed level. I think?",
				],
				"defaults": [
					0,
					0,

				],
				"labels": [
					"Other",
					"VIP etc",
				]
			}
		}
	]
}

var g_einDetail = {
	"name": "Einrach",
	"placeholder": "tier",
	"options": [
		{
			"name" : "Bronze",
			"stats" : {
				"att": 10,
				"matt": 10
			},
		},
		{
			"name" : "Silver",
			"stats" : {
				"att": 50,
				"matt": 50,
				"balance": 1,
				"crit": 1
			}
		},
		{
			"name" : "Silver (no pots)",
			"stats" : {
				"att": 50,
				"matt": 50,
				"balance": 3,
				"crit": 1
			}
		},
		{
			"name" : "Gold",
			"stats" : {
				"att": 176,
				"matt": 176,
				"balance": 5,
				"crit": 3
			}
		}
	]
}


var g_neamDetail = {
	"name": "Neamhain",
	"placeholder":"run count",
	"options": [
		{
			"name" : "1",
			"stats" : {
				"att": 500,
				"matt": 500,
				"crit": 1
			}
		},
		{
			"name" : "25",
			"stats" : {
				"hp": 1000,
				"crit": 1,
				"att": 500,
				"matt": 500,
			}
		},
		{
			"name" : "50",
			"stats" : {
				"hp": 1000,
				"att": 750,
				"matt": 750,
				"crit": 2
			}
		},
		{
			"name" : "75",
			"stats" : {
				"hp": 1000,
				"att": 750,
				"matt": 750,
				"crit": 3,
				"uncap": 300
			}
		},
				{
			"name" : "100",
			"stats" : {
				"hp": 1000,
				"att": 1000,
				"matt": 1000,
				"crit": 5,
				"uncap": 300
			}
		}
	]
}
var g_balorDetail = {
	"name": "Balor",
	"placeholder":"run count",
	"options": [
		{
			"name" : "1",
			"stats" : {
				"att": 500,
				"matt": 500,
				"crit": 1
			}
		},
		{
			"name" : "25",
			"stats" : {
				"hp": 1000,
				"crit": 1,
				"att": 500,
				"matt": 500,
			}
		},
		{
			"name" : "50",
			"stats" : {
				"hp": 1000,
				"att": 750,
				"matt": 750,
				"crit": 2
			}
		},
		{
			"name" : "75",
			"stats" : {
				"hp": 1000,
				"att": 750,
				"matt": 750,
				"crit": 3,
				"uncap": 300
			}
		},
				{
			"name" : "100",
			"stats" : {
				"hp": 1000,
				"att": 1000,
				"matt": 1000,
				"crit": 5,
				"uncap": 300
			}
		}
	]
}
var g_BrigidDetail = {
	"name": "Brigid",
	"placeholder":"run count",
	"options": [
		{
			"name" : "1",
			"stats" : {
				"crit": 1,
				"att": 500,
				"matt": 500
			}
		},
		{
			"name" : "25",
			"stats" : {
				"crit": 1,
				"att": 500,
				"matt": 500,
				"hp": 500
			}
		},
		{
			"name" : "50",
			"stats" : {
				"crit": 2,
				"att": 750,
				"matt": 750,
				"hp": 500
			}
		},
		{
			"name" : "75",
			"stats" : {
				"crit": 3,
				"att": 750,
				"matt": 750,
				"hp": 500,
				"uncap": 200
			}
		},
				{
			"name" : "100",
			"stats" : {
				"hp": 500,
				"att": 1000,
				"matt": 1000,
				"crit": 5,
				"uncap": 200
			}
		}
	]
}
var g_vanguardDetail = {
	"name": "Partholon Vanguard",
	"placeholder":"Max lvl chars",
	"options": [
		{
			"name" : "1",
			"stats" : {
				"stamina": 1,
				"att": 100,
				"matt": 100,
				"def": 50
			}
		},
		{
			"name" : "2",
			"stats" : {
				"stamina": 2,
				"att": 200,
				"matt": 300,
				"def": 100
			}
		},
		{
			"name" : "3",
			"stats" : {
				"stamina": 3,
				"att": 300,
				"matt": 300,
				"def": 150
			}
		},
		{
			"name" : "4",
			"stats" : {
				"stamina": 4,
				"att": 400,
				"matt": 400,
				"def": 200
			}
		},
				{
			"name" : "5",
			"stats" : {
				"stamina": 5,
				"att": 500,
				"matt": 500,
				"def": 250,
				"crit": 1
			}
		},
				{
			"name" : "6",
			"stats" : {
				"stamina": 6,
				"att": 600,
				"matt": 600,
				"def": 300,
				"crit": 1
			}
		},
				{
			"name" : "7",
			"stats" : {
				"stamina": 7,
				"att": 700,
				"matt": 700,
				"def": 300,
				"crit": 1
			}
		},
						{
			"name" : "8",
			"stats" : {
				"stamina": 8,
				"att": 800,
				"matt": 800,
				"def": 300,
				"crit": 1
			}
		},
						{
			"name" : "9",
			"stats" : {
				"stamina": 9,
				"att": 900,
				"matt": 900,
				"def": 300,
				"crit": 1
			}
		},
						{
			"name" : "10",
			"stats" : {
				"stamina": 10,
				"att": 500,
				"matt": 500,
				"def": 300,
				"crit": 1,
				"uncap":500
			}
		},
						{
			"name" : "11",
			"stats" : {
				"stamina": 11,
				"att": 1000,
				"matt": 1000,
				"def": 300,
				"crit": 1,
			}
		},
						{
			"name" : "12",
			"stats" : {
				"stamina": 12,
				"att": 1000,
				"matt": 1000,
				"def": 300,
				"crit": 1,
			}
		},
						{
			"name" : "13",
			"stats" : {
				"stamina": 13,
				"att": 1000,
				"matt": 1000,
				"def": 300,
				"crit": 1,
			}
		},
						{
			"name" : "14",
			"stats" : {
				"stamina": 14,
				"att": 1000,
				"matt": 1000,
				"def": 300,
				"crit": 1,
			}
		},
						{
			"name" : "15",
			"stats" : {
				"stamina": 15,
				"att": 1000,
				"matt": 1000,
				"def": 300,
				"crit": 1,
			}
		},
	]
}
var g_statComments = {
	"str" : "1 str grants 2.7 Att [Str is not calculated from gear - enter your totals for now!]",
	"int" : "1 int grants 2.0 mAtt [Int is not calculated from gear - enter your totals for now!]",
	"wil": "133 grants 1 Crit (up to a max of 2000 wil for 15 crit)  [is not calculated from gear - enter your totals for now!]",
	"agi": "2 agi grants 1 Def",
}

var g_achievementsSpec = {
	"title": "Achievements",
	"simple": false,
	"id":"ach",
	"specs" : [
		g_neamDetail,
		g_balorDetail,
		g_einDetail,
		g_BrigidDetail,
		g_vanguardDetail
	]
}

var g_p2wSpec = {
	"title": "p2w stuff",
	"simple": true,
	"id":"p2w",
	"specs" : [
		{
			"stat": "att",
			"placeholder": "(m)Att",
			"caption": "(m)Att",
			"comment":"Expensive avatar pieces give 70 (m)Att, others give 20. You also get 150 (m)Att for having any 5 avatar pieces equipped",
			"default":500
		} ,
		{
			"stat": "balance",
			"placeholder": "balance",
			"caption": "Balance",
			"comment":"Expensive avatar body and skirt give 1 Bal each",
			"default":2
		}
	]
}

var g_skillSpecs = {
	"title": "Passive skills",
	"id":"passives",
	"simple": true,
	"specs" : [
		{
			"stat": "crit",
			"placeholder": "crit",
			"caption": "Crit Mastery",
			"comment":"Crit Mastery grants up to 28 crit",
			"default":28
		}
	]
}

var g_charaSpecs = {
	"Evie" : [
		{
			"stat": "matt",
			"placeholder": "mAtt",
			"caption": "Magic Mastery",
			"comment":"Evie gets 700 free mAtt because I hate her",
			"default":700
		}
	]
}

var g_setStats = [
    {
        "name" : "Lv90Rings",
        "stats": [
            {
            }
            ,
            {
            }
            ,
            {
                "crit" : 1
            }
        ]
    },
    {
        "name" : "Lv100Rings",
        "stats": [
            {
            }
            ,
            {
            }
            ,
            {
                "crit" : 1
            }
        ]
    },
    {
        "name" : "Regina",
        "stats": [
            {
            }
            ,
            {
            }
            ,
            {
            },
		{
		"def":165,
		"str":60,
		"int":81,
		"hp":120,
		"stamina":5
		},
		{
		"def":220,
		"str":80,
		"int":108,
		"hp":160,
		"stamina":6
		},
		{
		"def":275,
		"str":100,
		"int":135,
		"hp":200,
		"stamina":7
		},
		{
		"def":330,
		"str":120,
		"int":162,
		"hp":240,
		"stamina":10
		}
        ]
    },
]

var g_statDisplayNames = {
	"speed": "Speed",
	"balance": "Bal",
	"crit": "Crit",
	"att": "Att",
	"matt": "mAtt",
	"add": "Additional Damage",
	"hp": "HP",
	"critres": "Crit Res",
	"def": "Def",
	"alr": "Attack Limit Release"
}

var g_displayableStatsCommon = {
	"speed" : true,
	"balance": true,
	"crit": true,
	"add": true,
	"hp": true,
	"critres": true,
	"def": true,
	"alr": true
}
