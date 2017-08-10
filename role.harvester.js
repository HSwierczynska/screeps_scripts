const actions = require('creeps.actions');

var roleHarvester = {


    run: function(creep){
        if(creep.carry.energy == 0){
            actions.harvestingFromSpecifiedPlace(creep, posX, posY);
        }

        else{
            creep.drop(RESOURCE_ENERGY);
        }
    }
};

module.exports= roleHarvester;
