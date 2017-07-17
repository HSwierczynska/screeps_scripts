const actions = require('creeps.actions');

var roleHarvester = {

    run: function(creep){

        if(creep.carry.energy < creep.carryCapacity){
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        }
        else{
            actions.dumpEnergy(creep);
        }
    }
};

module.exports= roleHarvester;
