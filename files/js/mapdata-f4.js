
$(document).on("loadMapdata", function () {
	window.map_path   = 'f4';
	window.map_sWest  = L.latLng(-85, -180);
	window.map_nEast  = L.latLng(0, 45);
	window.map_center = [-65, -65];
	window.map_mZoom  = 5;

	processData({
	// Abandoned Site
		abandoned: [{
		coords: [[-25.483,-68.467]],
			label: $.t("Vault 75"),
			popup: $.t("Access via Malden Middle School")
		},{
		coords: [[-63.411,-75.981]],
			label: $.t("Vault 114"),
			popup: $.t("")
		},{
		coords: [[-65.622,-108.984]],
			label: $.t("Vault 81"),
			popup: $.t("")
		},{
		coords: [[-78.251,-118.477]],
			label: $.t("Vault 95"),
			popup: $.t("")
		},{
		coords: [[-3.294,-146.953]],
			label: $.t("Vault 111"),
			popup: $.t("")
		},{
		coords: [[-75.888,-25.752]],
			label: $.t("Giant Creature"),
			popup: $.t('for the <a href="https://wiiare.in/portfolio-type/fallout-4-giant-creatures" target="_blank">...The Harder They Fall Achievement/Trophy</a>')
		},{
		coords: [[-70.974,-156.797]],
			label: $.t("Giant Creature - Level 50 Behemoth"),
			popup: $.t('for the <a href="https://wiiare.in/portfolio-type/fallout-4-giant-creatures" target="_blank">...The Harder They Fall Achievement/Trophy</a>')
		},{
		coords: [[-37.230,-136.494]],
			label: $.t("Giant Creature - Level 50 Behemoth"),
			popup: $.t('for the <a href="https://wiiare.in/portfolio-type/fallout-4-giant-creatures" target="_blank">...The Harder They Fall Achievement/Trophy</a>')
		},{
		coords: [[-63.015,-72.642]],
			label: $.t("Giant Creature - Level 50 Swain"),
			popup: $.t('at Swans Pond - for the <a href="https://wiiare.in/portfolio-type/fallout-4-giant-creatures" target="_blank">...The Harder They Fall Achievement/Trophy</a>')
		},{
		coords: [[-25.562,-62.051]],
			label: $.t("Giant Creature - Level 50 Behemoth"),
			popup: $.t('for the <a href="https://wiiare.in/portfolio-type/fallout-4-giant-creatures" target="_blank">...The Harder They Fall Achievement/Trophy</a>')
		},{
		coords: [[-77.409,-87.891]],
			label: $.t("Giant Creature - Level 50 Behemoth"),
			popup: $.t('for the <a href="https://wiiare.in/portfolio-type/fallout-4-giant-creatures" target="_blank">...The Harder They Fall Achievement/Trophy</a>')
		}
		],
		
		
	

	// Alchemy Supplies
		alchemy: [],

	// 20x Bobblehead
	bobblehead: [{
	coords: [[-59.977,-146.514]],
			label: $.t("Energy Weapons Bobblehead"),
			popup: $.t("increases critical damage with energy weapons by 25%. | Inside Fort Hagen - In the Command Center, southwest kitchens, on a small table between two fridges.")
		}, {
			coords: [[-78.144,-116.455]],
			label: $.t("Big Guns Bobblehead"),
			popup: $.t("increases 25% critical damage with heavy weapons | Inside Vault 95 - bottom Level, North Room")
		}, {
			coords: [[-77.118,-91.934]],
			label: $.t("Small Guns Bobblehead"),
			popup: $.t("increases 25% critical damage with Small weapons | Gunners Plaza - Ground Floor, in the on-air room. You get the Key from a Guy in the top Floor")
		}, {
			coords: [[-79.005,-51.680]],
			label: $.t("+1 Endurance Bobblehead"),
			popup: $.t("Poseidon Energy - On the metal desk with a magazine, near steamer trunk, central metal catwalk.")
		}, {
			coords: [[-75.995,-53.877]],
			label: $.t("Unarmed Bobblehead"),
			popup: $.t("increases 25% critical damage with Unarmed attacks | Atom Cats Garage - On the hood of the rusty car in the main warehouse.")
		}, {
			coords: [[-78.242,-37.529]],
			label: $.t("+1 Agility Bobblehead"),
			popup: $.t('Wreck of the FMS Northern Star - top of the Ship, on the edge of the woodn platfrom [<a href="http://i.imgur.com/LjLnavk.png" target="_blank">Image</a>]')
		}, {
			coords: [[-76.331,-25.005]],
			label: $.t("+1 Luck Bobblehead "),
			popup: $.t("Spectacle Island - in the green boat, inside a locker on the top floor")
		}, {
			coords: [[-44.024,-106.436]],
			label: $.t("+1 Repair Bobblehead"),
			popup: $.t("increases the duration of fusion cores by 10% | Lexington Corvega Assembly Plant - On the very end of the top exterior ganty (blue ballon), southwest roof section of the plant building.")
		}, {
			coords: [[-25.800,-67.896]],
			label: $.t("Science Bobblehead"),
			popup: $.t("gives you an extra guess when hacking terminals | inside Malden Middle School/Vault 75 - Follow the Quest Vault 75, in the Room with the Guy that has the Admin Access Card you find the Bobblehread")
		}, {
			coords: [[-4.390,-43.066]],
			label: $.t("+1 Charisma Bobblehead"),
			popup: $.t('Parsons State Insane Aslyum. (<a href="http://localhost/fallout4map.de/w/index.html#4/-61.59/-74.66/m=-55.9,-68.247">get the Quest The Secret of Cabot House from </a> go get in) - On Jack Cabots office desk, close to elevator, administration area.')
		}, {
			coords: [[-15.708,-33.750]],
			label: $.t("Sneak Bobblehead"),
			popup: $.t("10% Harder to detect | Dunwich Borers | at the Terminal at Mine Shaft Nr 4")
		}, {
			coords: [[-27.372,-24.346]],
			label: $.t("Barter Bobblehead - Prices are 5% better."),
			popup: $.t("Longneck Lukowski's Cannery - Control Room above the Factoryline")
		}, {
			coords: [[-27.059,-42.363]],
			label: $.t("Explosives Bobblehead"),
			popup: $.t('Explosives deal 15% more damage | inside Saugus Ironworks [<a href="https://youtu.be/MhEmt_ruN_Y?t=116" target="_blank">Video</a>]')
		}, {
			coords: [[-55.553,-61.172]],
			label: $.t("Lock Picking Bobblehead"),
			popup: $.t("Lock picking becomes easier | Pickman Gallery - On the ground between the brick pillars in the last tunnel chamber.")
		}, {
			coords: [[-59.557,-69.324]],
			label: $.t("+1 Strength Bobblehead"),
			popup: $.t('Mass Fusion Building - On the metal wall sculpture high above the lobby desk.[<a href="http://i.imgur.com/b292oo1.jpg" target="_blank">Image</a>]')
		}, {
			coords: [[-63.646,-75.278]],
			label: $.t("Speech Bobblehead"),
			popup: $.t("All vendors permanently have 100 more Caps for bartering | Vault 114 - In the Overseer's office.")
		}, {
			coords: [[-65.857,-78.223]],
			label: $.t("Melee Bobblehead"),
			popup: $.t("+25% Critical Hit Damage with Melee Weapons | Trinity Tower - On a table in the cage where Rex Goodman and Strong are being held.")
		}, {
			coords: [[-64.567,-85.122]],
			label: $.t("+1 Intelligence Bobblehead"),
			popup: $.t("Boston Public Library - 2nd Floor - On the computer bank, mechanical room, northwest corner of library.")
		}, {
			coords: [[-65.513,-107.93]],
			label: $.t("Medicine Bobblehead"),
			popup: $.t("Stimpacks heal 10% more damage | Vault 81 - talk to Dr. Jacobs Forsythe in the Clinic at the Botton of the Vault, then come later back for a next Quest")
		}],


	// Powerarmor
		armourerstable: [{
    coords: [[-20.138,-120.806]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased | Inside Museum of Freedom")
		}, {
			coords: [[-59.131,-29.092]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-60.587,-45.967]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-60.305,-44.604]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-61.164,-43.242]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-61.249,-39.683]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-61.752,-37.573]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-63.607,-25.444]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased | inside Fort Strong")
		}, {
			coords: [[-63.154,-25.225]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased | inside Fort Strong")
		}, {
			coords: [[-18.188,-89.011]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased | Lexington - Military Armor Transport")
		}, {
			coords: [[-37.160,-54.229]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased | 2x Powerarmor. One behind a Expert and Masterlock (Key for Masterlock somewhere around)")
		}, {
			coords: [[-39.977,-42.803]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased | on one of the dishes")
		}, {
			coords: [[-34.016,-47.109]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased | in the back of the semi")
		}, {
			coords: [[-2.372,-111.885]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased | By the crashed vertibird")
		}, {
			coords: [[-49.724,-109.688]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased")
		}, {
			coords: [[-39.504,-23.950]],
			label: $.t("Power Armor"),
			popup: $.t("Type of the Armor is levelbased |  hidden inside the containers and you have to walk around the back to gain access")
		}, {
			coords: [[-82.178,-134.033]],
			label: $.t("Power Armor"),
			popup: $.t("Lost raided and his raiders power armor.")
		}, {
			coords: [[-77.971,-158.027]],
			label: $.t("Power Armor"),
			popup: $.t("Power armor inside Abandon Chack / Installtion K-21B")
		}, {
			coords: [[-28.999,-93.340]],
			label: $.t("Power Armor"),
			popup: $.t("Crashed vertibird and power armor.")
		}, {
			coords: [[-53.853,-60.469]],
			label: $.t("Power Armor"),
			popup: $.t("inside a container on the raft.")
		}, {
			coords: [[-62.915,-146.426]],
			label: $.t("Power Armor"),
			popup: $.t("inside the left most storage hall when approached from blood clinic.")
		}, {
			coords: [[-75.888,-52.075]],
			label: $.t("Power Armor"),
			popup: $.t("atom cats t-60 that you can steal. No helmet.")
		}, {
			coords: [[-30.297,-93.164]],
			label: $.t("Power Armor"),
			popup: $.t("")
		}, {
			coords: [[-57.516,-136.318]],
			label: $.t("Power Armor"),
			popup: $.t('You have to Pick a Master Lock, <a href="https://www.reddit.com/r/Fallout/comments/3sql3m/new_interactive_map_of_fallout_4_settlements/cx0jdt4" target="_blank">but can also enter the Suite trough a back window and teleport out</a>. Also there is a novice terminal in the Place that unlocks a safe that has a key to that shed')
		}, {
			coords: [[-60.823,-65.347]],
			label: $.t("Power Armor"),
			popup: $.t('can be bought from KL-E-O at Goodneighbor')
		}, {
			coords: [[-61.565,-60.073]],
			label: $.t("Power Armor X-01"),
			popup: $.t('in/on top of Court 35 there is power armor, full X-01 suit if you are high enough level')
		}, {
			coords: [[-75.640,-68.621]],
			label: $.t("Power Armor"),
			popup: $.t('Leveled armor in the water, next to the APC')
		}, {
			coords: [[-70.656,-72.334]],
			label: $.t("Power Armor"),
			popup: $.t('South Boston Military Checkpoint ')
		}, {
			coords: [[-37.265,-117.620]],
			label: $.t("Power Armor"),
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
	magtesla: [
	// {
    //coords: [[-39.130,-39.331]],
	//		label: $.t("Tesla Science Magazine (1/9)"),
	//		popup: $.t("Inside Reeb Marina")
	//	}
		],	
		
		
	//Tesla
	// -61.815,-77.563 inside HalluciGen
	
	//SideQuest
	 sidequest: [
		 {
		coords: [[-27.098,-119.575]],
		label: $.t("Drumlin Diner - Order Up"),
		 popup: $.t('Side Quest Location')
		}, {
		coords: [[-65.513,-92.021]],
		label: $.t("Diamond City"),
		 popup: $.t('Side Quest Location: The Gilded Grasshopper, Long Time Coming, The Disappearing Act, Painting the Town')
		}, {
		coords: [[-64.755,-100.67]],
		label: $.t("Chestnut Hillock Reservoir - Here Kitty, Kitty"),
		 popup: $.t('Side Quest Location - you need to have visited <a href="http://fallout4map.de/w/index.html#5/-64.216/-89.495/w=-64.737,-100.195&m=-65.257,-107.139">Vault 81</a> already')
		},{
		coords: [[-17.015,-47.769]],
		label: $.t("The Slog"),
		 popup: $.t('Side Quest Location')
		},{
		coords: [[-61.207,-75.586]],
		label: $.t("The Silver Shroud"),
		 popup: $.t('Side Quest Location - lissen to Radio')
		},{
		coords: [[-56.292,-67.061]],
		label: $.t("The Cabot House"),
		 popup: $.t('Side Quest Location')
		},{
		coords: [[-14.520,-20.830]],
		label: $.t("Museum of Witchcraft"),
		 popup: $.t('Side Quest Location')
		},{
		coords: [[-60.392,-68.071]],
		label: $.t("Goodneighbor"),
		 popup: $.t('Side Quest Location')
		}
		
		],
	
	

	//Misc. Quests
		 quest: [
		 {
		coords: [[-50.261,-67.456]],
		label: $.t("Bunker Hill"),
		  popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-76.258,-54.580]],
		label: $.t("Atom Cats Garage"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-58.078,-101.733]],
		label: $.t("Cambridge Polymer Labs"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-59.911,-76.421]],
		label: $.t("Charles View Amphitheater"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		// coords: [[-64.849,-100.767]],
		// label: $.t("Chestnut Hillock Reservoir"),
		// popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		
		coords: [[-64.737,-72.378]],
		label: $.t("Combat Zone"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-65.531,-88.638]],
		label: $.t("Diamond City"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		// coords: [[-15.538,-32.651]],
		// label: $.t("Dunwich Borers"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		// coords: [[-74.295,-105.205]],
		// label: $.t("Egret Tours Marina"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		// coords: [[-64.886,-97.822]],
		// label: $.t("Fens Street Sewer"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		// coords: [[-68.673,-54.492]],
		// label: $.t("General Atomics Factory"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		// coords: [[-8.668,-76.113]],
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// label: $.t("General Atomics Galleria"),
		},{
		coords: [[-60.609,-69.390]],
		label: $.t("Goodneighbor"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-50.261,-115.708]],
		label: $.t("Graygarden"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		// coords: [[-61.773,-78.311]],
		// label: $.t("HalluciGen"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		coords: [[-74.355,-73.169]],
		label: $.t("Jamaica Plain"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-27.800,-26.675]],
		label: $.t("Longneck Lukowski Carnery"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		// coords: [[-27.800,-26.675]],
		// label: $.t("Longneck Lukowski Carnery"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		// coords: [[-55.404,-62.930]],
		// label: $.t("Pickman Gallery"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-59.911,-42.056]],
		label: $.t("Prydwen (if Airfield not destoryed)"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-83.844,-167.256]],
		label: $.t("Rocky Cave"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-7.537,-12.700]],
		label: $.t("Rook Family House"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		// coords: [[-11.738,-86.045]],
		// label: $.t("Skylanes Flight 1981"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-17.225,-45.132]],
		label: $.t("The Slog"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-26.274,-66.270]],
		label: $.t("Vault 75"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},{
		coords: [[-65.257,-107.139]],
		label: $.t("Vault 81"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		},// ,{
		// coords: [[-76.911,-40.342]],
		// label: $.t("Warwick Homestead"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		// coords: [[-22.877,-144.624]],
		// label: $.t("Wicked Shipping Fleet Lockup"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		{
		// coords: [[-55.949,-82.793]],
		// label: $.t("Greenetech Genetics"),
		 // popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		// },{
		coords: [[-6.337,-139.109]],
		label: $.t("Sanctuary"),
		 popup: $.t('Misc Quest Location (for the Mercenary Achievement/Trohy), see <a href="https://wiiare.in/?post_type=portfolio-type&p=17468" target="_blank">all here</a>')
		}
		],


		
	// Surgical Journal 10/50
	banditcamp: [{
    coords: [[-5.791,-41.880]],
			label: $.t("Massachusetts Surgical Journal (1/9)"),
			popup: $.t("weapon inflict +2% limb damage | Parsons State Insane Asylum, Inside Lorenzo’s living quarters, at the very bottom floor of the facility.")
		},{
    coords: [[-25.006,-74.619]],
			label: $.t("Massachusetts Surgical Journal (3/9)"),
			popup: $.t("weapon inflict +2% limb damage")
		},{
    coords: [[-55.900,-68.247]],
			label: $.t("Massachusetts Surgical Journal - (9/9)"),
			popup: $.t("weapon inflict +2% limb damage | Cabot House, in the Bedroom upstaris (you get there after 3 Side Quests)")
		}
		],
	
	//Astoundingly Awesome Tales
		barber: [{
		coords: [[-62.288,-151.348]],
			label: $.t("Astoundingly Awesome Tales - My Brain and I... (1/14)"),
			popup: $.t("Regenerate 1 point of health per minute | inside Boston Mayoral Shelter")
		},{
		coords: [[-84.285,-142.559]],
			label: $.t("Astoundingly Awesome Tales (2/14)"),
			popup: $.t("Do +5% damage with scoped weapons. | inside sentinel site")
		},{
		coords: [[-62.755,-75.410]],
			label: $.t("Astoundingly Awesome Tales (3/14)"),
			popup: $.t('Gain +5 Action Points | Inside Vault 114 [<a href="http://i.imgur.com/ihAylie.png" target=_blank">Image</a>]')
		},{
		coords: [[-11.437,-87.231]],
			label: $.t("Astoundingly Awesome Tales (4/14)"),
			popup: $.t('Gain +5 Action Points | at the Skylanes Flight 1981 Wreck')
		},{
		coords: [[-1.933,-89.209]],
			label: $.t("Astoundingly Awesome Tales (5/14)"),
			popup: $.t('Do +5% damage at night | in the Workshop of Outpost Zimonja')
		},{
		coords: [[-17.351,-32.915]],
			label: $.t("Astoundingly Awesome Tales - The Man who could stop time (8/14)"),
			popup: $.t('Gain +5 Action Points. | Dunwich Borers, At the bottom of the pit below terminal #3, on a table near the steamer trunk')
		}
		
		
		],

	// Total Hack (3/50)
		blacksmith: [{
		coords: [[-18.438,-90.615]],
			label: $.t("Total Hack - Control Turrets (1/3)"),
			popup: $.t("Inculdes the turrent hacking source code | Wildwood cemetery - near the big  tree")
		},{
		coords: [[-46.980,-84.814]],
			label: $.t("Total Hack (2/3)"),
			popup: $.t("Inculdes the spotlights hacking source code | Basement server room, on the terminal desk, north wall.")
		},{
		coords: [[-62.735,-56.953]],
			label: $.t("Total Hack (3/3)"),
			popup: $.t("Inculdes the Protectrons hacking source code | Held by the female mannequin standing on the table in the game room with the checkers board.")
		}
		],

	// Brothel
		brothel: [
		{
		coords: [[-3.689,-112.764]],
			label: $.t("Covert Operations Manual - Tiptoe Through the Tuplips(1/10)"),
			popup: $.t("low chance of detecion while sneaking | Inside USAF Satellite Station Olivia - Inside the computer room unlocked by terminal (southeast interior), on the desk with the mini nuke.")
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

	// test: Covert Operations Manual (10/50)
		entrance: [],
		
	// Grindstone
		grindstone: [{
		coords: [[-23.080,-142.910]],
			label: $.t("Grognak the Barbarian (1/10)"),
			popup: $.t("+1 critical damage of melee attacks perk | next to the key in the wicked shipping fleet lockup")
		},{
		coords: [[-24.327,-67.983]],
			label: $.t("Grognak the Barbarian (2/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | inside Malden Middle School/Vault 75 - Follow the Quest Vault 75, Book is in the Overseers Quarter")
		}
		],

	// Guns and Bullets 
		guarded: [{
		coords: [[-60.109,-148.008]],
			label: $.t("Guns and Bullets: Lasers & Hunting: Acceptable Overkill (1/10)"),
			popup: $.t("+5% critical damage for Ballistic weapons | inside Fort Hagen On the oval table in the kitchen area, top floor, southeast area.")
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
			label: $.t("Hot Rodder - Shark Paint Schemes! (1/3)"),
			popup: $.t('Shark Paint Powerarmor Paint | Atom Cats garage - In one of the Trailers - North One [<a href="https://youtu.be/9eb9aLzvU7Q?t=158" target="_blank">Video</a>]')
		},{
		coords: [[-2.987,-120.850]],
			label: $.t("Hot Rodder - Flame Job! (2/3)"),
			popup: $.t('Flame Job Powerarmor Paint | Robotics Disposal Ground - Inside the small concrete hut, on the desk with the terminal on it (more to the North then the Icons shows) [<a href="https://youtu.be/9eb9aLzvU7Q?t=177" target="_blank">Video</a>]')
		}, {
		coords: [[-73.391,-90.967]],
			label: $.t("Hot Rodder - Hot Pink! (3/3)"),
			popup: $.t('Hot Pink Powerarmor Paint | near West Roxbury station and the Medical Building.  [<a href="https://youtu.be/9eb9aLzvU7Q?t=193" target="_blank">Video Walktrough</a>]')
		}
		
		],
		//Mag: La Coiffe
		harbor: [{
		coords: [[-73.478,-89.209]],
			label: $.t("La Coiffe (1/2)"),
			popup: $.t("Unlocks a unique hairstyle | Inside Fallons Department Store - top Floor, in a Roundroom with a brocken Door, on the Table")
		},{
		coords: [[-51.289,-65.391]],
			label: $.t("La Coiffe (1/2)"),
			popup: $.t("Unlocks a unique hairstyle. | inside Charlestown Laundry")
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
			label: $.t("Live & Love (1/9)"),
			popup: $.t("Unlocks a unique hairstyle. | top Floor of Building just near Revere Beach Station")
		},{
		coords: [[-57.232,-137.021]],
			label: $.t("Live & Love - The Secretary Charmer (2/9)"),
			popup: $.t("Permaently gain +25% XP from persuading womein  | in one of the Trailers at Fiddlers Green Trailer Estates")
		},{
		coords: [[-61.143,-68.203]],
			label: $.t("Live & Love - Advice From Married Men (3/9)"),
			popup: $.t("P | inside Goodneighbor - The Third Rail, Bathroom")
		},{
		coords: [[-60.436,-66.797]],
			label: $.t("Live & Love - An Experience to Remember (4/9)"),
			popup: $.t("  | inside Goodneighbor -Hotel Rexford, Groundfloor at the Bar")
		},{
		coords: [[-51.289,-65.391]],
			label: $.t("Live & Love - An Experience to Remember (4/9)"),
			popup: $.t("Permaently gain +25% XP from persuading men | inside Bunker Hill, top of the Tower")
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
			label: $.t("Wasteland Survival Guide - Farming The Wastes (1/9)"),
			popup: $.t('Heal +50% more from fruits and vegetables. |  in the ranger cabin')
		},{
		coords: [[-27.059,-127.969]],
			label: $.t("Wasteland Survival Guide - Guide To Diamond City (5/9)"),
			popup: $.t('Diamond City is permanently marked on your map. | in the root cellar of Gorskis cabin')
		},{
		coords: [[-74.845,-104.897]],
			label: $.t("Wasteland Survival Guide -The Brightside Of Radiation Poisoning (3/9)"),
			popup: $.t('Permanently heal +50% from irradiated packaged food and drink |  On the counter of the diner and coolant recharge station.')
		},{
		coords: [[-19.145,-17.490]],
			label: $.t("Wasteland Survival Guide - Insect Repellent Special (2/9)"),
			popup: $.t('Permanently take 5% less damage from insects. | Crater House, Western side of the crater, on the table, lower level of a stilt shack with a lantern and caps stash on a table.')
		},{
		coords: [[-74.845,-104.897]],
			label: $.t("Wasteland Survival Guide - The Bright Side of Radiation (4/9)"),
			popup: $.t('Permanently heal +50% from irradiated packaged food and drink |  On the counter of the diner and coolant recharge station.')
		}
		,{
		coords: [[-45.951,-6.592]],
			label: $.t("Wasteland Survival Guide - Commonwealth Coupon Spectacular (6/9)"),
			popup: $.t('Permanently gain +10% discount from food and drink vendors. |  Nahant Oceanological Society, On the metal desk with the typewriter, entrance room area, ground floor.')
		}
		,{
		coords: [[-17.644,-65.918]],
			label: $.t("Wasteland Survival Guide - Commonwealth Coupon Spectacular (7/9)"),
			popup: $.t('Permanently swim 25% faster | Old Gullet sinkhole, On a concrete block inside the sinkhole, by the cooking pot station.')
		}
		,{
		coords: [[-16.130,-145.635]],
			label: $.t("Wasteland Survival Guide - Self Defense Secrets (8/9)"),
			popup: $.t('Permanently take 5% less damage from melee attacks. | Ranger cabin, On the sideboard table in the cabin.')
		}
		,{
		coords: [[-36.102,-144.229]],
			label: $.t("Wasteland Survival Guide  -Hunting in the Wastes (9/9)"),
			popup: $.t('Permanently collect more meat from animal kills. |  Sunshine Tidings, In the locked cabin near the silos, on the floor near a mattress and steamer trunk.')
		}
		],

	// Picket Fences (5/122)
		monsterden: [{
		coords: [[-64.168,-71.367]],
			label: $.t("Picket Fences (1/5)"),
			popup: $.t('potted plants blueprint | inside Combat Zone [<a href="https://youtu.be/MhEmt_ruN_Y?t=146" target="_blank">Video</a>]')
		},{
		coords: [[-28.613,-42.627]],
			label: $.t("Picket Fences - Essential Upgrades! (2/5)"),
			popup: $.t('new statues blueprint | inside Saugus Ironworks [<a href="https://youtu.be/MhEmt_ruN_Y?t=132" target="_blank">Video</a>]')
		},{
		coords: [[-58.078,-127.002]],
			label: $.t("Picket Fences - Welcome Home! (3/5)"),
		popup: $.t('patio furniture blueprint | inside Weston water treatment plant [<a href="https://youtu.be/MhEmt_ruN_Y?t=76" target="_blank">Video</a>]')
		},{
		coords: [[-68.269,-98.438]],
			label: $.t("Picket Fences (4/5)"),
			popup: $.t('high tech light blueprint | inside Hardware Town [<a href="https://youtu.be/MhEmt_ruN_Y?t=94" target="_blank">Video</a>]')
		},{
		coords: [[-55.179,-113.203]],
			label: $.t("Picket Fences - The House of Tomorrow... (5/5)"),
			popup: $.t('picket fencing blueprint | inside Beantown Brewery [<a href="https://youtu.be/MhEmt_ruN_Y?t=4" target="_blank">Video</a>]')
		}],
	
	// Unique Weapons 
	// Junk Jet -48.458,-128.936
		monsternest: [{
		coords: [[-48.458,-128.936]],
			label: $.t("Junk Jet"),
			popup: $.t("In ArcJet Systems on the table in the rocket control room.")
		},{
		coords: [[-58.448,-110.918]],
			label: $.t("Alien Blaster"),
			popup: $.t("there is a small cave with a Alien in it!")
		},{
		coords: [[-73.252,-64.248]],
			label: $.t("Prototype PA77"),
			popup: $.t("gun with Infinite clip size, Master Lock Safe!")
		},{
		coords: [[-3.689,-145.635]],
			label: $.t("Cryolater"),
			popup: $.t("Master Lock Safe!")
		},{
		coords: [[-65.964,-107.490]],
			label: $.t("Syringer Rifle"),
			popup: $.t("Vault 91 - After the Sidequest Missing Hole in the Wall")
		},{
		coords: [[-56.341,-58.0525]],
			label: $.t("Raiload Rifle"),
			popup: $.t("Railroad HQ - last Mission in the Railroad Missions Series")
		},{
		coords: [[-66.231,-90.220]],
			label: $.t("Big Boy"),
			popup: $.t('Buy Big Boy from Arturo at Diamond City Market [<a href="http://i.imgur.com/DHIq5jm.jpg" target="_blank">Image</a>]')
		},{
		coords: [[-55.925,-69.521]],
			label: $.t("Zeta Gun"),
			popup: $.t('Cabot House - You get this as you done 3 Quests here')
		}
		],

		notice: [],

	// Person in Distress
		pid: [],

	// Place of Power
		pop: [],

	// Point of Interest
		poi: [{
		coords: [[-73.898,-90.352]],
			label: $.t('Robot Model Kits (1/8)'),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Eyebot Model Kit</a> | Inside Fallons Department Store - First Floor - Room with Employees Only/Novie Lockpick - in one of the shelves')
		},{
		coords: [[-83.638,-143.877]],
			label: $.t('Robot Model Kits (2/8)'),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">SentryBot Model Kit</a> | Inside O-Neill Family Manufacturing - Basement')
		},{
		coords: [[-44.559,-41.968]],
			label: $.t('Robot Model Kits (3/8)'),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Protectron Model Kit</a> | SW from Revere Beach Station - in a Big buling that is locked by chains, you can accces to to roof over a tree (Deaddrop Sign)')
		},{
		coords: [[-62.795,-152.358]],
			label: $.t('Robot Model Kits (4/8)'),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Mr. Gutsy Model Kit</a> | inside Boston Mayoral Shelter - in one of the Bedrooms')
		},{
		coords: [[-69.870,-137.285]],
			label: $.t('Robot Model Kits (5/8)'),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Mr. Handy Model Kit</a> | at Lake Cochituate at some Fisherhuts')
		},{
		coords: [[-2.724,-22.500]],
			label: $.t('Robot Model Kits (6/8)'),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Robot Model Kit Parts</a> | small Building directly right from Mahkra Fishpacking')
		},{
		coords: [[-68.816,-144.053]],
			label: $.t('Robot Model Kits (7/8)'),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Robot Model Kit Parts</a> | near Poseidon Reservoir. On the Southside is a broken Pipe ending in the water, with a Deaddrop Sign, go up the Pipe to find it')
		},{
		coords: [[-15.961,-27.773]],
			label: $.t('Robot Model Kits (8/8)'),
			popup: $.t('<a href="https://wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Robot Model Kit Parts</a> | at Hugos Hole')
		}
		
		
		
		],

	// Shopkeeper
		shopkeeper: [],

	// Mag: RobCo Fun (5/50)
	//Vault 111 - Inside the cafeteria terminal, northeast area. Only the game is available.
//Museum of Freedom - In the chamber above the front doors, where Preston is holed up, on Sturges’ desk.
//Fort Hagen Command Center - adjacent to Kellogg’s Terminal under a table, in the chamber where you speak with Kellogg.
//Valentine's Detective Agency - on a desk, inside the Valentine’s Detective Agency located in Diamond City Market.
//Goodneighbor - In the Memory Den, basement Memory Lounger area, on a metal desk against one of the brick walls.
		signpost: [{
		coords: [[-60.109,-148.008]],
			label: $.t("Robo Fun (1/5)"),
			popup: $.t("holotape game  | inside Fort Hagen Command Center - adjacent to Kellogg’s Terminal under a table, in the chamber where you speak with Kellogg.")
		}, {
			coords: [[-2.241,-148.843]],
			label: $.t("Robo Fun (2/5)"),
			popup: $.t("holotape game  | inside Fort Hagen Command Center - adjacent to Kellogg’s Terminal under a table, in the chamber where you speak with Kellogg.")
		}
		, {
			coords: [[-19.270,-122.322]],
			label: $.t("Robo Fun (3/5)"),
			popup: $.t("holotape game  | inside Museum of Freedom - In the chamber above the front doors, where Preston is holed up, on Sturges’ desk.")
		}
		, {
			coords: [[-66.548,-88.418]],
			label: $.t("Robo Fun (4/5)"),
			popup: $.t("holotape game  | inside Diamond City - on a desk, inside the Valentine’s Detective Agency")
		}
		, {
			coords: [[-61.397,-66.709]],
			label: $.t("Robo Fun (5/5)"),
			popup: $.t("holotape game  | inside Goodneighbor  - basement Memory Lounger area, on a metal desk against one of the brick walls")
		}
		],

	// Tales of a Junktown Jerky Vendor
		smugglers: [{
			coords: [[-35.925,-133.945]],
			label: $.t("Tales of a Junktown Jerky Vendor (1/8)"),
			popup: $.t("better prices when buying from vendors for every issue | Walden Pond, in the sewer/Basement ")
		},{
			coords: [[-31.952,-98.833]],
			label: $.t("Tales of a Junktown Jerky Vendor (2/8)"),
			popup: $.t("better prices when buying from vendors for every issue | Mystic Pines, on the magazine stand, northwest wall, just right of the Milton General Hospital poster.")
		},{
			coords: [[-35.711,-106.479]],
			label: $.t("Tales of a Junktown Jerky Vendor (3/8)"),
			popup: $.t("better prices when buying from vendors for every issue | Super-Duper Mart,  on the magazine stand, northwest wall, just right of the Milton General Hospital poster.")
		},{
			coords: [[-29.267,-25.093]],
			label: $.t("Tales of a Junktown Jerky Vendor (4/8)"),
			popup: $.t("better prices when buying from vendors for every issue | inside Longneck Lukowski's Cannery, near the Bobblehead")
		},{
			coords: [[-70.334,-77.563]],
			label: $.t("Tales of a Junktown Jerky Vendor (5/8)"),
			popup: $.t("better prices when buying from vendors for every issue | Big John's salvage, on the small table with the lantern, inside the caravan perched atop the containers, adjacent to the steamer trunk.")
		},{
			coords: [[-78.455,-38.496]],
			label: $.t("Tales of a Junktown Jerky Vendor (6/8)"),
			popup: $.t("better prices when buying from vendors for every issue | Wreck of the FMS Northern Star,  upper level, mid-deck, on the parasol table, north side of the ship.")
		},{
			coords: [[-67.221,-57.437]],
			label: $.t("Tales of a Junktown Jerky Vendor (7/8)"),
			popup: $.t("better prices when buying from vendors for every issue | Four Leaf fishpacking plant, basement locker room, on the bench, western side of the plant.")
		},{
			coords: [[-70.378,-59.106]],
			label: $.t("Tales of a Junktown Jerky Vendor (8/8)"),
			popup: $.t("better prices when buying from vendors for every issue | Gwinnett brewery, catwalk metal hut, upper level, along the northwest wall. Climb the pipes and catwalks to reach it.")
		}],
		
	
	// Spoils of War
		spoils: [],
	});

	window.allLayers = [
		markers.abandoned,
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
