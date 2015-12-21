class CreateSavedTests < ActiveRecord::Migration
  def change
    create_table :saved_tests do |t|
      t.integer :user_id
      t.string :results_both, default: "No saved tests"
      t.string :results_left, default: "No saved tests"	
      t.string :results_right, default: "No saved tests"	
      t.string :results_cb, default: "No saved tests"
      t.string :test_type	
      t.timestamps null: false
    end
  end
end
