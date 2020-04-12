class CreatePrompts < ActiveRecord::Migration[6.0]
  def change
    create_table :prompts do |t|
      t.string :question
      t.belongs_to :mood

      t.timestamps
    end
  end
end
