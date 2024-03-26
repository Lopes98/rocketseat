const students = [
    { name: 'João', note1: 7.5, note2: 8.0 },
    { name: 'Maria', note1: 6.0, note2: 7.5 },
    { name: 'Pedro', note1: 8.5, note2: 9.0 },
    { name: 'Ana', note1: 9.0, note2: 8.0 },
    { name: 'Mariana', note1: 7.0, note2: 6.5 },
    { name: 'Lucas', note1: 6.5, note2: 7.0 },
    { name: 'Carla', note1: 8.0, note2: 7.5 },
    { name: 'Fernando', note1: 7.5, note2: 8.5 },
    { name: 'Juliana', note1: 8.0, note2: 9.0 },
    { name: 'Rafael', note1: 6.0, note2: 6.0 }
]

function averageNote(){
    for(let student in students){
        let averageNote = (students[student].note1 + students[student].note2) / 2
        averageNote.toFixed(2)
        if(averageNote > 7){
            alert(`A média do(a) aluno(a) ${students[student].name} é de: ${averageNote} \nParabéns ${students[student].name}! Você passou no concurso!`);
        } else {
            alert(`A média do(a) aluno(a) ${students[student].name} é de: ${averageNote} \nNão foi dessa vez ${students[student].name}. Tente novamente!`)
        }
    }
}
        
averageNote()