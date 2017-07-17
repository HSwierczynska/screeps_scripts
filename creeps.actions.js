function dumpEnergy(creep){
	var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
		filter: structure =>{
		return structure.structureType ==  STRUCTURE_CONTAINER
		}
	});
	if(target && creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
		creep.moveTo(target, {visualizePathStyle : {stroke: '#607D8B'} } );
	};


    function collectDroppedEnergy(creep){
        var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
        id(droppedEnergy){
            if(creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE){
                creep.moveTo(droppedEnergy,
                             {visualizePathStyle: {stroke, '#AD1457'}});
            }
        }


    };

    function withdrawFromContainer(creep){
        var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: structure => {
                return structure.structureType == STRUCTURE_CONTAINER &&
                    structure.store[RESOURCE_ENERGY]>200
            } 
        });



    };



    function transferToSpawnOrExtension(creep){
        var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: structure => {
                return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN) &&
                        structure.energy < structure.energyCapacity;
            }
        });
        if(target.length > 0){
            if(creep.transfer(target[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(target[0], {visualizePathStyle: {stroke: '#C2185B'}});
            }
        }
    };

module.exports= {
    dumpEnergy,
    collectDroppedEnergy,
    withdrawFromContainer,
    transferToSpawnOrExtension
};
