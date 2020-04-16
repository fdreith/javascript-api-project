document.addEventListener("DOMContentLoaded", init)
const promptDiv = document.getElementById("prompt-div")
const entriesDiv = document.getElementById("entries-div")

function init() {
  getPromptCategories()
  getEntries()
  $('.dropdown-trigger').dropdown();
  attachMoodListener()
}

// PROMPTS

function getPromptCategories() {
  // can I, should I, put this in a service class? 
  promptDiv.innerHTML = `  
  <div id="prompt-buttons">
      <h6 class="center-align">How are you feeling today? Select an emotion for a writing prompt.</h6>
      <br>
      <a class="waves-effect waves-light btn-large" id="1">Inspired</a>
      <a class="waves-effect waves-light btn-large" id="2">Happy</a>
      <a class="waves-effect waves-light btn-large" id="3">Anxious</a>
      <a class="waves-effect waves-light btn-large" id="4">Sad</a>
      <a class="waves-effect waves-light btn-large" id="5">Reflective</a>
      <a class="waves-effect waves-light btn-large" id="6">Self-Esteem</a>
      </div>
    `
  const promptButtons = document.getElementById("prompt-buttons")
  promptButtons.addEventListener("click", e => {
    e.preventDefault()
    getPrompt(e.target.id)
  })
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
    .catch(alert)
}

function randomPrompt(prompts, promptType) {
  let targetPrompts = prompts.filter(prompt => prompt.mood.id.toString() === promptType)
  let randomPrompt = targetPrompts.random()
  renderNewEntryForm(randomPrompt)
}

function addPromptFormListener() {
  const promptForm = document.getElementById("prompt-form")
  promptForm.addEventListener("submit", createEntry)
}

// ENTERIES

function getEntries() {
  fetch(`http://localhost:3000/entries`)
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(function (data) {
      let entries = data.map(entry => new Entry(entry))
      sortEntries(entries)
      renderEntries(entries)
    })
  // .catch(alert)
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
  entriesDiv.innerHTML = ""
  entries.forEach(entry => renderEntryCard(entry))
  addDeleteButtonListeners()
}

function renderEntryCard(entry) {
  entriesDiv.insertAdjacentHTML('afterbegin', entry.renderEntry())
}

function renderNewEntryForm(randomPrompt) {
  promptDiv.innerHTML = `
        <div>
          <h4 id="prompt">${randomPrompt.question}</h4>
        </div>
        <div id="prompt-form" class="row">
        <form class="prompt-form" id="new-entry-form">
          <div class="row">
            <div class="input-field prompt-form">
              <textarea id="content" class="materialize-textarea" name="content" value=""></textarea>
              <label for="textarea1">Journal Entry</label>
              <input type="hidden" id="prompt-id" name="prompt-id" value=${randomPrompt.id}>
              <input type="submit" name="" value="Finished with Entry">
            </div>
          </div>
        </form>
      </div>
      `
  addPromptFormListener()
}

function addDeleteButtonListeners() {
  let deleteButtons = document.querySelectorAll(".delete-div button")
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteEntry)
  }
}

function deleteEntry(e) {
  e.preventDefault
  fetch(`http://localhost:3000/entries/${e.target.id}`, {
    method: "DELETE",
  })
    .then(resp => {
      if (resp.ok) {
        getEntries()
      } else {
        throw new Error(responseJSON.error)
      }
    })
  // .catch(alert)
}

function createEntry(e) {
  e.preventDefault()
  const content = document.getElementById("content").value
  const prompt_id = parseInt(document.getElementById("prompt-id").value)
  const minutes = "n/a for now"
  const entryData = {
    entry: {
      content,
      prompt_id,
      minutes
    }
  }
  fetch('http://localhost:3000/entries/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(entryData)
  })
    .then(resp => resp.json())
    .then(responseJSON => {
      if (responseJSON.error) {
        throw new Error(responseJSON.error)
      } else {
        init()
      }
    })
  // .catch(alert)
}

// MOOD

function attachMoodListener() {
  let dropdownOptions = document.getElementById("dropdown1")
  dropdownOptions.addEventListener("click", getEntriesByMood)
}

function getEntriesByMood(e) {
  e.preventDefault
  fetch(`http://localhost:3000/moods/${e.target.id}`)
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(function (data) {
      debugger
      let mood = new Mood(data)
      renderMoodEntries(mood)
    })
  // .catch(alert)
}

function renderMoodEntries(mood) { // WORKING ON THIS!!!
  debugger
  entriesDiv.innerHTML = ""
  mood.entries.forEach(entry => renderEntryCard(entry))
  addDeleteButtonListeners()


}

// function renderEntryCard(entry) {
//   entriesDiv.insertAdjacentHTML('afterbegin', entry.renderEntry())
// }


// RANDOM ARRAY FUNCTION

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}
