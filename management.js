function mainAutospawn(creepRole, amount){
    var creepWithGivenRole =  _.filter(Game.creeps, (creep) => creep.memory.role == creepRole);

    if(creepWithGivenRole > amount){
        var newCreep = Game.spawns.Spawn1.createCreep(require('creeps.bodies').creepRole , {role: creepRole});
    }   
};

module.exports={
    mainAutospawn
};
