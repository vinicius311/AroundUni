class UserMailer < ActionMailer::Base

  default from: 'noreplyarounduni@gmail.com'
 
  def welcome_email(user)
    @user = user
    @url  = 'http://arounduni.com/login'
    mail(to: @user.email, subject: 'Welcome to AroundUni!')
  end
end
