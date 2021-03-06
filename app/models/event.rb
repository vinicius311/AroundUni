class Event < ActiveRecord::Base
  
 attr_accessible :name, :description, :address, :latitude, :longitude, :start_time, :end_time
 attr_accessible :distance
 
 attr_accessor :distance
 
 validates_presence_of :name, :description, :start_time, :end_time
 
 geocoded_by :address
 reverse_geocoded_by :latitude, :longitude 
 after_validation :geocode, :reverse_geocode 
  
 
 has_many :verifications
 has_many :comments
 
end
