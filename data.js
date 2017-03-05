var g_characters = [
	"Fiona",
	"Ebie"
]

var g_weaponTypes = {
	"Fiona":{
		"longsword":true,
		"long_hammer":true,
		"smallshield":true,
		"largeshield":true
	},
	"Ebie":{
		"staff" :true,
		"battle_scythe" :true,
		"book": true
	}
}

var g_attackStats = {
	"Fiona" : "att",
	"Ebie" : "matt",
	"Delia": "att",
	"Arisha": "matt"
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

var g_qualityEffects= {	
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

var g_enhancementEffects = {
	"weapon":[
	{
		"name" : "+0",
		"stats": {
		}
	},
	{
		"name" : "+10",
		"stats": {
			"speed":15,
			"att":1000,
			"matt":1000
		}
	},
	{
		"name" : "+11",
		"stats": {
			"speed":19,
			"att":1500,
			"matt":1500
		}
	},
	{
		"name" : "+12",
		"stats": {
			"speed":23,
			"att":2000,
			"matt":2000
		}
	},
	{
		"name" : "+13",
		"stats": {
			"speed":28,
			"att":2600,
			"matt":2600
		}
	},
	{
		"name" : "+14",
		"stats": {
			"speed":33,
			"att":3300,
			"matt":3300
		}
	},
	{
		"name" : "+15",
		"stats": {
			"speed":38,
			"att":4100,
			"matt":4100
		}
	}
	]
}


var g_major_infusions = [
	"+2 crit",
	"+1 crit",
	"+2 balance",
	"+1 balance",
	"+1 speed",
]


var g_chests = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	}
]

var g_legs = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	}
]

var g_feet = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	}
]

var g_gloves = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	}
]

var g_hats = [
	{
		"name":"Lugh Lamhfada",
		"type":"cloth"
	},
	{
		"name":"Terminus Sentinel",
		"type":"light"
	},
	{
		"name":"Braha",
		"type":"heavy"
	},
	{
		"name":"Regina",
		"type":"plate"
	}
]

var g_rings = [
	{
		"name":"Thunder Ring"
	},
	{
		"name":"Crescent Moon Announcement"
	},
	{
		"name":"Crescent Moonlight Ring"
	},
	{
		"name":"Ocean Depths Monster"
	},
	{
		"name":"Cold Thorn",
		"stats":{
			"balance": 1,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125
		}
	},
	{
		"name":"Cold Dagger",
		"stats":{
			"balance": 1,
			"str": 140,
			"agi": 70,
			"wil": 80,
			"hp": 125
		}
	},
	{
		"name":"Cold Desire",
		"stats":{
			"balance": 1,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 125
		}
	},
	{
		"name":"Cold Witch",
		"stats":{
			"balance": 1,
			"int": 180,
			"agi": 70,
			"wil": 80,
			"hp": 125
		}
	}
]

var g_belts = [
	{
		"name":"Belt of Poo"
	},
	{
		"name":"Belt of new Poo",
		"stats":{
			"balance":2
		}
	}
]

var g_artifacts  = [
	{
		"name":"Poo statue"
	},
	{
		"name":"Greater Poo statue"
	}
]

var g_offhands = [
	{
		"name":"Shield",
		"type":"smallshield"
	},
	{
		"name":"Fomorian Book",
		"type":"book",
		"stats":{
			"crit":3
		}
	},
    {
        "name": "Altar Shield",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 43,
            "def": 916,
            "speed": 0,
            "critres": 10,
            "wil": 30,
            "agi": 40
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Godwing Targe",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 26,
            "def": 1001,
            "speed": 0,
            "critres": 11,
            "wil": 34,
            "agi": 58
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Kraken's Small Shield",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 32,
            "def": 1100,
            "speed": 0,
            "critres": 7,
            "wil": 30,
            "agi": 50
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Majesty Shield",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 42,
            "def": 1243,
            "speed": 0,
            "critres": 9,
            "wil": 27,
            "agi": 30
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Nighthawk Small Shield",
        "sell": 10693,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 35,
            "def": 1200,
            "speed": 0,
            "critres": 9,
            "wil": 35,
            "agi": 45
        },
        "level": 70,
        "type": "smallshield"
    },
    {
        "name": "Armageddon Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 50,
            "def": 1640,
            "speed": 0,
            "critres": 7,
            "wil": 56,
            "agi": 83
        },
        "level": 80,
        "type": "smallshield"
    },
    {
        "name": "Heremon Small Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 55,
            "def": 1600,
            "speed": 0,
            "critres": 6,
            "wil": 50,
            "agi": 60
        },
        "level": 80,
        "type": "smallshield"
    },
    {
        "name": "Noblesse Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 74,
            "def": 1414,
            "speed": 0,
            "critres": 9,
            "wil": 52,
            "agi": 105
        },
        "level": 80,
        "type": "smallshield"
    },
    {
        "name": "Pirate Small Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 49,
            "def": 1540,
            "speed": 0,
            "critres": 9,
            "wil": 63,
            "agi": 70
        },
        "level": 80,
        "type": "smallshield"
    },
    {
        "name": "Skeleton Shield",
        "sell": 23000,
        "rank": "6",
        "stats": {
            "int": 0,
            "wil": 0,
            "str": 64,
            "def": 1462,
            "speed": 0,
            "critres": 8,
            "wil": 82,
            "agi": 90
        },
        "level": 80,
        "type": "smallshield"
    }
]

var g_earrings = [
	{
		"name":"Earrings"
	},
	{
		"name":"Innocent Cry",
		"stats":{
			"crit":1
		}

	},
	{
		"name":"Innocent Tear",
		"stats":{
			"crit":1
		}
	}
]

var g_brooches = [
	{
		"name":"Brooch"
	},
	{
		"name":"Blue Kitty brooch",
		"stats":{
			"crit":1
		}
	},
	{
		"name":"White Kitty brooch",
		"stats":{
			"speed":2
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
		"name":"Blue Kitty Necklace",
	},
	{
		"name":"Kitty Necklace",
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
	"weapon": true
}

var g_quality = {
	"weapon": true
}

var g_weaponFragments = {
	"Regina" : {
		"name" : "Regina",
		"stats": {
			"speed" : [3,4],
			"att": [6584, 7080]
		}
	},
	"Braha" : {
		"name" : "Braha",
		"stats":{
			"speed" : [3,4],
			"att": [6584, 7080]
		}
	},
	"Terminus" : { 
		"name" :"Terminus",
		"stats":{
			"speed" : [3,4],
			"att": [6584, 7080]
		}
	},
	"Lugh" : { 
		"name" : "Lugh",
		"stats":{
			"speed" : [3,4],
			"att": [6584, 7080]
		}
	},
	
	"Perfect" : {
		"name" : "Perfect",
		"stats":{
			"att": [4390, 4720]
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
			"balance": [41,45]
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
			"speed": [3],
			"att": [8258,8880]
		}
	},
	"C.Perfect" : {
		"name" : "C.Perfect",
		"stats":{
			"att" : [5506,5920]
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
			"balance": [37,41]
		}
	},
	"C.Lightweight" : {
		"name" : "C.Lightweight",
		"stats":{
			"crit": [24,27],
			"speed": [4,5]
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


var g_weaponSide = {
	90 : ['Perfect', 'Keen', 'Stable', 'Lightweight'],
	95 : ['C.Perfect', 'C.Keen', 'C.Stable', 'C.Lightweight']
}

var g_setLevels = {
	"Regina": 90,
	"Lugh": 90,
	"Terminus": 90,
	"Braha": 90,
	"Dullahan": 95
}

var g_genericStats = [
	{
		"label":"Crit from...",
		"stat":"crit",
		"spec":{
			"tips" : [
				"Crit Mastery adds up to 28 crit",
				"Each 133.3 Wil gives 1 crit, up to a max of 15 crit  at 2,000 Wil",
				"Full gold Einrach gives 3 crit, full silver gives 1 crit",
			"Clearing Neamhain gives up to 5 crit (+1 for 5, +2 for 50, +3 for 75, and +5 for 100 clears)"
			],
			"defaults": [
				28,
				15,
				3,
				5
			],
			"labels": [
				"Mastery",
				"Wil",
				"Ein",
				"Neam"
			]
		}
	},
	{
		"label":"Balance from...",
		"stat":"bal",
		"spec":{
			"tips" : [
				"Full gold at Einrach gives 5 balance; silver gives 3",
				"You can get 2 bal from Outfit/Avatar if you want to fund Nexon's evil empire"
			],
			"defaults": [
				5,
				0
			],
			"labels": [
				"Ein",
				"P2W"
			]
		}
	}
]

var g_charaStats = {
	"Fiona":[
		{
			"label":"Str in stats page",
			"stat": "str",
			"spec": {
				"tips" : [
					"Total str from all equipment (stay tuned for updates that help you calculate this!)"
				],
				"defaults": [
					2500
				],
				"labels": [
					"Total Str",
				]
			}
		},
		{
			"label": "Other sources of Att",
			"stat":"att",
			"spec": {
				"tips" : [
					"Outfitter gives some Att (20 for cheap, 70 for premium pieces, and 150 for having 5 parts equipped)",
					"Einrach titles give some Att (silver: +84, gold:176)",
					"Other sources of att (eg Bracelets that I haven't implemented)",
					"VIP gives 171 att if you are maxed level. I think?"
				],
				"defaults": [
					500,
					176,
					0,
					0
					
				],
				"labels": [
					"Outfitter",
					"Ein",
					"Other",
					"VIP etc"
				]
			}
		}
	],
	"Ebie": [
		{
			"label":"Int in stats page",
			"stat":"int",
			"spec": {
				"tips" : [
					"Total int from all equipment (stay tuned for updates that help you calculate this!)"
				],
				"defaults": [
					3000
				],
				"labels": [
					"Total Int",
				]
			}
		},
		{
			"label":"Other sources of mAtt",
			"stat":"matt",
			"spec": {
				"tips" : [
					"Outfitter gives some mAtt (20 for cheap, 70 for premium pieces, and 150 for having 5 parts equipped)",
					"Einrach titles give some mAtt (silver: +84, gold:176)",
					"Other sources of mAtt (eg Bracelets that I haven't implemented)",
					"VIP gives 171 mAtt if you are maxed level. I think?",
					"Evie gets 700 free mAtt because I hate her"
				],
				"defaults": [
					500,
					176,
					0,
					0,
					700
					
				],
				"labels": [
					"Outfitter",
					"Ein",
					"Other",
					"VIP etc",
					"Magic mastery"
				]
			}
		}
	]
}