const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaRespostas = (gabarito, respostasAluno) => {
  let pontuacao = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (gabarito[index] === respostasAluno[index]) pontuacao += 1;
    if (gabarito[index] !== respostasAluno[index] && respostasAluno[index] !== 'N.A') pontuacao -= 0.5; 
  }
  return pontuacao;
}

const avaliacao = (gabarito, respostasAluno, callback) => `Você fez ${callback(gabarito, respostasAluno)} pontos`;

console.log(avaliacao(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaRespostas));