# Installation & Set up
To run the plateform in either localhost or cloud webserver

## First, install docker and docker-compose

**docker**: https://docs.docker.com/engine/install/ubuntu/
**docker-compose**: https://docs.docker.com/compose/install/

## Then deploy the app

```bash

git clone https://github.com/firasbouali11/cloud-project.git

cd cloud_project/deployement

sudo docker-compose up -d

```

### Important !!
we need to run the migration manually to create the tables in the mysql database using the following command: 

```
sudo docker-compose exec api php artisan migrate
```


Finally run the web application: **http:://\<IP or DNS\>**