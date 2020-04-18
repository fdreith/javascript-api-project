document.addEventListener("DOMContentLoaded", init)

const promptDiv = document.getElementById("prompt-div")
const entriesDiv = document.getElementById("entries-div")
const journalEntriesDiv = document.getElementById("journal-entries")
let timer

function init() {
  getPrompts()
}

// PROMPTS

function getPrompts() {
  fetch('http://localhost:3000/prompts/')
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(function (data) {
      data.map(prompt => new Prompt(prompt))
      getMoodsAndEntries()
    })
    .catch(alert)
}

function appendMoodPromptOptions() {
  promptDiv.innerHTML = `  
    <h6 class="center-align">How are you feeling today? Select an emotion for a writing prompt.</h6>
    <br>
    `
  addMoodPromptButtons()
}

function addMoodPromptButtons() {
  Mood.all.forEach(mood => {
    promptDiv.insertAdjacentHTML('beforeend', ` <a class="waves-effect waves-light btn-large" id="${mood.id}">${mood.mood_type}</a>`)
  })
  addPromptListeners()
}

function addPromptListeners() {
  const promptButtons = promptDiv.querySelectorAll("a")
  for (let i = 0; i < promptButtons.length; i++) {
    promptButtons[i].addEventListener("click", randomPrompt)
  }
}

function randomPrompt(e) {
  e.preventDefault()
  let targetPrompts = Prompt.all.filter(prompt => prompt.mood.id === parseInt(e.target.id))
  let randomPrompt = targetPrompts.random()
  renderNewEntryForm(randomPrompt)
}

// MOOD

function getMoodsAndEntries() {
  fetch('http://localhost:3000/moods/')
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(function (data) {
      let moods = data.map(mood => new Mood(mood))
      appendMoodPromptOptions(moods)
      createEntries(moods)
    })
  // .catch(alert)
}

function attachMoodListener() {
  const dropdownOptions = document.getElementById("dropdown1")
  dropdownOptions.addEventListener("click", getEntriesByMood)
}

// REDO THIS!!
function getEntriesByMood(e) {
  e.preventDefault
  if (e.target.id === "all") {
    getEntries()
  } else {
    // let mood = Mood.all.find(mood => mood.id === parseInt(e.target.id))
    // if (mood.entries.length > 0) {
    //   sortEntries(mood.entries)
    //   renderEntries(mood.entries)
    // } else {
    //   entriesDiv.innerHTML = `<h6>You don't have any journal entries in the ${mood.mood_type} category.</h6>`

  }

}

// ENTERIES

function createEntries(moods) {
  moods.forEach(mood => mood.entries.forEach(entry => new Entry(entry)))
  pastEntriesButton()
}

function pastEntriesButton() {
  journalEntriesDiv.innerHTML = `
  <br>
  <a class="waves-effect waves-light btn-large center-align" id="get-past-entries">Read Past Journal Entries</a>
  `
  attachPastEntriesListener()
}

function attachPastEntriesListener() {
  let getPastEntries = document.getElementById("get-past-entries")
  getPastEntries.addEventListener("click", appendEntriesDivs)
}

function appendEntriesDivs(e) {
  e.preventDefault
  journalEntriesDiv.innerHTML = `
  <h5>Journal Entries:</h5>
  <a id="filter-dropdown" class='dropdown-trigger btn' href='#' data-target='dropdown1'>View Entries By Mood</a>
  <ul id='dropdown1' class='dropdown-content'>
  `
  addDropdownOptions()
}

function addDropdownOptions() {
  const dropdownOptions = document.getElementById("dropdown1")
  dropdownOptions.insertAdjacentHTML('afterbegin', `
    <li><a href="#!" id="all">All Entries</a></li>
    `)
  Mood.all.forEach(mood => {
    dropdownOptions.insertAdjacentHTML('beforeend', `
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!" id="${mood.id}">${mood.mood_type}</a></li>
    ` )
  })
  getEntries()
  attachMoodListener()
  $('.dropdown-trigger').dropdown()
}
// REDO THIS!!
function getEntries() {
  debugger
  sortEntries(Entry.all)
  renderEntries(Entry.all)
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

function renderEntries(entries) { /// working on this
  debugger
  let entriesTitle = document.getElementById("entries-title")
  entriesDiv.innerHTML = ""
  if (entries.length > 0) {
    debugger
    if (entries.every(entry => entry.prompt.mood_id === entries[0].prompt.mood_id)) {
      entriesTitle.innerHTML = `<h5>Entries by Mood: ${entries[0].prompt.mood.mood_type}</h5>`
      entries.forEach(entry => renderEntryCard(entry))
      addDeleteButtonListeners()

    } else {
      entriesTitle.innerHTML = ""
      entries.forEach(entry => renderEntryCard(entry))
      addDeleteButtonListeners()
    }
  } else {
    entriesDiv.innerHTML = "You don't have any entries."
  }
}

function renderEntryCard(entry) {
  entriesDiv.insertAdjacentHTML('afterbegin', entry.renderEntry())
}

function addDeleteButtonListeners() {
  let deleteButtons = document.querySelectorAll(".delete-div button")
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteEntry)
  }
}

function deleteEntry(e) {
  e.preventDefault
  if (window.confirm("Are you sure you want to delete this entry?")) {
    fetch(`http://localhost:3000/entries/${e.target.id}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(responseJSON => {
        if (responseJSON.message) {
          alert(responseJSON.message)
          appendEntriesDivs()
        } else {
          throw new Error(responseJSON.errors)
        }
      })
      .catch(alert)
  }
}

function renderNewEntryForm(randomPrompt) {
  promptDiv.innerHTML = `
  <h4 id="prompt">${randomPrompt.question}</h4>
  <p>Minutes:</p>
  <p id="timer"> 0 </p> 
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
  addEntryFormListener()
  startTimer()
}


function startTimer() {
  timer = document.getElementById("timer")
  let time = setInterval(function () {
    timer.innerText++
  }, 6000)
}

function addEntryFormListener() {
  const promptForm = document.getElementById("prompt-form")
  promptForm.addEventListener("submit", createEntry)
}

function createEntry(e) {
  e.preventDefault()
  const content = document.getElementById("content").value
  const prompt_id = parseInt(document.getElementById("prompt-id").value)
  const minutes = timer.innerText
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
      if (responseJSON.errors) {
        throw new Error(responseJSON.errors)
      } else {
        appendMoodPromptOptions()
        appendEntriesDivs()
      }
    })
  // .catch(alert)
}


// RANDOM ARRAY FUNCTION

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}
