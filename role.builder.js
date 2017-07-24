const actions = require('creeps.actions');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        //Building the roads

	      if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            
	      }
	      if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	          creep.memory.building = true;
	          
	      }

	      if(creep.memory.building) {
	          var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	      }
	      else {
	          actions.searchingForSources(creep);
            }
	      

        // Reapiring the roads

        if(creep.memory.repairing && creep.carry.energy == 0){
            creep.memory.repairing = false;
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }


        if(creep.memory.repairing) {
            
            var closestDamagedRoad = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (STRUCTURE_ROAD && structure.hits < (0.5 *structure.hitsMax) && structure.structureType != STRUCTURE_WALL)
            });
            if(closestDamagedRoad){
                if(creep.repair(closestDamagedRoad) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestDamagedRoad,
                                 {visualizePathstyle: {stroke: '#ffffff'}})};
            }
        }
        else{
            actions.searchingForSources(creep);
        }


     }
};

module.exports = roleBuilder;
