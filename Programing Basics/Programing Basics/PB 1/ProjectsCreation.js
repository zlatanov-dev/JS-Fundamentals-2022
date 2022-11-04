function Project(input)

{
//The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s.
    let name=input[0];
    let hours = (input[1]*3);
    let projects = input[1];
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`)
}
Project(["Yasen", "4",])