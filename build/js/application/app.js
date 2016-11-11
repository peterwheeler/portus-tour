var angtranslations = {
	enUK: {
		HOMEPAGE: {
			TITLE: "Portus Tour",
			HEADLINE: "Explore the history of Portus",
			SELECTTOUR: "Select a Tour",
			LEARNMORE: "Explore More",
			START: "Start",
			ABOUT: "About"
		},
		ABOUT: {
			ABOUT: "About",
			ABOUTTEXT: "Portus was the maritime port of Imperial Rome between the mid-1st century AD and the 6th century AD. It was the focus of a network of ports and, together with the neighbouring river port at Ostia, it was the commercial hub that connected the city to the rest of the Mediterranean world. It played a key role in re-distributing imports from other Mediterranean ports to supply the city and, to a lesser extent, exporting products from the Tiber valley. It was established under the emperor Claudius, subsequently enlarged by Trajan and successive emperors into the 4th century AD, until its gradual decline in the later 5th and 6th centuries AD.",
			ABOUTSUBTEXT: "This tour has been constructed by the Portus Project to help visualise the different phases of the port over time. It also consists of a modern tour of the site and a history of the archaeological investigations that have been carried out at the site. It was built in collaboration with the Soprintendenza Speciale per il Colosseo, il Museo Nazionale Romano e l’Area Archeologica di Roma, which is part of the Ministero per i Beni e le Attività Culturali (MIBAC).",
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
			ABOUTEND: "Or select continue below to start the tour",
			CONTINUE: "CONTINUE"
		},
		LANGUAGES: {
			ENGLISH: "{{language}}",
			ITALIAN: "{{language}}"
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
			SELECTALANG: "Language",
			SELECTATOUR: "Tours",
			GEOLOCATION: "Geolocation",
			ABOUT: "About",
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
				TITLE: "Visita Portus",
				HEADLINE: "Esplora la storia di Porto",
				SELECTTOUR: "Selezionare un Tour",
				LEARNMORE: "Esplorare",
				START: "Inizio",
				ABOUT: "Informazioni"
		},
		ABOUT: {
				ABOUT: "Informazioni",
				ABOUTTEXT: "",
				ABOUTSUBTEXT: "Porto (l’antico Portus) era il porto marittimo di Roma antica e, con il vicino porto fluviale di Ostia, è stato al centro di una rete di porti che collegavano Roma Imperiale tra la metà del I secolo e il VI secolo d.C. Questo tour fa parte del sito web della Soprintendenza Speciale per i Beni Archeologici di Roma (SSBAR), organo periferico del Ministero per i Beni e le Attività Culturali (MIBAC), ed è stato creato in collaborazione con il.",
			ABOUTSUBSUBTEXT: "Each tour covers a different period in time. These are:",
			ABOUTCLA: " - stretching from the beginning of the port's construction in c. AD 46 until its inauguration under the Emperor Nero in AD 64.",
			ABOUTTRA: " - covering the development of the port during the reign of the emperor Trajan, with the majority of work probably concentrated between AD 110-117.",
			ABOUTSEV: " -  the construction of new massive buildings around the port complex.",
			ABOUTFS: " - the decline of the port from the 5th century onwards.",
			ABOUTMOD: " - the site and the ruins of Portus as it is today.",
			ABOUTTIME: " - a timeline of the work that has been carried out at Portus, from antiquarians to the present day.",
			ABOUTEND: "Or select continue below to start the tour",
			CONTINUE: "CONTINUA"	
		},
		LANGUAGES: {
			ENGLISH: "Inglese",
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
			SELECTALANG: "Lingua",
			SELECTATOUR: "Vistas",
			GEOLOCATION: "Geolocation",
			ABOUT: "Informazioni",
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
			ABOUT: "Informazioni",
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
			map_type: "mapTiler",
			map_name: "Reconstruction",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Maps designed by <a href='https://artasmedia.com/'' target='_blank' class='vco-knightlab-brand'>ArtasMedia</a>",
			mapTiler: {
				path: 				"maps/period_01/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/plan_en_01/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014",
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
			}
		}],
		it: [{
			map_type: "mapTiler",
			map_name: "Ricostruzione",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/period_01/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/plan_it_01/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014", 
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
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
			map_type: "mapTiler",
			map_name: "Reconstruction",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/period_03/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/plan_en_03/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014",
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		}],
		it: [{
			map_type: "mapTiler",
			map_name: "Ricostruzione",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>', 
			mapTiler: {
				path: 				"maps/period_03/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/plan_it_03/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014",
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
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
			map_type: "mapTiler",
			map_name: "Reconstruction",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>', 
			mapTiler: {
				path: 				"maps/period_05/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/plan_en_05/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014",
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		}],
		it: [{
			map_type: "mapTiler",
			map_name: "Ricostruzione",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/period_05/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>', 
			mapTiler: {
				path: 				"maps/plan_it_05/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014",
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
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
			map_type: "mapTiler",
			map_name: "Reconstruction",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/period_06/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/plan_en_06/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014",
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17,
				
			}
		}],
		it: [{
			map_type: "mapTiler",
			map_name: "Ricostruzione",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/period_06/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/plan_it_06/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014", 
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
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
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014", 
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17,
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Reconstruction",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/period_05/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/plan_en_05/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		}],
		it: [{
			map_type: "mapTiler",
			map_name: "Satellite",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		"Satellite &#9400; Digital Globe 2014",
			mapTiler: {
				path: 				"maps/satellite/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}
		},
		{
			map_type: "mapTiler",
			map_name: "Ricostruzione",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/period_05/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
			}	
		},
		{
			map_type: "mapTiler",
			map_name: "Plan",
			map_mini: false,
			map_as_image: false,
			calculate_zoom: false,
			attribution: 		'Maps designed by <a href="https://artasmedia.com/" target="_blank" class="vco-knightlab-brand">ArtasMedia</a>',
			mapTiler: {
				path: 				"maps/plan_en_05/",
				lat:				"",
				lng: 				"",
				zoom: 				14,
				minZoom:        	14,
				maxZoom:        	17
				
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

var app = angular.module('Map_View', ['ui.router', 'ui.bootstrap', 'pascalprecht.translate', 'ngSanitize', 'LocalStorageModule', 'ngAnimate', 'ocNgRepeat']);

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
	
	$locationProvider.html5Mode(true).hashPrefix("!");
		  
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
            d.user.loadLocale() ? h.debug("locale is: " + d.user.getLocale().main) : h.debug("locale is: loaded" );
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
            }
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
                	return "/" + c;
            }
            return "/";
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
	
	app.run(function($state, $rootScope, $urlRouter, $location, $window) {

		$window.ga('create', 'UA-17304354-25', 'auto');
		
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
					$window.ga('send', 'pageview', $location.path());
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

      	ctrl.carouselInitializer = function() {
	        $(".carouselDiv").owlCarousel({
	          items: 3,
	          navigation: false,
	          pagination: false,
	          });
      	};
      	
    }]);

	app.controller('storymapCtrl', ['$scope', '$state', '$stateParams', '$location', "$translate", "$translatePartialLoader",
      function($scope, $state, $stateParams, $location, $translate, $translatePartialLoader) {

      	paramVal = $stateParams.start_at_slide;

      	var tourID = $state.current.data.tourID;
		var tourLang = $state.current.data.tourLang;
		var tourPeriod = $state.current.data.tourPeriod;
		var tourMap = $state.current.data.tourMap;
		var storymap_data = "json/" + tourLang + "/" + tourPeriod + ".json";

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

		currentSlide = function(){
			$scope.location = $location.host();
			$scope.slideNo = "?start_at_slide=" + storymap.slideChange();
			$scope.$apply();
		};

		currentTour = function(){
			return tourLang + "/" + (t1.c.pages[(tourID)].path[tourLang]);
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

		closeModal = function(){
			console.log("close");
			$('.modal-overlay').hide();
		};

		closeModalLink = function(){
			return closeModal();
		};

		setTimeout(function() {
			$('.menubar-collapse').sideNav({
		        menuWidth: 280, // Default is 240
		        edge: 'left', // Choose the horizontal origin
		        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		        draggable: true // Choose whether you can drag to open on touch screens
		     }); 
		    $('.collapsible-menubar').collapsible();
		    $('.modal').modal();
		    $('.tooltipped').tooltip({delay: 50});
		    console.log("done");
	    }, 1000);

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



