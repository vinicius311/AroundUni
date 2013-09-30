class User < ActiveRecord::Base
  
  
  attr_accessor :name, :gender, :email, :date_of_birth, :date_of_birth, :type  
  
  validates :name, :email, :date_of_birth, presence: true
  validates :email, uniqueness: true
  
  has_many :events
  has_many :comments
  has_many :verifications
  
end
