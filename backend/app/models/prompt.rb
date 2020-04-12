class Prompt < ApplicationRecord
  belongs_to :mood
  has_many :entries
end
