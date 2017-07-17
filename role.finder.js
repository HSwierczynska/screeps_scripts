const actions = require('creeps.actions');

var roleFinder = {

    run: function(creep){

        if(creep.carry.energy == 0){
            actions.collectDroppedEnergy(creep);
        }
        
        else {
            if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(Game.spawns.Spawn1);
            }
            
        }

    }
};

module.exports= roleFinder;


