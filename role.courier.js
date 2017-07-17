const actions = require('creeps.actions');

var roleCourier = {

    run: function(creep){
        if(creep.carry.energy<creep.carryCapacity){
            actions.withdrawFromContainer(creep);
        }
        else{
            actions.transferToSpawnOrExtension(creep);
        }
    }
};

module.exports= roleCourier;
