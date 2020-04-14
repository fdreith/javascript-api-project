document.addEventListener("DOMContentLoaded", init)
const promptDiv = document.getElementById("prompt-div")

function init() {
  getEntries()
  getPromptCategories()
}

function getPromptCategories() {
  promptDiv.innerHTML = `  
    <h6 class="center-align">How are you feeling today? Select an emotion for a writing prompt.</h6>
    <br>
    <a class="waves-effect waves-light btn-large" name="1">Inspired</a>
    <a class="waves-effect waves-light btn-large" name="2">Happy</a>
    <a class="waves-effect waves-light btn-large" name="3">Anxious</a>
    <a class="waves-effect waves-light btn-large" name="4">Sad</a>
    <a class="waves-effect waves-light btn-large" name="5">Reflective</a>
    <a class="waves-effect waves-light btn-large" name="6">Self-Esteem</a>
    `
  promptDiv.addEventListener("click", e => getPrompt(e.target.name))
}

function getEntries() {
  fetch(`http://localhost:3000/entries`)
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(response.statusText) // do something with this?
      }
      return response.json()
    })
    .then(function (data) {
      let entries = data.map(entry => new Entry(entry))
      sortEntries(entries)
      renderEntries(entries)
    })
    .catch(errors => console.log(errors)) // do something with this?
}

function sortEntries(entries) {
  entries.sort(function (a, b) {
    let keyA = new Date(a.created_at),
      keyB = new Date(b.updated_at)
    if (keyA < keyB) return -1
    if (keyA > keyB) return 1
    return 0
  })
}

function renderEntries(entries) {
  entries.forEach(entry => renderEntryCard(entry))
}

function renderEntryCard(entry) {
  const entriesDiv = document.getElementById("entries-div")
  entriesDiv.insertAdjacentHTML('afterbegin', entry.renderEntry())
}

function getPrompt(promptType) {
  fetch('http://localhost:3000/prompts/')
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(function (data) {
      let prompts = data.map(prompt => new Prompt(prompt))
      randomPrompt(prompts, promptType)
    })
    .catch(errors => console.log(errors)) // do something with this?
}

function randomPrompt(prompts, promptType) {
  let targetPrompts = prompts.filter(prompt => prompt.mood.id.toString() === promptType)
  let randomPrompt = targetPrompts.random()
  renderPrompt(randomPrompt)
}

function renderPrompt(randomPrompt) {
  const promptForm = document.getElementById("prompt-form")
  promptDiv.insertAdjacentHTML('beforeend', randomPrompt.renderPromptForm())
  // promptDiv.innerHTML = randomPrompt.renderPromptForm()
  promptForm.addEventListener("submit", createEntry)
}

function createEntry(e) {
  console.log("submited")
  debugger
  e.preventDefault()

}

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}
