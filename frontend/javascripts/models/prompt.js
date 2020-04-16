class Prompt {
  static all = []

  constructor(data) {
    this.id = data.id
    this.question = data.question
    this.mood = data.mood
    this.save()
  }

  save() {
    Prompt.all.push(this)
  }

}