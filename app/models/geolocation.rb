class Geolocation < ActiveRecord::Base
  attr_accessible :latitude, :longitude
  belongs_to :event
  reverse_geocoded_by :latitude, :longitude,
  :address => :address
  after_validation :reverse_geocode
end
