class SessionsController < ApplicationController  
def new
end

def create
  puts "entered"
  user = User.authenticate(params[:email], params[:password])
  if user
  puts "found user"  
    if user.verified == true
      puts "user is verified" 
      session[:user_id] = user.id
      puts session[:user_id]
      redirect_to root_url, :notice => "Logged in!"
    else
      flash.now.alert = "Please verify your e-mail."
    end
  else
    flash.now.alert = "Invalid email or password"
    render "new"
  end
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
