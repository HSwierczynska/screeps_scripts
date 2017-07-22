function withdrawFromNearestEnergyStructure(creep, structureType) {
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

    if (target) {
        return true;
    } else {
        return false;
    }

}
