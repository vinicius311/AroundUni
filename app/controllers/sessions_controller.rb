class SessionsController < ApplicationController  
def new
end

def create
  user = User.authenticate(params[:email].downcase, params[:password])
  if user  
    if user.verified
      session[:user_id] = user.id      
      session[:user_type] = user.type
      msg = "Logged in!"       
    else
      msg = "Email not verified. Please verify your email account."      
    end
  else
    msg =  "Incorrect credentials."      
  end
  redirect_to root_url, :notice => msg
end

def destroy
  session[:user_id] = nil
  session[:latitude] = nil
  session[:longitude] = nil      
  session[:location] = nil  
  redirect_to root_url, :notice => "Logged out!"
end

def update_location
  if params[:latitude].length > 1 and params[:longitude].length > 1
    session[:latitude] = params[:latitude] 
    session[:longitude] = params[:longitude]
    session[:location] = true
  end
  render "update_location"
end

private

  def login_params
    params.permit(:email, :password, :latitude, :longitude)
  end

end
