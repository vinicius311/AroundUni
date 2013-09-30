class Event < ActiveRecord::Base
  
  attr_accessor :name, :start_time, :end_time, :description, :constraints, :type  
  
  validates :name, :start_time, :description, presence: true  
  
  has_one :user
  has_one :geolocation
  has_many :comments
  has_many :verifications

end
