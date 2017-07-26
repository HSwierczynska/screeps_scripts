const actions = require('creeps.actions');

var roleBuilder = {

    
    run: function(creep) {

        //Building the roads

	      if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            
	      }
	      if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	          creep.memory.building = true;
	          
	      }

	      if(creep.memory.building) {
	          var targets = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            if(targets) {
                if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	      }
	      else {
	          actions.withdrawFromContainer(creep);
        }
	      
    }
};

module.exports = roleBuilder;
