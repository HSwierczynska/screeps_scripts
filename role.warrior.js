const actions = require('creeps.actions');

var roleWarrior ={
    run: function(creep){
        if(creep.owner != 'lord_joey_the_child_king' && creep.owner != 'WaltonSimons'){
            const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(target) {
                if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
    }
}

module.exports = roleWarrior;
