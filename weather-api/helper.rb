def database_connection
  ENV['RACK_ENV'] == 'test' ?
  {:dbname => 'thermo_api_test'} : {:dbname => 'thermo_api'}
end