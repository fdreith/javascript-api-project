class Prompt {
  constructor(data) {
    this.id = data.id;
    this.question = data.question;
    this.mood = this.findMood(data);
    PROMPTS.save(this)
  }

  findMood(data) {
    return MOODS.all().find((mood) => mood.id === data.mood_id);
  }
}
