json.array!(@geolocations) do |geolocation|
  json.extract! geolocation, :address, :latitude, :longitude
  json.url geolocation_url(geolocation, format: :json)
end
