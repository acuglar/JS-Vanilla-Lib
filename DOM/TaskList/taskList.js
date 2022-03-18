const campoTextoTarefa = document.getElementById('campo-texto-tarefa')
const botaoSubmitTarefa = document.getElementById('botao-submit-tarefa')
const listaTarefas = document.getElementById("lista-tarefas")

let colecaoTarefas = []

const criarTarefa = () => {
  let tarefa = pegarTarefa()
  tarefa = tarefa.trim()

  if (tarefa !== "") {
    colecaoTarefas.push(tarefa)
    listarTarefas(colecaoTarefas)
  } else {
    alertarUsuario("Preencha o campo corretamente!")
  }
}

const listarTarefas = (todasTarefas) => {
  limparLista()
  todasTarefas.forEach(adicionarNovaTarefa)
}

const removerTarefa = (tarefaSelecionanda) => {
  let idTarefa = retornarIdTarefa(tarefaSelecionanda)
  colecaoTarefas.splice(idTarefa, 1)
  listarTarefas(colecaoTarefas)
}

const marcarTarefas = () => {
  const todosCheckbox = pegarTodosCheckbox()
  todosCheckbox.forEach(checkbox => checkbox.checked = true)
}

const desmarcarTarefas = () => {
  const todosCheckbox = pegarTodosCheckbox()
  todosCheckbox.forEach(checkbox => checkbox.checked = false)
}

const deletarTarefas = () => {
  limparLista()
  colecaoTarefas.splice(0, colecaoTarefas.length)
}

const limparCampoTexto = () => campoTextoTarefa.value = ''

const limparLista = () => listaTarefas.innerHTML = ''

const pegarTarefa = () => {
  const tarefa = campoTextoTarefa.value
  limparCampoTexto()

  return tarefa
}

const adicionarNovaTarefa = (taskTitle, taskId) => {
  document.querySelector("small").classList.remove("show")

  const li = document.createElement("li")
  li.id = taskId
  const small = document.createElement("small")
  small.id = taskId
  small.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>'

  const label = document.createElement("label")
  const input = document.createElement("input")
  input.type = "checkbox"
  input.classList.add("check-tarefa")
  input.name = "task"
  const span = document.createElement("span")
  span.id = "task-title"
  span.innerText = taskTitle
  label.appendChild(input)
  label.appendChild(span)
  li.appendChild(label)
  li.appendChild(small)
  listaTarefas.appendChild(li)

  mapearIds()
}

const alertarUsuario = (messagem) => {
  document.querySelector("small").classList.add("show")
  document.querySelector("small").innerText = messagem
}

const retornarIdTarefa = (tarefa) => tarefa.target.id

const pegarTodosCheckbox = () => {
  return document.getElementsByName("task")
}

const mapearIds = () => {
  let lixeiras = document.querySelectorAll("#tarefas-app ul li small")
  lixeiras.forEach(lixeira => {
    lixeira.addEventListener('click', removerTarefa)
  })
}

botaoSubmitTarefa.addEventListener('click', criarTarefa)

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    criarTarefa()
  }
})

document
  .getElementById("marcar-tarefas")
  .addEventListener("click", marcarTarefas);

document
  .getElementById("desmarcar-tarefas")
  .addEventListener("click", desmarcarTarefas);

document
  .getElementById("deletar-tarefas")
  .addEventListener("click", deletarTarefas);