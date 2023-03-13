FROM nginx:1.17.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/software /usr/share/nginx/html
