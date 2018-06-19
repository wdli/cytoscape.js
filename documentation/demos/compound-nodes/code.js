var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    boxSelectionEnabled: false,
    autounselectify: true,

    style: [
	{
	    selector: 'node',
	    css: {
		'content': 'data(name)',
		'text-valign': 'bottom',
		'text-halign': 'center',
		'font-size': '5pt',
	    }
	},
	
	{
	    selector: '$node > node',
	    css: {
		'padding-top': '10px',
		'padding-left': '10px',
		'padding-bottom': '10px',
		'padding-right': '10px',
		'text-valign': 'bottom',
		'text-halign': 'center',
		'background-color': '#bbb',
		'font-size': '10pt',
	    }
	},
	
	{
	    selector: 'edge',
	    css: {
		'target-arrow-shape': 'triangle'
	    }
	},

	
	{
	    selector: ':selected',
	    css: {
		'background-color': 'black',
		'line-color': 'black',
		'target-arrow-color': 'black',
		'source-arrow-color': 'black'
	    }
	}
    ],

    elements: {
	nodes: [

	    // primeter
	    { data: { id: 'b', name: "Perimeter Zone" } },
	    { data: { id: 'a', parent: 'b', name: "Load Balancer" }, position: { x: 215, y: 100 } },

	    // Business
	    { data: { id: 'g', name: "Business Zone" } },
	    { data: { id: 'd', parent: 'g', name: " Web Server 1" }, position: { x: 175, y: 200 } },
	    { data: { id: 'f', parent: 'g', name: " Web Server 2" }, position: { x: 275, y: 200 } },


	    // Restricted
	    { data: { id: 'i', name: "Restricted Zone" }},
	    { data: { id: 'j', name: " DB 1", parent: 'i'}, position: { x: 175, y: 300}},
	    { data: { id: 'k', name: " DB 2", parent: 'i'}, position: { x: 275, y: 300}},

	],
	
	edges: [
	    // LB - Web server
	    { data: { id: 'ad', source: 'a', target: 'd' } },
	    { data: { id: 'af', source: 'a', target: 'f' } },

	    // Web server - DB
	    { data: { id: 'dj', source: 'd', target: 'j' } },
	    { data: { id: 'fk', source: 'f', target: 'k' } },

	]
    },

    layout: {
	name: 'preset',
	padding: 5
    }
});
