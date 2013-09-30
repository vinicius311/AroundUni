class CreateVerifications < ActiveRecord::Migration
  def change
    create_table :verifications do |t|
      t.references :user, index: true
      t.references :event, index: true

      t.timestamps
    end
  end
end
