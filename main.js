let helpObj = require("./help");
let treeObj = require("./tree");
let organizeObj = require("./organize");

let inputArr = process.argv.slice(2);

let commnd = inputArr[0];


switch(commnd){
    case "tree":
        treeObj.treefxn(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizefxn(inputArr[1]);
        break;
    case "help":
        helpObj.helpfxn();
        break;
    default:
        console.log("🙏 kindly enter the correct command");
        break;
}

