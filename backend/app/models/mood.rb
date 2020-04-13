class Mood < ApplicationRecord
  has_many :prompts 
  has_many :entries, through: :prompts
end
