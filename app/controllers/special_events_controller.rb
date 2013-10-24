class SpecialEventsController < ApplicationController
  
  def index
    @special_events = SpecialEvent.all
    
    
    
      event = Event.new    
    if session[:user_id] == nil
      redirect_to :root
    end
    @special_events = SpecialEvent.where(user_id: session[:user_id])
    
  end
  
  def new
         event = Event.new    
    if session[:user_id] == nil
      redirect_to :root
    end
    @special_event = SpecialEvent.new
    @special_event.geolocation = Geolocation.new
  end
  
  
  
  def create
    @special_event = SpecialEvent.new(special_event_params)
    @special_event.user_id = session[:user_id]
    @special_event.latitude = session[:latitude]
    @special_event.longitude = session[:longitude]    
    @special_event.save
  
    redirect_to "/events/"+@special_event.id.to_s
  end
   
  def show
    @special_event = SpecialEvent.find(params[:id])
  end
  
    def destroy
    @regular_event = SpecialEvent.find(params[:id])
     @special_event.destroy 
     redirect_to "/special_events" 
  end

  def update
      @special_event = SpecialEvent.find(params[:id])
      @Special_event.update(special_event_params)
      @event = Event.find(params[:id])
      redirect_to @event    
  end

private
  def special_event_params
    params.require(:special_event).permit(:name, :description, :address, :start_time, :end_time)
  end

end
