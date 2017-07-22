const actions = require('creeps.actions');

var roleRepairman ={
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            actions.searchingForSources(creep);

        }
        else{
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < (structure.hitsMax / 2)
            });
            if(closestDamagedStructure) {
                if(creep.repair(closestDamagedStructure) == ERR_NOT_IN_RANGE){
                creep.moveTo(closestDamagedStructure,
                             {visualizePathstyle: {stroke: '#ffffff'}})};
              }
        }
};


module.exports = roleRepairman;
