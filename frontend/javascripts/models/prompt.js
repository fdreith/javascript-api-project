class Prompt {
  constructor(data) {
    this.id = data.id
    this.question = data.question
    this.mood = data.mood
    this.minutes = data.minutes
  }

  renderPromptForm(randomPrompt) {
    return `
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

}

