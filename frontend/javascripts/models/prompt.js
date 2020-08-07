class Prompt {
  // static all = []

  constructor(data) {
    this.id = data.id
    this.question = data.question
    this.mood = this.findMood(data)
    this.save()
  }

  save() {
    if (!!!allPrompts.find(prompt => prompt.id === this.id)) {
      allPrompts.push(this)
    }
  }

  findMood(data) {
    return allMoods.find(mood => mood.id === data.mood_id)
  }

}