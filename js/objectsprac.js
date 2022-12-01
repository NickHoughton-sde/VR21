const dataMap =[
{state : "Ohio", fun : "So-so"},
{state : "Michigan", fun : "So-so"},
{state : "Texas", fun : "High"},
{state : "California", fun : "High"},
{state : "New Hampshire", fun : "Low"}
];

let programming = {
    languages: ["Javascript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
};

programming.languages.push("Go");
console.log(programming.languages);
programming.difficulty = 7;
console.log(programming.difficulty);
delete programming.jokes;
console.log(programming);
push.programming(isFun);
console.log(programming);
