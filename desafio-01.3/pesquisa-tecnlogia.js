const users = [
    { name: "Joao", technologies: ["HTML", "CSS", 'C#'] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS", "HTML", "JAVA"] },
    { name: "Tuane", technologies: ["HTML", "Node.js"] },
    { name: "Tiago", technologies: ["C", "C#"] },
    { name: "Almeida", technologies: ["C", "C++"] },
    { name: "Nascimento", technologies: ["C++", "C#"] },
    { name: "Rizzo", technologies: ["C", "C#", "C++"] }
]

function checkuseCSharp (user) {
    for (let technologie of user.technologies) {
        if (technologie == 'C++')
            return true
    }
    return false
}

for (let user of users){
    if(checkuseCSharp(user))
        console.log(`O usuário ${user.name} trabalha com C++`)
}