var roleBuilder = {


    run: function(creep) {
	      if(creep.carry.energy < creep.carryCapacity) {
            
            //specified source
            var source = creep.room.lookForAt(LOOK_SOURCES, 4, 12);
            if(source != null){
                if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
                
         else {
               const target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                if(target) {
                 if(creep.build(target) == ERR_NOT_IN_RANGE) {
                   creep.moveTo(target), {visualizePathStyle: {stroke: '#FF9CA3'}};
                        }
                    }
                }
            }
	      }
    }
};

    module.exports = roleBuilder;
