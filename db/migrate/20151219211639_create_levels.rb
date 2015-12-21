class CreateLevels < ActiveRecord::Migration
  def change
    create_table :levels do |t|
      t.integer :screen_type
      t.string :level
      t.decimal :font_size
      t.timestamps null: false
    end
  end
end
