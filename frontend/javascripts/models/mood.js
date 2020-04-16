class Mood {

  constructor(data) {
    this.id = data.id
    this.mood_type = data.mood_type
    this.prompts = data.prompts
    this.entries = data.entries
  }

  renderMoodEntry() {
    debugger
    return `
    <div class="card">
      <div class="delete-div">
         <button class = "btn-flat waves-effect waves-teal right">
            <i id="${this.id}" class = "material-icons right">close</i></button>
      </div>
      <div class="card-content">
        <strong>${this.created_at}</strong> 
        <br>
        <strong> ${this.prompt.question}</strong>
        <br>
        <p>${this.content}</p>
      </div>
    </div>
    `
  }

}