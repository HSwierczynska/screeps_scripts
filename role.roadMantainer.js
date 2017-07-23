const actions = require('creeps.actions');

var roleRoadMantainer ={
    run: function(creep) {

        if(creep.memory.repairing && creep.carry.energy == 0){
            creep.memory.repairing = false;
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }


        if(creep.memory.repairing) {
            
            var closestDamagedWall = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => STRUCTURE_ROAD && structure.hits < (0.75 *structure.hitsMax)
            });
            if(closestDamagedWall){
                if(creep.repair(closestDamagedWall) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestDamagedWall,
                                 {visualizePathstyle: {stroke: '#ffffff'}})};
            }
        }
        else{
            actions.searchingForSources(creep);
        }
    }    
}


module.exports = roleRoadMantainer;

