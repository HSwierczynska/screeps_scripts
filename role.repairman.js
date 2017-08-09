const actions = require('creeps.actions');

var roleRepairman ={
    run: function(creep) {

        //Road
        actions.repairRoad(creep);

        //Wall
        actions.repairWall(creep);

        //Container
        actions.repairContainer(creep);

    }
}


module.exports = roleRepairman;
