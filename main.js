var roleProle = require('role.prole');
var roleUpgrader = require('role.upgrader');
var roleHarvester = require('role.harvester');
var roleFinder = require('role.finder');

const roles = require('creeps.roles');


module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        
        for (var role in roles) {
            if (creep.memory.role == role) {
                roles[role].behavior.run(creep);
                creep.room.visual.text(role, creep.pos);
            }
        }
    }

}
