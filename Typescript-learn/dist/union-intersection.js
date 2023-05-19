"use strict";
// 0r | diye hole union Type
const newDeveloper = {
    name: 'jahanara khatun',
    expertise: 'javascript',
    experience: 2
};
//enum type we can use or not use
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
const developer = {
    name: 'vidisha',
    expertise: 'typescript',
    experience: 4,
    leadershipExperience: 1,
    level: Level.mid
};
