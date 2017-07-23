function searchingForSources(creep){
    var source = creep.pos.findClosestByPath(FIND_SOURCES);
    if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
      }
 };





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
};




function transferingEnergy(creep, structureType){
    var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
            return(structure.structureType == structureType)
        }
    });
    if(target){
        if(creep.transfer(target[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(target[0]);
        }
    }
};


function transferingToSpawn(creep){
    return transferingEnergy(creep, STRUCTURE_SPAWN)
};


function transferingToExtension(creep){
    return transferingEnergy(creep, STRUCTURE_EXTENSION)
};






module.exports= {
    searchingForSources,
    dumpEnergy,
    collectDroppedEnergy,
    withdrawFromEnergyStructure,
    withdrawFromContainer,
    transferingEnergy,
    transferingToSpawn,
    transferingToExtension
};
