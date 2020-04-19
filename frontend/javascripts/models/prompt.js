class Prompt {
  static all = []

  constructor(data) {
    this.id = data.id
    this.question = data.question
    this.mood = this.findMood(data)
    this.save()
  }

  save() {
    if (!!!Prompt.all.find(prompt => prompt.id === this.id)) {
      Prompt.all.push(this)
    }
  }

  findMood(data) {
    return Mood.all.find(mood => mood.id === data.mood_id)
  }

}