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
    if (!!!Mood.all.find(mood => mood.id === this.id)) {
      Mood.all.push(this)
    }
  }
}