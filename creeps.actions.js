//Actions for everyone

function searchingForSources(creep){
    var source = creep.pos.findClosestByPath(FIND_SOURCES);
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
        creep.movpppeTo(target, {
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
                    stroke: '#c0392b',
                    lineStyle: 'dashed'
                }
            });
        }
    } else {
        if (creep.room.storage) {
            if(creep.transfer(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.storage, {
                    visualizePathStyle:{
                        stroke: '#c0392b',
                        lineStyle: 'dashed'
                    }
                });
            }
            
        }
    }
};



//Prole actions


//Builder actions

function buildConstructionSite(creep, structureType){
    var target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES, {
                                             filter: (struct) => struct.structureType = structureType
    });

    if(target && creep.build(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target,
                     {
                         visualizePathStyle:
                         {
                             stroke: '#ffffff'
                         }
                     });


    };

    function buildRoads(creep){

        return buildConstructionSite(creep, STRUCTURE_ROAD);

    };

//Repairman actions

    function repairRoad(creep){
        if(creep.memory.repairing && creep.carry.energy == 0){
            creep.memory.repairing = false;
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity){
            creep.memory.repairing = true;
        }

        if(creep.memory.repairing){
            var roadToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_ROAD
                                        && structure.hits < (0.5 * structure.hitsMax))
            });

            if(roadToRepair && creep.repair(roadToRepair) == ERR_NOT_IN_RANGE){
                creep.moveTo(roadToRepair,
                             {
                                 visualizePathStyle:
                                 {stroke: '#9E9E9E'}
                             });
            }
        }
        else{
            actions.searchingForSources(creep);
        }
    };


    function repairWall(creep){
        if(creep.memory.repairing && creep.carry.energy == 0){
            creep.memory.repairing = false;
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }

        if(creep.memory.repairing) {
            var wallToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_WALL
                                        && structure.hits < 50000)
            });
            if(wallToRepair && creep.repair(wallToRepair) == ERR_NOT_IN_RANGE){
                creep.moveTo(wallToRepair,
                                 {
                                     visualizePathstyle:
                                  {stroke: '#616161'}
                                 });
                }
            
        }
        else{
            actions.searchingForSources(creep);
        }
    };


    function repairContainer(creep){
        if(creep.memory.repairing && creep.carry.energy == 0){
            creep.memory.repairing = false;
        }

        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }

        if(creep.memory.repairing) {
            var containerToRepair = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_CONTAINER
                                        && structure.hits < (0.75 *structure.hitsMax))
            });
            if(containerToRepair && creep.repair(containerToRepair)){
                    creep.moveTo(containerToRepair,
                                 {
                                     visualizePathstyle:
                                  {stroke: '#ffffff'}
                                 });
            }
        }
        else{
            actions.searchingForSources(creep);
        }
    };
    


//Harvester actions



//Finder actions



//Courier actions



module.exports= {
    searchingForSources,
    harvestingFromSpecifiedPlace,
    withdrawFromEnergyStructure,
    transferingEnergy,
    leavingEnergy,
    buildConstructionSite,
    buildRoads,
    repairRoad,
    repairWall,
    repairContainer
}


