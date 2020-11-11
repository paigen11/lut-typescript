"use strict";
exports.__esModule = true;
var interfaces_1 = require("./interfaces");
var isOpen = false;
var myName = 'Paige';
var myAge = 31.6;
var list = [0, 1, 2, 3];
var me = ['Paige', 31, false];
var job = interfaces_1["default"].WebDev;
var phone = 'Pixel';
var tablet = 2;
var desktop = 1;
var sayWord = function (word) {
    console.log(word || 'hello');
    return word || 'hello';
};
sayWord();
var sayDefaultWord = function (word) {
    if (word === void 0) { word = 'Hi'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    return word;
};
sayDefaultWord('Paige', 'Sean');
var newName = 'Cindy';
newName = 'George';
var newNameTwo = newName;
newNameTwo = 'John';
var makeMargin = function (x) {
    return "margin: " + x + "px;";
};
makeMargin(10);
makeMargin('Paige');
var dog = 'Maddie';
dog = null;
console.log('dog ', dog);
dog = 'Kate';
dog = undefined;
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
sayName({ name: 'Paige', age: 31 });
sayName({ age: 31, name: 'Paige' });
var createContent = function (contentType) { };
createContent(interfaces_1.Type.Quiz);
console.log(interfaces_1.Type.Quiz);
var createContent2 = function (contentType) { };
createContent2(interfaces_1.Type2.Quiz);
console.log('Type2.Quiz', interfaces_1.Type2.Quiz);
var Team = (function () {
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log(this.teamName);
        return 'goal!';
    };
    return Team;
}());
var atlUnited = new Team('Atlanta United');
atlUnited.score();
atlUnited.teamName;
