class AddColumnsLatitudeLongitude < ActiveRecord::Migration
  def change
    add_column :geolocations, :latitude, :float
    add_column :geolocations, :longitude, :float
    end
end
