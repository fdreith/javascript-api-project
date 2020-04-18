class Mood {
  static all = []

  constructor(data) {
    this.id = data.id
    this.mood_type = data.mood_type
    this.prompts = data.prompts
    this.entries = data.entries
    this.save()
  }
  save() {
    Mood.all.push(this)
  }

}