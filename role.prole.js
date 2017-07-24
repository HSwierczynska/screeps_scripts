const actions = require('creeps.actions');

var roleProle = {

    
    run: function(creep) {
	      if(creep.carry.energy < creep.carryCapacity) {
            actions.searchingForSources(creep);
        }
        
        else {
            actions.transferingToSpawn(creep);
            if(Game.spawns.Spawn1.energy == Game.spawns.Spawn1.energyCapacity){
                actions.transferingToExtension(creep);
            }
        }
    }
};




module.exports = roleProle;
