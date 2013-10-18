class UserMailer < ActionMailer::Base

  default from: 'noreplyaroununi@gmail.com'
 
  def welcome_email(user)
    @user = user
    @url  = 'http://arounduni.com/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
