class DropColumnsLongitudeLatitude < ActiveRecord::Migration
  def change
    remove_column :geolocations, :latitude
    remove_column :geolocations, :longitude
  end
end
