class EntrySerializer < ActiveModel::Serializer
  attributes :id, :content, :minutes, :prompt_id, :created_at 
end
