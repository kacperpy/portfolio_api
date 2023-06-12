FROM node:12.16.1-alpine AS builder


WORKDIR /

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --force

COPY ./ ./

RUN npm run build --prod


FROM nginx:1.21-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=builder /dist/portfolio-frontend /usr/share/nginx/html