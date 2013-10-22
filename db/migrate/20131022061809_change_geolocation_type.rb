class ChangeGeolocationType < ActiveRecord::Migration
  def change     
    change_column :geolocations, :latitude, :string
    change_column :geolocations, :longitude, :string
  end
end
