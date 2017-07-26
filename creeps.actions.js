function searchingForSources(creep){
    var source = creep.pos.findClosestByRange(FIND_SOURCES);
    if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
      }
 };



function specifiedSource(creep, posX, posY){
    var source = creep.room.lookForAt(LOOK_SOURCES, posX, posY);
    if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source[0]);
    }
};




function dumpEnergy(creep){
    var containerTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: structure => {
            return structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] < structure.storeCapacity
        }
    });
    if(creep.transfer(containerTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
        creep.moveTo(containerTarget);
    }
};    





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
            return structure.structureType == structureType && structure.store[RESOURCE_ENERGY] != 0 && ((structure.store[RESOURCE_ENERGY] < structure.storeCapacity) || (structure.store[RESOURCE_ENERGY] = structure.storeCapacity))
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
            return(structure.structureType == structureType) && structure.energy < structure.energyCapacity
        }
    });
    if(target){
        if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(target);
        }
    }
};


function transferingToSpawn(creep){
    return (transferingEnergy(creep, STRUCTURE_SPAWN));
};


function transferingToExtension(creep){
    return (transferingEnergy(creep, STRUCTURE_EXTENSION));
};

function transferingToTower(creep){
    return (transferingEnergy(creep, STRUCTURE_TOWER));
};




module.exports= {
    searchingForSources,
    specifiedSource,
    dumpEnergy,
    collectDroppedEnergy,
    withdrawFromEnergyStructure,
    withdrawFromContainer,
    transferingEnergy,
    transferingToSpawn,
    transferingToExtension,
    transferingToTower
}
