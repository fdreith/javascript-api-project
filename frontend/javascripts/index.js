document.addEventListener("DOMContentLoaded", () => {
  getEntries()
  const prompt = document.getElementById("prompt")
  const entriesDiv = document.getElementById("entries-div")

  prompt.addEventListener("click", e => {
    getPrompt(e.target.name)
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
        entries = data
        renderEntries()
      })
      .catch(errors => console.log(errors)) // do something with this?
  }

  function renderEntries() {
    entries.sort(function (a, b) {
      let keyA = new Date(a.created_at),
        keyB = new Date(b.updated_at)
      if (keyA < keyB) return -1
      if (keyA > keyB) return 1
      return 0
    })
    entries.forEach(entry => render(entry))
  }

  function render(entry) {
    entriesDiv.innerHTML += template(entry)
  }

  function template(entry) {
    // need to reformat date & would like to have mood listed
    // stretch -- mouseover to view content
    return `
    <div class="card">
      <div class="card-content">
        <strong> ${entry.prompt.question}</strong>
        <p>${entry.created_at}</p> 
        <p>Written in ${entry.minutes}</p>
        <p>${entry.content}</p>
      </div>
    </div>
    `
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
        prompts = data
        renderPrompt(promptType)
      })
      .catch(errors => console.log(errors)) // do something with this?
  }

  function renderPrompt(promptType) {
    let targetPrompts = prompts.filter(prompt => prompt.mood_id.toString() === promptType)
    debugger
    prompt.innerHTML = targetPrompts.random().question
    renderNotepad()
  }

  function renderNotepad() {
    console.log("notepad")
  }

  Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
  }

})