const actions = require('creeps.actions');

var roleBuilder = {

    
    run: function(creep) {

	      if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            
	      }
	      if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	          creep.memory.building = true;
	          
	      }

	      if(creep.memory.building) {
	          actions.buildRoads(creep);
	      }
	      else {
	          actions.searchingForSources(creep);
        }
	      
    }
};

module.exports = roleBuilder;
