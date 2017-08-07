//Actions for everyone

function searchingForSources(creep){
    var source = creep.pos.findClosestByPath(FIND_SOURCES)  ;
    if(creep.harvest(source) == ERR_NOT_IN_RANGE){
        creep.moveTp(source,
                     {visualizePathStyle:
                      {stroke: '#FFB300'}});
    }
};




function harvestingFromSpecifiedPlace(creep, posX, posY){
    var source = creep.room.lookForAt(LOOK_SOURCES, posX, posY);
    if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source[0]);
    }

};



function withdrawFromEnergyStructure(creep, structureType){
    var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: structure => {
            return structure.structureType == structureType &&
                structure.store[RESOURCE_ENERGY] > 0
        }
    });

    if (target && creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target, {
            visualizePathStyle: {
                stroke: '#16a085'
            }
        });
    }

    if(target){
        return true;
    }else{
        return false;
    }
};



//Transfering to spawn, extensions, containers, storage and towers

function transferingEnergy(creep, structureType){
    var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
            if (structure.store) {
                return (structure.structureType == structureType) && structure.store < structure.storeCapacity
            } else {
                return (structure.structureType == structureType) && structure.energy < structure.energyCapacity
            }   
        }
    });

    if(target && creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
        creep.moveTo(target, {
            visualizePathStyle: {
                stroke: '#d35400'
            }
        });
    }

};


//Dump energy at container or storage
function leavingEnergy(creep){

    var unfilledContainers = creep.room.find(FIND_STRUCTURES, {
        filter: struct => struct.structureType == STRUCTURE_CONTAINER && struct.store[RESOURCE_ENERGY] < struct.storeCapacity 
    });
    if (unfilledContainers.length > 0) {
        let target = creep.pos.findClosestByPath(unfilledContainers);
        if(target && creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            creep.moveTo(target, {
                visualizePathStyle: {
                    stroke: '#c0392b'
                }
            });
        }
    } else {
        if (creep.room.storage) {
            
        }
    }
    
}



//Prole actions


//Builder actions


//Repairman actions


//Harvester actions



//Finder actions



//Courier actions




