
$(document).on("loadMapdata", function () {
	window.map_path   = 'commonwealth';
	window.map_sWest  = L.latLng(-100, -200);
	window.map_nEast  = L.latLng(500, 200);
	window.map_center = [20, 4];
	window.map_mZoom  = 4;

	processData({
	location: [
	 {
		coords: [[54.111,-11.5147]],
			label: $.t("c:location.label.vault75"),
			popup: $.t("c:location.desc.vault75")

		},{
		coords: [[-17.979,-14.326]],
			label: $.t("c:location.label.vault114"),
			popup: $.t("c:location.desc.vault114")

		},{
		coords: [[-22.918,-67.676]],
			label: $.t("c:location.label.vault81"),
			popup: $.t("c:location.desc.vault81")
		},{
		coords: [[-65.803,-82.529]],
			label: $.t("c:location.label.vault95"),
			popup: $.t("c:location.desc.vault95")
		},{
		 coords: [[70.554,-124.453]],
		 label: $.t("c:location.label.vault111"),
		 popup: $.t("c:location.desc.vault111")
		},{
		coords: [[-43.069,-137.988]],
			label: $.t("c:location.label.behemoth"),
			popup: $.t("c:location.desc.behemoth")
		},{
		coords: [[-63.115,-37.266]],
			label: $.t("c:location.label.behemoth"),
			popup: $.t("c:location.desc.behemoth")
		},{
		coords: [[56.414,-2.725]],
			label: $.t("c:location.label.behemoth"),
			popup: $.t("c:location.desc.behemoth")
		},{
		coords: [[-16.720,-15.645]],
			label: $.t("c:location.label.swain"),
			popup: $.t("c:location.desc.behemoth")
		},{
		coords: [[-58.677,54.580]],
			label: $.t("c:location.label.seamonster"),
			popup: $.t("c:location.desc.seamonster")
		},{
		coords: [[42.033,-111.0066]],
			label: $.t("c:location.label.behemoth"),
			popup: $.t("c:location.desc.behemoth")
	 },{
		coords: [[69.565,-113.643]],
			label: $.t("c:location.label.SPECIALmag"),
			popup: $.t("c:location.desc.SPECIALmag")
	 }],

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



		armourerstable: [
    // coords: [[-20.138,-120.806]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased | Inside Museum of Freedom")
		// }, {
			// coords: [[-59.131,-29.092]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased")
		// }, {
			// coords: [[-60.587,-45.967]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased")
		// }, {
			// coords: [[-60.305,-44.604]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased")
		// }, {
			// coords: [[-61.164,-43.242]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased")
		// }, {
			// coords: [[-61.249,-39.683]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased")
		// }, {
			// coords: [[-61.752,-37.573]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased")
		// }, {
			// coords: [[-63.607,-25.444]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased | inside Fort Strong")
		// }, {
			// coords: [[-63.154,-25.225]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased | inside Fort Strong")
		// }, {
			// coords: [[-18.188,-89.011]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased | Lexington - Military Armor Transport")
		// }, {
			// coords: [[-37.160,-54.229]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased | 2x Powerarmor. One behind a Expert and Masterlock (Key for Masterlock somewhere around)")
		// }, {
			// coords: [[-39.977,-42.803]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased | on one of the dishes")
		// }, {
			// coords: [[-34.016,-47.109]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased | in the back of the semi")
		// }, {
			// coords: [[-2.372,-111.885]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased | By the crashed vertibird")
		// }, {
			// coords: [[-49.724,-109.688]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased")
		// }, {
			// coords: [[-39.504,-23.950]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Type of the Armor is levelbased |  hidden inside the containers and you have to walk around the back to gain access")
		// }, {
			// coords: [[-82.178,-134.033]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Lost raided and his raiders power armor.")
		// }, {
			// coords: [[-77.971,-158.027]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Power armor inside Abandon Chack / Installtion K-21B")
		// }, {
			// coords: [[-28.999,-93.340]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("Crashed vertibird and power armor.")
		// }, {
			// coords: [[-53.853,-60.469]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("inside a container on the raft.")
		// }, {
			// coords: [[-62.915,-146.426]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("inside the left most storage hall when approached from blood clinic.")
		// }, {
			// coords: [[-75.888,-52.075]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("atom cats t-60 that you can steal. No helmet.")
		// }, {
			// coords: [[-30.297,-93.164]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t("")
		// }, {
			// coords: [[-57.516,-136.318]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t('You have to Pick a Master Lock, <a href="https://www.reddit.com/r/Fallout/comments/3sql3m/new_interactive_map_of_fallout_4_settlements/cx0jdt4" target="_blank">but can also enter the Suite trough a back window and teleport out</a>. Also there is a novice terminal in the Place that unlocks a safe that has a key to that shed')
		// }, {
			// coords: [[-60.823,-65.347]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t('can be bought from KL-E-O at Goodneighbor')
		// }, {
			// coords: [[-61.565,-60.073]],
			// label: $.t("Power Armor X-01"),
			// popup: $.t('in/on top of Court 35 there is power armor, full X-01 suit if you are high enough level')
		// }, {
			// coords: [[-75.640,-68.621]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t('Leveled armor in the water, next to the APC')
		// }, {
			// coords: [[-70.656,-72.334]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t('South Boston Military Checkpoint ')
		// }, {
			// coords: [[-37.265,-117.620]],
			// label: $.t("c:powerarmor.label.powerarmor"),
			// popup: $.t('Leveled armor on a train car, in a cage, behind an advanced terminal.')
		// }, {
			// coords: [[-3.908,-93.999]],
			// label: $.t("T51 Power Armor"),
			// popup: $.t('Leveled armor on a train car, in a cage, behind an advanced terminal.')
		// }



		//
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

		{
		 coords: [[39.368,33.223]],
		 label: $.t("c:Magazines.label.Tesla") + $.t(" 3/9 - ") + $.t("c:Magazines.label.Tesla-3-9"),
 		popup: $.t("c:Magazines.desc.Tesla")+ $.t("c:Magazines.desc.Tesla-3-9"),
		 }
],

// TODO Taboo Tattoos
//magtesla: [

		//label: $.t("c:Magazines.label.Taboo") + $.t(" 1/16 - ") + $.t("c:Magazines.label.Taboo-16"),
		//popup: $.t("c:Magazines.desc.Taboo-1-16"),
//	],


// Tales of a Junktown Jerky Vendor
//Nr6: -67.204,37.969
smugglers: [{
		 coords: [[-67.204,37.969]],
		 label: $.t("c:Magazines.label.Tales") + $.t(" 6/8 - ") + $.t("c:Magazines.label.Tales-6-8"),
 		popup: $.t("c:Magazines.desc.Tales")+ $.t(" | ")+ $.t("c:Magazines.desc.Tales-6-8"),
	}],



	//SideQuest
	 sidequest: [{
		coords: [[52.536,-83.672]],
		label: $.t("c:sidequest.lable.Drumlin"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		}, {
		coords: [[-23.805,-42.715]],
		label: $.t("Diamond City"),
		popup: $.t("c:sidequest.desc.Diamond"),
		}, {
		coords: [[-20.468,-55.898]],
		label: $.t("Chestnut Hillock Reservoir - Here Kitty, Kitty"),
		popup: $.t("c:sidequest.desc.Chestnut"),
		},{
		coords: [[61.016,19.600]],
		label: $.t("The Slog"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		},{
		coords: [[-9.622,-20.039]],
		label: $.t("The Silver Shroud"),
		popup: $.t("c:sidequest.desc.silver"),
		},{
		coords: [[3.162,-7.383]],
		label: $.t("The Cabot House"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		},{
		coords: [[63.705,61.260]],
		label: $.t("Museum of Witchcraft"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		},{
		coords: [[-9.882,-7.031]],
		label: $.t("Goodneighbor"),
		popup: $.t("c:sidequest.desc.siqequestlocation"),
		}],



	//Misc. Quests
		 quest: [{
		 coords: [[18.646,-8.262]],
		 label: $.t("c:miscquest.label.bunker"),
		 popup: $.t("c:miscquest.desc.popup"),
		 },{
		 coords: [[-58.768,15.117]],
		 label: $.t("c:miscquest.label.Atom"),
		  popup: $.t("c:miscquest.desc.popup"),
		 },{
		 coords: [[0.703,-57.656]],
		 label: $.t("c:miscquest.label.Cambridge"),
		 popup: $.t("c:miscquest.desc.popup"),
		 },{
		 coords: [[-6.315,-23.115]],
		 label: $.t("c:miscquest.label.Amphitheater"),
		 popup: $.t("c:miscquest.desc.popup"),
		 },{

		 coords: [[-23.241,-15.205]],
		 label: $.t("c:miscquest.label.Combat"),
		 popup: $.t("c:miscquest.desc.popup"),
		 },{
		 coords: [[-23.483,-44.385]],
		 label: $.t("c:miscquest.label.Diamond"),
		 popup: $.t("c:miscquest.desc.popup"),

		 },{
		 coords: [[-9.362,-8.701]],
		 label: $.t("c:miscquest.label.Goodneighbor"),
		 popup: $.t("c:miscquest.desc.popup"),
		 },{
		 coords: [[19.891,-79.980]],
		 label: $.t("c:miscquest.label.Graygarden"),
		 popup: $.t("c:miscquest.desc.popup"),
		 },{

		 coords: [[52.322,-16.611]],
		 label: $.t("c:miscquest.label.Jamaica"),
		 popup: $.t("c:miscquest.desc.popup"),
		 },{
		 coords: [[51.727,52.559]],
		 label: $.t("c:miscquest.label.Longneck"),
		 popup: $.t("c:miscquest.desc.popup"),

		 },{
		 coords: [[-0.176,25.488]],
		 label: $.t("c:miscquest.label.Prydwen"),
		 popup: $.t("c:miscquest.desc.popup"),
		 },{
		 coords: [[-80.489,-154.336]],
		 label: $.t("c:miscquest.label.RockyCave"),
		 popup: $.t("c:miscquest.desc.popup"),
		 },{
		 coords: [[67.542,73.564]],
		 label: $.t("c:miscquest.label.Rook"),
		 popup: $.t("c:miscquest.desc.popup"),
},{
		 coords: [[61.016,23.115]],
		 label: $.t("c:miscquest.label.Slog"),
		 popup: $.t("c:miscquest.desc.popup"),
		// },{
		// coords: [[-26.274,-66.270]],
		//label: $.t("c:miscquest.label.Vault75"),
		// popup: $.t("c:miscquest.desc.popup"),
		 },{
		 coords: [[-22.269,-65.742]],
		 label: $.t("c:miscquest.label.Vault81"),
		 popup: $.t("c:miscquest.desc.popup"),
		 }, {
		 coords: [[69.318,-107.754]],
		 label: $.t("c:miscquest.label.Sanctuary"),
		 popup: $.t("c:miscquest.desc.popup"),
		 }],



	// Surgical Journal 10/50
	banditcamp: [
	// {
    // coords: [[-5.791,-41.880]],

		// label: $.t("c:Magazines.label.SurgicalJournal") + $.t(" 1/9 - ") + $.t("c:Magazines.label.SurgicalJournal1-9"),
			// popup: $.t("c:Magazines.desc.SurgicalJournal") + $.t(" | ") + $.t("c:Magazines.desc.SurgicalJournal-1-9"),
		// },{
    // coords: [[-25.006,-74.619]],
			// label: $.t("c:Magazines.label.SurgicalJournal") + $.t(" 3/9 - ") + $.t("c:Magazines.label.SurgicalJournal3-9"),
			// popup: $.t("c:Magazines.desc.SurgicalJournal") + $.t(" | ") + $.t("c:Magazines.desc.SurgicalJournal-3-9"),
		// },{
    // coords: [[-55.900,-68.247]],
			// label: $.t("c:Magazines.label.SurgicalJournal") + $.t(" 9/9- ") + $.t("c:Magazines.label.SurgicalJournal9-9"),
			// popup: $.t("c:Magazines.desc.SurgicalJournal") + $.t(" | ") + $.t("c:Magazines.desc.SurgicalJournal-9-9"),
		// }
		],

	//Astoundingly Awesome Tales
		barber: [
		// {
		// coords: [[-62.288,-151.348]],
			// label: $.t("c:Magazines.label.Astoundingly") + $.t(" 1/14 - ") + $.t("c:Magazines.label.Astoundingly1-14"),
			// popup: $.t("c:Magazines.desc.Astoundingly1") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-1-14"),
		// },{
		// coords: [[-84.285,-142.559]],
			// label: $.t("c:Magazines.label.Astoundingly") + $.t(" 2/14 - ") + $.t("c:Magazines.label.Astoundingly2-14"),
			// popup: $.t("c:Magazines.desc.Astoundingly2") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-2-14"),
		// },{
		// coords: [[-62.755,-75.410]],
			// label: $.t("c:Magazines.label.Astoundingly") + $.t(" 3/14 - ") + $.t("c:Magazines.label.Astoundingly3-14"),
			// popup: $.t("c:Magazines.desc.Astoundingly3") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-3-14"),
		// },{
		// coords: [[-11.437,-87.231]],
			// label: $.t("c:Magazines.label.Astoundingly") + $.t(" 4/14 - ") + $.t("c:Magazines.label.Astoundingly4-14"),
			// popup: $.t("c:Magazines.desc.Astoundingly4") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-4-14"),
		// },{
		// coords: [[-1.933,-89.209]],
			// label: $.t("c:Magazines.label.Astoundingly") + $.t(" 5/14 - ") + $.t("c:Magazines.label.Astoundingly5-14"),
			// popup: $.t("c:Magazines.desc.Astoundingly5") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-5-14"),
		// },{
		// coords: [[-17.351,-32.915]],
			// label: $.t("c:Magazines.label.Astoundingly") + $.t(" 6/14 - ") + $.t("c:Magazines.label.Astoundingly6-14"),
			// popup: $.t("c:Magazines.desc.Astoundingly6") + $.t(" | ") + $.t("c:Magazines.desc.Astoundingly-6-14"),
		// }


		],

	// Total Hack 3x
		blacksmith: [
		 {
		 coords: [[57.469,-40.6935]],
		 		label: $.t("c:Magazines.label.Hack") + $.t(" 1/3 - ") + $.t("c:Magazines.label.Hack1-3"),
			 popup: $.t("c:Magazines.desc.Hack1-3"),
		 },{
		 coords: [[27.294,-37.529]],
			 label: $.t("c:Magazines.label.Hack") + $.t(" 2/3 - ") + $.t("c:Magazines.label.Hack2-3"),
			 popup: $.t("c:Magazines.desc.Hack2-3"),
		 },{
		 coords: [[-13.325,6.504]],
			 label: $.t("c:Magazines.label.Hack") + $.t(" 3/3 - ") + $.t("c:Magazines.label.Hack3-3"),
			 popup: $.t("c:Magazines.desc.Hack3-3"),
		 }
		],

	// Covert Operations Manual (10/50)
		brothel: [
		// {
		// coords: [[-3.689,-112.764]],
			// label: $.t("c:Magazines.label.Covert") + $.t(" 1/10 - ") + $.t("c:Magazines.label.Covert1-10"),
			// popup: $.t("c:Magazines.desc.Covert1-10"),
		// }, {
		// coords: [[-61.109,-148.008]],
			// label: $.t("Covert Operations Manual  (2/10)"),
			// popup: $.t("low chance of detecion while sneaking | In the Basement (Bunker) of Barneys House")
		// }, {
		// coords: [[-44.277,-147.920]],
			// label: $.t("Covert Operations Manual  (3/10)"),
			// popup: $.t("low chance of detecion while sneaking | manual Below Lonely Chapel")
		// }, {
			// coords: [[-78.260,-159.829]],
			// label: $.t("Covert Operations Manual  - Not the Soldiers You're Looking For (4/10)"),
			// popup: $.t('low chance of detecion while sneaking | inside Abandon Shack / Installtion K-21B - Bottom Level, near the novice Terminal')
		// }
		],

	// free
		entrance: [],

	// Grindstone
		grindstone: [
	 {
		// coords: [[-23.080,-142.910]],
			// label: $.t("c:Magazines.label.Grognak") + $.t(" 1/10 - ") + $.t("c:Magazines.label.Grognak1-10"),
			// popup: $.t("c:Magazines.desc.Grognak") + $.t(" | ") + $.t("c:Magazines.desc.Grognak1-10"),
		// },{
		coords: [[-13.667,-13.975]],
		 label: $.t("c:Magazines.label.Grognak") + $.t(" 6/10 - ") + $.t("c:Magazines.label.Grognak6-10"),
		 popup: $.t("c:Magazines.desc.Grognak") + $.t(" | ") + $.t("c:Magazines.desc.Grognak6-10"),
	 }],

	// Guns and Bullets
		guarded: [
		// {
		// coords: [[-60.109,-148.008]],
			// label: $.t("c:Magazines.label.Guns") + $.t(" 1/10 - ") + $.t("c:Magazines.label.Guns1-10"),
			// popup: $.t("c:Magazines.desc.Guns") + $.t(" | ") + $.t("c:Magazines.desc.Guns1-10"),
		// },{
		// coords: [[-7.362,-11.426]],
			// label: $.t("Guns and Bullets: Avoid those Pesky Gun Laws! (2/10)"),
			// popup: $.t("+5% critical damage for Ballistic weapons | Rook Family house, Inside Barney’s bunker, on a metal desk near the lantern and filing cabinet.")
		// },{
		// coords: [[-70.155,-71.147]],
			// label: $.t("Guns and Bullets: Take Aim, Army Style (3/10)"),
			// popup: $.t("+5% critical damage for Ballistic weapons | South Boston military checkpoint, Inside the checkpoint, on a metal desk, east wall.")
		// },{
		// coords: [[-77.264,-90.967]],
			// label: $.t("Guns and Bullets: Street Guns of Detroit (4/10)"),
			// popup: $.t("+5% critical damage for Ballistic weapons | inside Gunners Plaza - top Floor, south room")
		// },{
		// coords: [[-78.742,-59.370]],
			// label: $.t("Guns and Bullets: The Moon: A Communist Doomsday Device? (5/10)"),
			// popup: $.t("+5% critical damage for Ballistic weapons | Quincy ruins, On the desk with the terminal, elevated freeway Gunners camp, between the two big-rig trailers.	")
		// },{
		// coords: [[-52.160,-103.535]],
			// label: $.t("Guns and Bullets: Bear Proofing Your Campsite:... (6/10)"),
			// popup: $.t("+5% critical damage for Ballistic weapons | Cambridge police station, In a locked safe in the station chief’s office. Available only after Brotherhood reinforcements arrive at the station.")
		// },{
		// coords: [[-55.354,-101.777]],
			// label: $.t("Guns and Bullets: Little Guns For Little Ladies (7/10)"),
			// popup: $.t("+5% critical damage for Ballistic weapons | Fraternal Post 115, On the lectern in the stage area, by the American flag and sandbags.")
		// },{
		// coords: [[-56.729,-78.706]],
			// label: $.t("Guns and Bullets: Guide to hunting commies! (8/10)"),
			// popup: $.t("+5% critical damage for Ballistic weapons | Ticonderoga Safehouse, On the desk of the corner office, northwest corner, top floor.")
		// },{
		// coords: [[-48.283,-74.004]],
			// label: $.t("Guns and Bullets: The Future of Hunting? (9/10)"),
			// popup: $.t("+5% critical damage for Ballistic weapons | BADTFL regional office, On a desk in the chief’s office, bullpen room in the western part of the building.")
		// },{
		// coords: [[-70.801,-47.417]],
			// label: $.t("Guns and Bullets: Plasma - The Weapon of Tomorrow (10/10)"),
			// popup: $.t("+5% critical damage for Ballistic weapons | The Castle, on the Radio Desk in the middle")
		// }
		],

	// Hot Rodder (3/122)
		gwent: [
		 {
		 coords: [[-57.184,15.029]],
			 label: $.t("c:Magazines.label.Rodder") + $.t(" 1/3 - ") + $.t("c:Magazines.label.Rodder1-3"),
			 popup: $.t("c:Magazines.desc.Rodder1") + $.t(" | ") + $.t("c:Magazines.desc.Rodder1-3"),
		 },{
		 coords: [[71.525,-84.727]],
			 label: $.t("c:Magazines.label.Rodder") + $.t(" 2/3 - ") + $.t("c:Magazines.label.Rodder2-3"),
			 popup: $.t("c:Magazines.desc.Rodder2") + $.t(" | ") + $.t("c:Magazines.desc.Rodder2-3"),
		 }, {
		 coords: [[-50.233,-38.408]],
			 label: $.t("c:Magazines.label.Rodder") + $.t(" 3/3 - ") + $.t("c:Magazines.label.Rodder3-3"),
			 popup: $.t("c:Magazines.desc.Rodder3") + $.t(" | ") + $.t("c:Magazines.desc.Rodder3-3"),
		 }

		],
		//Mag: La Coiffe (2/2)
		harbor: [
		 {
		 coords: [[-50.458,-41.089]],
			 label: $.t("c:Magazines.label.Coiffe") + $.t(" 1/2 - ") + $.t("c:Magazines.label.Coiffe1-2"),
			 popup: $.t("c:Magazines.desc.Coiffe1") + $.t(" | ") + $.t("c:Magazines.desc.Coiffe1-2"),
		 },{
		 coords: [[14.264,-7.031]],
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
		// {
		// coords: [[-72.971,-89.736]],
			// label: $.t("Master Lock - Safe"),
			// popup: $.t("Fallons Department Store on the Groundfloor | nothing special for me")
		// },{
			// coords: [[-64.849,-84.507]],
			// label: $.t("Master Lock - Door"),
			// popup: $.t("Boston Public Library - 2nd Floor northwest corner of library.")
		// },{
			// coords: [[-55.329,-67.632]],
			// label: $.t("Master Lock - Safe"),
			// popup: $.t("SafeCabot House Basement under the Bed ")
		// },{
			// coords: [[-79.047,-53.086]],
			// label: $.t("Master Lock - Door"),
			// popup: $.t("Poseidon Energy")
		// },{
			// coords: [[-82.743,-128.364]],
			// label: $.t("Master Lock - Safe"),
			// popup: $.t('Below the Skylanes 1665 Wreak are two hidden Compartments with a Masterlock (maybe with 2x Gauss Rifles) [<a href="http://i.imgur.com/1k84foZ.jpg" target="_blank">Image</a>]')
		// },{
			// coords: [[-36.031,-132.979]],
			// label: $.t("Master Lock - Door"),
			// popup: $.t("Gift Shop / Walden Pond / Door)")
		// },{
			// coords: [[-43.993,-40.518]],
			// label: $.t("Master Lock - Door"),
			// popup: $.t("top Floor of Build just near Revere Beach Station")
		// },{
			// coords: [[-62.935,-75.938]],
			// label: $.t("Master Lock - Safe"),
			// popup: $.t("inside Vault")
		// },{
			// coords: [[-62.795,-152.358]],
			// label: $.t("Master Lock - Door"),
			// popup: $.t("Bottem Level Boston Mayoral Shelter")
		// },{
			// coords: [[ -67.991,-145.854]],
			// label: $.t("Master Lock - Door"),
			// popup: $.t("inside Poseidon Reservoir at the Basement")
		// },{
			// coords: [[-51.781,-69.917]],
			// label: $.t("Master Lock - Safe"),
			// popup: $.t("inside Bunker Hill, at the Bar")
		// },{
			// coords: [[-70.319,-73.169]],
			// label: $.t("Master Lock - Safe"),
			// popup: $.t("South Boston Military Checkpoint ")
		// },{
			// coords: [[-34.016,-117.77]],
			// label: $.t("Master Lock"),
			// popup: $.t("Truck near the Diner")
		// }
		],

	//Nuke or Fusion Cores
	nukefusion: [],
	// -77.906,-159.829 at Bottom
	// -64.849,-100.767 South Boston Military Checkpoint
	// Generator before bobblehead at the bottom -27.372,-24.346  : Longneck Lukowski's Cannery


	// Live & Love
		herbalist: [{
		 coords: [[1.845,-108.809]],
			 label: $.t("c:Magazines.label.Live") + $.t(" 1/9 - ") + $.t("c:Magazines.label.Live-1-9"),
			 popup: $.t("c:Magazines.desc.Live-1") + $.t(" | ") + $.t("c:Magazines.desc.Live-1-9"),
		 },{
		 coords: [[32.25,31.992]],
			 label: $.t("c:Magazines.label.Live") + $.t(" 2/9 - ") + $.t("c:Magazines.label.Live-2-9"),
			 popup: $.t("c:Magazines.desc.Live-2") + $.t(" | ") + $.t("c:Magazines.desc.Live-2-9"),
		 },{
		 coords: [[-49.153,-70.225]],
			 label: $.t("c:Magazines.label.Live") + $.t(" 3/9 - ") + $.t("c:Magazines.label.Live-3-9"),
			 popup: $.t("c:Magazines.desc.Live-3") + $.t(" | ") + $.t("c:Magazines.desc.Live-3-9"),
		 },{
		 coords: [[21.125,-62.578]],
			 label: $.t("c:Magazines.label.Live") + $.t(" 4/9 - ") + $.t("c:Magazines.label.Live-4-9"),
			 popup: $.t("c:Magazines.desc.Live-4") + $.t(" | ") + $.t("c:Magazines.desc.Live-4-9"),
		 },{
		 coords: [[32.25,31.992]],
			 label: $.t("c:Magazines.label.Live") + $.t(" 5/9 - ") + $.t("c:Magazines.label.Live-5-9"),
			 popup: $.t("c:Magazines.desc.Live-5") + $.t(" | ") + $.t("c:Magazines.desc.Live-5-9"),
		 },{
		 coords: [[-26.195,-41.133]],
			 label: $.t("c:Magazines.label.Live") + $.t(" 6/9 - ") + $.t("c:Magazines.label.Live-6-9"),
			 popup: $.t("c:Magazines.desc.Live-6") + $.t(" | ") + $.t("c:Magazines.desc.Live-6-9"),
		 },{
		 coords: [[2.372,-0.088]],
			 label: $.t("c:Magazines.label.Live") + $.t(" 7/9 - ") + $.t("c:Magazines.label.Live-7-9"),
			 popup: $.t("c:Magazines.desc.Live-7") + $.t(" | ") + $.t("c:Magazines.desc.Live-7-9"),
		 },{
		 coords: [[-5.878,-8.701]],
			 label: $.t("c:Magazines.label.Live") + $.t(" 8/9 - ") + $.t("c:Magazines.label.Live-8-9"),
			 popup: $.t("c:Magazines.desc.Live-8") + $.t(" | ") + $.t("c:Magazines.desc.Live-8-9"),
		 },{
		 coords: [[-6.053,-6.064]],
			 label: $.t("c:Magazines.label.Live") + $.t(" 9/9 - ") + $.t("c:Magazines.label.Live-9-9"),
			 popup: $.t("c:Magazines.desc.Live-9") + $.t(" | ") + $.t("c:Magazines.desc.Live-9-9"),
		 }],

	// Settlements
	hidden: [
	 {
		 coords: [[69.225,-110.039]],
			 label: $.t("c:settlements.label.Sanctuary"),
			 popup: $.t("c:settlements.desc.Sanctuary")
		 },{
		 coords: [[65.109,-100.635]],
		 label: $.t("c:settlements.label.RedRocket"),
		 popup: $.t("c:settlements.desc.RedRocket")
		 },{
		 coords: [[-53.226,50.449]],
		 label: $.t("c:settlements.label.Spectacle"),
		 popup: $.t("c:settlements.desc.Spectacle")
		},{
		 coords: [[-76.393,-41.484]],
		 label: $.t("c:settlements.label.WarwickHomestead"),
		 popup: $.t("c:settlements.desc.quest")
  },{
			 coords: [[59.445,-110.215]],
			 label: $.t("c:settlements.label.AbernathyFarm"),
			 popup: $.t("c:settlements.desc.AbernathyFarm")
		 },{
		 coords: [[-0.176,23.730]],
			 label: $.t("c:settlements.label.Airport"),
			 popup: $.t("c:settlements.desc.Airport")
		 },{
		 coords: [[18.979,-10.547]],
			 label: $.t("c:settlements.label.Bunker"),
			 popup: $.t("c:settlements.desc.Bunker")
		 },{
		 coords: [[-42.294,21.973]],
			 label: $.t("c:settlements.label.Castle"),
			 popup: $.t("c:settlements.desc.Castle")
		 },{
		 coords: [[68.689,45.967]],
			 label: $.t("c:settlements.label.Coastal"),
			 popup: $.t("c:settlements.desc.Coastal")
		 },{
		 coords: [[28.768,1.230]],
			 label: $.t("c:settlements.label.County"),
			 popup: $.t("c:settlements.desc.quest")
		 },{
		 coords: [[46.134,-35.771]],
			 label: $.t("c:settlements.label.Covenant"),
			 popup: $.t("c:settlements.desc.Covenant")
		 },{
		 coords: [[39.028,67.500]],
			 label: $.t("c:settlements.label.Croup"),
			 popup: $.t("c:settlements.desc.Croup")
		 },{
		 coords: [[-52.803,-60.293]],
			 label: $.t("c:settlements.label.Egret"),
			 popup: $.t("c:settlements.desc.Egret")
		 },{
		 coords: [[46.256,25.488]],
			 label: $.t("c:settlements.label.Finch"),
			 popup: $.t("c:settlements.desc.Finch")
		 },{
		 coords: [[19.560,-81.914]],
			 label: $.t("c:settlements.label.Graygarden"),
			 popup: $.t("c:settlements.desc.Graygarden")
		 },{
		 coords: [[58.448,1.7585]],
			 label: $.t("c:settlements.label.Greentop"),
			 popup: $.t("c:settlements.desc.quest")
		 },{
		 coords: [[-21.371,-52.559]],
			 label: $.t("c:settlements.label.Hangman"),
			 popup: $.t("c:settlements.desc.Hangman")
		 },{
		 coords: [[-23.322,-40.430]],
			 label: $.t("c:settlements.label.Diamond"),
			 popup: $.t("c:settlements.desc.Diamond")
		 },{
		 coords: [[-52.429,-18.457]],
			 label: $.t("c:settlements.label.Jamaica"),
			 popup: $.t("c:settlements.desc.Jamaica")
		 },{
		 coords: [[55.578,65.303]],
			 label: $.t("c:settlements.label.KingsportLighthouse"),
			 popup: $.t("c:settlements.desc.KingsportLighthouse")
		 },{
		 coords: [[-69.809,-27.510]],
			 label: $.t("c:settlements.label.Murkwater"),
			 popup: $.t("c:settlements.desc.Murkwater")
		 },{
		 coords: [[5.441,39.287]],
			 label: $.t("c:settlements.label.Nordhagen"),
			 popup: $.t("c:settlements.desc.quest")
		 },{
		 coords: [[-2.811,-75.850]],
			 label: $.t("c:settlements.label.Oberland"),
			 popup: $.t("c:settlements.desc.quest")
		 },{
		 coords: [[70.700,-37.090]],
			 label: $.t("c:settlements.label.Zimonja"),
			 popup: $.t("c:settlements.desc.Zimonja")
		 },{
		 coords: [[-68.560,-66.094]],
			 label: $.t("c:settlements.label.Somerville"),
			 popup: $.t("c:settlements.desc.quest")
		 },{
		 coords: [[52.268,-68.027]],
			 label: $.t("c:settlements.label.Starlight"),
			 popup: $.t("c:settlements.desc.Starlight")
		 },{
		 coords: [[43.644,-120.146]],
			 label: $.t("c:settlements.label.Sunshine"),
			 popup: $.t("c:settlements.desc.Sunshine")
		 },{
		 coords: [[51.509,-20.654]],
			 label: $.t("c:settlements.label.Taffington"),
			 popup: $.t("c:settlements.desc.Taffington")
		 },{
		 coords: [[67.809,-55.195]],
			 label: $.t("c:settlements.label.Tenpines"),
			 popup: $.t("c:settlements.desc.Tenpines")
		 },{
		 coords: [[61.016,21.094]],
			 label: $.t("c:settlements.label.Slog"),
			 popup: $.t("c:settlements.desc.quest")
		 }
		],

	// Wasteland Survival Guide
		magwasteland: [
		// {
		// coords: [[-64.168,-71.367]],
			// label: $.t("c:Magazines.label.Wasteland") + $.t(" 1/9 - ") + $.t("c:Magazines.label.Wasteland-1-9"),
			// popup: $.t("c:Magazines.desc.Wasteland-1") + $.t(" | ") + $.t("c:Magazines.desc.Wasteland-1-9"),
		// },{
		// coords: [[-27.059,-127.969]],
			// label: $.t("c:Magazines.label.Wasteland") + $.t(" 2/9 - ") + $.t("c:Magazines.label.Wasteland-2-9"),
			// popup: $.t("c:Magazines.desc.Wasteland-2") + $.t(" | ") + $.t("c:Magazines.desc.Wasteland-2-9"),
		// }
		],

	// Picket Fences (5/122)
		monsterden: [{
		 coords: [[6.315,-75.674]],
			 label: $.t("c:Magazines.label.Fences") + $.t(" 1/5 - ") + $.t("c:Magazines.label.Fences-1-5"),
			 popup: $.t("c:Magazines.desc.Fences-1") + $.t(" | ") + $.t("c:Magazines.desc.Fences-1-5"),
		 },{
		 coords: [[-32.250,-52.734]],
			 label: $.t("c:Magazines.label.Fences") + $.t(" 2/5 - ") + $.t("c:Magazines.label.Fences-2-5"),
			 popup: $.t("c:Magazines.desc.Fences-2") + $.t(" | ") + $.t("c:Magazines.desc.Fences-2-5"),
		 },{
		 coords: [[52.483,28.037]],
			 label: $.t("c:Magazines.label.Fences") + $.t(" 3/5 - ") + $.t("c:Magazines.label.Fences-3-5"),
			 popup: $.t("c:Magazines.desc.Fences-3") + $.t(" | ") + $.t("c:Magazines.desc.Fences-3-5"),
		 },{
		 coords: [[-22.837,-13.447]],
			 label: $.t("c:Magazines.label.Fences") + $.t(" 4/5 - ") + $.t("c:Magazines.label.Fences-4-5"),
			 popup: $.t("c:Magazines.desc.Fences-4") + $.t(" | ") + $.t("c:Magazines.desc.Fences-5-5"),
		 },{
		 coords: [[1.318,-95.625]],
			 label: $.t("c:Magazines.label.Fences") + $.t(" 5/5 - ") + $.t("c:Magazines.label.Fences-5-5"),
			 popup: $.t("c:Magazines.desc.Fences-5") + $.t(" | ") + $.t("c:Magazines.desc.Fences-5-5"),
		 }],

	// Unique Weapons
	// Junk Jet -48.458,-128.936
		monsternest: [
		// {
		// coords: [[-48.458,-128.936]],
			// label: $.t("c:Magazines.label.Weapons1"),
			// popup: $.t("c:Magazines.desc.Weapons1"),
		// },{
		// coords: [[-58.448,-110.918]],
			// label: $.t("c:Magazines.label.Weapons2"),
			// popup: $.t("c:Magazines.desc.Weapons2"),
		// },{
		// coords: [[-73.252,-64.248]],
			// label: $.t("c:Magazines.label.Weapons3"),
			// popup: $.t("c:Magazines.desc.Weapons3"),
		// },{
		// coords: [[-3.689,-145.635]],
			// label: $.t("c:Magazines.label.Weapons4"),
			// popup: $.t("c:Magazines.desc.Weapons4"),
		// }
		],

		notice: [],

	// Unstoppables 5x
		pid: [{
			coords: [[-36.950,-78.223]],
			label: $.t("c:Magazines.label.Unstoppables") + $.t(" 1/5 - ") + $.t("c:Magazines.label.Unstoppables-1-5"),
			popup: $.t("c:Magazines.desc.Unstoppables") + $.t(" | ") + $.t("c:Magazines.desc.Unstoppables-1-5"),
		},{
			coords: [[-53.801,-31.465]],
			label: $.t("c:Magazines.label.Unstoppables") + $.t(" 2/5 - ") + $.t("c:Magazines.label.Unstoppables-2-5"),
			popup: $.t("c:Magazines.desc.Unstoppables") + $.t(" | ") + $.t("c:Magazines.desc.Unstoppables-2-5"),
		},{
			 coords: [[-65.109,-26.016]],
			 label: $.t("c:Magazines.label.Unstoppables") + $.t(" 3/5 - ") + $.t("c:Magazines.label.Unstoppables-3-5"),
			popup: $.t("c:Magazines.desc.Unstoppables") + $.t(" | ") + $.t("c:Magazines.desc.Unstoppables-3-5"),
		},{
			 coords: [[-16.552,-23.291]],
			 label: $.t("c:Magazines.label.Unstoppables") + $.t(" 5/5 - ") + $.t("c:Magazines.label.Unstoppables-4-5"),
			popup: $.t("c:Magazines.desc.Unstoppables") + $.t(" | ") + $.t("c:Magazines.desc.Unstoppables-4-5"),
		},{
			 coords: [[-28.150,-13.447]],
			 label: $.t("c:Magazines.label.Unstoppables") + $.t(" 5/5 - ") + $.t("c:Magazines.label.Unstoppables-5-5"),
			popup: $.t("c:Magazines.desc.Unstoppables") + $.t(" | ") + $.t("c:Magazines.desc.Unstoppables-5-5"),
		}],


	// Place of Power
		pop: [],

	// Point of Interest
		poi: [
		 {
		 coords: [[-53.226,-40.605]],
			 label: $.t("c:robotmodelkits.label.Robot") + $.t(" 1/8"),
			 popup: $.t('<a href="https:wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Eyebot Model Kit</a> | ')+ $.t("c:robotmodelkits.desc.Robot1"),
		 },{
		 coords: [[-79.432,-118.652]],
			 label: $.t("c:robotmodelkits.label.Robot") + $.t(" 2/8"),
			 popup: $.t('<a href="https:wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">SentryBot Model Kit</a> | ')+ $.t("c:robotmodelkits.desc.Robot2"),
		 },{
		 coords: [[28.304,28.652]],
			 label: $.t("c:robotmodelkits.label.Robot") + $.t(" 3/8"),
			 popup: $.t('<a href="https:wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Protectron Model Kit</a> | ')+ $.t("c:robotmodelkits.desc.Robot3"),
		 },{
		 coords: [[-14.264,-130.078]],
			 label: $.t("c:robotmodelkits.label.Robot") + $.t(" 4/8"),
			 popup: $.t('<a href="https:wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Mr. Gutsy Model Kit</a> | ')+ $.t("c:robotmodelkits.desc.Robot4"),
		 },{
		 coords: [[-38.479,-109.512]],
			 label: $.t("c:robotmodelkits.label.Robot") + $.t(" 5/8"),
			 popup: $.t('<a href="https:wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Mr. Handy Model Kit</a> | ')+ $.t("c:robotmodelkits.desc.Robot5"),
		 },{
		 coords: [[71.329,61.699]],
				 label: $.t("c:robotmodelkits.label.Robot") + $.t(" 6/8"),
			 popup: $.t('<a href="https:wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Robot Model Kit Parts</a> | ')+ $.t("c:robotmodelkits.desc.Robot6"),
		 },{
		 coords: [[-35.604,-119.268]],
			 label: $.t("c:robotmodelkits.label.Robot") + $.t(" 7/8"),
			 popup: $.t('<a href="https:wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Robot Model Kit Parts</a> | ')+ $.t("c:robotmodelkits.desc.Robot7"),
		 },{
		 coords: [[63.313,42.803]],
			 label: $.t("c:robotmodelkits.label.Robot") + $.t(" 8/8"),
			 popup: $.t('<a href="https:wiiare.in/portfolio-type/fallout-4-robot-model-kit-locations/" target="_blank">Robot Model Kit Parts</a> | ')+ $.t("c:robotmodelkits.desc.Robot8"),
		 }
		],

	// Tumblers Today
		shopkeeper: [],
//label: $.t("c:Magazines.label.Tumblers") + $.t(" 1/5 - ") + $.t("c:Magazines.label.Tumblers-1-5"),
//popup: $.t("c:Magazines.desc.Tumblers-1-5")

	// Mag: RobCo Fun 5x
		signpost: [ {
	coords: [[70.583,-127.09]],
	label: $.t("c:Magazines.label.RobCo") + $.t(" 1/5 - ") + $.t("c:Magazines.label.RobCo-1-5"),
	popup: $.t("c:Magazines.desc.RobCo") + $.t(" | ") + $.t("c:Magazines.desc.RobCo-1-5")
	},{
	coords: [[59.579,-84.287]],
	label: $.t("c:Magazines.label.RobCo") + $.t(" 2/5 - ") + $.t("c:Magazines.label.RobCo-2-5"),
	popup: $.t("c:Magazines.desc.RobCo") + $.t(" | ") + $.t("c:Magazines.desc.RobCo-2-5")
	},{
	coords: [[-7.798,-124.717]],
	 label: $.t("c:Magazines.label.RobCo") + $.t(" 3/5 - ") + $.t("c:Magazines.label.RobCo-3-5"),
	 popup: $.t("c:Magazines.desc.RobCo") + $.t(" | ") + $.t("c:Magazines.desc.RobCo-3-5")
	},{
	 coords: [[-26.116,-44.121]],
		label: $.t("c:Magazines.label.RobCo") + $.t(" 4/5 - ") + $.t("c:Magazines.label.RobCo-4-5"),
		popup: $.t("c:Magazines.desc.RobCo") + $.t(" | ") + $.t("c:Magazines.desc.RobCo-4-5")
	},{
		coords: [[-9.362,-10.723]],
		 label: $.t("c:Magazines.label.RobCo") + $.t(" 5/5 - ") + $.t("c:Magazines.label.RobCo-5-5"),
		 popup: $.t("c:Magazines.desc.RobCo") + $.t(" | ") + $.t("c:Magazines.desc.RobCo-5-5")

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
