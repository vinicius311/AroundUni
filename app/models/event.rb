class Event < ActiveRecord::Base
  
 attr_accessible :name, :description, :geolocation_attributes
 
 has_one :geolocation 
 
 accepts_nested_attributes_for :geolocation
end
