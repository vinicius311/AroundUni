class EventsController < ApplicationController
  def new
    @event = Event.new
    
  end
  
  def index
    if session[:location]       
      #create an geocoded object with user position.
      fake_event = Event.new
      fake_event.latitude = session[:latitude]
      fake_event.longitude = session[:longitude]
        
      @events = Event.near(fake_event, 30000)
      @events.each do |e|
        e.distance = e.distance_to(fake_event)
      end    
    else
      
      @events = Event.all
          
      
    end
  end
  
  
  def show
    @event = Event.find(params[:id])
    @comment = Comment.new
  end
  
  def verify
    if session[:user_id]
      event = Event.find(verification_params[:event_id])
      verifications = event.verifications.where(user_id: session[:user_id])
      if verifications.count == 0      
        verification = Verification.new()
        verification.user_id = session[:user_id]
        verification.event_id = params[:event_id]
        event.verifications << verification
        event.save 
      end
    end
    redirect_to "/events/"+params[:event_id]
  end

private
  def event_params
        params.require(:event).permit(:name, :description)
  end
  
  def verification_params
    params.permit(:event_id)    
  end
end