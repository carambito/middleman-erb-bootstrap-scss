# Getting Started with Middleman
## Overview
* Middleman is a static site generator built on Sinatra
* This version of Middleman uses a default of erb, scss, media queries, compass css3, Bootstrap 3 framework, normalizer, jquery, modernizer
* For build details refer to http://www.initializr.com/

## Environment Background
* OS: OSX 10.9.3
* Package Managers: rvm 1.25.22 installed with Homebrew 0.9.5

## Installing Middleman
1. $ rvm --create use 1.9.3-p385@middleman385 --rvmrc
1. $ cd ..
1. $ cd landing
1. $ rvm rvmrc to [.]ruby-version
1. $ gem install middleman -v 3.3.2
1. $ bundle

## Middleman Based Implementation Workflow
* $ middleman (runs middleman server which previews build)
* $ http://localhost:4567 (url in browser where site is served)
* $ middleman build (actual build)
* Upload build/* directory to server
