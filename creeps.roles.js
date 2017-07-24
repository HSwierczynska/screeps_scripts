var roleProle = require('role.prole');
var roleUpgrader = require('role.upgrader');
var roleHarvester = require('role.harvester');
var roleFinder = require('role.finder');
var roleCourier = require('role.courier');
var roleBuilder = require('role.builder');
var roleRepairman = require('role.repairman');


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

    Repairman:{
        behavior: roleRepairman
    }
}
