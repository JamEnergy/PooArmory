// God, why is this still necessary?
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
	
	return null
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

var g_types =
{
	"weapon":["longsword","longhammer"],
	"offhand":["smallshield", "largeshield", "book"],
	"hat": armor_types,
	"chest" : armor_types,
	"gloves" : armor_types,
	"legs" : armor_types,
	"feet" : armor_types,
	
}

function createLookup(arr)
{
	ret = {}
	$.each(arr, function(k,v){
		ret[v.name.toLowerCase()] = v
	})
	return ret
}

var g_scrollLookup = createLookup(g_scrolls)

var g_weaponLookup = createLookup(g_weapons)


var g_items = {
	"weapon" : g_weapons,
	"chest": g_chests,
	"gloves": g_gloves,
	"feet": g_feet,
	"rings": g_rings,
	"offhand": g_offhands,
	"hat":g_hats,
	"legs": g_legs,
	"belt": g_belts,
	"artifact": g_artifacts,
	"brooch": g_brooches,
	"earrings": g_earrings,
	"bracelet": g_bracelets,
	"necklace": g_necklaces

}

var g_minor_infusions = [
	
]

var g_armour_infusions = g_minor_infusions.concat([
	"+100 Def"
])

var g_infusions = {
	"weapon" : g_major_infusions.concat(['att']),
	"chest": g_armour_infusions,
	"gloves": g_armour_infusions,
	"feet": g_armour_infusions,
	"rings": g_major_infusions,
	"offhand": g_major_infusions,
	"hat":g_armour_infusions,
	"legs": g_armour_infusions,
	"belt": g_major_infusions,
	"brooch": g_major_infusions,
	"earrings": g_major_infusions,
	"necklace": g_major_infusions,
}

var g_lookups = {};
$.each(g_items, function(k,v){
	g_lookups[k] = createLookup(v)
})


var g_enhanceLookups = {};
$.each(g_enhancementEffects, function(k,v){
	g_enhanceLookups[k] = createLookup(v)
})

var g_qualityLookups = {};
$.each(g_qualityEffects, function(k,v){
	g_qualityLookups[k] = createLookup(v)
})

var g_usedIds = {
}

function createInputBox(placeholder, path, width, height)
{
	width = width||"100%"
	
	if (height === undefined)
	{
		height = "25%"
	}
	var ret= $("<input type='text' class='saveable my-input-box'/>")
	ret.css("width", width)
	if(height)
	{
		ret.css("height", height)
	}
	ret.css("background", "rgba(255,255,255,0.5)")
	
	if(placeholder)
	{
		ret.attr("placeholder", placeholder)
	}
	
	//var truncPath = path.map(function(v) { return v.substring(0,3) })
	var truncPath = path
	
	var id = truncPath.join("-")
	var i = 2
	if (id in g_usedIds && $("#"+id).length > 0)
	{
		var candidate = id + i
		while(candidate in g_usedIds && $("#"+candidate).length > 0)
		{
			++i
			candidate = id + i
		}
		id = candidate
	}
	ret.attr("id", id)
	ret.data('path', path)
	g_usedIds[id] = true
	return ret
}

function setSelectAllFocus(el)
{
	el.focus(function(){
		$(this)[0].setSelectionRange(0,$(this).val().length)
	})
}

function dumpToJson()
{
	var state = []
	$(".saveable").each(function (k,v)
	{
		var id = $(this).attr("id") || ""
		state.push([id, $(this).val()])
	})
	
	return LZString.compressToBase64(JSON.stringify(state))
}

function getUrl()
{
	var url = window.location.origin + window.location.pathname
	
	var params = {"saveString":dumpToJson()}
	
	return url + "?" + $.param( params )
}

function loadFromUrl()
{
	var ss = getQueryVariable("saveString")
	loadFromJson(ss)
}
	
function loadFromJson(j)
{
	j = JSON.parse(LZString.decompressFromBase64(j))
	
	$.each(j, function(i, v)
	{
		var id = v[0]
		var val = v[1]
		var target = $("#"+$.escapeSelector(id))
		var path = target.data('path')
		target.val(val)
		target.trigger("change")
		target.trigger("blur")
	})
	
	$(".MyDialog").dialog("close")
	
	var activeObj = document.activeElement
	
	$(activeObj).trigger("blur")

}

function passFilter(loc, type, scr, prefix)
{
	// loc not in scroll locs
	if(-1 == $.inArray(loc,scr["locations"]))
	{
		return false;
	}
	
	// scroll has a types filter and item fails it
	if (type && "types" in scr && $.inArray(type, scr["types"]) == -1)
	{
		return false
	}
	
	if (scr["prefix"] != prefix)
	{
		return false
	}
	
	return true;
}

var modPat  = /.*Mod/i;

function formatStats(stats)
{
	if (!stats)
	{
		return ""
	}
	return txt = $.map(stats, function(k,v) { 
			var sep = "+"
			if(modPat.exec(v))
			{
				sep = ":"
			}
			if (k == 0)
			{
				return null
			}
			if (k < 0)
			{
				return v + k
			}
			return v + sep + k
		}).join(", ")
}

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}


var getWeaponFragments = function (name)
{
	var	ret = []
	try{
		var level = g_setLevels[name] || 0
		ret.push(g_weaponFragments[name])
		$.each(g_weaponSide[level], function(k,v){
			ret.push(g_weaponFragments[v])
		})
	}catch(err)
	{
	}
	return ret
}

var makeDialogId = function(loc)
{
	return loc+"-dialog"
}

var guessSetName = function(name)
{
	return name.split(" ")[0]
}

var makeColWithWidth = function(wid)
{
	var ret = $("<div />")
	ret.attr('class','col-xs-'+wid)
	return ret
}

function getComponents(loc, name)
{
	if (loc == "weapon")
	{
		return getWeaponFragments(guessSetName(name))
	}
	if (loc == "bracelet")
	{
		var list = g_lookups["bracelet"][name.toLowerCase()]["components"]["list"]
		var ret = []
		for (var index in list)
		{
			ret.push(g_braceGems[list[index]])
		}
		return ret
	}
}

function getComments(loc, name)
{
	if (loc == "weapon")
	{
		return undefined 
		
	}
	if (loc == "bracelet")
	{
		return g_braceGemComments
	}
}

var makeGeneralDialog = function(name, loc, id)
{
	var useDefault = loc != "bracelet"
	var ret = $( "<div class='MyDialog' title='Choose your "+loc+" properties'></div>" )
	ret.attr("id", id)
	var container = $("<div class='container-fluid' />")
	container.css("width", "100%")
	ret.append(container)
	
	var components = getComponents(loc, name)
	var comments = getComments(loc, name)
	if(components.length < 1)
	{
		return
	}
	
	var headings = $("<div class = 'row' />")
	container.append(headings)
	
	var stats = {}
	$.each(components, function(i,component){
		$.each(component.stats, function(stat, range){
			stats[stat] = true
		})
	})
	
	var numCols = Object.keys(stats).length + 1
	ret.data("numCols", numCols)
	var width = Math.floor(12/numCols);
	var headWidth = 12 - width*numCols+width
	if(headWidth > width)
	{
		headWidth -= 1
	}
	
	// piece 
	var	pieceHead = makeColWithWidth(headWidth)
	pieceHead.html("Part")
	pieceHead.addClass("piece-head")
	headings.append(pieceHead)
	// headings for each stat
	var inputs = {}
	$.each(stats, function(name, v){
		var statHead = makeColWithWidth(width)
		statHead.html(toTitleCase(name))
		statHead.addClass("stat-head")
		headings.append(statHead)
		inputs[name] = []
	})
	
	$.each(components, function(i,component){
		var row = $("<div class = 'row' />")
		var piece = makeColWithWidth(headWidth)
		piece.addClass("piece")
		piece.html(component.name)
		var key = component.name.toLowerCase()
		row.append(piece)
		$.each(stats, function(stat){
			var inputCol = makeColWithWidth(width)
			var input = createInputBox('', [loc, component.name, stat], null, null)
			input.css('maxwidth', "100%")
			input.css('width', "100%")
			if ('stats' in component && stat in component.stats){
				var statRange = component.stats[stat]
				if(useDefault)
				{
					input.val(Math.floor((statRange[0]+statRange[statRange.length-1])/2))
				}
				setSelectAllFocus(input)
				input.data('range', statRange)
				if(comments && key in comments)
				{
					input.attr("title", comments[key][stat])
				}
				else
				{
					input.attr("title", statRange.join(" to "))
				}
				input.tooltip({
					 "classes": {
						// why doesn't this do anything when populated?
					}
				})
				input.css('text-align','center')
				inputs[stat].push(input)
			}
			else{
				input.attr('disabled', 'disabled')
			}
			inputCol.append(input)
			row.append(inputCol)
			
		})
		container.append(row)
	})
	var btn = $("<Button >Ok</button>")
	btn.click(function (k,v) {
		$(ret).dialog("close")
	})
	
	ret.data('getStats', function(){
		var ret = {}
		$.each(inputs, function(name, inputBoxes){
			ret[name] = 0
			$.each(inputBoxes, function(k,v){
				value = v.val()
				if(value)
				{
					ret[name] += parseInt(value)
				}
			})
		})
		if (!("matt" in ret))
		{
			ret["matt"] = ret["att"]
		}
		return ret
	})
	
	
	var max = $("<Button>Max</button>")
	max.click(function(){
		$.each(inputs, function(name, inputBoxes){
			$.each(inputBoxes, function(k,v){
				if(!v.prop('disabled'))
				{
					var range = v.data('range')
					if(range)
					{
						v.val(range[range.length-1])
					}
				}
			})
		})
	})
	
	var btnRow = $("<div class='row'/>")
	btnRow.append($("<div class='col-xs-8' />"))
	
	var btnCol = $("<div class='col-xs-4' />")
	btnCol.append(btn)
	btnCol.append(max)
	btnRow.append(btnCol)
	btnRow.css("padding-top", "0.5em")

	ret.append(btnRow)
	return ret
}

function ValueData(chara)
{
	this.scrolls = g_scrolls
	this.items = Object.assign({}, g_items)
	this.itemLookups = g_lookups
	var specifics = {"weapon":true, "offhand": true}
	for (k in specifics)
	{
		this.items[k] = this.items[k].filter(function(el)
		{
			if (!el.type || !chara)
			{
				return true
			}
			return el.type in g_weaponTypes[chara]
		})

		this.itemLookups[k] = createLookup(this.items[k])
	}
}

function StateManager(statSheetDisplayId, equipId)
{
	var _this = this;
	var rows = 7;
	var cols = 3;
	var container = $("<div class='row' />")
	var view = $("<div class='col-xs-11'/>")
	
	for (var row = 0; row < rows; ++row)
	{
		var rowEl = $("<div class='row m-big-top-bot'/>")
		
		for (var col = 0; col < cols; ++col)
		{
			var colEl = $("<div class='col-xs-4'/>")
						
			var boxEl = $("<div/>")
			boxEl.attr('id', "box"+(1+ row*cols+ col) )
			
			colEl.append(boxEl)
			rowEl.append(colEl)
			
		}
		view.append(rowEl)
	}
	container.append(view)
	$("#"+equipId).append(container)
	this.boxes = []
	this.vd = new ValueData()

	
	this.statSheet = createStatsSheet(statSheetDisplayId, function(el)
	{
		if(_this.isReady)
		{
			var chara = el.data("chara")

			_this.vd = new ValueData(chara)
			if ("weapon" in _this.squares)
			{
				_this.squares["weapon"].data("refreshData")()
				_this.squares["offhand"].data("refreshData")()
			}
		}
	})
	
	this.accumulateBoxes = function()
	{
		var stats = {}
		var boxes = this.boxes
		$.each(boxes, function(k,v){
			var boxStats = v.data("stats")
			if(boxStats)
			{
				for (k in boxStats)
				{
					if (k in stats)
					{
						stats[k] += boxStats[k]
					}
					else
					{
						stats[k] = boxStats[k]
					}
				}
			}
		})
		return stats
	}
	
	this.displayTotals = function ()
	{
		var stats = this.accumulateBoxes()
		var fn = this.statSheet.data('update')
		fn(stats)
	}

	this.triggerUpdate = function(el)
	{
		this.displayTotals()
	}
	
	this.registerBox = function(box)
	{
		this.boxes.push(box)
	}
	
	var squares = [
		"earrings",
		"hat",
		"wings",
		"weapon",
		"chest",
		"offhand",
		"secondary",
		"legs",
		"gloves",
		"belt",
		"feet",
		"brooch",
		"rings",
		"artifact",
		"rings",
		"bracelet",
		undefined,
		"bracelet",
		undefined,
		undefined,
		"necklace"
	]
	
	this.ids = {}
	
	this.getIdFor = function(loc)
	{
		if (!(loc in this.ids))
		{
			this.ids[loc] = 0
		}
		
		this.ids[loc] += 1
		
		return loc + "-" + this.ids[loc]
	}
	
	this.squares = {
	}

	for (var i = 0; i < squares.length; ++i)
	{
		if(squares[i])
		{
			var sq = createSquare(squares[i], this)
			this.squares[squares[i]] = sq
			$("#box"+(i+1)).append(sq)
		}
	}
	
	this.isReady = true
}

var setOpenOnFocus = function(el)
{
	el.on("focus", function(){	$(this).autocomplete("search", $(this).val())})
}

var requiresDialogue = function (loc, entry)
{
	if (loc == "bracelet")
	{
		return true
	}
	
	if (loc == "weapon")
	{
		if ('level' in entry && entry["level"] >= 90)
		{
			return true
		}
	}
	
	return false
}

function dialogExists(selector)
{
	return $(selector).length && $(selector).dialog("isOpen")
}

var dialogCompatible = function(existingEntry, entry, loc)
{		 
	var existingLevel = -1
	if (existingEntry)
	{
		existingLevel = existingEntry.level||-1
	}
	
	// need to re-init the dialog 
	if(loc == "weapon")
	{
		if ("level" in entry && entry['level'] != existingLevel)
		{
			return false;
		}
	}
	
	if(loc == "bracelet")
	{
		return entry.name == existingEntry.name
	}
	
	return true;
}

function createSquare(loc, mgr)
{
	var id = mgr.getIdFor(loc)
	var box = $("<div class='row' />")
	box.attr("id", id)

	var leftBox = $("<div class='col-xs-3'/>")
	leftBox.addClass("equip-box-left")
	var innerBox = $("<div class='col-xs-9'/>")
	innerBox.addClass("equip-box-right")
	box.append(leftBox)
	box.append(innerBox)
	leftBox.css("width", "2em")
	leftBox.css("height", "8em")
	   
	if (!loc || !(loc in mgr.vd.items))
	{
		var overlay = $("<div />")
		overlay.addClass("overlay-blacked-out")
		innerBox.append(overlay)
		return box
	}
	
	var prefix = createInputBox('Prefix', [loc, 'Prefix'])
	var suffix = createInputBox('Suffix', [loc, 'Suffix'])
	var item = createInputBox(toTitleCase(loc), [loc, 'item'])
	item.css("text-overflow","ellipsis")
	var inf = createInputBox('Infusion', [loc, 'inf'])
	
	var display = $("<div />")
	display.css("background-color",'white')
	
	var update = function ()
	{
		var q = box.data("quality")
		
		var statMod = 1
		var attMod = 1
		if(q)
		{
			attMod = q.stats["Att Mod"]
			statMod = q.stats["Stat Mod"]
		}
	
		var contributions = ['prefix', 'suffix', 'item', 'inf', 'enh']
		
		var stats = {}
		$.each( box.data(), function(k,v){
			if(-1 != $.inArray(k,contributions))
			{
				if ("stats" in v)
				{
					thisStats = v.stats
					for (stat in thisStats)
					{
						var thisContrib = thisStats[stat]
						if(k == 'item')
						{
							if (stat == 'att' || stat == 'matt')
							{
								thisContrib *= attMod
							}
							else if (stat in g_qualityStats)
							{
								thisContrib *= statMod
							}
						}
						if(stat in stats)
						{
							stats[stat] += thisContrib
						}
						else
						{
							stats[stat] = thisContrib
						}
					}
				}
			}
		})

		box.data("stats", stats)
		var txt = formatStats(stats)
		$("#console").html(txt)
		
		mgr.triggerUpdate(box)
		return true
	}
	
	// arrayOfItems should be g_scrolls or g_items[loc]
	var propSet = function(key, entryLookup)
	{
		return function(){
			var existing = box.data(key)
			var name = $(this).val().toLowerCase()
			var entry = entryLookup[name]
			
			if(!entry)
			{
				box.removeData(key)
				return true
			}
			
			var canSetStats = !requiresDialogue(loc, entry)
			if(canSetStats)
			{
				box.data(key, entry)
			}
			else
			{
				var tempEntry = JSON.parse(JSON.stringify(entry))
				delete tempEntry["stats"]
				box.data(key, tempEntry)
			}
			
			if (requiresDialogue(loc, entry))
			{
				// I really hate this bit
				var input = $(this)
				
				var dia = input.data("dialog")
				if(input.data("hasDialog"))
				{
					if(dia.dialog("isOpen"))
					{
						return true
					}
					 
					if(!dialogCompatible(existing, entry, loc))
					{
						input.removeData("dialog")
						input.data("hasDialog", false)
					}
				}
				
				if(!input.data("dialog"))
				{
					dia = makeGeneralDialog(entry.name, loc, makeDialogId(id))	
					input.data("dialog", dia)
					dia.dialog( {
						"autoOpen" : false,
						"dialogClass" : "no-close",
						"beforeClose": function(){
									var userEntry = JSON.parse(JSON.stringify(entry))
									userEntry["stats"] = dia.data("getStats")()
									box.data(key, userEntry)
									input.next().focus()
									
								} , 
						"close": function(){
									update()
									
								},
						"modal":true,
						"width" : ((1+dia.data("numCols")) * 6) + "em"
					})
					input.data("hasDialog", true)
				}
				
				if( input.data("hasDialog") && !dia.dialog("isOpen") )
				{
					input.blur()
					dia.dialog("open")
					return true
				}
			}
			update()
			return true
		}
	}

	var scrollSource = function (prefix){
	return function(state, cb){
			var term = $.ui.autocomplete.escapeRegex(state.term)
			var re = new RegExp(term, "i")
			var ret = []
			var item = box.data("item") || {"type":null}
			var type = item["type"]
			$.each(g_scrolls, function(k,v)
			{
				if ( passFilter(loc, type, v, prefix) )
				{
					if (-1 != v["name"].search(re))
					{
						ret.push(v["name"])
					}
				}
			})
			cb(ret)
		}
	}
	
	var openCb = function(lookupMap){
		return function(e,ui) {			
			var x = $(".ui-menu-item-wrapper")
			$.each(x, function(k,v){
				var data = lookupMap[v.innerHTML.toLowerCase()]
				if(data)
				{
					$(v).attr("title", formatStats(data.stats))
					$(v).tooltip()
				}
			})
        }
	}
	
	var sharedOpts = {
		delay: 100,
		minLength: 0,
		position: {my:"left center", at :"right center"},
		messages: {
			noResults: '',
			results: function() {}
		}
	}
	
	var setBlur = function(loc)
	{
		return function()
		{		
			var x = box.data(loc)
			if (!x)
			{
				$(this).val("")
			}
		}
	}
	
	prefix.autocomplete($.extend({},sharedOpts,
	{
		source: scrollSource(true),
		change: propSet("prefix", g_scrollLookup),
		"close": propSet("prefix", g_scrollLookup),
		"open": openCb(g_scrollLookup)
	}))
	setOpenOnFocus(prefix)
	prefix.on('blur', setBlur('prefix'))
	
	suffix.autocomplete($.extend({},sharedOpts,
	{
		source: scrollSource(false),
		change: propSet("suffix", g_scrollLookup),
		"close": propSet("suffix", g_scrollLookup),
		"open": openCb(g_scrollLookup)
	}))
	setOpenOnFocus(suffix)
	suffix.on('blur', setBlur('suffix'))
	
	var refreshData = function()
	{	
		var src = $.map(mgr.vd.items[loc], function(k,v) {
			return k.name
		})

		item.autocomplete($.extend({},sharedOpts,
		{
			source:src, 
			"close": propSet("item", mgr.vd.itemLookups[loc]),
			"open": openCb(mgr.vd.itemLookups[loc])
		}))
		// TODO: set this on other boxes too
		item.on('change', propSet("item", mgr.vd.itemLookups[loc]))
	}
	box.data("refreshData", refreshData)
	refreshData()
	item.on('blur', setBlur('item'))
	setOpenOnFocus(item)
	
	var statPat = /[+-]?(\d)\s*(.*)/;
	var updateInf = function(loc)
	{
		return function()
		{
			var val = $(this).val()
			if ($.inArray(val, g_infusions[loc]) == -1)
			{
				$(this).val("")
				box.removeData('inf')
			}
			else
			{
				var match = statPat.exec(val);
				if (match && match.length > 2)
				{
					var num = parseInt(match[1])
					var stat = match[2]
					var s = {}
					s[stat] = num
					box.data("inf", {"name":val, "stats":s})
				}
			}
			update()
		}
	}
	
	inf.autocomplete($.extend({},sharedOpts,
	{
		source: g_infusions[loc], 
		"close":updateInf(loc), 
		"change":updateInf(loc)
	}))
	setOpenOnFocus(inf)
	inf.on('blur', setBlur('inf'))
	
	innerBox.append(prefix)
	innerBox.append(suffix)
	if(!g_scrollable[loc])
	{
		prefix.attr("disabled","disabled")
		prefix.css("background-color","gray")
		suffix.attr("disabled","disabled")
		suffix.css("background-color","gray")
	}
	innerBox.append(item)
	
	if(loc in g_infusions)
	{
		innerBox.append(inf)
	}
	
	if (loc in g_quality)
	{
		var push = $("<div />")
		push.css("height", "25%")
		leftBox.append(push)
		
		var star = String.fromCharCode(0x2605)
		var qual = createInputBox(star, [loc, "quality"])
		qual.addClass("quality-square")
		qual.autocomplete($.extend({},sharedOpts,
		{
			source : [1+star, 2+star, 3+star, 4+star, 5+star],
					change: propSet("quality", g_qualityLookups[loc]),
					"close": propSet("quality", g_qualityLookups[loc]),
					"open": openCb(g_qualityLookups[loc])
		}))
		qual.val(2+star)
		setOpenOnFocus(qual)
		leftBox.append(qual)
		setSelectAllFocus(qual)
	}
	
	if (loc in g_enhanceable)
	{
		var enh = createInputBox('+', [loc, "enh"])
		enh.addClass("enhance-square")
		enh.autocomplete($.extend({},sharedOpts,
		{
			source : ["+0", "+10", "+11", "+12", "+13","+14","+15"],
					change: propSet("enh", g_enhanceLookups[loc]),
					"close": propSet("enh", g_enhanceLookups[loc]),
					"open": openCb(g_enhanceLookups[loc])
		}))
		setOpenOnFocus(enh)
		setSelectAllFocus(enh)
		leftBox.append(enh)
	}
	
	mgr.registerBox(box)
	return box
}


function createStatSection(inputs, statName)
{
	var ret = $("<div class='row' >")
	
	ret.data('inputs', [])
	var wrap = $("<div class='col-xs-12' >")
	ret.append(wrap)
	
	var balTips = inputs.tips
	
	var balDefaults = inputs.defaults
	
	var balLabels = inputs.labels
	
	var colsPerRow = 2
	var numCells = balTips.length
	var numRows = Math.ceil(numCells / colsPerRow)
	
	for (var rowNum = 0; rowNum < numRows; rowNum++)
	{		
		var balRow = $("<div class='row no-padding-container' > </div>")
		for (var i = 0; i < colsPerRow; ++i)
		{
			var cellNum = rowNum*colsPerRow + i
			if(cellNum >= numCells)
			{
				break;
			}
			var thisCol = $("<div class='col-xs-6' />")
			
			thisCol.addClass("no-padding-l-r-t")
		
			var balInput = createInputBox(statName, [statName, ""+cellNum] , "70%", null)
			balInput.addClass(statName+"-input")
			balInput.css("margin-right", "0.2em")
			balInput.attr("title", balTips[cellNum])
			balInput.tooltip()
			balInput.val(balDefaults[cellNum])
			balInput.css("text-align", "center")
			var thisLabel = $("<div/>")
			thisLabel.html(balLabels[cellNum])
			thisCol.append(thisLabel)
			thisCol.append(balInput)
			balRow.append(thisCol)
			ret.data('inputs').push(balInput)
		}	
		wrap.append(balRow)
	}
	
	return ret
}

// returns set of input boxes
var writeStatSection = function(jParentEl, specList)
{
	var theseInputs = []

	$.each(specList, function(i, v){
		var label = $("<div class = 'row stat-head' />")
		label.html(v.label)
		var inputs = createStatSection(v.spec, v.stat)

		jParentEl
		.append(label)
		.append(inputs)
		theseInputs = theseInputs.concat(inputs.data('inputs'))
	})
		
	return theseInputs
}

var valOf = function(el)
{
	var ret = parseInt(el.val())
	if (isNaN(ret))
	{
		return 0
	}
	return ret
}

var g_statRowString = "<div class='row m-top-bot' />"
// returns a row
var makeStatDiv = function(statLabel, baseStat, inputArray)
{
	row = $(g_statRowString)
	var statCol = $("<div class='col-xs-6'/>")
	var inputs= inputArray
	var additional = inputs.reduce(function(total, e){ return total + valOf($(e)) }, 0)

	statCol.html(statLabel+ ": " + ((baseStat||0) + additional))
	row.append(statCol)
	return row
}

// id is a col
function createStatsSheet(id, onChange)
{
	// base stats
	var statsDiv = $("<div class='col-xs-6'/>")
	
	var charaRow = $("<div class='row' />")
	var charaSelect = createInputBox("character", ["character"] , "100%", null)
	
	charaRow.css("margin-right", "0.18em")
	charaRow.append(charaSelect)
	statsDiv.append(charaRow)
	
	var allStatBoxes =	writeStatSection(statsDiv, g_genericStats)
	
	var specificStats = $("<div class='container-fluid' />")
	specificStats.css("margin",0)
	specificStats.css("padding",0)
	
	statsDiv.append(specificStats)
	
	
	var target = $("#"+id)
	target.data("chara", "")
	target.html("")
	target.css("background-color","#aaaaaa")
	target.css("border-style", "solid")
	
	var nameRow = $("<div class='row' />")
	nameRow.html("A poo")
	nameRow.css("text-align", "center")
	nameRow.css("font-size", "2em")
	target.append(nameRow)
	
	// row for picture and title?
	var row = $(g_statRowString)
	var picdiv = $("<div class='col-xs-6'/>")
	var pic = $("<div />")
	pic.addClass("main-pic")
	
	picdiv.append(pic)
	row.append(picdiv)
	row.append(statsDiv)
	
	target.append(row)
	
	var statsWrap = $("<div class='col-xs-12'/>")
	target.append(statsWrap)
	
	var writeStats = function(stats)
	{
		statsWrap.html(" ")
		
		var row = makeStatDiv("Bal", stats.balance, $(".bal-input").toArray())
		statsWrap.append(row)
		
		var row = makeStatDiv("Crit", 3+(stats.crit||0), $(".crit-input").toArray())
		statsWrap.append(row)
		
		var row = makeStatDiv("Speed", (stats.speed||0), [])
		statsWrap.append(row)

		target.data('stats',stats)
		
		var attStat = g_attackStats[target.data("chara")] || 'att'
		var base = g_baseAtt[attStat]		
		var gear = Math.floor(stats[attStat]||0)
		var fromStat = 0
		if(attStat == "att")
		{			
			fromStat = Math.floor(valOf($(".str-input"))*2.7)
		}
		else
		{
			fromStat = Math.floor(valOf($(".int-input"))*2)
		}
		var selector = "." + attStat + "-input"
		var attRow = makeStatDiv(g_niceStrings[attStat], base+gear+fromStat, $(selector).toArray())
		statsWrap.append(attRow)
	}
	writeStats({crit:0, bal:0, speed:0})
	target.data('update', writeStats)
	
	$.each(allStatBoxes, function(k,v){
		v.on('change', function(){
			writeStats(target.data('stats'))
		})
	})
	
	var initStats = function()
	{
		if (target.data("chara") == $(this).val())
		{
			return
		}
		target.data("chara", $(this).val())
		specificStats.empty()
		

		var theseInputs = writeStatSection(specificStats, g_charaStats[target.data("chara")])
		
		$.each(theseInputs, function(k,v){
			v.on('change', function(){
				writeStats(target.data('stats'))
			})
		})
		writeStats(target.data('stats'))
		if(onChange)
		{
			onChange(target)
		}
	}
	
	var sharedOpts = 
	{
		delay: 100,
		minLength: 0,
		position: {my:"top", at :"bottom"},		
		messages: {
			noResults: '',
			results: function() {}
		},
		source: g_characters,
		change: initStats,
		"close": initStats,
	}
	charaSelect.autocomplete(sharedOpts)
	setOpenOnFocus(charaSelect)
	setSelectAllFocus(charaSelect)
	
	return target	
}
