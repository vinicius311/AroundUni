class Geolocation < ActiveRecord::Base
   attr_accessible :latitude, :longitude
  belongs_to :event
  
end
