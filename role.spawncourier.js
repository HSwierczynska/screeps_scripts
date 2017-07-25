const actions = require('creeps.actions');

var roleSpawnCourier = {

    run: function(creep){
        if(creep.carry.energy< creep.carryCapacity){
            actions.withdrawFromContainer(creep);
        }
        else{
            actions.transferingToSpawn(creep);
            if(Game.spawns.Spawn1.energy == Game.spawns.Spawn1.energyCapacity || Game.spawns.Spawn1 == ERR_BUSY){
                actions.transferingToExtension(creep);
            }
        }
    }
};

module.exports= roleSpawnCourier;
