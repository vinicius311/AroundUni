class Comment < ActiveRecord::Base
  
  attr_accessible :text, :user_id 
  
  validates :text, presence: true  
  
  belongs_to :event
  belongs_to :user

end
