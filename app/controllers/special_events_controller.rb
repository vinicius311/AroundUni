class SpecialEventsController < ApplicationController
  
  def index
    @special_events = SpecialEvent.all
  end
  
  def new
    @special_event = SpecialEvent.new
    @special_event.geolocation = Geolocation.new
  end
  
  def create
  #  render text: params[:post].inspect
    @special_event = SpecialEvent.new(special_event_params)
    @special_event.save
    
    redirect_to @special_event
  end
  
  def show
    @special_event = SpecialEvent.find(params[:id])
  end

private
  def special_event_params
    params.require(:special_event).permit(:name, :description, geolocation_attributes: [:latitude,:longitude])
  end

end
