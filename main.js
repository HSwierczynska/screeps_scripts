require('management');


const bodies = require('creeps.bodies');
const roles = require ('creeps.roles');

module.exports.loop = function(){
    management.mainAutospawn('Harvester', 3);
    management.mainAutospawn('Courier', 3);
    management.mainAutospawn('Finder', 3);
    management.mainAutospawn('Upgrader', 4);
    management.mainAutospawn('Prole', 3);
    management.mainAutospawn('Builder', 4);


    for(var name in Game.creeps){
        var creep = Game.creeps[name];

        for(var role in roles){
            if(creep.memory.role == role){
                roles[role].behavior.run(creep);
                creep.room.visual.text(role, creep.pos);
            }
        }
    }
}
