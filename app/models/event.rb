class Event < ActiveRecord::Base
  
 attr_accessible :name, :description, :geolocation_attributes, :address, :latitude, :longitude, :start_time, :end_time
 attr_accessible :distance
 
 attr_accessor :distance
 
 geocoded_by :address
 reverse_geocoded_by :latitude, :longitude 
 after_validation :geocode, :reverse_geocode 
  
 has_one :geolocation 
 has_many :verifications
 has_many :comments
 accepts_nested_attributes_for :geolocation
 
end
