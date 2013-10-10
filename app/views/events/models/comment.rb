class Comment < ActiveRecord::Base
  
  attr_accessor :text 
  
  validates :text, presence: true  
  
  belongs_to :event
  belongs_to :user

end