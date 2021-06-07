
Hooks.on('diceSoNiceReady', (dice3d) => {
  dice3d.addSystem({ id: "Broken Compass", name: "Broken Compass" }, false);

   dice3d.addDicePreset({
     type: "d20",
     labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10",
       "11",
       "12",
       "13",
       "14",
       "15",
       "16",
       "17",
       "18",
       "19",
       "20"
     ],
     system: "Broken Compass"
   },"d20");

   dice3d.addDicePreset({
     type: "d2",
	      labels: [
       "modules/dice-so-broken/graphics/faces/skull.png",
       "modules/dice-so-broken/graphics/faces/compass.png"
     ],
     system: "Broken Compass"
	 
   });

   dice3d.addDicePreset({
     type: "d4",
	      labels: [
       "1",
       "2",
       "3",
       "4"
     ],
     system: "Broken Compass"
	 
   },"d4");

   dice3d.addDicePreset({
     type: "d6",
	      labels: [
       "modules/dice-so-broken/graphics/faces/skull.png",
       "N",
       "S",
       "W",
       "E",
       "modules/dice-so-broken/graphics/faces/compass.png"
     ],
     system: "Broken Compass"
   },"d6");
   
   dice3d.addDicePreset({
     type: "d8",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8"
     ],
     system: "Broken Compass"
   },"d8");
   
   dice3d.addDicePreset({
     type: "d10",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10"
     ],
     system: "Broken Compass" 
   },"d10");

   dice3d.addDicePreset({
     type: "d12",
	      labels: [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10",
       "11",
       "12"
     ],
     system: "Broken Compass"
   },"d12");
   
   dice3d.addDicePreset({
     type: "d100",
	      labels: [
       "10",
       "20",
       "30",
       "40",
       "50",
       "60",
       "70",
       "80",
       "90",
       "00",
     ],
     system: "Broken Compass"
   },"d10");
   
   
  dice3d.addTexture("red-adventure", {
    name: "Red - Adventure is back",
    composite: "multiply",
    source: "modules/dice-so-broken/graphics/dice/red.png",
	bump: "modules/dice-so-broken/graphics/dice/red-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Broken Compass red',
        description: "Adventure is back KS - Red dice",
        category: "Broken Compass",
        background: "#7c1d28",
		foreground: '#333333',
		outline: '#941826',
        edge: '#999999',
		texture: 'red-adventure',
		material: 'metal',
		fontScale: {
          "d100":0.8,
		  "d20": 0.9,
          "d12":1.0,
		  "d10": 0.9,
		  "d8": 0.9,
          "d6":1.3,
          "d2":2
        },
        font:"Charm"
      },"no");
    });
	
  dice3d.addTexture("green-adventure", {
    name: "Green - Adventure is back",
    composite: "multiply",
    source: "modules/dice-so-broken/graphics/dice/green.png",
	bump: "modules/dice-so-broken/graphics/dice/green-bump.png"
  })
    .then(() => {
      dice3d.addColorset({
        name: 'Broken Compass green',
        description: "Adventure is back KS - Green dice",
        category: "Broken Compass",
        background: "#1a6320",
		foreground: '#333333',
		outline: '#1c9926',
        edge: '#999999',
		texture: 'green-adventure',
		material: 'metal',
		fontScale: {
          "d100":0.8,
		  "d20": 0.9,
          "d12":1.0,
		  "d10": 0.9,
		  "d8": 0.9,
          "d6":1.3,
          "d2":2
        },
        font:"Charm"
      },"no");
    });
	
});