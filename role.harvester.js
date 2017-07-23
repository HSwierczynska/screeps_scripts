const actions = require('creeps.actions');

var roleHarvester = {

    run: function(creep){

        if(creep.carry.energy < creep.carryCapacity){
            actions.searchingForSources(creep);
        }
        else{
            creep.drop(RESOURCE_ENERGY);
        }
    }
};

module.exports= roleHarvester;
