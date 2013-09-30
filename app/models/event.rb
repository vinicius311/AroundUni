class Event < ActiveRecord::Base
  
  has_one :user
  has_one :geolocation
  has_many :comments
  has_many :verifications

end
