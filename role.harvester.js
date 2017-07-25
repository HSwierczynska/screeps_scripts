const actions = require('creeps.actions');
const bodies = require('creeps.bodies');

var roleHarvester = {

    //Najpierw sprawdza czy przy pierwszym jest creep, jesli nie-idzie tam, jesli tak-idzie do 2

    run: function(creep){
        if(creep.carry.energy == 0){
            actions.
        }
        else{
            creep.drop(RESOURCE_ENERGY);
        }
    }
};

module.exports= roleHarvester;
