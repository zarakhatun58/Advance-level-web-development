type nodeDeveloper={
    name:string,
}

// type JuniorDeveloper={
//     name:string,
//     expertise:string,
//     experience:number
// }

// & diye hole interesection type
type JuniorDeveloper= nodeDeveloper &{
    expertise:string,
    experience:number
}

// 0r | diye hole union Type
const newDeveloper:nodeDeveloper | JuniorDeveloper={
    name:'jahanara khatun',
    expertise:'javascript',
    experience:2
}


type NextLevelDeveloper=JuniorDeveloper& {
    leadershipExperience:1;
    // level: 'junior' | 'mid'| 'senior'
    level: Level;

}

//enum type we can use or not use
enum Level{
    junior='junior',
    mid='mid',
    senior='senior'
}

const developer:NextLevelDeveloper={
    name:'vidisha',
    expertise:'typescript',
    experience:4,
    leadershipExperience:1,
    level: Level.mid

}

