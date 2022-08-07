"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var InvalidBoxNameError = /** @class */ (function (_super) {
    __extends(InvalidBoxNameError, _super);
    function InvalidBoxNameError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.message = 'Invalid box identifier';
        return _this;
    }
    return InvalidBoxNameError;
}(Error));
var BOARD_DEFAULT_SIZE = 3;
var ROWS = "ABCDEFGHIJ";
var Board = /** @class */ (function () {
    function Board(size) {
        if (size === void 0) { size = BOARD_DEFAULT_SIZE; }
        this.size = size;
        this.grid = [];
        for (var i = 0; i < size; i++) {
            this.grid.push(new Array(size).fill("_"));
        }
    }
    Board.prototype.getBoardForDisplay = function () {
        var displayRows = [];
        for (var _i = 0, _a = this.grid; _i < _a.length; _i++) {
            var row = _a[_i];
            displayRows.push(row.join('\t'));
        }
        return displayRows.join('\n');
    };
    Board.prototype.markBoard = function (box, character) {
        // box: A1 or B2 like that
        if (box.length != 2) {
            throw new InvalidBoxNameError();
        }
        var row = ROWS.indexOf(box.charAt(0));
        var col = Number(box.charAt(1)) - 1;
        if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
            throw new InvalidBoxNameError();
        }
        if (this.grid[row][col] != "_") {
            return false;
        }
        this.grid[row][col] = character;
        return true;
    };
    Board.prototype.getRowAsString = function (rowName) {
        var row = ROWS.indexOf(rowName);
        if (row == -1 || row >= this.size) {
            throw new Error("row number is invalid");
        }
        return this.grid[row].join("");
    };
    Board.prototype.getColAsString = function (col) {
        if (col < 0 || col > this.size) {
            throw new Error("col has to be between 0 and 2");
        }
        var colVals = [];
        for (var i = 0; i < this.size; i++) {
            colVals.push(this.grid[i][col]);
        }
        return colVals.join("");
    };
    Board.prototype.getDiagAsString = function (diagNo) {
        var diagVals = [];
        if (diagNo == 0) {
            for (var i = 0; i < this.size; i++) {
                diagVals.push(this.grid[i][i]);
            }
            return diagVals.join("");
        }
        else if (diagNo == 1) {
            for (var i = 0; i < this.size; i++) {
                diagVals.push(this.grid[i][this.size - 1 - i]);
            }
            return diagVals.join("");
        }
        else {
            throw new Error("Invalid diagonal");
        }
    };
    return Board;
}());
exports.Board = Board;
