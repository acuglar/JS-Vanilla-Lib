const campoTextoTarefa = document.getElementById('campo-texto-tarefa')
const botaoSubmitTarefa = document.getElementById('botao-submit-tarefa')
const listaTarefas = document.getElementById("lista-tarefas")

let colecaoTarefas = []

const criarTarefa = () => {
  let tarefa = pegarTarefa()

  if (tarefa !== "" && tarefa !== " ") {
    colecaoTarefas.push(tarefa);
    listarTarefas(colecaoTarefas);
  } else {
    alertarUsuario("Preencha o campo corretamente!")
  }
}

const listarTarefas = (todasTarefas) => {
  console.log(todasTarefas);

  limparLista();
  for (let contador = 0; contador < todasTarefas.length; contador += 1) {
    adicionarNovaTarefa(todasTarefas[contador]);
  }
}

const limparCampoTexto = () => campoTextoTarefa.value = ''

const limparLista = () => listaTarefas.innerHTML = ''

const pegarTarefa = () => {
  const tarefa = campoTextoTarefa.value
  console.log()
  limparCampoTexto()

  return tarefa
}

const adicionarNovaTarefa = (taskTitle) => {
  document.querySelector("small").classList.remove("show")

  const li = document.createElement("li")
  li.id = "1"

  const label = document.createElement("label")
  const input = document.createElement("input")
  input.type = "checkbox"
  input.id = "check-task"
  input.name = "task"
  const span = document.createElement("span")
  span.id = "task-title"
  span.innerText = taskTitle
  label.appendChild(input)
  label.appendChild(span)
  li.appendChild(label)
  listaTarefas.appendChild(li)
}

botaoSubmitTarefa.addEventListener('click', criarTarefa)

const alertarUsuario = (messagem) => {
  document.querySelector("small").classList.add("show")
  document.querySelector("small").innerText = messagem
}

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {

    criarTarefa()
  }
})