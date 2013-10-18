class RegularUsersController < ApplicationController
  def sign_up
    @regular_user = RegularUser.new
  end
  
  def create
    @regular_user = RegularUser.new(regular_user_params)
    @regular_user.save
      if @regular_user.save
        UserMailer.welcome_email(@regular_user).deliver
      end
    redirect_to confirm_email_path
  end

  def confirm_email
  
  end
  
  private
  
  def regular_user_params
    params.require(:regular_user).permit(:name, :email, :gender, :date_of_birth, :password, :password_confirmation) 
  end

end
