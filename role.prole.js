const actions = require('creeps.actions');

var roleProle = {

    
    run: function(creep) {
	      if(creep.carry.energy < creep.carryCapacity) {
            actions.searchingForSources(creep);
        }
        else {
            actions.transferingToSpawn(creep);
            }
        }
	  }
};

module.exports = roleProle;
