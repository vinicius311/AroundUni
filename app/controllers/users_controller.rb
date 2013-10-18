class UsersController < ApplicationController
  def sign_up
    @user = User.new
  end
  

def create
  
    @user = User.new(user_params)

      if @user.save
        # Tell the UserMailer to send a welcome Email after save
        UserMailer.welcome_email(@user).deliver
        puts "HELLLOOO"
      end
  end



private
  def user_params
    params.require(:user).permit(:name, :email)
  end


end
