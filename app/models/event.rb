class Event < ActiveRecord::Base
  
 attr_accessible :name, :description, :geolocation_attributes, :address, :latitude, :longitude
 
 reverse_geocoded_by :latitude, :longitude
 after_validation :reverse_geocode  # auto-fetch address
 
 
  
 has_one :geolocation 
 
 accepts_nested_attributes_for :geolocation
 
end
