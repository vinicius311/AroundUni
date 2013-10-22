class Geolocation < ActiveRecord::Base
  attr_accessible :latitude, :longitude, :address
  belongs_to :event
  
  reverse_geocoded_by :latitude, :longitude
 after_validation :reverse_geocode  # auto-fetch address
 
  
end
