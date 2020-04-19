# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

inspired = Mood.create(mood_type: "Inspired")
happy = Mood.create(mood_type: "Grateful/Happy")
anxious = Mood.create( mood_type: "Anxious")
sad = Mood.create( mood_type: "Sad/Depressed")
reflect = Mood.create( mood_type: "Self-Reflective")
esteem = Mood.create( mood_type: "Low Self-Esteem")
creative = Mood.create(mood_type: "Creative")

inspired_prompts = inspired.prompts.create([
  {question: "Write about someone who ispires you, and what it is about them that inspires you."},
  {question: "What is something you would like to change about your life? What are the steps that you would need to take to achieve that goal?"},
  {question: "What are some positive changes you have made recently? What changes would you like to make next?"},
  {question: "What's the most difficult thing you've overcome? What did you learn from it?"},
  {question: "If you didn’t have to worry about money or people’s opinions, what would you do with your life?"},
  {question: "Create an ideal budget for your time and money based on percentages (Ex with finances: 10% donations, 40% to live on, 20% to support family, 15% taxes, 10% savings, 5% fun stuff, or something) Why is this your ideal budget?"},
  {question: "How do you spend your time? On a weekday? On a weekend?"},
  {question: "What is the next thing you want to learn? And to what degree?"},
  {question: "Define the following: Success. Wisdom. Love. Faith. Truth. Courage. Joy"},
  {question: "List all the things you think you SHOULD do, that you don’t want to do."},
  {question: "What was your childhood dream and why? What happened to that dream and why?"},
  {question: "What about your life makes you miserable? What do you know you need to give up?"},
  {question: "What is a book you wish someone would write?"},
  {question: "What did you do this week that moved you closer to reaching your goals?"},
  {question: "Write about a time when work felt real to you, necessary and satisfying. Paid or unpaid, professional or domestic, physical or mental."}

])

happy_prompts = happy.prompts.create([
  {question: "What went well today? Can you think of five things?"},
  {question: "What habit (or habits) are you grateful for keeping up with?"},
  {question: "What element of nature did you enjoy this week?"},
  {question: "What’s something beautiful you had the chance to witness lately?"},
  {question: "What positive changes are you grateful for having made in your life?"},
  {question: "What invention are you truly grateful for having access to?"},
  {question: "What is something you love doing for/giving to others?"},
  {question: "What are 5 positive memories from this past year?"},
  {question: "Think of one person who has enriched your life this year in some way. What are 3 positive contributions they’ve made to your life?"},
  {question: "Make a list of the people in your life who genuinely support you, and who you can genuinely trust. (Then make time to hang out with them.)"}
])


anxious_prompts = anxious.prompts.create([
  {question: "What was the most difficult experience you had before, and how were you able to overcome it?"},
  {question: "List three things that scare you the most, and the reasons why."},
  {question: "Reply to your inner critic’s opinions about your actions and decisions."},
  {question: "List down all of the things that you’re worried about right now. Make the list as long as possible."},
  {question: "How are you feeling right now? Describe how you feel in writing."},
  {question: "Think back to a moment when you experienced failure. What lessons can you take from it?"},
  {question: "Is your anxiety trying to tell you something? What is it?"},
  {question: "List three of the greatest lessons you’ve been given by your anxiety."},
  {question: "List down your anxiety triggers."},
  {question: "List down the questions that are constantly running through your head right now, and then try to answer each one."},
  {question: "What is it that you need to let go of? Write your reasons for holding on to it."},
  {question: "Visualize that you are free from anxiety. Write down the details of this kind of life."}
])

sad_prompts = sad.prompts.create([
  {question: "What’s one thing someone helped you with this week?"},
  {question: "What element of nature did you enjoy this week?"},
  {question: "What positive changes are you grateful for having made in your life?"},
  {question: "What’s different today compared to one year ago that you’re grateful for?"},
  {question: "What are you thankful for not having?"},
  {question: "What are 3 good decisions you’ve made this year?"},
  {question: "Think of a grateful moment you shared with someone this month."},
  {question: "Who would you like to say “thank you” to? What would you thank them for?"},
  {question: "What struggle are you thankful for having made it through (even if you’re not thankful for the struggle itself)?"},
  {question: "Make a list of the people in your life who genuinely support you, and who you can genuinely trust. (Then make time to hang out with them.)"}
])

reflect_prompts = reflect.prompts.create([
  {question: "What have been the things in my life that I can accomplished that I am most proud of? What is it about those accomplishments that I am most proud of?"},
  {question: "If your house burned to the ground, what are the top 1–3 things you would want to save? (not including people — assume your family is outside already)"},
  {question: "What is your favorite song/musical piece and why?"},
  {question: "List your top 5 favorite books/movies, and why."},
  {question: "If you could change one thing about yourself, what would it be and why?"},
  {question: "What was the most painful thing you ever went through? What did you learn from it?"},
  {question: "What is your favorite way to spend the day?"},
  {question: "What always brings tears to your eyes? (As Paulo Coelho has said, 'Tears are words that need to be written.')"},
  {question: "Using 10 words, describe yourself."},
  {question: "What’s one topic you need to learn more about to help you live a more fulfilling life? (Then learn about it.)"},
  {question: "When do you feel most energized?"},
  {question: "what can you learn from your biggest mistakes?"},
  {question: "What’s surprised you the most about your life or life in general?"},
  {question: "Write about a time when work felt real to you, necessary and satisfying. Paid or unpaid, professional or domestic, physical or mental."},
  {question: "What do you wish others would know about you."},
  {question: "Make a list of 15 things that make you smile."},
  {question: "Make a list of the people in your life who genuinely support you, and who you can genuinely trust. (Then make time to hang out with them.)"}
])

esteem_prompts = esteem.prompts.create([
  {question: "What makes you unique?"},
  {question: "Make a list of your best character traits."},
  {question: "Write your body a letter thanking it for all it does for you."},
  {question: "Make a list of your accomplishments, see if you can go through your life span and list 20."},
  {question: "How would your best friend describe you?"},
  {question: "What are you really good at?"},
  {question: "I feel my best when..."},
  {question: "When is it that you trust yourself and your intuition. Write about a time that you trusted yourself and/or your intuition."},
  {question: "I can begin to separate my negative self talk by... "},
  {question: "Make a list of the people in your life who genuinely support you, and who you can genuinely trust. (Then make time to hang out with them.)"}
])

creative_prompts = creative.prompts.create([
  {question: "Write a story that keeps contradicting itself."},
  {question: "Describe exactly what you see/smell/hear/etc, right now. Include objects, people, and anything else in your immediate environment."},
  {question: "Write a scene starting with a regular family ritual that goes awry."},
  {question: "If your brain were a tangible, physical place, what would it be like?"},
  {question: "Write a sympathetic story from the point of view of the 'bad guy'. (Think fractured fairy tales like Wicked or The True Story of the 3 Little Pigs!, although the story doesn't have to be a fairy tale.)"},
  {question: "Look at everyday objects in a new way and write about the stories one of these objects contains."},
  {question: "Write a recipe for an intangible thing."},
  {question: "Write a horror story about an ordinary situation (e.g., buying groceries, going to the bank, listening to music)."},
  {question: "Write down a paragraph each describing two wildly different settings. Write a story involving both settings."},
  {question: "Write a story as a dream."},
  {question: "Write a chapter of the memoir of your life."}
])

Entry.create(content: "My mom inspires me.", minutes: "1", prompt_id: inspired_prompts.first.id)
Entry.create(content: "1: Breakfast, 2:Decent communte, 3: Made my deadline, 4: Got to see my best friend.", minutes: "1", prompt_id: happy_prompts.first.id)
Entry.create(content: "When my friend died it gave me perspect on....", minutes: "1", prompt_id: anxious_prompts.first.id)
Entry.create(content: "My neighbor helped me weed the garden.", minutes: "1", prompt_id: sad_prompts.first.id)
Entry.create(content: "What makes anyone unique?", minutes: "1", prompt_id: esteem_prompts.first.id)
Entry.create(content: "Such and such project I did for the community.", minutes: "1", prompt_id: reflect_prompts.first.id)
Entry.create(content: "I hate everything around me, it's all just so lovely.", minutes: "1", prompt_id: creative_prompts.first.id)



