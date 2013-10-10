class EventsController < ApplicationController
  def new
    @event = Event.new
    @event.geolocation = Geolocation.new
  end
  
  def index
    @events = Event.all
  end
  def create
    
  #  render text: params[:post].inspect
    @event = Event.new(event_params)
    puts @event.geolocation
    puts "dhasiudhaisudhasiudhausidhiuasdhiuashdiuashdiuashdiuashdiuashdiuas"
    @event.save
    
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