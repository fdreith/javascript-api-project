document.addEventListener("DOMContentLoaded", () => {
  getEntries()
  const prompt = document.getElementById("prompt")
  const entriesDiv = document.getElementById("entries-div")
  const notepad = document.getElementById("notepad")

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
    entries.forEach(entry => render(entry))
  }

  function render(entry) {
    console.log(entry)
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
        renderPrompt(prompts)
      })
      .catch(errors => console.log(errors)) // do something with this?
  }

  function renderPrompt(promptType) {
    let targetPrompts = prompts.filter(prompt => prompt.mood_id.toString() === promptType)
    let randomPrompt = targetPrompts.random().question
    debugger
    prompt.innerHTML = `
      <div>
        <h4>${randomPrompt}</h4>
      </div>
      <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Journal Entry</label>
            <input
          </div>
        </div>
      </form>
    </div>
    `
  }

  Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
  }

})