var roleBuilder ={


    run: function(creep) {

        // harvest energy from the specified source
        if(creep.carry.energy < creep.carryCapacity){
            var source = creep.room.lookForAt(LOOK_SOURCES, 4, 12);
            if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(source[0], {visualizePathStyle: { stroke: '#ffaa00'}});
            }
            else {
                var target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
                if(target){
                    if(creep.build(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(target, {visualizePathStyle: {stroke: "#ffaa00"}});
                    }    
                }
            }
        }
    }
};

module.exports = roleBuilder;
