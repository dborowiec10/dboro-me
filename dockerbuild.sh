#!/bin/bash

sudo docker build -t registry.dboro.co.uk/dboro.co.uk:latest .
sudo docker push registry.dboro.co.uk/dboro.co.uk:latest