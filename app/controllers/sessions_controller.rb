class SessionsController < ApplicationController  
def new
end

def create
  user = User.authenticate(params[:email], params[:password])
  if user  
    if user.verified
      session[:user_id] = user.id      
      if session[:latitude].length > 3
        session[:latitude] = params[:latitude] 
        session[:longitude] = params[:longitude] 
      else        
        session[:latitude] = "-33.8894586"
        session[:longitude] = "151.1913734"
      end
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

  redirect_to root_url, :notice => "Logged out!"
end

private

  def login_params
    params.permit(:email, :password, :latitude, :longitude)
  end

end
