class RegularUsersController < ApplicationController
  
  require 'securerandom' #used to generate random code for e-mail verification
  
  def sign_up
    @regular_user = RegularUser.new
  end
  
  def create
    @regular_user = RegularUser.new(regular_user_params)
    @regular_user.verification_code = SecureRandom.urlsafe_base64 + @regular_user.email
    @regular_user.verified = false
    
    if @regular_user.save
      UserMailer.welcome_email(@regular_user).deliver
      redirect_to sign_up_instructions_path
    else      
      redirect_to regular_users_sign_up_path, :notice => @regular_user.errors.first
    end
      

     
  end

  def sign_up_instructions
  
  end
  
  def confirm_email    
    user = User.verify_email(params[:verification_code])
    if user
      #start session
    end
  
    redirect_to events_url
  end
  
  private
  
  def regular_user_params
    params.require(:regular_user).permit(:name, :email, :gender, :date_of_birth, :password, :password_confirmation, :verification_code) 
  end

end
