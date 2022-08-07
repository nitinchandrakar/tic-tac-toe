"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./entities/Game");
var rl = __importStar(require("readline-sync"));
var gameBuilder = new Game_1.Game.Builder();
var player1Name = rl.question("Enter Player 1 name: ");
var player1Char = rl.question("Enter Player 1 character (X): ", { defaultInput: "X" });
gameBuilder.addPlayer1(player1Name, player1Char);
var player2Name = rl.question("Enter Player 2 name: ");
var player2Char = rl.question("Enter Player 2 character (O): : ", { defaultInput: "O" });
gameBuilder.addPlayer2(player2Name, player2Char);
var game = gameBuilder.build();
while (game.state == "STARTED") {
    console.log(game.nextTurnPrompt());
    var box = rl.question("Enter Box: ");
    game.play(box);
}
