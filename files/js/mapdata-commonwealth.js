
$(document).on("loadMapdata", function () {
	window.map_path   = 'commonwealth';
	window.map_sWest  = L.latLng(-100, -200);
	window.map_nEast  = L.latLng(500, 200);
	window.map_center = [20, 4];
	window.map_mZoom  = 4;

	processData({
	location: [{
		coords: [[-25.483,-68.467]],
			label: $.t("c:location.label.vault75"),
			popup: $.t("c:location.desc.vault75")
			//label: $.t("Vault 75"),
			//popup: $.t("Access via Malden Middle School")
		},{
		coords: [[-63.411,-75.981]],
			label: $.t("c:location.label.vault114"),
			popup: $.t("c:location.desc.vault114")
			//label: $.t("Vault 114"),
			//popup: $.t("")
		},{
		coords: [[-65.622,-108.984]],
			label: $.t("c:location.label.vault81"),
			popup: $.t("c:location.desc.vault81")
		},{
		coords: [[-78.251,-118.477]],
			label: $.t("c:location.label.vault95"),
			popup: $.t("c:location.desc.vault95")
		},{
		coords: [[-3.294,-146.953]],
			label: $.t("c:location.label.vault110"),
			popup: $.t("c:location.desc.vault110")
		},{
		coords: [[-75.888,-25.752]],
			label: $.t("c:location.label.behemoth"),
			popup: $.t("c:location.desc.behemoth")
		},{
		coords: [[-70.974,-156.797]],
			label: $.t("c:location.label.behemoth"),
			popup: $.t("c:location.desc.behemoth")
		},{
		coords: [[-37.230,-136.494]],
			label: $.t("c:location.label.behemoth"),
			popup: $.t("c:location.desc.behemoth")
		},{
		coords: [[-63.015,-72.642]],
			label: $.t("c:location.label.swain"),
			popup: $.t("c:location.desc.behemoth")
		},{
		coords: [[-25.562,-62.051]],
			label: $.t("c:location.label.behemoth"),
			popup: $.t("c:location.desc.behemoth")
		},{
		coords: [[-77.409,-87.891]],
			label: $.t("c:location.label.behemoth"),
			popup: $.t("c:location.desc.behemoth")
		}
		],
		
	// todo, mags missing?
		alchemy: [],

	// 20x Bobblehead
	bobblehead: [{
	coords: [[-7.885,-122.695]],
			label: $.t("c:bobblehead.label.EnergyWeaponsBobblehead"),
			popup: $.t("c:bobblehead.desc.EnergyWeaponsBobblehead")
		}, {
			coords: [[-65.513,-80.859]],
			label: $.t("c:bobblehead.label.BigGunsBobblehead"),
			popup: $.t("c:bobblehead.desc.BigGunsBobblehead")
		}, {
			coords: [[-62.145,-44.912]],
			label: $.t("c:bobblehead.label.SmallGunsBobblehead"),
			popup: $.t("c:bobblehead.desc.SmallGunsBobblehead")
		}, {
			coords: [[-67.709,14.326]],
			label: $.t("c:bobblehead.label.Endurance"),
			popup: $.t("c:bobblehead.desc.Endurance")
		}, {
			coords: [[-58.995,12.041]],
			label: $.t("c:bobblehead.label.Unarmed"),
			popup: $.t("c:bobblehead.desc.Unarmed")
		}, {
			coords: [[-67.407,36.387]],
			label: $.t("c:bobblehead.label.Agility"),
			popup: $.t("c:bobblehead.desc.Agility")
		}, {
			coords: [[-58.995,52.910]],
			label: $.t("c:bobblehead.label.Luck"),
			popup: $.t("c:bobblehead.desc.Luck")
		}, {
			coords: [[30.221,-65.830]],
			label: $.t("c:bobblehead.label.Repair"),
			popup: $.t("c:bobblehead.desc.Repair")
		}, {
			coords: [[53.593,-8.262]],
			label: $.t("c:bobblehead.label.Science"),
			popup: $.t("c:bobblehead.desc.Science")
		}, {
			coords: [[69.809,27.070]],
			label: $.t("c:bobblehead.label.Charisma"),
			popup: $.t("c:bobblehead.desc.Charisma")
		}, {
			coords: [[62.553,39.990]],
			label: $.t("c:bobblehead.label.Sneak"),
			popup: $.t("c:bobblehead.desc.Sneak")
		}, {
			coords: [[51.890,55.459]],
			label: $.t("c:bobblehead.label.Barter"),
			popup: $.t("c:bobblehead.desc.Barter")
		}, {
			coords: [[53.749,27.334]],
			label: $.t("c:bobblehead.label.Explosives"),
			popup: $.t("c:bobblehead.desc.Explosives")
		}, {
			coords: [[5.791,2.197]],
			label: $.t("c:bobblehead.label.Lock"),
			popup: $.t("c:bobblehead.desc.Lock")
		}, {
			coords: [[-5.791,-10.898]],
			label: $.t("c:bobblehead.label.Strength"),
			popup: $.t("c:bobblehead.desc.Strength")
		}, {
			coords: [[-17.644,-19.424]],
			label: $.t("c:bobblehead.label.Speech"),
			popup: $.t("c:bobblehead.desc.Speech")
		}, {
			coords: [[-24.847,-25.049]],
			label: $.t("c:bobblehead.label.Melee"),
			popup: $.t("c:bobblehead.desc.Melee")
		}, {
			coords: [[-21.371,-33.574]],
			label: $.t("c:bobblehead.label.Intelligence"),
			popup: $.t("c:bobblehead.desc.Intelligence")
		}, {
			coords: [[-22.837,-65.127]],
			label: $.t("c:bobblehead.label.Medicine"),
			popup: $.t("c:bobblehead.desc.Medicine")
		}, {
			coords: [[59.579,-86.045]],
			label: $.t("c:bobblehead.label.Perception"),
			popup: $.t("c:bobblehead.desc.Perception")
		}],



		armourerstable: [{
    coords: [[-20.138,-120.806]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased | Inside Museum of Freedom")
		}, {
			coords: [[-59.131,-29.092]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-60.587,-45.967]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-60.305,-44.604]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-61.164,-43.242]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-61.249,-39.683]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-61.752,-37.573]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-63.607,-25.444]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased | inside Fort Strong")
		}, {
			coords: [[-63.154,-25.225]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased | inside Fort Strong")
		}, {
			coords: [[-18.188,-89.011]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased | Lexington - Military Armor Transport")
		}, {
			coords: [[-37.160,-54.229]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased | 2x Powerarmor. One behind a Expert and Masterlock (Key for Masterlock somewhere around)")
		}, {
			coords: [[-39.977,-42.803]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased | on one of the dishes")
		}, {
			coords: [[-34.016,-47.109]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased | in the back of the semi")
		}, {
			coords: [[-2.372,-111.885]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased | By the crashed vertibird")
		}, {
			coords: [[-49.724,-109.688]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-39.504,-23.950]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Type of the Armor is levelbased |  hidden inside the containers and you have to walk around the back to gain access")
		}, {
			coords: [[-82.178,-134.033]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Lost raided and his raiders power armor.")
		}, {
			coords: [[-77.971,-158.027]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Power armor inside Abandon Chack / Installtion K-21B")
		}, {
			coords: [[-28.999,-93.340]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("Crashed vertibird and power armor.")
		}, {
			coords: [[-53.853,-60.469]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("inside a container on the raft.")
		}, {
			coords: [[-62.915,-146.426]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("inside the left most storage hall when approached from blood clinic.")
		}, {
			coords: [[-75.888,-52.075]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("atom cats t-60 that you can steal. No helmet.")
		}, {
			coords: [[-30.297,-93.164]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t("")
		}, {
			coords: [[-57.516,-136.318]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t('You have to Pick a Master Lock, <a href="https://www.reddit.com/r/Fallout/comments/3sql3m/new_interactive_map_of_fallout_4_settlements/cx0jdt4" target="_blank">but can also enter the Suite trough a back window and teleport out</a>. Also there is a novice terminal in the Place that unlocks a safe that has a key to that shed')
		}, {
			coords: [[-60.823,-65.347]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t('can be bought from KL-E-O at Goodneighbor')
		}, {
			coords: [[-61.565,-60.073]],
			label: $.t("Power Armor X-01"),
			popup: $.t('in/on top of Court 35 there is power armor, full X-01 suit if you are high enough level')
		}, {
			coords: [[-75.640,-68.621]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t('Leveled armor in the water, next to the APC')
		}, {
			coords: [[-70.656,-72.334]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t('South Boston Military Checkpoint ')
		}, {
			coords: [[-37.265,-117.620]],
			label: $.t("c:powerarmor.label.powerarmor"),
			popup: $.t('Leveled armor on a train car, in a cage, behind an advanced terminal.')
		}, {
			coords: [[-3.908,-93.999]],
			label: $.t("T51 Power Armor"),
			popup: $.t('Leveled armor on a train car, in a cage, behind an advanced terminal.')
		}
		
		
		
		],
		
		// recipes
		
		//-26.451/-72.642 for Slocum Joe's buzz bites. Its inside slocum Joe's HQ, just gotta unlock a safe. (I think it was expert. I dont remember)
		
		
		// PowerCore
		// -79.982,-152.754 Roof of Atlantic Offices
		// -78.578,-39.287 
		// -64.849,-100.767 South Boston Military Checkpoint
		
		
		// Mini Nukes
		// -9.449,-13.403 with Fatman 
		// -60.043,-77.388
		// -55.553,-69.434  Cabot House in the Basement 
		// -56.243,-67.632 Cabot House in the Basement
		// -71.003,-47.593 you get there on the Old Guns Quest
		// -77.925,-159.214  Inside Installtion K-21B
		// -78.543,-37.178 top of the ship
		// -14.179,-33.135 at the End of Dunwich Borers, unterwater
		// at the End of Dunwich Borers, unterwater-14.647,-34.761
		//  at the End of Dunwich Borers, unterwater-15.369,-32.520
	//Tesla Science Magazine 9x
	// Inside Reeb Marina -39.130,-39.331
// https://i.imgur.com/7bjh4fe.jpg -79.319,-52.295	

// Tesla Science Magazine
magtesla: [

		//label: $.t("c:Magazines.label.Tesla") + $.t(" 1/9 - ") + $.t("c:Magazines.label.Tesla-9"),
		//popup: $.t("c:Magazines.desc.Tesla")+ $.t("c:Magazines.desc.Tesla-1-9"),
	],	

// TODO Taboo Tattoos
//magtesla: [

		//label: $.t("c:Magazines.label.Taboo") + $.t(" 1/16 - ") + $.t("c:Magazines.label.Taboo-16"),
		//popup: $.t("c:Magazines.desc.Taboo-1-16"),
//	],	
		

		
		
		
		
	
	//SideQuest
	 sidequest: [
		 {
		coords: [[-27.098,-119.575]],
		label: $.t("c:sidequest.lable.Drumlin"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		}, {
		coords: [[-65.513,-92.021]],
		label: $.t("Diamond City"),
		popup: $.t("c:sidequest.desc.Diamond"),
		}, {
		coords: [[-64.755,-100.67]],
		label: $.t("Chestnut Hillock Reservoir - Here Kitty, Kitty"),
		popup: $.t("c:sidequest.desc.Chestnut"),
		},{
		coords: [[-17.015,-47.769]],
		label: $.t("The Slog"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		},{
		coords: [[-61.207,-75.586]],
		label: $.t("The Silver Shroud"),
		popup: $.t("c:sidequest.desc.silver"),
		},{
		coords: [[-56.292,-67.061]],
		label: $.t("The Cabot House"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		},{
		coords: [[-14.520,-20.830]],
		label: $.t("Museum of Witchcraft"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		},{
		coords: [[-60.392,-68.071]],
		label: $.t("Goodneighbor"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		}
		
		],
	
	

	//Misc. Quests
		 quest: [
		 {
		coords: [[-50.261,-67.456]],
		label: $.t("c:miscquest.label.bunker"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-76.258,-54.580]],
		label: $.t("c:miscquest.label.Atom"),
		//label: $.t("Atom Cats Garage"),
		 popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-58.078,-101.733]],
		label: $.t("c:miscquest.label.Cambridge"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-59.911,-76.421]],
		label: $.t("c:miscquest.label.Amphitheater"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		// coords: [[-64.849,-100.767]],
		// label: $.t("Chestnut Hillock Reservoir"),
		//popup: $.t("c:miscquest.desc.popup"),
		
		coords: [[-64.737,-72.378]],
		label: $.t("c:miscquest.label.Combat"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-65.531,-88.638]],
		label: $.t("c:miscquest.label.Diamond"),
		popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-15.538,-32.651]],
		// label: $.t("Dunwich Borers"),
		 //popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-74.295,-105.205]],
		// label: $.t("Egret Tours Marina"),
		 //popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-64.886,-97.822]],
		// label: $.t("Fens Street Sewer"),
		 //popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-68.673,-54.492]],
		// label: $.t("General Atomics Factory"),
		 //popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-8.668,-76.113]],
		 //popup: $.t("c:miscquest.desc.popup"),
		// label: $.t("General Atomics Galleria"),
		},{
		coords: [[-60.609,-69.390]],
		label: $.t("c:miscquest.label.Goodneighbor"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-50.261,-115.708]],
		label: $.t("c:miscquest.label.Graygarden"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		// coords: [[-61.773,-78.311]],
		// label: $.t("HalluciGen"),
		 //popup: $.t("c:miscquest.desc.popup"),
		// },{
		coords: [[-74.355,-73.169]],
		label: $.t("c:miscquest.label.Jamaica"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-27.800,-26.675]],
		label: $.t("c:miscquest.label.Longneck"),
		popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-27.800,-26.675]],
		// label: $.t("Longneck Lukowski Carnery"),
		 //popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-55.404,-62.930]],
		// label: $.t("Pickman Gallery"),
		 //popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-59.911,-42.056]],
		label: $.t("c:miscquest.label.Prydwen"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-83.844,-167.256]],
		label: $.t("c:miscquest.label.RockyCave"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-7.537,-12.700]],
		label: $.t("c:miscquest.label.Rook"),
		popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-11.738,-86.045]],
		// label: $.t("Skylanes Flight 1981"),
		 //popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-17.225,-45.132]],
		label: $.t("c:miscquest.label.Slog"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-26.274,-66.270]],
		label: $.t("c:miscquest.label.Vault75"),
		popup: $.t("c:miscquest.desc.popup"),
		},{
		coords: [[-65.257,-107.139]],
		label: $.t("c:miscquest.label.Vault81"),
		popup: $.t("c:miscquest.desc.popup"),
		},// ,{
		// coords: [[-76.911,-40.342]],
		// label: $.t("Warwick Homestead"),
		 //popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-22.877,-144.624]],
		// label: $.t("Wicked Shipping Fleet Lockup"),
		 //popup: $.t("c:miscquest.desc.popup"),
		{
		// coords: [[-55.949,-82.793]],
		// label: $.t("Greenetech Genetics"),
		 //popup: $.t("c:miscquest.desc.popup"),
		// },{
		coords: [[-6.337,-139.109]],
		label: $.t("c:miscquest.label.Sanctuary"),
		popup: $.t("c:miscquest.desc.popup"),
		}
		],


		
	// Surgical Journal 10/50
	banditcamp: [{
    coords: [[-5.791,-41.880]],
			//label: $.t("Massachusetts Surgical Journal (1/9)"),
			//popup: $.t("weapon inflict +2% limb damage | Parsons State Insane Asylum, Inside Lorenzo’s living quarters, at the very bottom floor of the facility.")
			label: $.t("c:Magazines.label.SurgicalJournal") + $.t(" 1/9 - ") + $.t("c:Magazines.label.SurgicalJournal1-9"),
			popup: $.t("c:Magazines.desc.SurgicalJournal") + $.t(" | ") + $.t("c:Magazines.desc.SurgicalJournal-1-9"),
		},{
    coords: [[-25.006,-74.619]],
			label: $.t("c:Magazines.label.SurgicalJournal") + $.t(" 3/9 - ") + $.t("c:Magazines.label.SurgicalJournal3-9"),
			popup: $.t("c:Magazines.desc.SurgicalJournal") + $.t(" | ") + $.t("c:Magazines.desc.SurgicalJournal-3-9"),
		},{
    coords: [[-55.900,-68.247]],
			label: $.t("c:Magazines.label.SurgicalJournal") + $.t(" 9/9- ") + $.t("c:Magazines.label.SurgicalJournal9-9"),
			popup: $.t("c:Magazines.desc.SurgicalJournal") + $.t(" | ") + $.t("c:Magazines.desc.SurgicalJournal-9-9"),
		}
		],
	
	//Astoundingly Awesome Tales
		barber: [{
		coords: [[-62.288,-151.348]],
			label: $.t("c:Magazines.label.Astoundingly") + $.t(" 1/14 - ") + $.t("c:Magazines.label.Astoundingly1-14"),
			popup: $.t("c:Magazines.desc.Astoundingly1") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-1-14"),
		},{
		coords: [[-84.285,-142.559]],
			label: $.t("c:Magazines.label.Astoundingly") + $.t(" 2/14 - ") + $.t("c:Magazines.label.Astoundingly2-14"),
			popup: $.t("c:Magazines.desc.Astoundingly2") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-2-14"),
		},{
		coords: [[-62.755,-75.410]],
			label: $.t("c:Magazines.label.Astoundingly") + $.t(" 3/14 - ") + $.t("c:Magazines.label.Astoundingly3-14"),
			popup: $.t("c:Magazines.desc.Astoundingly3") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-3-14"),
		},{
		coords: [[-11.437,-87.231]],
			label: $.t("c:Magazines.label.Astoundingly") + $.t(" 4/14 - ") + $.t("c:Magazines.label.Astoundingly4-14"),
			popup: $.t("c:Magazines.desc.Astoundingly4") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-4-14"),
		},{
		coords: [[-1.933,-89.209]],
			label: $.t("c:Magazines.label.Astoundingly") + $.t(" 5/14 - ") + $.t("c:Magazines.label.Astoundingly5-14"),
			popup: $.t("c:Magazines.desc.Astoundingly5") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-5-14"),
		},{
		coords: [[-17.351,-32.915]],
			label: $.t("c:Magazines.label.Astoundingly") + $.t(" 6/14 - ") + $.t("c:Magazines.label.Astoundingly6-14"),
			popup: $.t("c:Magazines.desc.Astoundingly6") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-6-14"),
		}
		
		
		],

	// Total Hack (3/50)
		blacksmith: [{
		coords: [[-18.438,-90.615]],
			//label: $.t("Total Hack - Control Turrets (1/3)"),
			//popup: $.t("Inculdes the turrent hacking source code | Wildwood cemetery - near the big  tree")
			label: $.t("c:Magazines.label.Hack") + $.t(" 1/3 - ") + $.t("c:Magazines.label.Hack1-3"),
			popup: $.t("c:Magazines.desc.Hack1-3"),
		},{
		coords: [[-46.980,-84.814]],
			label: $.t("c:Magazines.label.Hack") + $.t(" 2/3 - ") + $.t("c:Magazines.label.Hack2-3"),
			popup: $.t("c:Magazines.desc.Hack2-3"),
		},{
		coords: [[-62.735,-56.953]],
			label: $.t("c:Magazines.label.Hack") + $.t(" 3/3 - ") + $.t("c:Magazines.label.Hack3-3"),
			popup: $.t("c:Magazines.desc.Hack3-3"),
		}
		],

	// Covert Operations Manual (10/50)
		brothel: [
		{
		coords: [[-3.689,-112.764]],
			label: $.t("c:Magazines.label.Covert") + $.t(" 1/10 - ") + $.t("c:Magazines.label.Covert1-10"),
			popup: $.t("c:Magazines.desc.Covert1-10"),
		}, {
		coords: [[-61.109,-148.008]],
			label: $.t("Covert Operations Manual  (2/10)"),
			popup: $.t("low chance of detecion while sneaking | In the Basement (Bunker) of Barneys House")
		}, {
		coords: [[-44.277,-147.920]],
			label: $.t("Covert Operations Manual  (3/10)"),
			popup: $.t("low chance of detecion while sneaking | manual Below Lonely Chapel")
		}, {
			coords: [[-78.260,-159.829]],
			label: $.t("Covert Operations Manual  - Not the Soldiers You're Looking For (4/10)"),
			popup: $.t('low chance of detecion while sneaking | inside Abandon Shack / Installtion K-21B - Bottom Level, near the novice Terminal')
		}
		],

	// free
		entrance: [],
		
	// Grindstone
		grindstone: [{
		coords: [[-23.080,-142.910]],
			label: $.t("c:Magazines.label.Grognak") + $.t(" 1/10 - ") + $.t("c:Magazines.label.Grognak1-10"),
			popup: $.t("c:Magazines.desc.Grognak") + $.t(" | ") + $.t("c:Magazines.desc.Grognak1-10"),
		},{
		coords: [[-24.327,-67.983]],
			label: $.t("c:Magazines.label.Grognak") + $.t(" 2/10 - ") + $.t("c:Magazines.label.Grognak2-10"),
			popup: $.t("c:Magazines.desc.Grognak") + $.t(" | ") + $.t("c:Magazines.desc.Grognak2-10"),
		}
		],

	// Guns and Bullets 
		guarded: [{
		coords: [[-60.109,-148.008]],
			label: $.t("c:Magazines.label.Guns") + $.t(" 1/10 - ") + $.t("c:Magazines.label.Guns1-10"),
			popup: $.t("c:Magazines.desc.Guns") + $.t(" | ") + $.t("c:Magazines.desc.Guns1-10"),
		},{
		coords: [[-7.362,-11.426]],
			label: $.t("Guns and Bullets: Avoid those Pesky Gun Laws! (2/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | Rook Family house, Inside Barney’s bunker, on a metal desk near the lantern and filing cabinet.")
		},{
		coords: [[-70.155,-71.147]],
			label: $.t("Guns and Bullets: Take Aim, Army Style (3/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | South Boston military checkpoint, Inside the checkpoint, on a metal desk, east wall.")
		},{
		coords: [[-77.264,-90.967]],
			label: $.t("Guns and Bullets: Street Guns of Detroit (4/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | inside Gunners Plaza - top Floor, south room")
		},{
		coords: [[-78.742,-59.370]],
			label: $.t("Guns and Bullets: The Moon: A Communist Doomsday Device? (5/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | Quincy ruins, On the desk with the terminal, elevated freeway Gunners camp, between the two big-rig trailers.	")
		},{
		coords: [[-52.160,-103.535]],
			label: $.t("Guns and Bullets: Bear Proofing Your Campsite:... (6/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | Cambridge police station, In a locked safe in the station chief’s office. Available only after Brotherhood reinforcements arrive at the station.")
		},{
		coords: [[-55.354,-101.777]],
			label: $.t("Guns and Bullets: Little Guns For Little Ladies (7/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | Fraternal Post 115, On the lectern in the stage area, by the American flag and sandbags.")
		},{
		coords: [[-56.729,-78.706]],
			label: $.t("Guns and Bullets: Guide to hunting commies! (8/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | Ticonderoga Safehouse, On the desk of the corner office, northwest corner, top floor.")
		},{
		coords: [[-48.283,-74.004]],
			label: $.t("Guns and Bullets: The Future of Hunting? (9/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | BADTFL regional office, On a desk in the chief’s office, bullpen room in the western part of the building.")
		},{
		coords: [[-70.801,-47.417]],
			label: $.t("Guns and Bullets: Plasma - The Weapon of Tomorrow (10/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | The Castle, on the Radio Desk in the middle")
		}],

	// Hot Rodder (3/122)
		gwent: [{
		coords: [[-76.016,-52.998]],
			label: $.t("c:Magazines.label.Rodder") + $.t(" 1/3 - ") + $.t("c:Magazines.label.Rodder1-3"),
			popup: $.t("c:Magazines.desc.Rodder1") + $.t(" | ") + $.t("c:Magazines.desc.Rodder1-3"),
		},{
		coords: [[-2.987,-120.850]],
			label: $.t("c:Magazines.label.Rodder") + $.t(" 2/3 - ") + $.t("c:Magazines.label.Rodder2-3"),
			popup: $.t("c:Magazines.desc.Rodder2") + $.t(" | ") + $.t("c:Magazines.desc.Rodder2-3"),
		}, {
		coords: [[-73.391,-90.967]],
			label: $.t("c:Magazines.label.Rodder") + $.t(" 3/3 - ") + $.t("c:Magazines.label.Rodder3-3"),
			popup: $.t("c:Magazines.desc.Rodder3") + $.t(" | ") + $.t("c:Magazines.desc.Rodder3-3"),
		}
		
		],
		//Mag: La Coiffe (2/2)
		harbor: [{
		coords: [[-73.478,-89.209]],
			label: $.t("c:Magazines.label.Coiffe") + $.t(" 1/2 - ") + $.t("c:Magazines.label.Coiffe1-2"),
			popup: $.t("c:Magazines.desc.Coiffe1") + $.t(" | ") + $.t("c:Magazines.desc.Coiffe1-2"),
		},{
		coords: [[-51.289,-65.391]],
			label: $.t("c:Magazines.label.Coiffe") + $.t(" 2/2 - ") + $.t("c:Magazines.label.Coiffe1-2"),
			popup: $.t("c:Magazines.desc.Coiffe2") + $.t(" | ") + $.t("c:Magazines.desc.Coiffe2-2"),
		}
		],

	// xxxx
		masterterminal: [],
		// bottem Level Boston Mayoral Shelter -62.795,-152.358
		// in the reatroroom of the vault -65.513,-107.93
		
	// Masterlock
		masterlock: [
		{
		coords: [[-72.971,-89.736]],
			label: $.t("Master Lock - Safe"),
			popup: $.t("Fallons Department Store on the Groundfloor | nothing special for me")
		},{
			coords: [[-64.849,-84.507]],
			label: $.t("Master Lock - Door"),
			popup: $.t("Boston Public Library - 2nd Floor northwest corner of library.")
		},{
			coords: [[-55.329,-67.632]],
			label: $.t("Master Lock - Safe"),
			popup: $.t("SafeCabot House Basement under the Bed ")
		},{
			coords: [[-79.047,-53.086]],
			label: $.t("Master Lock - Door"),
			popup: $.t("Poseidon Energy")
		},{
			coords: [[-82.743,-128.364]],
			label: $.t("Master Lock - Safe"),
			popup: $.t('Below the Skylanes 1665 Wreak are two hidden Compartments with a Masterlock (maybe with 2x Gauss Rifles) [<a href="http://i.imgur.com/1k84foZ.jpg" target="_blank">Image</a>]')
		},{
			coords: [[-36.031,-132.979]],
			label: $.t("Master Lock - Door"),
			popup: $.t("Gift Shop / Walden Pond / Door)")
		},{
			coords: [[-43.993,-40.518]],
			label: $.t("Master Lock - Door"),
			popup: $.t("top Floor of Build just near Revere Beach Station")
		},{
			coords: [[-62.935,-75.938]],
			label: $.t("Master Lock - Safe"),
			popup: $.t("inside Vault")
		},{
			coords: [[-62.795,-152.358]],
			label: $.t("Master Lock - Door"),
			popup: $.t("Bottem Level Boston Mayoral Shelter")
		},{
			coords: [[ -67.991,-145.854]],
			label: $.t("Master Lock - Door"),
			popup: $.t("inside Poseidon Reservoir at the Basement")
		},{
			coords: [[-51.781,-69.917]],
			label: $.t("Master Lock - Safe"),
			popup: $.t("inside Bunker Hill, at the Bar")
		},{
			coords: [[-70.319,-73.169]],
			label: $.t("Master Lock - Safe"),
			popup: $.t("South Boston Military Checkpoint ")
		},{
			coords: [[-34.016,-117.77]],
			label: $.t("Master Lock"),
			popup: $.t("Truck near the Diner")
		}],
		
	//Nuke or Fusion Cores
	nukefusion: [],
	// -77.906,-159.829 at Bottom 
	// -64.849,-100.767 South Boston Military Checkpoint
	// Generator before bobblehead at the bottom -27.372,-24.346  : Longneck Lukowski's Cannery
		
		
	// Live & Love
		herbalist: [{
		coords: [[-43.993,-40.518]],
			label: $.t("c:Magazines.label.Live") + $.t(" 1/9 - ") + $.t("c:Magazines.label.Live-1-9"),
			popup: $.t("c:Magazines.desc.Live-1") + $.t(" | ") + $.t("c:Magazines.desc.Live-1-9"),
		},{
		coords: [[-57.232,-137.021]],
			label: $.t("c:Magazines.label.Live") + $.t(" 2/9 - ") + $.t("c:Magazines.label.Live-2-9"),
			popup: $.t("c:Magazines.desc.Live-2") + $.t(" | ") + $.t("c:Magazines.desc.Live-2-9"),
		}
		
		
		
		
		],

	// hidden = Settlements 
	hidden: [{
		coords: [[-4.565,-136.318]],
			label: $.t("Sanctuary Hills"),
			popup: $.t("")
		},{
		coords: [[-12.555,-131.484]],
			label: $.t("Red Rocket Truck Stop"),
			popup: $.t("")
		},{
		coords: [[-74.438,-26.455]],
			label: $.t("Spectacle Island"),
			popup: $.t("largest Settlement, Some Powerinfrastruecture. To use this Settlement turn on the Generator in the South on a Board (Level 50 Monster) and turn on the Speaker in the MIddle of the Map (follow the cables)")
		},{
		coords: [[-76.393,-41.484]],
			label: $.t("Warwick homestead"),
			popup: $.t("Complete Quest to ally with this Settlement")
		},{
		coords: [[-19.436,-138.516]],
			label: $.t("Abernathy farm"),
			popup: $.t("")
		},{
		coords: [[-58.677,-45.923]],
			label: $.t("Boston Airport"),
			popup: $.t("Complete a Quest here to make this a Settlement. You can't build here!")
		},{
		coords: [[-51.069,-69.038]],
			label: $.t("Bunker Hill"),
			popup: $.t("You need to complete the MainQuest: The Battle of Bunker Hill")
		},{
		coords: [[-71.117,-46.802]],
			label: $.t("The Castle"),
			popup: $.t("")
		},{
		coords: [[-5.529,-30.366]],
			label: $.t("Coastal cottage"),
			popup: $.t("")
		},{
		coords: [[-41.146,-55.547]],
			label: $.t("County crossing"),
			popup: $.t("Complete Quest to ally with this Settlement")
		},{
		coords: [[-33.615,-86.968]],
			label: $.t("Covenant"),
			popup: $.t("")
		},{
		coords: [[-39.130,-15.820]],
			label: $.t("Croup manor"),
			popup: $.t("")
		},{
		coords: [[-74.461,-103.9754]],
			label: $.t("Egret Tours Marina"),
			popup: $.t("")
		},{
		coords: [[-34.125,-44.517]],
			label: $.t("Finch farm"),
			popup: $.t("")
		},{
		coords: [[-49.582,-116.763]],
			label: $.t("Graygarden"),
			popup: $.t("")
		},{
		coords: [[-21.780,-60.645]],
			label: $.t("Greentop Nursery "),
			popup: $.t("Complete Quest to ally with this Settlement")
		},{
		coords: [[-64.245,-98.042]],
			label: $.t("Hangman's Alley"),
			popup: $.t("")
		},{
		coords: [[-65.257,-90.396]],
			label: $.t("Home Plate"),
			popup: $.t("coasts 2000 Caps")
		},{
		coords: [[-74.508,-72.158]],
			label: $.t("Jamaica Plain"),
			popup: $.t("")
		},{
		coords: [[-24.886,-16.963]],
			label: $.t("Kingsport Lighthouse"),
			popup: $.t("")
		},{
		coords: [[-79.882,-78.926]],
			label: $.t("Murkwater construction site"),
			popup: $.t("")
		},{
		coords: [[-55.553,-32.168]],
			label: $.t("Nordhagen beach"),
			popup: $.t("Complete Quest to ally with this Settlement")
		},{
		coords: [[-58.723,-114.258]],
			label: $.t("Oberland station "),
			popup: $.t("Complete Quest to ally with this Settlement")
		},{
		coords: [[-1.538,-87.451]],
			label: $.t("Outpost Zimonja"),
			popup: $.t("")
		},{
		coords: [[-79.343,-107.754]],
			label: $.t("Somerville Place"),
			popup: $.t("Complete Quest to ally with this Settlement")
		},{
		coords: [[-1.538,-87.451]],
			label: $.t("Outpost Zimonja"),
			popup: $.t("")
		},{
		coords: [[-27.020,-109.424]],
			label: $.t("Starlight Drive In"),
			popup: $.t("")
		},{
		coords: [[-35.532,-146.250]],
			label: $.t("Sunshine Tidings co-op"),
			popup: $.t("")
		},{
		coords: [[-30.411,-75.981]],
			label: $.t("Taffington boathouse"),
			popup: $.t("")
		},{
		coords: [[-4.346,-98.613]],
			label: $.t("Tenpines Bluff"),
			popup: $.t("")
		},{
		coords: [[-17.141,-46.494]],
			label: $.t("The Slog"),
			popup: $.t("Complete Quest to ally with this Settlement")
		}],

	// Wasteland Survival Guide
		magwasteland: [{
		coords: [[-64.168,-71.367]],
			label: $.t("c:Magazines.label.Wasteland") + $.t(" 1/9 - ") + $.t("c:Magazines.label.Wasteland-1-9"),
			popup: $.t("c:Magazines.desc.Wasteland-1") + $.t(" | ") + $.t("c:Magazines.desc.Wasteland-1-9"),
		},{
		coords: [[-27.059,-127.969]],
			label: $.t("c:Magazines.label.Wasteland") + $.t(" 2/9 - ") + $.t("c:Magazines.label.Wasteland-2-9"),
			popup: $.t("c:Magazines.desc.Wasteland-2") + $.t(" | ") + $.t("c:Magazines.desc.Wasteland-2-9"),
		}],

	// Picket Fences (5/122)
		monsterden: [{
		coords: [[-64.168,-71.367]],
			label: $.t("c:Magazines.label.Fences") + $.t(" 1/5 - ") + $.t("c:Magazines.label.Fences-1-5"),
			popup: $.t("c:Magazines.desc.Fences-1") + $.t(" | ") + $.t("c:Magazines.desc.Fences-1-5"),
		},{
		coords: [[-28.613,-42.627]],
			label: $.t("c:Magazines.label.Fences") + $.t(" 2/5 - ") + $.t("c:Magazines.label.Fences-2-5"),
			popup: $.t("c:Magazines.desc.Fences-2") + $.t(" | ") + $.t("c:Magazines.desc.Fences-2-5"),
		},{
		coords: [[-58.078,-127.002]],
			label: $.t("c:Magazines.label.Fences") + $.t(" 3/5 - ") + $.t("c:Magazines.label.Fences-3-5"),
			popup: $.t("c:Magazines.desc.Fences-3") + $.t(" | ") + $.t("c:Magazines.desc.Fences-3-5"),
		},{
		coords: [[-68.269,-98.438]],
			label: $.t("c:Magazines.label.Fences") + $.t(" 4/5 - ") + $.t("c:Magazines.label.Fences-4-5"),
			popup: $.t("c:Magazines.desc.Fences-4") + $.t(" | ") + $.t("c:Magazines.desc.Fences-5-5"),
		},{
		coords: [[-55.179,-113.203]],
			label: $.t("c:Magazines.label.Fences") + $.t(" 5/5 - ") + $.t("c:Magazines.label.Fences-5-5"),
			popup: $.t("c:Magazines.desc.Fences-5") + $.t(" | ") + $.t("c:Magazines.desc.Fences-5-5"),
		}],
	
	// Unique Weapons 
	// Junk Jet -48.458,-128.936
		monsternest: [{
		coords: [[-48.458,-128.936]],
			label: $.t("c:Magazines.label.Weapons1"),
			popup: $.t("c:Magazines.desc.Weapons1"),
		},{
		coords: [[-58.448,-110.918]],
			label: $.t("c:Magazines.label.Weapons2"),
			popup: $.t("c:Magazines.desc.Weapons2"),
		},{
		coords: [[-73.252,-64.248]],
			label: $.t("c:Magazines.label.Weapons3"),
			popup: $.t("c:Magazines.desc.Weapons3"),
		},{
		coords: [[-3.689,-145.635]],
			label: $.t("c:Magazines.label.Weapons4"),
			popup: $.t("c:Magazines.desc.Weapons4"),
		}],

		notice: [],

	// Unstoppables
		pid: [],
			//label: $.t("c:Magazines.label.Unstoppables") + $.t(" 1/5 - ") + $.t("c:Magazines.label.Unstoppables-1-5"),
			//popup: $.t("c:Magazines.desc.Unstoppables") + $.t(" | ") + $.t("c:Magazines.desc.Unstoppables-1-5")

	// Place of Power
		pop: [],

	// Point of Interest
		poi: [{
		coords: [[-73.898,-90.352]],
			//label: $.t('Robot Model Kits (1/8)'),
			//popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Eyebot Model Kit</a> | Inside Fallons Department Store - First Floor - Room with Employees Only/Novie Lockpick - in one of the shelves')
			label: $.t("c:Magazines.label.Robot") + $.t(" 1/8"),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Eyebot Model Kit</a> | Inside Fallons Department Store - First Floor - Room with Employees Only/Novie Lockpick - in one of the shelves')
		},{
		coords: [[-83.638,-143.877]],
			label: $.t("c:Magazines.label.Robot") + $.t(" 2/8"),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">SentryBot Model Kit</a> | Inside O-Neill Family Manufacturing - Basement')
		},{
		coords: [[-44.559,-41.968]],
			label: $.t("c:Magazines.label.Robot") + $.t(" 3/8"),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Protectron Model Kit</a> | SW from Revere Beach Station - in a Big buling that is locked by chains, you can accces to to roof over a tree (Deaddrop Sign)')
		},{
		coords: [[-62.795,-152.358]],
			label: $.t("c:Magazines.label.Robot") + $.t(" 4/8"),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Mr. Gutsy Model Kit</a> | inside Boston Mayoral Shelter - in one of the Bedrooms')
		},{
		coords: [[-69.870,-137.285]],
			label: $.t("c:Magazines.label.Robot") + $.t(" 5/8"),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Mr. Handy Model Kit</a> | at Lake Cochituate at some Fisherhuts')
		},{
		coords: [[-2.724,-22.500]],
				label: $.t("c:Magazines.label.Robot") + $.t(" 6/8"),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Robot Model Kit Parts</a> | small Building directly right from Mahkra Fishpacking')
		},{
		coords: [[-68.816,-144.053]],
			label: $.t("c:Magazines.label.Robot") + $.t(" 7/8"),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Robot Model Kit Parts</a> | near Poseidon Reservoir. On the Southside is a broken Pipe ending in the water, with a Deaddrop Sign, go up the Pipe to find it')
		},{
		coords: [[-15.961,-27.773]],
			label: $.t("c:Magazines.label.Robot") + $.t(" 8/8"),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Robot Model Kit Parts</a> | at Hugos Hole')
		}
		
		
		
		],

	// Tumblers Today
		shopkeeper: [],
//label: $.t("c:Magazines.label.Tumblers") + $.t(" 1/5 - ") + $.t("c:Magazines.label.Tumblers-1-5"),
//popup: $.t("c:Magazines.desc.Tumblers-1-5")
		
	// Mag: RobCo Fun (5/50)
	//Vault 111 - Inside the cafeteria terminal, northeast area. Only the game is available.
//Museum of Freedom - In the chamber above the front doors, where Preston is holed up, on Sturges’ desk.
//Fort Hagen Command Center - adjacent to Kellogg’s Terminal under a table, in the chamber where you speak with Kellogg.
//Valentine's Detective Agency - on a desk, inside the Valentine’s Detective Agency located in Diamond City Market.
//Goodneighbor - In the Memory Den, basement Memory Lounger area, on a metal desk against one of the brick walls.
		signpost: [{
		coords: [[-60.109,-148.008]],
			label: $.t("c:Magazines.label.RobCo") + $.t(" 1/5 - ") + $.t("c:Magazines.label.RobCo-1-5"),
			popup: $.t("c:Magazines.desc.RobCo") + $.t(" | ") + $.t("c:Magazines.desc.RobCo-1-5")
		}],

	// Tales of a Junktown Jerky Vendor
		smugglers: [{
			coords: [[-35.925,-133.945]],
			label: $.t("c:Magazines.label.Tales") + $.t(" 1/8 - ") + $.t("c:Magazines.label.Tales-1-8"),
			popup: $.t("c:Magazines.desc.Tales") + $.t(" | ") + $.t("c:Magazines.desc.Tales-1-8")
		}],
		
	
	// Spoils of War
		spoils: [],
	});

	window.allLayers = [
		markers.location,
		markers.alchemy,
		markers.bobblehead,
		markers.armourerstable,
		markers.banditcamp,
		markers.barber,
		markers.blacksmith,
		markers.brothel,
		markers.entrance,
		markers.grindstone,
		markers.guarded,
		markers.gwent,
		markers.harbor,
		markers.herbalist,
		markers.masterlock,
		markers.masterterminal,
		markers.magtesla,
		markers.nukefusion,
		markers.hidden,
		markers.magwasteland,
		markers.monsterden,
		markers.monsternest,
		markers.notice,
		markers.pid,
		markers.pop,
		markers.poi,
		markers.shopkeeper,
		markers.signpost,
		markers.smugglers,
		markers.spoils,
		markers.sidequest,
		markers.quest
	];
});
