require 'capybara/rspec'
require 'simplecov'
require 'simplecov-console'

SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter.new([
  SimpleCov::Formatter::Console,
  # Want a nice code coverage website? Uncomment this next line!
  # SimpleCov::Formatter::HTMLFormatter
])

SimpleCov.start do
   add_filter '/spec'
end


RSpec.configure do |config|
  ENV['RACK_ENV'] = 'test'
  require './app.rb'
  require 'rack/test'
  require 'capybara'
  require 'capybara/rspec'
  Capybara.app = ThermoApi

  config.before(:each) do
    conn = PG::Connection.open(:dbname => 'thermo_api_test')
    conn.exec_params('TRUNCATE user_state;')
  end
end
