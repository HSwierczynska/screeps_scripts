require('management');


const bodies = require('creeps.bodies');
const roles = require('creeps.roles');


module.exports.loop = function() {

    //management.mainAutospawn('Prole', 3);

    var Proles =  _.filter(Game.creeps, (creep) => creep.memory.role == 'Prole');
    var Upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'Upgrader');
    var Builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'Builder');
    var Harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'Harvester');
    var Finders = _.filter(Game.creeps, (creep) => creep.memory.role == 'Finder');
    var Couriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'Courier');
    var SpawnCouriers = _.filter(Game.creeps, (creep) => creep.memory.role == 'SpawnCourier');
    var Repairmen = _.filter(Game.creeps, (creep) => creep.memory.role == 'Repairman');
    var Warriors = _.filter(Game.creeps, (creep) => creep.memory.role == 'Warrior');

    
    if(Warriors.length <4){
        var newWarrior = Game.spawns.Spawn1.createCreep(require('creeps.bodies').Warrior, {role:'Warrior'});
    }
    
       
    if(Upgraders.length <3){
        var newUpgrader = Game.spawns.Spawn1.createCreep(require('creeps.bodies').Upgrader, {role:'Upgrader'});
    }
    
    
    if(Repairmen.length <2){
        var newRepairman = Game.spawns.Spawn1.createCreep(require('creeps.bodies').Repairman, {role: 'Repairman'});
    }
    
    if(Proles.length < 0) {
        var newProle = Game.spawns.Spawn1.createCreep(require('creeps.bodies').Prole, {role: 'Prole'});
    }
     
    if(Builders.length <5){
        var newBuilder = Game.spawns.Spawn1.createCreep(require('creeps.bodies').Builder, {role: 'Builder'});
    }
    
    if(Harvesters.length <2){
        var newHarvester = Game.spawns.Spawn1.createCreep(require('creeps.bodies').Harvester, {role: 'Harvester'});
    }
    
    if(Finders.length <2){
        var newFinder = Game.spawns.Spawn1.createCreep(require('creeps.bodies').Finder, {role: 'Finder'});
    }
    
    if(Couriers.length <2){
        var newCourier = Game.spawns.Spawn1.createCreep(require('creeps.bodies').Courier, {role: 'Courier'});
    }
    
    if(SpawnCouriers.length <2){
        var newSpawnCourier = Game.spawns.Spawn1.createCreep(require('creeps.bodies').SpawnCourier, {role: 'SpawnCourier'});
    }


    for(var name in Game.creeps){
        var creep = Game.creeps[name];

        for(var role in roles){
            if(creep.memory.role == role){
                roles[role].behavior.run(creep);
                //creep.room.visual.text(role, creep.pos);
            }
        }
    }

}
