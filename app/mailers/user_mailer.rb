class UserMailer < ActionMailer::Base

  default from: 'noreplyarounduni@gmail.com'
 
  def welcome_email(user)
    @user = user
    @activation_url = "http://localhost:3000/regular_users/confirm_email/"+@user.verification_code            
    @url  = 'http://arounduni.herokuapp.com'
    mail(to: @user.email, subject: 'Welcome to AroundUni!')
  end
end
