class User < ActiveRecord::Base
  
  
  attr_accessible :name, :gender, :email, :date_of_birth, :date_of_birth, :type, :password, :password_confirmation, :organisation
  

  has_many :events
  has_many :comments
  has_many :verifications
  
  
  
  attr_accessor :password
  before_save :encrypt_password
  
  validates_confirmation_of :password
  validates_presence_of :password, :on => :create
  validates_presence_of :email
  validates_uniqueness_of :email
  
  
  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
  
  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end
  
  def self.verify_email(verification_code)
    user = find_by_verification_code(verification_code)
    if user 
      user.verified = true
      user.save
      user
    else
     nil
    end
  end
 
  
end
