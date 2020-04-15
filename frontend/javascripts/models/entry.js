class Entry {

  // static all = []

  constructor(data) {
    this.id = data.id
    this.prompt = data.prompt
    this.mood = data.mood
    this.minutes = data.minutes
    this.content = data.content
    this.created_at = data.created_at // want to modify how this looks date and time 
    // this.save()
  }

  // save() {
  //   Entry.all.push(this)
  // }

  renderEntry() {
    return `
    <div class="card">
      <div class="delete-div>
         <button class = "btn-flat waves-effect waves-teal disabled" >
            <i id=${this.id} class = "material-icons right">close</i></button></td>
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