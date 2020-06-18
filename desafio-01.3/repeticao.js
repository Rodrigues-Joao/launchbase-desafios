const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS", 'C#'] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS", "HTML", "JAVA"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS", "HTML", "JAVA"] }
  ];
function Tecnologias (tecnologias){
    let tecnologiasConcat = '';
    for (let tecnologia of tecnologias){
           tecnologiasConcat += ` ${tecnologia},` 
    }

    return tecnologiasConcat.substr(0,tecnologiasConcat.length -1)
}
  for (let user of usuarios){
      console.log(`${user.nome} trabalha com${Tecnologias(user.tecnologias)}`)
  }