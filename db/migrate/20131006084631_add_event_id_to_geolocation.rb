class AddEventIdToGeolocation < ActiveRecord::Migration
  def change
        add_reference :geolocations, :event, index: true
  end
end
