class Entry {

  constructor(data) {
    this.id = data.id
    this.prompt = this.findPrompt(data)
    this.mood = this.findMood(data)
    this.minutes = data.minutes
    this.content = data.content
    this.created_at = new Date(data.created_at)
  }

  renderEntry() {
    return `
    <div class="card">
      <div class="delete-div">
         <button class = "btn-flat waves-effect waves-teal right">
            <i id="${this.id}" class = "material-icons right">close</i></button>
      </div>
      <div class="card-content">
        <strong>Written on ${this.created_at.toDateString()} at ${this.created_at.getHours()}:${this.created_at.getMinutes()}</strong> 
        <br>
        <p>Mood: ${this.mood.mood_type}</p> 
        <br>
        <strong> ${this.prompt.question}</strong>
        <br><br>
        <p>${this.content}</p>
      </div>
    </div>
    `
  }

  findPrompt(data) {
    if (!!data.prompt) {
      return data.prompt
    } else {
      return Prompt.all.find(prompt => prompt.id === data.prompt_id)
    }
  }

  findMood(data) {
    if (!!data.prompt) {
      return Mood.all.find(mood => mood.id === data.prompt.mood_id)
    } else {
      return this.findPrompt(data).mood
    }
  }
}