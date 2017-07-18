const actions = require('creeps.actions');

var roleFinder = {

    run: function(creep){

        if(creep.carry.energy == 0){
            actions.collectDroppedEnergy(creep);
        }
        
        else {
            var containerTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: structure => {
                    return structure.structureType == STRUCTURE_CONTAINER
                }
            });
            if(creep.transfer(STRUCTURE_CONTAINER, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(containerTarget);
            }
            
        }

    }
};

module.exports= roleFinder;


