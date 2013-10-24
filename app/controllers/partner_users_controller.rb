class PartnerUsersController < ApplicationController
  def sign_up
    @partner_user = PartnerUser.new
  end
  
  def create
    @partner_user = PartnerUser.new(partner_user_params)
    @partner_user.save
    
    redirect_to @partner_user
  end

private
  def partner_user_params
    params.require(:partner_user).permit(:name, :email)
  end

end
