class MoodSerializer < ActiveModel::Serializer
  attributes :id, :mood_type, :prompts, :entries
  has_many :prompts 
  has_many :entries, through: :prompts
end
