class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.text :content
      t.string :minutes
      t.belongs_to :mood, null: false, foreign_key: true
      t.belongs_to :prompt, null: false, foreign_key: true

      t.timestamps
    end
  end
end
