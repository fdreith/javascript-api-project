class Entry < ApplicationRecord
  belongs_to :mood
  belongs_to :prompt
end
