"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, character) {
        this.name = name;
        this.character = character;
    }
    Player.Builder = /** @class */ (function () {
        function PlayerBuilder() {
        }
        PlayerBuilder.prototype.setName = function (value) {
            this.name = value;
            return this;
        };
        PlayerBuilder.prototype.setCharacter = function (value) {
            if (value == "_") {
                throw new Error("Underscore '_' is not a valid player character");
            }
            this.character = value;
            return this;
        };
        PlayerBuilder.prototype.build = function () {
            return new Player(this.name, this.character);
        };
        return PlayerBuilder;
    }());
    return Player;
}());
exports.Player = Player;
