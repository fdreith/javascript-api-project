class Mood {
  constructor(data) {
    this.id = data.id;
    this.mood_type = data.mood_type;
    this.prompts = data.prompts;
    this.entries = data.entries;
    MOODS.save(this);
  }

}
