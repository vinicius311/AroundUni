class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :start_time
      t.datetime :end_time
      t.text :description
      t.string :constraints
      t.references :geolocation
      t.references :user
      t.string :type

      t.timestamps
    end
    add_index :events, :geolocation_id
    add_index :events, :user_id
  end
end
