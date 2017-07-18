const actions = require('creeps.actions');

var roleFinder = {

    run: function(creep){

        if(creep.carry.energy == 0){
            actions.collectDroppedEnergy(creep);
        }
        
        else {
            if(creep.transfer(STRUCTURE_CONTAINER, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(STRUCTURE_CONTAINER);
            }
            
        }

    }
};

module.exports= roleFinder;


