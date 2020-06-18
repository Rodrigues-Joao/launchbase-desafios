//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
const student = {
    name:'João Victor',
    age: 21,
    technologies: [
        {
            name: 'C#',
            specialties: 'Desktop/mobile'

        },
        {
            name: 'JavaScript',
            specialties: 'web/mobile'

        },
        {
            name: 'C',
            specialties: 'micro-controladores'

        },
        {
            name: 'HTML',
            specialties: 'web'

        },
        {
            name: 'Css',
            specialties: 'web'

        }
    ]
}

console.log(`O usuário ${student.name} tem ${student.age} anos e usa a tecnologia ${student.technologies[0].name} com especialidade em ${student.technologies[0].specialties}`)