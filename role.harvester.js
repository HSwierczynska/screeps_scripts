const actions = require('creeps.actions');

var roleHarvester = {


    run: function(creep){
        if(creep.carry.energy == 0){
            var otherHarvester = _.filter(Game.creeps, (creep) => creep.memory.role == 'Harvester');
            if(otherHarvester.length == 0){
                actions.specifiedSource(creep, 22, 12);
            }
            else{
                actions.specifiedSource(creep, 34, 15);
            }
        }
        else{
            creep.drop(RESOURCE_ENERGY);
        }
    }
};

module.exports= roleHarvester;
