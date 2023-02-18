FROM node:18.9.0-alpine as build
WORKDIR /build
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.23.1-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist ./
EXPOSE 80
