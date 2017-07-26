const actions = require('creeps.actions');

var roleCourier = {

    run: function(creep){
        if(creep.carry.energy == 0){
            actions.withdrawFromContainer(creep);
        }
        else{
            actions.transferingToSpawn(creep);
            if(Game.spawns.Spawn1.energy == Game.spawns.Spawn1.energyCapacity){
                actions.transferingToExtension(creep);
            }
        }
    }
};

module.exports= roleCourier;
