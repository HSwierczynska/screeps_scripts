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
            actions.specifiedSource(creep, 39, 16);
        }
        
        
        
        //Road
        if(creep.memory.repairing && creep.carry.energy == 0){
            creep.memory.repairing = false;
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }


        if(creep.memory.repairing) {
            
            var closestDamagedRoad = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_ROAD && structure.hits < (0.5 *structure.hitsMax)
            });
            if(closestDamagedRoad){
                if(creep.repair(closestDamagedRoad) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestDamagedRoad,
                                 {visualizePathstyle: {stroke: '#ffffff'}})};
            }
        }
        else{
            actions.withdrawFromContainer(creep);
        }



        //Container

        if(creep.memory.repairing && creep.carry.energy == 0){
            creep.memory.repairing = false;
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }


        if(creep.memory.repairing) {
            
            var closestDamagedContainer = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_CONTAINER && structure.hits < (0.75 *structure.hitsMax)
            });
            if(closestDamagedContainer){
                if(creep.repair(closestDamagedContainer) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestDamagedContainer,
                                 {visualizePathstyle: {stroke: '#ffffff'}})};
            }
        }
        else{
            actions.withdrawFromContainer(creep);
        }
        
        
    }    
}


module.exports = roleRepairman;
