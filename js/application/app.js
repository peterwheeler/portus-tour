 // Geolocation functions required to for the geolocator //  

// Convert Degress to Radians
function Deg2Rad(deg)
    {
       return deg * Math.PI / 180;
    }

// Get Distance between two lat/lng points using the Haversine function
// First published by Roger Sinnott in Sky & Telescope magazine in 1984 (“Virtues of the Haversine”)
function Haversine(lat1, lon1, lat2, lon2)
    {
        var R = 6372.8; // Earth Radius in Kilometers

        var dLat = Deg2Rad(lat2-lat1);  
        var dLon = Deg2Rad(lon2-lon1);  

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                        Math.cos(Deg2Rad(lat1)) * Math.cos(Deg2Rad(lat2)) * 
                        Math.sin(dLon/2) * Math.sin(dLon/2);  
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; 

        // Return Distance in Kilometers
        return d;
    }

// Get Distance between two lat/lng points using the Pythagoras Theorem on a Equirectangular projection to account
// for curvature of the longitude lines.
function PythagorasEquirectangular(lat1, lon1, lat2, lon2)
    {
        lat1 = Deg2Rad(lat1);
        lat2 = Deg2Rad(lat2);
        lon1 = Deg2Rad(lon1);
        lon2 = Deg2Rad(lon2);
        var R = 6371; // km
        var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
        var y = (lat2-lat1);
        var d = Math.sqrt(x*x + y*y) * R;
        return d;
    }

function arrayObjectIndexOf(arr, obj){
for(var i = 0; i < arr.length; i++){
    if(angular.equals(arr[i], obj)){
        return i;
    }
}
return -1;
}

function findcurrentIndex(array, index, name){
	for (var i = 0, iLen = NAVLIST.length; i < iLen; i++) {
		if (array[i][index] == name){
			return i;
			}
		}
		return null;
}

function onNavigationStart() {
			var scope = angular.element($("#mainDiv")).scope();

			scope.$apply(function(){
				prevTour();
	});
}

function onNavigationEnd() {
			var scope = angular.element($("#mainDiv")).scope();

			scope.$apply(function(){
				nextTour();
	});
}

function additem(obj) {
	var label = document.createElement('label'),
	    checked = this._map.hasLayer(obj.layer),
	    input;

	if (obj.overlay) {
		input = document.createElement('input');
		input.type = 'checkbox';
		input.className = 'leaflet-control-layers-selector';
		input.defaultChecked = checked;
	} else {
		input = this._createRadioElement('leaflet-base-layers', checked);
	}

	input.layerId = L.stamp(obj.layer);

	L.DomEvent.on(input, 'click', this._onInputClick, this);

	var name = document.createElement('span');
	name.innerHTML = ' ' + obj.name;

	label.appendChild(input);
	label.appendChild(name);

	var container = obj.overlay ? this._overlaysList : this._baseLayersList;
	container.appendChild(label);

	return label;
}

function onInputClick () {
		var inputs = 2,
		    input, layer, hasLayer;
		var addedLayers = [],
		    removedLayers = [];

		this._handlingClick = true;

		for (var i = 0, len = inputs.length; i < len; i++) {
			input = inputs[i];
			layer = this.layers[input.layerId].layer;
			hasLayer = this.map.hasLayer(layer);

			if (input.checked && !hasLayer) {
				addedLayers.push(layer);

			} else if (!input.checked && hasLayer) {
				removedLayers.push(layer);
			}
		}

		// Bugfix issue 2318: Should remove all old layers before readding new ones
		for (i = 0; i < removedLayers.length; i++) {
			this._map.removeLayer(removedLayers[i]);
		}
		for (i = 0; i < addedLayers.length; i++) {
			this._map.addLayer(addedLayers[i]);
		}

		this._handlingClick = false;

		// this._refocusOnMap();
}

// Navigation List //


var locations = [
	{// Entrance Gate
		lat: 41.774777,
		lon: 12.254237,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Claudian Basin
		lat: 41.776337,
		lon: 12.252891,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Antemurale

		lat: 41.776565,
		lon: 12.253159,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Portico di Claudio
		lat: 41.775481,
		lon: 12.254705,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Darsena
		lat: 41.776139,
		lon: 12.254853,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Grandi Magazzini Traiani
		lat: 41.776657,
		lon: 12.254550,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Canale di Imbocco
		lat: 41.777341,
		lon: 12.254008,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Molo Della Lanterna
		lat: 41.777959,
		lon: 12.254941,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Terme Della Lanterna
		lat: 41.778305,
		lon: 12.255553,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Building of Uncertainty
		lat: 41.779083,
		lon: 12.256393,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Grandi Magazzini di Settimio Severo
		lat: 41.779547,
		lon: 12.257300,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Terrazzo di Traiano
		lat: 41.780253,
		lon: 12.257584,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Palazzo Imperiale
		lat: 41.781741,
		lon: 12.257288,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Castellum Aquae
		lat: 41.781913,
		lon: 12.257698,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Building 3
		lat: 41.781777,
		lon: 12.257711,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Ludus
		lat: 41.781849,
		lon: 12.258108,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Navalia
		lat: 41.781737,
		lon: 12.258950,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Between Navalia & PI
		lat: 41.781311,
		lon: 12.258572,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Top of the Palace
		lat: 41.780691,
		lon: 12.258261,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Junction with Warehouse
		lat: 41.779943,
		lon: 12.258242,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Grandi Magazzini di Settimio Severo
		lat: 41.779691,
		lon: 12.258120,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Storeroom
		lat: 41.779579,
		lon: 12.257753,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// View of the Basin
		lat: 41.779109,
		lon: 12.258753,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Entrance to the Hexagon
		lat: 41.777888,
		lon: 12.259224,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Basilica Portuense
		lat: 41.776380,
		lon: 12.259900,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Modern Cemetery
		lat: 41.776120,
		lon: 12.257513,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Entrance to Darsena
		lat: 41.777112,
		lon: 12.257315,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	},
	{// Casale
		lat: 41.778857,
		lon: 12.257296,
		periods: {
		  period_1: 8,
		  period_2: 2,
		  period_3: 4,
		  period_4: 1,
		  period_5: 7
		}
	}
];


var angtranslations = {
	enUK: {
		HOMEPAGE: {
			TITLE: "Portus Tour",
			HEADLINE: "Explore the history of Portus through the interactive storymaps and timeline",
			SELECTTOUR: "Select a Tour",
			LEARNMORE: "Explore More"
		},
		ABOUT: {
			ABOUT: "· ABOUT ·",
			ABOUTTEXT: "Portus was the maritime port of Imperial Rome between the mid-1st century AD and the 6th century AD. It was the focus of a network of ports and, together with the neighbouring river port at Ostia, it was the commercial hub that connected the city to the rest of the Mediterranean world. It played a key role in re-distributing imports from other Mediterranean ports to supply the city and, to a lesser extent, exporting products from the Tiber valley. It was established under the emperor Claudius, subsequently enlarged by Trajan and successive emperors into the 4th century AD, until its gradual decline in the later 5th and 6th centuries AD.",
			ABOUTSUBTEXT: "This tour has been constructed by the Portus Project to help visualise the different phases of the port over time. It also consists of a modern tour of the site and a history of the archaeological investigations that have been carried out at the site. It was built in collaboration with the the Soprintendenza Speciale per i Beni Archeologici di Roma (SSBAR), which is part of the Ministero per i Beni e le Attività Culturali (MIBAC).",
			ABOUTSUBSUBTEXT: "Each tour covers a different period in time. These are:",
			ABOUTTOGGLE1: "Each tour covers a different period in time. To view these then click ",
			ABOUTHERE: "here",
			ABOUTTOGGLE2: ". Alternatively, to start the tour then click 'Continue' below",
			ABOUTCLA: "stretching from the beginning of the port's construction in c. AD 46 until its inauguration under the Emperor Nero in AD 64.",
			ABOUTTRA: "covering the development of the port during the reign of the emperor Trajan, with the majority of work probably concentrated between AD 110-117.",
			ABOUTSEV: "the construction of new massive buildings around the port complex.",
			ABOUTFS: "the decline of the port from the 5th century onwards.",
			ABOUTMOD: "the site and the ruins of Portus as it is today.",
			ABOUTTIME: "a timeline of the work that has been carried out at Portus, from antiquarians to the present day.",
			ABOUTEND: "Or select continue below to start the tour"
		},
		LANGUAGES: {
			ENGLISH: "English",
			ITALIAN: "Italian"
		},
		TOURS: {
			HOME: "Home",
			CLAUDIAN: "Claudian",
			TRAJANIC: "Trajanic",
			SEVERAN: "Severan",
			FIFTHSEVENTH: "Fifth to Seventh",
			MODERN: "Modern",
			TIMELINE: "Timeline"
		},
		MENU: {
			SELECTALANG: "LANGUAGE",
			SELECTATOUR: "TOUR",
			GEOLOCATION: "GEOLOCATION",
			ABOUT: "ABOUT",
			GEOON: "On",
			GEOOFF: "Off",
			MAPS: "Maps",
			MAP1: "Drawing",
			MAP2: "Plan",
			MAP3: "Satellite",
			CREATEDBY: "Created by ",
			USING: "Using"
		},
		FOOTER: {
			ABOUT: "About",
			CREATEDBY: "Created by ",
			USING: "Using",
			SUPPORT: "Supported by",
			HELP: "with help from"
		}
		
	},
	itIT: {
		HOMEPAGE: {
				TITLE: "Portus Visita",
				HEADLINE: "Esplora la storia di Porto attraverso i storymaps interattivi e cronologia",
				SELECTTOUR: "Selezionare un Tour",
				LEARNMORE: "Esplorare"
		},
		ABOUT: {
				ABOUT: "· ABOUT ·",
				ABOUTTEXT: "Porto (l’antico Portus) era il porto marittimo di Roma antica e, con il vicino porto fluviale di Ostia, è stato al centro di una rete di porti che collegavano Roma Imperiale tra la metà del I secolo e il VI secolo d.C. Questo tour fa parte del sito web della Soprintendenza Speciale per i Beni Archeologici di Roma (SSBAR), organo periferico del Ministero per i Beni e le Attività Culturali (MIBAC), ed è stato creato in collaborazione con il",
				ABOUTSUBTEXT: "This tour has been constructed by the Portus Project to help visualise the different phases of the port over time. It also consists of a modern tour of the site and a history of the archaeological investigations that have been carried out at the site. It was built in collaboration with the the Soprintendenza Speciale per i Beni Archeologici di Roma (SSBAR), which is part of the Ministero per i Beni e le Attività Culturali (MIBAC).",
			ABOUTSUBSUBTEXT: "Each tour covers a different period in time. These are:",
			ABOUTCLA: " - stretching from the beginning of the port's construction in c. AD 46 until its inauguration under the Emperor Nero in AD 64.",
			ABOUTTRA: " - covering the development of the port during the reign of the emperor Trajan, with the majority of work probably concentrated between AD 110-117.",
			ABOUTSEV: " -  the construction of new massive buildings around the port complex.",
			ABOUTFS: " - the decline of the port from the 5th century onwards.",
			ABOUTMOD: " - the site and the ruins of Portus as it is today.",
			ABOUTTIME: " - a timeline of the work that has been carried out at Portus, from antiquarians to the present day.",
			ABOUTEND: "Or select continue below to start the tour"	
		},
		LANGUAGES: {
			ENGLISH: "English",
			ITALIAN: "Italiano"
		},
		TOURS: {
			HOME: "Home",
			CLAUDIAN: "Claudio",
			TRAJANIC: "Traiano",
			SEVERAN: "Severo",
			FIFTHSEVENTH: "Quinta al Settima",
			MODERN: "Tour Virtuale",
			TIMELINE: "Cronologia"
		},
		MENU: {
			SELECTALANG: "LINGUA",
			SELECTATOUR: "VISTA",
			GEOLOCATION: "GEOLOCATION",
			ABOUT: "ABOUT",
			GEOON: "On",
			GEOOFF: "Off",
			MAPS: "Mappe",
			MAP1: "Disegno",
			MAP2: "Piano",
			MAP3: "Satellitare",
			CREATEDBY: "Creato da ",
			USING: "con"
		},
		FOOTER: {
			ABOUT: "About",
			CREATEDBY: "Creato da ",
			USING: "con",
			SUPPORT: "Sostenuto da",
			HELP: "con l'aiuto di"
		}		
	}
};


(function(){
var slideIndex = 0;
var watchID;
var paramVal;
var scopeDiv;
var id;

var t1 = {};
t1.o = {},
t1.c = {},
t1.o.Menu = function (a, b) {
	this.type = a;
},
t1.o.Country = function(a, b) {
   this.language = a, this.name = b;
},
t1.o.Country.prototype.name = function() {
    return "COUNTRY." + this.country.toUpperCase() + ".NAME";
},
t1.o.Country.prototype.language = function() {
    return "COUNTRY." + this.country.toUpperCase() + ".LANGUAGE";
},
t1.o.Country.prototype.locale = function() {
    return this.country + "-" + this.language;
},
t1.o.Page = function(a, b, c, d) {
    this.path = a, this.controller = b, this.period = c, this.map = d;
},
// t1.o.Page.prototype.templateUrl = function() {
//     return this.template ? this.template : "views/main.html";
// },


t1.c.countries = [new t1.o.Country("en", "en"), new t1.o.Country("it", "it")],
t1.c.menu = [new t1.o.Menu("about")],
t1.c.pages = [
new t1.o.Page(
	{
		en: "claudian", it: "claudio"
	},
	"storymapCtrl",
	{
		en:"period_1", it:"periodo_1"
	},
	{
		en: [{
			map_type: "zoomify",
			map_name: "Drawing",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Drawing",
				"path": "maps/en/period_1/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Plan",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Plan",
				"path": "maps/en/plan_1/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Satellite",
				"path": "maps/en/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			},
		}],
		it: [{
			map_type: "zoomify",
			map_name: "Drawing",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false,
			zoomify: {
				"name": "Drawing",
				"path": "maps/en/period_1/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Plan",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Plan",
				"path": "maps/en/plan_1/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Satellite",
				"path": "maps/en/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		}]
	}
),
new t1.o.Page(
	{
		en: "trajanic", it: "traiano"
	},
	"storymapCtrl",
	{
		en:"period_2", it:"periodo_2"
	},
	{
		en: [{
			map_type: "zoomify",
			map_name: "Drawing",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Drawing",
				"path": "maps/en/period_2/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Plan",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Plan",
				"path": "maps/en/plan_2/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Satellite",
				"path": "maps/en/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		}],
		it: [{
			map_type: "zoomify",
			map_name: "Drawing",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Drawing",
				"path": "maps/it/period_2/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Plan",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Plan",
				"path": "maps/en/plan_2/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Satellite",
				"path": "maps/en/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		}]
	}
),
new t1.o.Page(
	{
	    en: "severan", it: "severo"
	},
	"storymapCtrl",
	{
		en:"period_3", it:"periodo_3"
	},
	{
		en: [{
			map_type: "zoomify",
			map_name: "Drawing",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Drawing",
				"path": "maps/en/period_3/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Plan",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Plan",
				"path": "maps/en/plan_3/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},		
		{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Satellite",
				"path": "maps/en/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		}],
		it: [{
			map_type: "zoomify",
			map_name: "Drawing",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Drawing",
				"path": "maps/it/period_3/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Plan",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Plan",
				"path": "maps/en/plan_3/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},		
		{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Satellite",
				"path": "maps/en/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		}]
	}
),
new t1.o.Page(
	{
	    en: "fifth-seventh", it: "quinta-settima"
	},
	"storymapCtrl",
	{
		en:"period_4", it:"periodo_4"
	},
	{
		en: [{
			map_type: "zoomify",
			map_name: "Drawing",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Drawing",
				"path": "maps/en/period_4/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Plan",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Plan",
				"path": "maps/en/plan_4/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},		
		{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Satellite",
				"path": "maps/en/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		}],
		it: [{
			map_type: "zoomify",
			map_name: "Drawing",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Drawing",
				"path": "maps/it/period_4/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},
		{
			map_type: "zoomify",
			map_name: "Plan",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Plan",
				"path": "maps/en/plan_4/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		},		
		{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Satellite",
				"path": "maps/en/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		}]
	}
),
new t1.o.Page(
	{
	    en: "virtual_tour", it: "tour_virtuale"
	},
	"storymapCtrl",
	{
		en:"period_5", it:"periodo_5"
	},
	{
		en: [{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Drawing",
				"path": "maps/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		}],
		it: [{
			map_type: "zoomify",
			map_name: "Satellite",
			map_mini: true,
			map_as_image: false,
			calculate_zoom: false, 
			zoomify: {
				"name": "Drawing",
				"path": "maps/satellite/",
				"width": 5200,
				"height": 5844,
				"tolerance": 0.9,
				"attribution": "<a href='http://www.portusproject.org' target='_blank'>Portus Project</a>"
			}
		}]
	}
),
new t1.o.Page(
	{
	    en: "timeline", it: "cronologia"
	},
	"timelineCtrl",
	{
		en:"period_6", it:"periodo_6"
	},
	{
		en: [{
			 type: "timeline",
			 width: "100%",
			 height: "100%",
			 font: "GentiumSerif-OpenSans",
			 lang: "en",
			 start_at_slide: 0,
			 source:     "json/en/period_6.json",
			 embed_id:   "timeline-embed"
		}],
		it: [{
			 type: "timeline",
			 width: "100%",
			 height: "100%",
			 font: "GentiumSerif-OpenSans",
			 lang: "it",
			 start_at_slide: 0,
			 source:     "json/it/periodo_6.json",
			 embed_id:   "timeline-embed"
		}]
	}
)];

var app = angular.module('Map_View', ['ui.router', 'ui.bootstrap', 'pascalprecht.translate', 'ngSanitize', 'LocalStorageModule', 'ngAnimate', 'ocNgRepeat', 'ngGeolocation']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // $stateProvider.state("/", {
    //  	url: "/",
    //     templateUrl: "partials/index.html",
    //     controller: "MainCtrl"
    // });

    for (var g = 0; g < t1.c.countries.length; g++) {
        var c = t1.c.countries[g];
        $stateProvider.state(c.language, {
          	url: "/" + c.language + "/",
            templateUrl: "partials/index.html",
            controller: "MainCtrl"
        });
    }

    for (var i = 0; i < t1.c.menu.length; i++) {
        var d = t1.c.menu[i];

        for (var a = 0; a < t1.c.countries.length; a++) {
	        var b = t1.c.countries[a];
	        $stateProvider.state(b.language + "-" + d.type, {
	          	url: "/" + b.language + "/" + d.type,
	            templateUrl: "partials/" + d.type + ".html",
	            controller: "MainCtrl"
	        });
	    }
    }

    for (var j = 0; j < t1.c.pages.length; j++) {
	    var e = t1.c.pages[j];

	    for (var k = 0; k < t1.c.countries.length; k++) {
	        var h = t1.c.countries[k];
	        $stateProvider.state(h.language + "-" + e.path[h.language], {
	        	url: "/" + h.language + "/" + e.path[h.language] + "?start_at_slide",
	            templateUrl: "partials/" + h.language + "/" + e.period[h.language] + ".html",
	            controller: e.controller,
	            data: {
	            		tourID: j,
	            		tourLang: h.language,
	            		tourPeriod: e.period[h.language],
						tourMap: e.map[h.language]
					}
	        });
	    }
    }
    // Redirects and Otherwise //
	$urlRouterProvider
			.otherwise("/en/");
	
	$locationProvider.html5Mode(false).hashPrefix("!");
		  
});

app.config(['$translateProvider', '$translatePartialLoaderProvider', function($translateProvider, $translatePartialLoaderProvider) {

	var b = localStorage.getItem("ls.locale.main");

       b = b ? b.contains("en") ? "en" : b.contains("it") ? "it" : b.contains("it") ? "it" : "en" : "en";

 	$translateProvider.translations('en', angtranslations.enUK).translations('it', angtranslations.itIT).preferredLanguage(b);

 	// $translateProvider.determinePreferredLanguage();

  	// Enable escaping of HTML
  	$translateProvider.useSanitizeValueStrategy('escaped');

}]);

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}, String.prototype.contains = function(a) {
    return this.indexOf(a) >= 0;
}, String.prototype.beginsWith = function(a) {
    return 0 === this.indexOf(a);
}, String.prototype.isNumber = function() {
    return !isNaN(parseInt(this));
}, String.prototype.isBoolean = function() {
    return "true" === this || "false" === this;
}, String.prototype.asPrimitive = function() {
    return this.isNumber() ? parseFloat(this) : this.isBoolean() ? "true" === this : this;
}, String.prototype.sanatizeHtml = function() {
    return this.replace(/<(?:.|\n)*?>/gm, "");
}, String.prototype.indexesOf = function(a, b) {
    var c, d = 0,
        e = a.length,
        f = [],
        g = this;
    for (b && (g = g.toLowerCase(), a = a.toLowerCase());
        (c = g.indexOf(a, d)) > -1;) f.push(c), d = c + e;
    return f;
}, String.prototype.replaceAll = function(a, b, c) {
    return c && (a = a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")), this.replace(new RegExp(a, "g"), b);
}, String.prototype.shuffle = function() {
    return this.split("").sort(function() {
        return 0.5 - Math.random();
    }).join("");
}, String.prototype.removeAccents = function() {
    var a = this.toLowerCase();
    return a = a.replace(new RegExp("\\s", "g"), ""), a = a.replace(new RegExp("[Ã Ã¡Ã¢Ã£Ã¤Ã¥]", "g"), "a"), a = a.replace(new RegExp("Ã¦", "g"), "ae"), a = a.replace(new RegExp("Ã§", "g"), "c"), a = a.replace(new RegExp("[Ã¨Ã©ÃªÃ«]", "g"), "e"), a = a.replace(new RegExp("[Ã¬Ã­Ã®Ã¯]", "g"), "i"), a = a.replace(new RegExp("Ã±", "g"), "n"), a = a.replace(new RegExp("[Ã²Ã³Ã´ÃµÃ¶]", "g"), "o"), a = a.replace(new RegExp("Å“", "g"), "oe"), a = a.replace(new RegExp("[Ã¹ÃºÃ»Ã¼]", "g"), "u"), a = a.replace(new RegExp("[Ã½Ã¿]", "g"), "y");
}, Array.prototype.contains = function(a) {
    return !!~this.indexOf(a);
}, Array.prototype.isEmpty = function() {
    return 0 === this.length;
}, Array.prototype.pushAll = function(a) {
    this.push.apply(this, a);
},

// app.controller("HeadCtrl", ["$scope", "$location", function(a, b) {
//     function c() {
//         for (var c = [], d = 0; d < t1.c.countries.length; d++) {
//             var e = t1.c.countries[d];
//             if (b.path().contains(e.language)) {
//                 for (var f, g = 0; g < t1.c.pages.length; g++) {
//                     var h = t1.c.pages[g];
//                     if (j === h[e.language]) {
//                         f = h;
//                         break;
//                     }
//                 }
//                 for (var d = 0; d < t1.c.countries.length; d++) {
//                     var i = t1.c.countries[d],
//                         j = b.path();
//                     c.push({
//                         lan: i.language,
//                         path: "http://" + b.host() + "/#!/" + i.language + f.path[i.language]
//                     });
//                 }
//             }
//             a.defaultPath = "http://" + b.host() + "/#!/";
//         }
//         if (c.isEmpty()) {
//             for (var d = 0; d < t1.c.countries.length; d++) {
//                 var k = t1.c.countries[d];
//                 c.push({
//                     lan: k.language,
//                     path: "http://" + b.host() + "/#!/" + k.language + b.path()
//                 });
//             }
//             a.defaultPath = b.absUrl();
//         }
//         a.links = c;
//     }
//     c(),

//     a.$on("$locationChangeStart", function() {
//         c();
//     })
// }]),

app.controller("MainCtrl", ["$scope", "$window", "$rootScope", "localStorageService", "$interval", "$log", "$location", function(a, b, d, f, g, h, k) {

a.$watch(function() {
            return $(window).width();
        }, function(b, c) {
            b != c && 991 > b && (a.sideMenu = !0)
        }),

a.$watch('theslideIndex', function(){

}),

	d.user = function() {
            var a, b = !1,
                c = !1,
                d = {
                    main: null,
                    alt: null,
                    countryCode: null,
                    loaded: !1
                },
                g = function(){
                    
                },
                i = [],
                j = [],
                k = function(a) {
                    this.gplus = a;
                },
                l = function() {
                    return i;
                },
                m = function(a) {
                    a && (i.push(a), a.loaded || a.load());
                },
                n = function(a) {
                    i.splice(i.indexOf(a), 1);
                },
                o = function(a) {
                    var b = p(a);
                    if (b) {
                        n(b);
                        for (var c = 0; c < j.length; c++) {
                            var d = j[c];
                            a.apiName === d.apiName && a.name === d.name && j.splice(c, 1);
                        }
                    } else m(a), j.push({
                        apiName: a.apiName,
                        name: a.name
                    });
                    f.set("selectedGenerators", JSON.stringify(j));
                },
                p = function(a) {
                    for (var b = 0; b < i.length; b++)
                        if (i[b] && i[b].name === a.name && i[b].api === a.api) return i[b];
                    return !1
                },
                q = function(a) {
                    d.main ? !1 : !0;
                    if (angular.isArray(a)) d.main = a[0].toLowerCase(), a.length > 1 && (d.alt = a.slice(1, a.length));
                    else {
                        if (!angular.isString(a)) return;
                        d.main = a.toLowerCase();
                    }
                    d.countryCode = d.main.contains("-") ? d.main.split("-")[1] : d.main.contains("en") ? "uk" : d.main.contains("it") ? "it" : "uk", f.set("locale.main", d.main), f.set("locale.alt", d.alt), d.loaded = !0, h.debug("Locale loaded!");
                },
                r = function() {
                    return d;
                },
                s = function() {
                    if (!d.main) {
                        var a = [];
                        a.push(f.get("locale.main"));
                        var b = f.get("locale.alt");
                        b && (b = angular.isArray(b) ? b : b.split(","), a.pushAll(b)), a[0] && q(a);
                    }
                    return r().main;
                },
                t = function(a) {
                    return g[a];
                },
                u = function(a, b) {
                    g[a] = b, f.set(a, b);
                },
                v = function() {};

            return {
                logged: b,
                gplus: a,
                setGplusUser: k,
                getSelectedGenerators: l,
                addGenerator: m,
                removeGenerator: n,
                toggleGenerator: o,
                hasGenerator: p,
                authenticated: c,
                updateConfigs: v,
                settings: g,
                loadLocale: s,
                setLocale: q,
                getLocale: r,
                getSetting: t,
                setSetting: u
       		};
        }();

 b.init = function() {
            d.user.loadLocale() ? h.debug("locale is: " + d.user.getLocale().main) : h.debug("locale is: fucked" );
        };
        b.init();

}]),

app.controller("RegionCtrl", ["$scope", "$rootScope", "$log", "$translate", "$location", function(a, b, c, d, e) {
        var f = function(a, b, c, d) {
            this.code = a, this.locale = b, this.language = c, this.langLabel = d;
        };
        f.prototype.name = function() {
            return "COUNTRY." + this.code.toUpperCase() + ".NAME";
        },
        f.prototype.languageLabel = function() {
            return this.langLabel;
        },

        a.region = function() {
            function a(a) {
                var b = a;
                a.contains("-") && (b = a.split[0]);
                for (var c = 0; c < g.length; c++)
                    if (g[c].code === b) return g[c];
                return a.contains("en") ? g[0] : a.contains("it") ? g[1] : void 0;
            }
            var e, g = [new f("en", "en-uk", "en", "English"), new f("it", "it-it", "it", "Italiano")], 
                h = function() {
                    return g;
                },
                i = function(f) {
                    if (!f) return e;
                    if (angular.isString(f)) {
                        if ("en" !== f && "it" !== f && "en-uk" !== f && "it-it" !== f) return;
                        var g = a(f);
                        if (!g) return;
                        e = g;
                    }
                    else {
                    	e = f;
                    }

                    if (b.user.setLocale(e.locale), e.locale) {
                        var h = e.locale.split("-")[0];
                        d.use(h), b.lang = h;
                    }
                    c.debug("Country changed by the user to:", e.langLabel);
                    // e.langLabel
                };
                
            return {
                country: i,
                countries: h
            };
        }(),

        b.$watch("user.getLocale().loaded", function(c, d) {
            if (!d && c) {
                {
                    b.user.getLocale();
                    console.log(a.region.country());
                }
                a.region.country(b.user.getLocale().main);
                console.log(a.region.country());
            }
            console.log(a.region.country());
        }),

        b.$on("$locationChangeStart", function() {
        	var b = a.region.country();
            e.path().contains(b) || a.region.country(e.path().split("/")[1]);
        }),

        b.brandUrl = function() {
            if (e.host().contains("theonegenerator") || e.host().contains("t1gen") || e.host().contains("localhost") || e.host().contains("127.0.0.1")) return b.urlBegin();
            var a = b.urlBegin();
            return "/#!" === a ? "http://www.theonegenerator.com" : "http://www.theonegenerator.com" + a;
        },

        b.urlBegin = function() {
            var b = e.path().split("/");
            if (b.length > 1) {
                var c = b[1];
                	return "#!/" + c;
            }
            return "#!/";
        },

        b.localizedPage = function(b) {
            var c = a.region.country();
            c = c ? c.language : "en";
            var d = t1.c.pages[b],
                e = d.path[c];
            return e;
        },

        a.remainingUrl = function(b) {
            var c = a.region.country();
            if (c) {
                var d = e.path().split("/");
                d = d[d.length - 1];
                for (var j = 0; j < t1.c.pages.length; j++) {
	    			var g = t1.c.pages[j];
                    if (g.path[c.language] === d)
                    	return g.path[b];
                }
            }
        }
    }]);



	app.filter('omitfirst', function() {
        return function(input) {
            return input.slice(1, input.length);
        };
    });

    app.filter('capitalize', function() {
	    return function(input) {
	        return input.substring(0,1).toUpperCase()+input.substring(1);
	    };
	});

	app.filter('removedashes', function () {
        return function(input) {
			return input.replace('-', ' ');
        };
	});

	app.filter('removeunderscore', function () {
        return function(input) {
			return input.replace('_', ' ');
        };
	});
	
	app.run(function($state, $rootScope, $urlRouter, $location) {
		
		$rootScope
			.$on('$stateChangeStart',
				function(event, toState, toParams, fromState, fromParams){
					console.log("stateChangeStart:");
					console.log(event);
					console.log(toState);
			});	
	
		$rootScope
			.$on('$stateChangeSuccess',
				function(event, toState, toParams, fromState, fromParams){
					// console.log("stateChangeSuccess:");
					// console.log(event);
					// console.log(toState);
		});	

		$rootScope
			.locate = function(number){
				ClosestLocation(number);
		};
	
		$rootScope
			.$on('$stateChangeError',
				function(event, toState, toParams, fromState, fromParams){
					console.log("State Change: Error!");
			});
	
		$rootScope
			.$on('$stateNotFound',
				function(event, toState, toParams, fromState, fromParams){
					console.log("State Change: State not found!");
			});
	
		$rootScope
			.$on('$viewContentLoading',
				function(event, viewConfig){
					console.log("View Load: the view is loaded, and DOM rendered!");
			});
	
		$rootScope
			.$on('$viewcontentLoaded',
				function(event, viewConfig){
					console.log("View Load: the view is loaded, and DOM rendered!");
			});
	});


 	app.controller('GeoCtrl', ['$scope', '$state', '$stateParams', 'geolocator', function($scope, $state, $stateParams, geolocator){

 		// $scope.DeviceCheck = function(){
 		// 	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		// 		console.log("false");
 		// 		return false;
	 	// 	}
	 	// 	else
	 	// 	{
	 	// 		console.log("true");
	 	// 		return true;
	 	// 	}
 		// };

 		$scope.GeoOnOff = function(){
	 		if($scope.toggle === true){
	 			geolocator.StartGeoLocation();
	 			// geolocator.GetLocationNumber();
	 			// GeoGo();
	 		}
	 		else
	 		{
	 			geolocator.StopGeoLocation();
	 		}
 		};

 	}]);

 	app.factory('tourLoader', function($q, $timeout, options){
 		return function(options){
 			var deferred = $q.defer(),
 			translation;

 			if(options.key === 'en'){
 				translation = tourTrans.enTour;
 			}
 			else if (options.key ==='it'){
 				translation = tourTrans.itTour;
 			}

 			$timeout(function(){
 				deferred.resolve(translation);
 			}, 1000);
 			return deferred.promise;
 		};
 	});


	app.service('geolocator', ['$rootScope', '$state', '$geolocation',
		function($rootScope, $state, $geolocation){

		errorHandler = function (err){
			if(err.code == 1) 
				{
					alert("Error: Access is denied");
				}
				else if(err.code == 2)
				{
					alert("Error: Position is unavailable");
				}
			};

		

		// Display a map centered at the specified coordinate with a marker and InfoWindow.
		ClosestLocation = function (lat, lon){

		        // Find the closest feature to the user's location
		        var closest = 0;
		        var mindist = 99999;

		        for(var i = 0; i < locations.length; i++) 
			        {
			            // get the distance between user's location and this point
			            var dist = Haversine(locations[i].lat, locations[i].lon, lat, lon);

			            // check if this is the shortest distance so far
			            if (dist < mindist)
			            {
			                closest = i;
			                mindist = dist;
			            }
			        }
				
					// Get feature Index for closest location
					slideIndex = locations[closest];
					return slideIndex;

					// Get that feature ID's period number
					// var e = locations.length;
					// while(e--){
					// 	if(locations[e].id === slide)
					// 	break;
					// 	}	
					// slideNumber = e;
		};

		UserLocation = function (position)
		    {
		        ClosestLocation(position.coords.latitude, position.coords.longitude);
		    };

		

		this.StartGeoLocation = function(){
			// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				if(navigator.geolocation)
					{
							var options = {timeout: 10000, enableHighAccuracy: true};
							// watchID = navigator.geolocation.watchPosition(UserLocation, errorHandler, options);
							watchID = $geolocation.watchPosition(options);
							// alert("Geolocation has been turned on" + watchID);
					}
					else
					{	
			            	// ClosestLocation(50.928977, -1.403055);
							alert("Geolocation is not supported in your browser");
					}

					$rootScope.$watch('myPosition.coords', function (newValue, oldValue){
						console.log(newValue);
					});
				
			
		};

		GetLocationNumber = function(){

			var slideNumber = ClosestLocation();
			var slideNumberPeriods = slideNumber.periods;

			var tourPeriod = $state.current.data.tourPeriod;

			// Get that feature ID's period number
			if(slideNumberPeriods.hasOwnProperty(tourPeriod)){
    			var slideID = slideNumberPeriods[tourPeriod];
 				return slideID;
    		}
		};

		GeoGo = function(){
			console.log(GetLocationNumber());
			goTo(GetLocationNumber());
		};  
			
		this.StopGeoLocation = function(){
			navigator.geolocation.clearWatch(watchID);
			watchID = null;
			alert("Geolocation has been turned off" + watchID);
		};
	
	}]);

	app.controller('carouselCtrl', ['$scope', function(a) {

		var ctrl;
      	ctrl = this;

		a.tour = function(){
        	var d = function(){
                	// for (var j = 0; j < t1.c.pages.length; j++) {
                		var f = t1.c.pages;
                				var g = f;
                				return g;
                		// }
                	// }
                };

            return{
                tours: d
            };
        }(),

		ctrl.NavEN = a.tour.tours(),
		console.log(ctrl.NavEN);

      	ctrl.carouselInitializer = function() {
	        $(".carouselDiv").owlCarousel({
	          items: 3,
	          navigation: false,
	          pagination: false,
	          });
      	};
      	
    }]);

    app.controller('menuCtrl', ['$scope', '$controller', function($scope, $controller){

	$controller('RegionCtrl', {$scope: $scope});
	var a = $scope.region.country();

	$scope.test = a;
	// console.log(a);

    }]);

    app.directive('menuLoad', [function(){

    	var menuTemplate = '<nav class="navbar"><div class="container-fluid"><div id="menuOpener" class ="col-xs-1 col-xs-offset-11 col-sm-1 col-sm-offset-11 col-md-1 col-md- offset-11 col-lg-1 col-lg-offset-11"><button type="button" class="navbar- toggle collapse visible" data-toggle="push" data-target="#navbar"aria- expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><i class="fa fa-bars fa-2x"></i></button></div><div id="navbar"><ul class="nav navbar-nav" role="menu"><h3>Portus Tour</h3><hr/><li class="dropdown open">  <a ng-href="#" class="dropdown- toggle" data-toggle="dropdown" role="button" aria- expanded="false">Switch Language <span class="caret"></span></a> <ul class="dropdown-menu" role="menu"><li><a ng-href="#">English</a></li><li class="divider"></li><li><a ng-href="#">Italian</a></li><li class="divider"></li> </ul>   </li>   <li class="dropdown"> <a ng-href="#" class="dropdown-toggle" data- toggle="dropdown" role="button" aria- expanded="false">Select Tour <span class="caret"></span></a> <ul class ="dropdown-menu" role="menu">   <li><a ng-href="#">Claudian</a></li>   <li class="divider"></li>   <li><a ng- href="#">Trajanic</a></li>   <li class="divider"></li>   <li><a ng-href="#">Severan</a></li>   <li class="divider"></li>   <li><a ng-href="#">Fifth-Seventh</a></li>   <li class="divider"></li>   <li><a ng- href="#">Virtual Tour</a></li>   <li class="divider"></li>   <li><a ng-href="#">Modern Tour</a></li>   <li class="divider"></li> </ul>   </li>   <li class="dropdown open"> <a class ="dropdown-toggle" data-toggle="dropdown"role="button" aria- expanded="false">Geolocation <span class="caret"></span></a> <ul class ="dropdown-menu"role="menu">   <li><a ng-click="GeoOn()">On</a></li> <li class="divider"></li>   <li><a ng- click="toggleGeo()">Off</a></li> <li class="divider"></li> </ul>   </li>   <li class="dropdown open"> <a ng-href="#"class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Maps <span class="caret"></span></a> <ul class ="dropdown-menu" role="menu">   <li><a class="leaflet-control-layers- selector"name="leaflet-base-layers" onclick="onInputClick();" ng- href="#">Drawing</a></li>   <li class="divider"></li> <li><a class ="leaflet-control-layers-selector" name="leaflet-base-layers" ng- href="#">Satellite</a></li>   <li class="divider"></li> </ul>   </li> </ul> <div id"vcomenubar"></div> </div>   </div> </nav>';

    	return {

    	};

    }]);

	app.controller('storymapCtrl', ['$scope', '$state', '$stateParams', '$location', 'geolocator', "$translate", "$translatePartialLoader",
      function($scope, $state, $stateParams, $location, geolocator, $translate, $translatePartialLoader) {

      	paramVal = $stateParams.start_at_slide;

      	var tourID = $state.current.data.tourID;
		var tourLang = $state.current.data.tourLang;
		var tourPeriod = $state.current.data.tourPeriod;
		var tourMap = $state.current.data.tourMap;
		var storymap_data = "json/" + tourLang + "/" + tourPeriod + ".json";

		// var nextTourID = tourLang + "/" + (t1.c.pages[(tourID + 1)].path[tourLang]);
		// var prevTourID = tourLang + "/" + (t1.c.pages[(tourID - 1)].path[tourLang]);

		var storymap_options = {
			script_path: "js/storymapJS",
			width: "100%",
			height: "100%",
			language: tourLang,
			start_at_slide: 0,
			show_lines: false,
			use_custom_markers: true,			
			show_history_line: false,
			// map_background_color: "#d9d9d9",
			map_background_color: "#ffffff",
			// map config
			maps: tourMap
		};				

		if(paramVal > 0) {
			storymap_options.start_at_slide = parseInt(paramVal);
		}
		else
		{
			storymap_options.start_at_slide = 0;
		}

		var storymap = new VCO.StoryMap("storymap_" + tourPeriod, storymap_data, storymap_options);



		goTo = function(n){
			storymap.goTo(n);
		};

		window.onresize = function(event) {
		storymap.updateDisplay();
		};

		nextTour = function(){
			if (tourID === t1.c.pages.length){
				return tourLang + "/" + (t1.c.pages[0].path[tourLang]);
			}
			else {
				return tourLang + "/" + (t1.c.pages[(tourID + 1)].path[tourLang]);
			}
			
		};

		prevTour = function(){
			if(tourID === 0){
				return tourLang + "/";
			}
			else {
				return tourLang + "/" + (t1.c.pages[(tourID - 1)].path[tourLang]);
			}
			
		};

	}]);
	
	app.controller('timelineCtrl', ['$scope', '$state', '$stateParams', '$location',
      function($scope, $state, $stateParams, $location) {

      	paramVal = $stateParams.start_at_slide;

      	var tourLang = $state.current.data.tourLang;
		var tourPeriod = $state.current.data.tourPeriod;

		var timeline_config = {
			type: "timeline",
			width: "100%",
			height: "100%",
			font: "GentiumSerif-OpenSans",
			lang: tourLang,
			start_at_slide: 0,
			source:     "json/" + tourLang + "/" + tourPeriod + ".json",
			embed_id:   "timeline-embed"
		};

		if(paramVal > 0) {
					timeline_config.start_at_slide = parseInt(paramVal);
				}
		else
		{
			timeline_config.start_at_slide = 0;
		}

		createStoryJS(timeline_config);

	}]);

})();



