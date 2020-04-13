class Entry {
  constructor(data) {
    this.id = data.id
    this.prompt = data.prompt
    this.mood = data.mood
    this.minutes = data.minutes
    this.content = data.content
  }

  renderEntry() {
    return `
    <div class="card">
      <div class="card-content">
        <strong> ${this.prompt.question}</strong>
        <p>${this.created_at}</p> 
        <p>Written in ${this.minutes}</p>
        <p>${this.content}</p>
      </div>
    </div>
    `
  }
}