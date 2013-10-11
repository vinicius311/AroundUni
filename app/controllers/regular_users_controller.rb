class RegularUsersController < ApplicationController
  def sign_up
    @regular_user = RegularUser.new
  end
  
  def create
    @regular_user = RegularUser.new(regular_user_params)
    @regular_user.save
    
    redirect_to @regular_user
  end

private
  def regular_user_params
    params.require(:regular_user).permit(:name, :email)
  end

end
