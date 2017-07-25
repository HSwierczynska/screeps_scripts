const actions = require('creeps.actions');

var roleRepairman ={
    run: function(creep) {

        if(creep.memory.repairing && creep.carry.energy == 0){
            creep.memory.repairing = false;
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }


        if(creep.memory.repairing) {
            
            var closestDamagedWall = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_WALL && structure.hits < 50000
            });
            if(closestDamagedWall){
                if(creep.repair(closestDamagedWall) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestDamagedWall,
                                 {visualizePathstyle: {stroke: '#ffffff'}})};
            }
        }
        else{
            actions.specifiedSource(creep, 34, 15);
        }
    }    
}


module.exports = roleRepairman;
