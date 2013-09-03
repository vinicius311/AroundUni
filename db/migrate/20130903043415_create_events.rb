class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.datetime :start_time
      t.datetime :end_time
      t.integer :location_id
      t.integer :owner
      t.string :address
      t.integer :verification_count

      t.timestamps
    end
  end
end
