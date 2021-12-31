FROM ubuntu

RUN apt update

ENV DEBIAN_FRONTEND noninteractive

RUN apt install composer php-xml php-curl php-mysql -y

COPY ./employee-api /api/

EXPOSE 8000

WORKDIR /api

RUN composer install

# RUN php artisan migrate

CMD ["php" ,"artisan","serve","--host=api"]
