var roleProle = require('role.prole');
var roleUpgrader = require('role.upgrader');
var roleHarvester = require('role.harvester');
var roleFinder = require('role.finder');



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
    }
}
