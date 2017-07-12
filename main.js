var roleProle = require('role.prole');
var roleUpgrader = require('role.upgrader');
var roleHarvester = require('role.harvester');
var roleFinder = require('role.finder');
var roleCourier = require('role.courier');
var roleBuilder = require('role.builder');
const bodies = require('creeps.bodies.js');
const roles = require('creeps.roles');


module.exports.loop = function () {
    
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'Upgrader');
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'Harvester');
    var proles = _.filter(Game.creeps, (creep) => creep.memory.role == "Prole");
    
    
    if(upgraders.length <2){
        var newUpgrader = Game.spawns.Spawn1.createCreep(require('creeps.bodies.js').Upgrader , {role: 'Upgrader'});
    }
    
    if(harvesters.length <3){
        var newHarvesterer = Game.spawns.Spawn1.createCreep(require('creeps.bodies.js').Harvester , {role: 'Harvester'});
    }
    
    if(proles.length <1){
        var newProle = Game.spawns.Spawn1.createCreep(require('creeps.bodies.js').Prole , {role: 'Prole'});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        

        
        for (var role in roles) {
            if (creep.memory.role == role) {
                roles[role].behavior.run(creep);
                creep.room.visual.text(role, creep.pos);


                //var names = _.filter(Game.creeps, (creep) => creep.memory.role == role);
                //if(names.length < 2){
                  //  var newCreep = Game.spawns.Spawn1.createCreep(require('creeps.bodies.js').role , {role: {role}});
               // }
            }
        }
    }


}
