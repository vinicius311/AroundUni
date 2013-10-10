class SpecialEventsController < ApplicationController
  def new
    @special_event = SpecialEvent.new
    @special_event.geolocation = Geolocation.new
  end
  
  def create
    
  #  render text: params[:post].inspect
    @special_event = SpecialEvent.new(special_event_params)
    puts @special_event.geolocation
    puts "dhasiudhaisudhasiudhausidhiuasdhiuashdiuashdiuashdiuashdiuashdiuas"
    @special_event.save
    
    redirect_to @special_event
  end
  
  def show
    @special_event = SpecialEvent.find(params[:id])
  end

private
  def special_event_params
    #params.require(:event).permit(:name, :description)
    params.require(:special_event).permit(:name, :description, geolocation_attributes: [:latitude,:longitude])
    
  end

end
