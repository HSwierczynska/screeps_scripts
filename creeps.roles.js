var roleProle = require('role.prole');
var roleUpgrader = require('role.upgrader');
var roleHarvester = require('role.harvester');
var roleFinder = require('role.finder');
var roleCourier = require('role.courier');
var roleSpawnCourier = require('role.spawncourier');
var roleBuilder = require('role.builder');
var roleRepairman = require('role.repairman');
var roleWarrior = require('role.warrior');


module.exports={
    Prole:{
        behavior: roleProle
    },

    Upgrader:{
        behavior: roleUpgrader
    },

    Harvester:{
        behavior: roleHarvester
    },

    Finder:{
        behavior: roleFinder
    },
    
    Builder:{
        behavior: roleBuilder
    },
    
    Courier:{
        behavior: roleCourier
    },
    
    SpawnCourier:{
        behavior: roleSpawnCourier
    },

    Repairman:{
        behavior: roleRepairman
    },

    Warrior:{
        behavior: roleWarrior
    }
}
