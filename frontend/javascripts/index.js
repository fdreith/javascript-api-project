document.addEventListener("DOMContentLoaded", () => {
  getEntries()
  const prompt = document.getElementById("prompt")

  prompt.addEventListener("click", e => {
    getPrompt(e.target.name)
  })
})

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
        throw new Error(response.statusText) // do something with this?
      }
      return response.json()
    })
    .then(function (data) {
      let prompts = data.map(prompt => new Prompt(prompt))
      debugger
      randomPrompt(prompts, promptType)
    })
    .catch(errors => console.log(errors)) // do something with this?
}

function randomPrompt(prompts, promptType) {
  let targetPrompts = prompts.filter(prompt => {
    debugger
    prompt.mood_id.toString() === promptType
  })
  let randomPrompt = targetPrompts.random().question
  renderPrompt(randomPrompt)
}

function renderPrompt(randomPrompt) {
  prompt.innerHTML = randomPrompt.renderPromptForm()
}

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}
