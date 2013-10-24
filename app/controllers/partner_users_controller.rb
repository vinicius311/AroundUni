class PartnerUsersController < ApplicationController
  
    require 'securerandom' #used to generate random code for e-mail verification


  def sign_up
    @partner_user = PartnerUser.new
  end
  
  def create
    @partner_user = PartnerUser.new(partner_user_params)
    @partner_user.email.downcase!
    @partner_user.verification_code = SecureRandom.urlsafe_base64
    @partner_user.verified = false
    
    if @partner_user.save
      UserMailer.welcome_email(@partner_user).deliver
      redirect_to sign_up_instructions_path
    else      
      redirect_to partner_users_sign_up_path, :notice => @partner_user.errors.first
    end
  end


  def confirm_email    
     user = User.verify_email(params[:verification_code])
    if user
        session[:user_id]= user.id #start session
        msg = "Email verified. Logged in."
    else
      msg = "Verification failed."
    end
    redirect_to root_url, :notice => msg
  end
  

  def sign_up_instructions
  
  end
  
  



  def partner_user_params
    params.require(:partner_user).permit(:name, :email, :gender, :date_of_birth, :password, :password_confirmation, :verification_code, :organisation) 
  end

end

