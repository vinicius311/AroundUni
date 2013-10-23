class EventsController < ApplicationController
  def new
    @event = Event.new
    @event.geolocation = Geolocation.new
  end
  
  def index
    if session[:location] 
  
       @events = Event.all
        even = Event.new
        even.latitude = session[:latitude]
        even.longitude = session[:longitude]
        @events.each do |e|
          e.distance = e.distance_to(even)
        end
    
    else
      @events = Event.all
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
    verifications = event.verifications.where(user_id: session[:user_id])
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