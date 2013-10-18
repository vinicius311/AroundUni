class UsersController < ApplicationController
  def sign_up
    @user = User.new
  end
  

def create
  
    @user = User.new(user_params)

  
  
 
    respond_to do |format|
      if @user.save
        # Tell the UserMailer to send a welcome Email after save
        UserMailer.welcome_email(@user).deliver
 
        format.html { redirect_to(events_path, notice: 'User was successfully created.') }
        format.json { render json: @user, status: :created, location: @user }
      else
        format.html { render action: 'new' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end



private
  def user_params
    params.require(:user).permit(:name, :email)
  end


end
