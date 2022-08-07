"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Player_1 = require("./Player");
var Board_1 = require("./Board");
var Game = /** @class */ (function () {
    function Game(p1, p2, board) {
        this.turn = 0;
        this.state = "STARTED";
        this.p1 = p1;
        this.p2 = p2;
        this.board = board;
    }
    Game.prototype.checkWinner = function (player) {
        var c = player.character;
        var winningLine = "".concat(c).concat(c).concat(c);
        for (var _i = 0, _a = ["A", "B", "C"]; _i < _a.length; _i++) {
            var row = _a[_i];
            if (this.board.getRowAsString(row) == winningLine)
                return true;
        }
        for (var _b = 0, _c = [0, 1, 2]; _b < _c.length; _b++) {
            var col = _c[_b];
            if (this.board.getColAsString(col) == winningLine)
                return true;
        }
        for (var _d = 0, _e = [0, 1]; _d < _e.length; _d++) {
            var diag = _e[_d];
            if (this.board.getDiagAsString(diag) == winningLine)
                return true;
        }
        return false;
    };
    Game.prototype.nextTurnPrompt = function () {
        var player = this.turn % 2 == 0 ? this.p1 : this.p2;
        return '\n' + this.board.getBoardForDisplay()
            + '\n'
            + "Turn: ".concat(this.turn + 1, "  |  Player : ").concat(player.name, " (").concat(player.character, ")");
    };
    Game.prototype.play = function (box) {
        var player = this.turn % 2 == 0 ? this.p1 : this.p2;
        var success = this.board.markBoard(box, player.character);
        if (success) {
            if (this.checkWinner(player)) {
                this.state = "END_WINNER";
                console.log("Game Over! ".concat(player.name, " has won!"));
                return;
            }
            this.turn++;
        }
        if (this.turn == 9) {
            this.state = "END_DRAW";
            console.log("Game ended in DRAW");
        }
    };
    Game.Builder = /** @class */ (function () {
        function GameBuilder() {
        }
        GameBuilder.prototype.addPlayer1 = function (name, character) {
            if (character === void 0) { character = "X"; }
            this.p1 = new Player_1.Player.Builder()
                .setName(name)
                .setCharacter(character)
                .build();
            return this;
        };
        GameBuilder.prototype.addPlayer2 = function (name, character) {
            if (character === void 0) { character = "X"; }
            this.p2 = new Player_1.Player.Builder()
                .setName(name)
                .setCharacter(character)
                .build();
            return this;
        };
        GameBuilder.prototype.build = function () {
            if (!this.p1) {
                throw new Error("You need to create player 1 before building game");
            }
            if (!this.p2) {
                throw new Error("You need to create player 2 before building game");
            }
            return new Game(this.p1, this.p2, new Board_1.Board());
        };
        return GameBuilder;
    }());
    return Game;
}());
exports.Game = Game;
