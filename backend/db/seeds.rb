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

inspired.prompts.create([
  {content: "Write about someone who ispires you, and what it is about them that inspires you."},
  {content: "What is something you would like to change about your life? What are the steps that you would need to take to achieve that goal?"},
  {content: "What are some positive changes you have made recently? What changes would you like to make next?"},
  {content: "What's the most difficult thing you've overcome? What did you learn from it?"},
  {content: "If you didn’t have to worry about money or people’s opinions, what would you do with your life?"},
  {content: "Create an ideal budget for your time and money based on percentages (Ex with finances: 10% donations, 40% to live on, 20% to support family, 15% taxes, 10% savings, 5% fun stuff, or something) Why is this your ideal budget?"},
  {content: "How do you spend your time? On a weekday? On a weekend?"},
  {content: "What is the next thing you want to learn? And to what degree?"},
  {content: "Define the following: Success. Wisdom. Love. Faith. Truth. Courage. Joy"},
  {content: "List all the things you think you SHOULD do, that you don’t want to do."},
  {content: "What was your childhood dream and why? What happened to that dream and why?"},
  {content: "What about your life makes you miserable? What do you know you need to give up?"},
  {content: "What is a book you wish someone would write?"},
  {content: "What did you do this week that moved you closer to reaching your goals?"},
  {content: "Write about a time when work felt real to you, necessary and satisfying. Paid or unpaid, professional or domestic, physical or mental."}

])

happy.prompts.create([
  {content: "What went well today? Can you think of five things?"},
  {content: "What habit (or habits) are you grateful for keeping up with?"},
  {content: "What element of nature did you enjoy this week?"},
  {content: "What’s something beautiful you had the chance to witness lately?"},
  {content: "What positive changes are you grateful for having made in your life?"},
  {content: "What invention are you truly grateful for having access to?"},
  {content: "What is something you love doing for/giving to others?"},
  {content: "What are 5 positive memories from this past year?"},
  {content: "Think of one person who has enriched your life this year in some way. What are 3 positive contributions they’ve made to your life?"}
])


anxious.prompts.create([
  {content: "What was the most difficult experience you had before, and how were you able to overcome it?"},
  {content: "List three things that scare you the most, and the reasons why."},
  {content: "Reply to your inner critic’s opinions about your actions and decisions."},
  {content: "List down all of the things that you’re worried about right now. Make the list as long as possible."},
  {content: "How are you feeling right now? Describe how you feel in writing."},
  {content: "Think back to a moment when you experienced failure. What lessons can you take from it?"},
  {content: "Is your anxiety trying to tell you something? What is it?"},
  {content: "List three of the greatest lessons you’ve been given by your anxiety."},
  {content: "List down your anxiety triggers."},
  {content: "List down the questions that are constantly running through your head right now, and then try to answer each one."},
  {content: "What is it that you need to let go of? Write your reasons for holding on to it."},
  {content: "Visualize that you are free from anxiety. Write down the details of this kind of life."}
])

sad.prompts.create([
  {content: "What’s one thing someone helped you with this week?"},
  {content: "What element of nature did you enjoy this week?"},
  {content: "What positive changes are you grateful for having made in your life?"},
  {content: "What’s different today compared to one year ago that you’re grateful for?"},
  {content: "What are you thankful for not having?"},
  {content: "What are 3 good decisions you’ve made this year?"},
  {content: "Think of a grateful moment you shared with someone this month."},
  {content: "Who would you like to say “thank you” to? What would you thank them for?"},
  {content: "What struggle are you thankful for having made it through (even if you’re not thankful for the struggle itself)?"}
])

reflect.prompts.create([
  {content: "What have been the things in my life that I can accomplished that I am most proud of? What is it about those accomplishments that I am most proud of?"},
  {content: "If your house burned to the ground, what are the top 1–3 things you would want to save? (not including people — assume your family is outside already)"},
  {content: "What is your favorite song/musical piece and why?"},
  {content: "List your top 5 favorite books/movies, and why."},
  {content: "If you could change one thing about yourself, what would it be and why?"},
  {content: "What was the most painful thing you ever went through? What did you learn from it?"},
  {content: "What is your favorite way to spend the day?"},
  {content: "What always brings tears to your eyes? (As Paulo Coelho has said, “Tears are words that need to be written.”)"},
  {content: "Using 10 words, describe yourself."},
  {content: "What’s one topic you need to learn more about to help you live a more fulfilling life? (Then learn about it.)"},
  {content: "When do you feel most energized?"},
  {content: "what can you learn from your biggest mistakes?"},
  {content: "What’s surprised you the most about your life or life in general?"},
  {content: "Write about a time when work felt real to you, necessary and satisfying. Paid or unpaid, professional or domestic, physical or mental."},
  {content: "What do you wish others would know about you."}
  {content: "Make a list of 15 things that make you smile."}
])

esteem.prompts.create([
  {content: "What makes you unique?"},
  {content: "Make a list of your best character traits."},
  {content: "Write your body a letter thanking it for all it does for you."},
  {content: "Make a list of your accomplishments, see if you can go through your life span and list 20."},
  {content: "How would your best friend describe you?"},
  {content: "What are you really good at?"},
  {content: "I feel my best when..."},
  {content: "When is it that you trust yourself and your intuition. Write about a time that you trusted yourself and/or your intuition."},
  {content: "I can begin to separate my negative self talk by... "}
])



