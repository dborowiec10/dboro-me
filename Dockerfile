FROM nginx:alpine

RUN set -x && \
  rm -f /etc/nginx/conf.d/default.conf && \
  mkdir -p /var/www/site

COPY site.conf /etc/nginx/conf.d/site.conf
COPY build /var/www/site