const actions = require('creeps.actions');

var roleProle = {

    
    run: function(creep) {
        creep.moveTo(34,15);

	      if(creep.carry.energy < creep.carryCapacity) {
            actions.searchingForSources(creep);
        }
        
        else {
            actions.dumpEnergy(creep);
        }
    }
};





module.exports = roleProle;
