class UsersController < ApplicationController
  def sign_up
    @user = User.new
  end

  private
  
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
