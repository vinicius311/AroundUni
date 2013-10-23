class EventsController < ApplicationController
  def new
    @event = Event.new
    @event.geolocation = Geolocation.new
  end
  
  def index
    @regular_user = RegularUser.new
 #   if session[:user_id] and session[:latitude] and session[:longitude]
 #     param = session[:latitude].to_s + ","+ session[:longitude].to_s
  #    @events = Event.near(param, 2, :order => "distance")
  #  else
  #    @events = Event.all
  #  end
  
       @events = Event.all
        even = Event.new
        even.latitude = -33.8894586
        even.longitude = 151.1913734
        @events.each do |e|
          e.distance = e.distance_to(even)
        end
        
       
  end
  
  def create    
  #  render text: params[:post].inspect
    @event = Event.new(event_params)
    redirect_to @event
  end
  
  def show
    @event = Event.find(params[:id])
  end
  
  def verify
    event = Event.find(verification_params[:event_id])
    verifications = Verification.where(user_id: session[:user_id], event_id: verification_params[:event_id])
    if verifications.count == 0      
      verification = Verification.new()
      verification.user_id = session[:user_id]
      verification.event_id = params[:event_id]
      event.verifications << verification
      event.save 
    end
    redirect_to "/events/"+params[:event_id]
  end

private
  def event_params
    #params.require(:event).permit(:name, :description)
    params.require(:event).permit(:name, :description, geolocation_attributes: [:latitude,:longitude])
  end
  
  def verification_params
    params.permit(:event_id)    
  end
end