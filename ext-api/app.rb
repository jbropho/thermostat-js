require 'sinatra/base'

class ThermoApi < Sinatra::Base 
   
   get '/' do 
     'hello world'
   end
end