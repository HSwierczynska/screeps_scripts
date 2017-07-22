function searchingForSources(creep){
    var source = creep.pos.findClosestByPath(FIND_SOURCES);
    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
    }
}







function dumpEnergy(creep){
	var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
		filter: structure =>{
		return structure.structureType ==  STRUCTURE_CONTAINER
		}
	});
	if(target && creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
		creep.moveTo(target, {visualizePathStyle : {stroke: '#607D8B'} } );
	};
}

 function dumpEnergy(creep){
	var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
		filter: structure =>{
		return structure.structureType ==  STRUCTURE_CONTAINER
		}
	});
	if(target && creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
		creep.moveTo(target, {visualizePathStyle : {stroke: '#607D8B'} } );
	};
}

    function collectDroppedEnergy(creep){
        var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
        if(droppedEnergy){
            if(creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE){
                creep.moveTo(droppedEnergy,
                             {visualizePathStyle: {stroke: '#AD1457'}});
            }
        }


    };

function withdrawFromEnergyStructure(creep, structureType){
    var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: structure => {
            return structure.structureType == structureType && structure.store[RESOURCE_ENERGY] > 150
        }
    });

    if (target && creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target, {
            visualizePathStyle: {
                stroke: '#ffff00'
            }
        });
    }

    if(target){
        return true;
    }else{
        return false;
    }
};


function withdrawFromContainer(creep){
    return withdrawFromEnergyStructure(creep, STRUCTURE_CONTAINER);
}



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
    searchingForSources,
    dumpEnergy,
    collectDroppedEnergy,
    withdrawFromEnergyStructure,
    withdrawFromContainer,
    transferToSpawnOrExtension
};
