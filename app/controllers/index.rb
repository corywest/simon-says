get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)

  if request.xhr?

  # creating a JSON object
  content_type "JSON"
  {cell: cell, color: color}.to_json
  end
end

