class SessionsController < ApplicationController  
def new
end

def create
  user = User.authenticate(params[:email], params[:password])
  if user  
    if user.verified
      session[:user_id] = user.id      
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
  redirect_to root_url, :notice => "Logged out!"
end

private

  def login_params
    params.permit(:email, :password)
  end

end
