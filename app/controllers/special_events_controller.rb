class SpecialEventsController < ApplicationController
  
  def index
    if session[:user_id] == nil or session[:user_type]=="RegularUser"
      redirect_to :root
    end
    @special_events = SpecialEvent.where(user_id: session[:user_id])
  end
  
  def new         
    if session[:user_id] == nil or session[:user_type]=="RegularUser"
      redirect_to :root
    end
    @special_event = SpecialEvent.new
  end
  
  def create
     if session[:user_id] == nil or session[:user_type]=="RegularUser"
      redirect_to :root
    end
   
    @special_event = SpecialEvent.new(special_event_params)
    @special_event.user_id = session[:user_id]
    @special_event.save
  
    redirect_to "/events/"+@special_event.id.to_s
  end
   
  
  def destroy
    if session[:user_id] == nil or session[:user_type]=="RegularUser"
      redirect_to :root
    end   
     
    @special_event = SpecialEvent.find(params[:id])
    
    if session[:user_id] == @special_event.user_id
      @special_event.destroy
    end 
        
    redirect_to "/special_events" 
  end

  def update
     if session[:user_id] == nil or session[:user_type]=="RegularUser"
      redirect_to :root
    end
   
    @special_event = SpecialEvent.find(params[:id])
    if session[:user_id] == @special_event.user_id
      @special_event.update(special_event_params)
    end
    @event = Event.find(params[:id])
    redirect_to "/events/"+@special_event.id.to_s
  end
  
  def edit
    @special_event = SpecialEvent.find(params[:id])
  end
private
  def special_event_params
    params.require(:special_event).permit(:name, :description, :address, :start_time, :end_time)
  end

end
