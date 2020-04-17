class Entry < ApplicationRecord
  belongs_to :prompt

  validates :content, presence: true
end
