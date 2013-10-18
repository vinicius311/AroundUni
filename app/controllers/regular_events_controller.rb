class RegularEventsController < ApplicationController
  
  
  def index
    event = Event.new    
    if session[:user_id] == nil
      redirect_to :root
    end
    @regular_events = RegularEvent.where(user_id: session[:user_id])
  end
  
  def new
     event = Event.new    
    if session[:user_id] == nil
      redirect_to :root
    end
    @regular_event = RegularEvent.new
    @regular_event.geolocation = Geolocation.new
  end
  
  def create
    #render text: params[:post].inspect
    @regular_event = RegularEvent.new(regular_event_params)
    @regular_event.user_id = session[:user_id]
    @regular_event.save
    
    redirect_to @regular_event
  end
  
  def destroy
    @regular_event = RegularEvent.find(params[:id])
     @regular_event.destroy
    respond_to do |format|
      format.html { redirect_to geolocations_url }
      format.json { head :no_content }
    end
  end
  
  
  def show
    @regular_event = RegularEvent.find(params[:id])
  end

private
  def regular_event_params
    #params.require(:event).permit(:name, :description)
    params.require(:regular_event).permit(:name, :description, geolocation_attributes: [:latitude,:longitude])
  end
end
