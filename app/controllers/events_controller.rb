class EventsController < ApplicationController
  def new
    @event = Event.new
    @event.geolocation = Geolocation.new
  end
  
  def index
    @regular_user = RegularUser.new
    if session[:user_id] and session[:latitude] and session[:longitude]
      param = session[:latitude].to_s + ","+ session[:longitude].to_s
      @events = Event.near(param, 2, :order => "distance")
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

private
  def event_params
    #params.require(:event).permit(:name, :description)
    params.require(:event).permit(:name, :description, geolocation_attributes: [:latitude,:longitude])
    
  end
end