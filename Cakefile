
{exec} = require 'child_process'
task 'build', 'Build project from src/*.coffee to lib/*.js', ->
  console.log 'compiling src/*.coffee to js/*.js'
  exec 'coffee --compile --output js/ src/', (err, stdout, stderr) ->
    if err
      throw err
      console.log stdout + stderr
    else
      console.log 'build success'
