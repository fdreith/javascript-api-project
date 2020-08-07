class Mood {
  // static all = []

  constructor(data) {
    this.id = data.id
    this.mood_type = data.mood_type
    this.prompts = data.prompts
    this.entries = data.entries
    this.save()
  }
  save() {
    if (!!!allMoods.find(mood => mood.id === this.id)) {
      allMoods.push(this)
    }
  }
}