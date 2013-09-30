class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :gender
      t.string :email
      t.date :date_of_birth
      t.boolean :verified
      t.text :verification_code
      t.string :type 
      t.timestamps
    end
  end
end
