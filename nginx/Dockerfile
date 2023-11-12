FROM node:alpine AS builder


WORKDIR /portfolio_frontend

COPY ./portfolio_frontend/package.json ./
COPY ./portfolio_frontend/package-lock.json ./

RUN npm install --force

COPY ./portfolio_frontend/ ./
RUN npm run build --prod


FROM nginx:1.21-alpine

COPY --from=builder /portfolio_frontend/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d