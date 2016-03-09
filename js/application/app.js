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
				ABOUTTEXT: "Portus was the maritime port of Imperial Rome between the mid-1st century AD and the 6th century AD. It was the focus of a network of ports and, together with the neighbouring river port at Ostia, it was the commercial hub that connected the city to the rest of the Mediterranean world. It played a key role in re-distributing imports from other Mediterranean ports to supply the city and, to a lesser extent, exporting products from the Tiber valley. It was established under the emperor Claudius, subsequently enlarged by Trajan and successive emperors into the 4th century AD, until its gradual decline in the later 5th and 6th centuries AD",
				ABOUTSUBTEXT: "Porto (l’antico Portus) era il porto marittimo di Roma antica e, con il vicino porto fluviale di Ostia, è stato al centro di una rete di porti che collegavano Roma Imperiale tra la metà del I secolo e il VI secolo d.C. Questo tour fa parte del sito web della Soprintendenza Speciale per i Beni Archeologici di Roma (SSBAR), organo periferico del Ministero per i Beni e le Attività Culturali (MIBAC), ed è stato creato in collaborazione con il",
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



        var t1 = {};
        t1.o = {};
        t1.c = {};
        t1.o.Menu = function(a, b) {
            this.type = a;
        };
        t1.o.Country = function(a, b) {
            this.language = a, this.name = b;
        };
        t1.o.Country.prototype.name = function() {
            return "COUNTRY." + this.country.toUpperCase() + ".NAME";
        };
        t1.o.Country.prototype.language = function() {
            return "COUNTRY." + this.country.toUpperCase() + ".LANGUAGE";
        };
        t1.o.Country.prototype.locale = function() {
            return this.country + "-" + this.language;
        };
        t1.o.Page = function(a, b, c, d) {
            this.path = a, this.controller = b, this.period = c, this.map = d;
        };

        t1.c.countries = [new t1.o.Country("en", "en"), new t1.o.Country("it", "it")];
        t1.c.menu = [new t1.o.Menu("about")];
        t1.c.pages = [
            new t1.o.Page({
                    en: "claudian",
                    it: "claudio"
                },
                "storymapCtrl", {
                    en: "period_1",
                    it: "periodo_1"
                }, {
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
                            "attribution": "Peter Wheeler / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Maria del Carmen Moreno Escobar / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Digital Globe 2014"
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
                            "attribution": "Peter Wheeler / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Maria del Carmen Moreno Escobar / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Digital Globe 2014"
                        }
                    }]
                }
            ),
            new t1.o.Page({
                    en: "trajanic",
                    it: "traiano"
                },
                "storymapCtrl", {
                    en: "period_2",
                    it: "periodo_2"
                }, {
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
                            "attribution": "Peter Wheeler / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Maria del Carmen Moreno Escobar / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Digital Globe 2014"
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
                            "path": "maps/en/period_2/",
                            "width": 5200,
                            "height": 5844,
                            "tolerance": 0.9,
                            "attribution": "Peter Wheeler / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Maria del Carmen Moreno Escobar / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Digital Globe 2014"
                        }
                    }]
                }
            ),
            new t1.o.Page({
                    en: "severan",
                    it: "severo"
                },
                "storymapCtrl", {
                    en: "period_3",
                    it: "periodo_3"
                }, {
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
                            "attribution": "Peter Wheeler / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Maria del Carmen Moreno Escobar / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Digital Globe 2014"
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
                            "path": "maps/en/period_3/",
                            "width": 5200,
                            "height": 5844,
                            "tolerance": 0.9,
                            "attribution": "Peter Wheeler / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Maria del Carmen Moreno Escobar / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Digital Globe 2014"
                        }
                    }]
                }
            ),
            new t1.o.Page({
                    en: "fifth-seventh",
                    it: "quinta-settima"
                },
                "storymapCtrl", {
                    en: "period_4",
                    it: "periodo_4"
                }, {
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
                            "attribution": "Peter Wheeler / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Maria del Carmen Moreno Escobar / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Digital Globe 2014"
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
                            "path": "maps/en/period_4/",
                            "width": 5200,
                            "height": 5844,
                            "tolerance": 0.9,
                            "attribution": "Peter Wheeler / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Maria del Carmen Moreno Escobar / University of Southampton"
                        }
                    }, {
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
                            "attribution": "Digital Globe 2014"
                        }
                    }]
                }
            ),
            new t1.o.Page({
                    en: "virtual_tour",
                    it: "tour_virtuale"
                },
                "storymapCtrl", {
                    en: "period_5",
                    it: "periodo_5"
                }, {
                    en: [{
                        map_type: "zoomify",
                        map_name: "Satellite",
                        map_mini: true,
                        map_as_image: false,
                        calculate_zoom: false,
                        zoomify: {
                            "name": "Drawing",
                            "path": "maps/en/satellite/",
                            "width": 5200,
                            "height": 5844,
                            "tolerance": 0.9,
                            "attribution": "Digital Globe 2014"
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
                            "path": "maps/en/satellite/",
                            "width": 5200,
                            "height": 5844,
                            "tolerance": 0.9,
                            "attribution": "Digital Globe 2014"
                        }
                    }]
                }
            ),
            new t1.o.Page({
                    en: "timeline",
                    it: "cronologia"
                },
                "timelineCtrl", {
                    en: "period_6",
                    it: "periodo_6"
                }, {
                    en: [{
                        type: "timeline",
                        width: "100%",
                        height: "100%",
                        font: "GentiumSerif-OpenSans",
                        lang: "en",
                        start_at_slide: 0,
                        source: "json/en/period_6.json",
                        embed_id: "timeline-embed"
                    }],
                    it: [{
                        type: "timeline",
                        width: "100%",
                        height: "100%",
                        font: "GentiumSerif-OpenSans",
                        lang: "it",
                        start_at_slide: 0,
                        source: "json/it/periodo_6.json",
                        embed_id: "timeline-embed"
                    }]
                }
            )
        ];


( function(){
        'use strict';
        var slideIndex = 0;
        var watchID;
        var paramVal;
        var scopeDiv;
        var id;



        function rootConfig($stateProvider, $urlRouterProvider, $locationProvider) {

            for (var g = 0; g < t1.c.countries.length; g++) {
                var c = t1.c.countries[g];
                $stateProvider.state(c.language, {
                    url: "/" + c.language + "/",
                    templateUrl: "partials/index.html",
                    controller: "rootCtrl"
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
            $urlRouterProvider.otherwise("/en/");

            $locationProvider.html5Mode(true).hashPrefix("!");

        }

        function localeConfig($translateProvider, $translatePartialLoaderProvider) {
            var b = localStorage.getItem("ls.locale.main");

            b = b ? b.contains("en") ? "en" : b.contains("it") ? "it" : b.contains("it") ? "it" : "en" : "en";

            $translateProvider.translations('en', angtranslations.enUK).translations('it', angtranslations.itIT).preferredLanguage(b);

            // $translateProvider.determinePreferredLanguage();

            // Enable escaping of HTML
            $translateProvider.useSanitizeValueStrategy('escaped');
        }

        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        };

        String.prototype.contains = function(a) {
            return this.indexOf(a) >= 0;
        };

        String.prototype.beginsWith = function(a) {
            return 0 === this.indexOf(a);
        };

        String.prototype.isNumber = function() {
            return !isNaN(parseInt(this));
        };

        String.prototype.isBoolean = function() {
            return "true" === this || "false" === this;
        };

        String.prototype.asPrimitive = function() {
            return this.isNumber() ? parseFloat(this) : this.isBoolean() ? "true" === this : this;
        };

        String.prototype.sanatizeHtml = function() {
            return this.replace(/<(?:.|\n)*?>/gm, "");
        };

        String.prototype.indexesOf = function(a, b) {
            var c, d = 0,
                e = a.length,
                f = [],
                g = this;
            for (b && (g = g.toLowerCase(), a = a.toLowerCase());
                (c = g.indexOf(a, d)) > -1;) f.push(c), d = c + e;
            return f;
        };

        String.prototype.replaceAll = function(a, b, c) {
            return c && (a = a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")), this.replace(new RegExp(a, "g"), b);
        };

        String.prototype.shuffle = function() {
            return this.split("").sort(function() {
                return 0.5 - Math.random();
            }).join("");
        };

        String.prototype.removeAccents = function() {
            var a = this.toLowerCase();
            return a = a.replace(new RegExp("\\s", "g"), ""), a = a.replace(new RegExp("[Ã Ã¡Ã¢Ã£Ã¤Ã¥]", "g"), "a"), a = a.replace(new RegExp("Ã¦", "g"), "ae"), a = a.replace(new RegExp("Ã§", "g"), "c"), a = a.replace(new RegExp("[Ã¨Ã©ÃªÃ«]", "g"), "e"), a = a.replace(new RegExp("[Ã¬Ã­Ã®Ã¯]", "g"), "i"), a = a.replace(new RegExp("Ã±", "g"), "n"), a = a.replace(new RegExp("[Ã²Ã³Ã´ÃµÃ¶]", "g"), "o"), a = a.replace(new RegExp("Å“", "g"), "oe"), a = a.replace(new RegExp("[Ã¹ÃºÃ»Ã¼]", "g"), "u"), a = a.replace(new RegExp("[Ã½Ã¿]", "g"), "y");
        };

        Array.prototype.contains = function(a) {
            return !!~this.indexOf(a);
        };

        Array.prototype.isEmpty = function() {
            return 0 === this.length;
        };

        Array.prototype.pushAll = function(a) {
            this.push.apply(this, a);
        };

        function rootCtrl(a, b, d, f, g, h, k) {
            a.$watch(function() {
                        return $(window).width();
                    },
                    function(b, c) {
                        b != c && 991 > b && (a.sideMenu = !0)
                    }
                ),

                d.user = function() {
                    var a, b = !1,
                        c = !1,
                        d = {
                            main: null,
                            alt: null,
                            countryCode: null,
                            loaded: !1
                        },
                        g = function() {

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
                d.user.loadLocale() ? h.debug("locale is: " + d.user.getLocale().main) : h.debug("locale is: loaded");
            };
            b.init();
        };

        function regionCtrl(a, b, c, d, e) {

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
                            } else {
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
                };
        }

        function omitfirst() {
            return function(input) {
                return input.slice(1, input.length);
            };
        }

        function capitalize() {
            return function(input) {
                return input.substring(0, 1).toUpperCase() + input.substring(1);
            };
        }

        function removedashes() {
            return function(input) {
                return input.replace('-', ' ');
            };
        }

        function removeunderscore() {
            return function(input) {
                return input.replace('_', ' ');
            };
        }

        function testRuns($state, $rootScope, $urlRouter, $location) {
            $rootScope
                .$on('$stateChangeStart',
                    function(event, toState, toParams, fromState, fromParams) {
                        console.log("stateChangeStart:");
                        console.log(event);
                        console.log(toState);
                    });

            $rootScope
                .$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {
                        // console.log("stateChangeSuccess:");
                        // console.log(event);
                        // console.log(toState);
                    });

            // $rootScope
            //     .locate = function(number) {
            //         ClosestLocation(number);
            //     };

            $rootScope
                .$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams) {
                        console.log("State Change: Error!");
                    });

            $rootScope
                .$on('$stateNotFound',
                    function(event, toState, toParams, fromState, fromParams) {
                        console.log("State Change: State not found!");
                    });

            $rootScope
                .$on('$viewContentLoading',
                    function(event, viewConfig) {
                        console.log("View Load: the view is loaded, and DOM rendered!");
                    });

            $rootScope
                .$on('$viewcontentLoaded',
                    function(event, viewConfig) {
                        console.log("View Load: the view is loaded, and DOM rendered!");
                    });
        };

        function carouselDirective() {

        	var carouselOwl = {
        		restrict: "A",
        		templateUrl: "partials/carousel.html",
        		controller: "rootCtrl",
        		controllerAs: "vm",
        		link: function(scope, element, attr, controller){
        			scope.carouselInitializer  = function() {
				        $(".carouselDiv").owlCarousel({
				          items: 3,
				          navigation: false,
				          pagination: false,
				          });
      				};
        		}
        	};
        	return carouselOwl;
        };

        function storymapDirective() {

        	var storymapJS = {
        		restrict: "A",
        		template: "<div class='storymap_'></div>",
        		controller: "rootCtrl",
        		controllerAs: "vm",
        		link: function(scope, element, attr, controller){
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

					window.onresize = function(event) {
					storymap.updateDisplay();
					};

					var storymap = new VCO.StoryMap("storymap_" + tourPeriod, storymap_data, storymap_options);
        		}

		};	
        }

        var appConfig = function() {
            var appName = "Map_View",
                appVendorDependencies = ['ui.router', 'ui.bootstrap', 'pascalprecht.translate', 'ngSanitize', 'LocalStorageModule', 'ngAnimate', 'ocNgRepeat', 'ngGeolocation'];
            return {
                appName: appName,
                appVendorDependencies: appVendorDependencies
            };
        }();

        angular.module(appConfig.appName, appConfig.appVendorDependencies),
            angular.module(appConfig.appName).config(rootConfig),
            rootConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"],
            angular.module(appConfig.appName).config(localeConfig),
            localeConfig.$inject = ["$translateProvider", "$translatePartialLoaderProvider"],

            angular.module(appConfig.appName).controller("rootCtrl", rootCtrl),
            rootCtrl.$inject = ["$scope", "$window", "$rootScope", "localStorageService", "$interval", "$log", "$location"],

            angular.module(appConfig.appName).controller("regionCtrl", regionCtrl),
            regionCtrl.$inject = ["$scope", "$rootScope", "$log", "$translate", "$location"],

            angular.module(appConfig.appName).run(testRuns),
            angular.module(appConfig.appName).filter("omitfirst", omitfirst),
            angular.module(appConfig.appName).filter("capitalize", capitalize),
            angular.module(appConfig.appName).filter("removedashes", removedashes),
            angular.module(appConfig.appName).filter("removeunderscore", removeunderscore)

            // angular.module(appConfig.appName).controller("navigationCtrl", navigationCtrl),
            // sitesCtrl.$inject = ["$scope", "$stateParams"],

            // angular.module(appConfig.appName).controller("storymapCtrl", storymapCtrl),
            // sitesCtrl.$inject = ["$scope", "$stateParams"],

            // angular.module(appConfig.appName).controller("timelineCtrl", timelineCtrl),
            // sitesCtrl.$inject = ["$scope", "$stateParams"],

            angular.module(appConfig.appName).directive("carouselDirective", carouselDirective),

            angular.module(appConfig.appName).directive("storymapDirective", storymapDirective)

            // angular.module(appConfig.appName).directive("timelineDirective", timelineDirective);

    }({}, function() {
        return this; }())
);
