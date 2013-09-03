json.array!(@events) do |event|
  json.extract! event, :name, :description, :start_time, :end_time, :location_id, :owner, :address, :verification_count
  json.url event_url(event, format: :json)
end
