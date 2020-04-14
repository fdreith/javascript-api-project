class Entry {
  constructor(data) {
    this.id = data.id
    this.prompt = data.prompt
    this.mood = data.mood
    this.minutes = data.minutes
    this.content = data.content
    this.created_at = data.created_at // want to modify how this looks date and time 
  }

  renderEntry() {
    return `
    <div class="card">
      <div class="card-content">
        <strong> ${this.prompt.question}</strong>
        <p>${this.created_at}</p> 
        <p>Minutes writing: ${this.minutes} </p>
        <p>${this.content}</p>
      </div>
    </div>
    `
  }
}