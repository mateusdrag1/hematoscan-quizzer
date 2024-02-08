const questions = [
	{
		question:
			'Na análise hematológica para o diagnóstico de anemia falciforme, é utilizado um reagente junto com uma gota de sangue para ajudar na desoxigenação da hemoglobina na hemácia, que forma um coloide e, com isso, a hemácia apresenta a forma de foice quando os pacientes estão com essa doença. Qual reagente é esse?',
		answers: [
			'Metabissulfito de sódio 2%.',
			'Ácido sulfúrico 5%.',
			'Azul de metileno 1%.',
			'Giemsa 1%.',
			'Ferrocianeto de potássio 2%.',
		],
		correct: 0,
	},
	{
		question:
			'Para garantir a qualidade do hemocomponente a ser colhido, não é permitido o uso de substâncias antissépticas antes da punção. Porém, para que haja biossegurança do sangue captado, é necessário orientar a limpeza do braço a ser puncionado com água e sabão neutro.',
		answers: ['Certo', 'Errado'],
		correct: 1,
	},
	{
		question:
			'A análise microscópica do sangue humano é essencial ao diagnóstico de diversas doenças ou alterações hematológicas. Os corpúsculos de Heinz são estruturas geralmente esféricas encontradas no interior dos:',
		answers: ['eritrócitos', 'leucócitos', 'monócitos', 'trombócitos'],
		correct: 0,
	},
	{
		question:
			'A câmara de Neubauer é rotineiramente utilizada para realização de contagem de células em líquidos corporais. Sobre a contagem das células, assinale a alternativa CORRETA:',
		answers: [
			'Os cálculos aplicados após contagem das células na câmara têm como finalidade converter o número de células contadas em uma quantidade específica de fluido para número de células por microlitro de fluido.',
			'Amostras límpidas podem ser contadas sem diluição mesmo que haja sobreposição de células ao exame microscópico.',
			'As células nucleadas devem ser contadas somente nos quatro quadrados dos cantos da câmara.',
			'A contagem diferencial pode ser realizada na câmara.',
		],
		correct: 0,
	},
	{
		question:
			'O exame de sangue é uma das análises mais importantes, se não a mais importante, que temos em nossas mãos para cuidarmos de nossos pacientes. Considerando a técnica correta de coleta e manejo do exame sanguíneo, é falso o que se insere em:',
		answers: [
			'O sangue venoso é de grande valia, pois fornece quantidade apreciável de sangue para os exames em geral. As veias da fossa anticubital (cotovelo) são as mais utilizadas.',
			'Não se deve passar sangue de um tubo para o outro. Isso pode afetar os resultados dos exames.',
			'O colhedor é o único profissional do laboratório que pode assegurar que o material é do paciente correto.',
			'Não há problemas em misturar materiais e equipamentos de diferentes fabricantes e deve-se montar o equipamento com cuidado para evitar acidentes, desconsiderando a esterilidade das agulhas.',
		],
		correct: 3,
	},
	{
		question:
			'Há vários tipos de corantes hematológicos disponíveis no mercado para serem adquiridos. Esses corantes são compostos por duas misturas, ______ que fixa os componentes proteicos básicos (ex.: núcleos) e ______ que revela as proteínas ácidas.\n\nAssinale a alternativa que preencha correta e respectivamente as lacunas.',
		answers: [
			'azul de metileno / eosina',
			'ácido Periódico de Schiff / cristal Violeta',
			'fucsina / azul de metileno',
			'hematoxilina / eosina',
		],
		correct: 0,
	},
	{
		question:
			'Por meio de exames de sangue específicos, os médicos especializados em hematologia conseguem descobrir se há algum componente do sangue, de células a nutrientes, que estão alterados e que podem estar causando problemas de saúde diversos no paciente.',
		answers: ['Certo', 'Errado'],
		correct: 0,
	},
	{
		question:
			'As hemofilias são deficiências congênitas dos fatores hemostáticos de caráter genético e hereditário. A doença de Christmas, também conhecida como hemofilia B, é diagnosticada laboratorialmente pela deficiência do fator de coagulação do tipo:',
		answers: ['VII', 'VIII', 'IX', 'XII'],
		correct: 2,
	},
	{
		question:
			'As alterações hematológicas: manchas (sombras) de Gumprecht, bastonetes de Auer, pró-linfócitos, drepanócitos, podem ser observados, respectivamente, nas seguintes condições:',
		answers: [
			'Leucemia mieloide aguda; leucemia linfoide crônica; leucemia prolinfocítica; anemia falciforme.',
			'Leucemia linfoide aguda; leucemia prolinfocítica; leucemia mieloide aguda; hemoglobinopatia C.',
			'Leucemia linfoide crônica; leucemia mieloide aguda; leucemia prolinfocítica; anemia falciforme.',
			'Leucemia linfoide crônica; leucemia prolinfocítica; linfoma de Hodgkin; anemia falciforme.',
			'Leucemia linfoide aguda; doença de Hodgkin; leucemia prolinfocítica; anemia falciforme.',
		],
		correct: 2,
	},
	{
		question:
			'No hemograma, há um tipo específico de leucócito que apresenta uma associação estreita com infecções causadas por parasitas. Qual é esse leucócito?',
		answers: [
			'Basófilo.',
			'Eosinófilo.',
			'Linfócito.',
			'Monócito.',
			'Neutrófilo.',
		],
		correct: 1,
	},
	{
		question:
			'A concentração de glicose no sangue total é aproximadamente 15% mais alta que a concentração de glicose no soro ou plasma. Íons de fluoreto de sódio são, com frequência, utilizados como anticoagulantes e conservantes de sangue total, sobretudo se a análise tiver que sofrer atraso. O fluoreto ativa as enzimas glicolíticas.',
		answers: ['Certo', 'Errado'],
		correct: 1,
	},
	{
		question:
			'Os objetivos do hemograma são avaliar a clínica geral e diagnosticar anemias, policitemias, aplasias medulares, processos infecciosos, leucemias/leucoses, trombocitose e trombocitopenia. O hemograma é uma das análises mais utilizadas na prática médica, pois seus dados gerais permitem uma avaliação extensa da condição clínica do paciente. Intervalos de referência específicos por sexo são essenciais, uma vez que a literatura aponta que existem diferenças estatisticamente significativas entre os sexos nos parâmetros de hemoglobina e hematócrito. Homens apresentam um nível mais reduzido de hemácias, hemoglobina e hematócrito do que as mulheres. Essa diferença pode ter a influência de fatores como hormônio estrogênico na eritropoiese nas mulheres.',
		answers: ['Certo', 'Errado'],
		correct: 1,
	},
	{
		question:
			'A anemia falciforme é uma doença hematológica hereditária, caracterizada pela produção anormal de hemoglobinas, entre as quais a mais comum é a forma Hemoglobina S. Sob determinadas condições de desoxigenação, ocorre a deformação das hemácias, que assumem uma forma semelhante a foices, causando deficiência no transporte de oxigênio, gás carbônico e outras complicações nos indivíduos acometidos pela doença. Assinale a alternativa com nome das alterações morfológicas dos eritrócitos presentes na anemia falciforme.',
		answers: ['Eliptócitos.', 'Estomatócitos.', 'Drepanócitos.', 'Ovalócitos.'],
		correct: 2,
	},
	{
		question:
			'Um paciente chegou ao Pronto Atendimento do Hospital Militar e relatou ao médico que tinha diagnóstico recente de anemia hemolítica. O médico solicitou então um exame para verificar se havia produção de novas hemácias. Qual foi o exame solicitado?',
		answers: [
			'Contagem de reticulócitos',
			'Velocidade de hemossedimentação',
			'Contagem de plaquetas',
			'Coagulograma',
		],
		correct: 0,
	},
	{
		question:
			'Os leucócitos são elementos figurados do sangue chamados de glóbulos brancos, tendo como função a participação da defesa do organismo. Em relação a essas células marque a alternativa INCORRETA:',
		answers: [
			'Em condições normais os neutrófilos seguem uma ordenada progressão saindo da medula óssea, distribuindo no compartimento marginal e circulante. Através do sangue passam para os tecidos, os maiores sítios de sua utilização.',
			'O monócito, no sangue periférico, é considerado uma célula intermediaria que adquire sua maturidade funcional nos tecidos como macrófago.',
			'Os basófilos são originados da célula-tronco comprometida com a linhagem mielóide, fazem toda sua maturação na medula, passando no sangue periférico e migrando para os tecidos.',
			'Linfócitos reativos ou atípicos, são linfócitos B maduros que correspondem a células malignas estimuladas para a produção de anticorpos, aparecendo em várias neoplasias do tecido linfoide.',
			'A eosinopenia é um quadro hematológico característico nas infecções bacterianas agudas. O reaparecimento dos eosinófilos no sangue periférico, geralmente, é um bom sinal de melhora do processo infeccioso.',
		],
		correct: 3,
	},
];

console.log(questions);

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

let score = new Set();
const questionsCount = questions.length;
const showTotal = document.querySelector('#score span');
showTotal.textContent = score.size + ' de ' + questionsCount;

for (const question of questions) {
	const quizItem = template.content.cloneNode(true);

	quizItem.querySelector('h3').textContent = question.question;

	for (let answer of question.answers) {
		const dt = quizItem.querySelector('dl dt').cloneNode(true);
		dt.querySelector('span').textContent = answer;
		dt.querySelector('input').setAttribute(
			'name',
			`question-${questions.indexOf(question)}`
		);
		dt.querySelector('input').setAttribute(
			'value',
			question.answers.indexOf(answer)
		);

		dt.querySelector('input').onchange = (event) => {
			const isCorrect = question.correct === parseInt(event.target.value);

			score.delete(question);

			if (isCorrect) {
				score.add(question);
			}

			showTotal.textContent = score.size + ' de ' + questionsCount;
		};

		quizItem.querySelector('dl').appendChild(dt);
	}

	quizItem.querySelector('dl dt').remove();

	quiz.appendChild(quizItem);
}
