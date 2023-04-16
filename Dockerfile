FROM node:alpine as compile

COPY package*.json ./
COPY . . 

RUN npm install
RUN npm run build

FROM node:alpine as build

COPY --from=compile package*.json ./
COPY --from=compile ./dist ./dist

RUN npm install --ignore-scripts --omit=dev


FROM gcr.io/distroless/nodejs16-debian11 as final

COPY --from=build package*.json ./
COPY --from=build ./dist ./dist
COPY --from=build ./node_modules ./node_modules

EXPOSE 80:80

CMD ["./dist/src/framework-and-drivers/express/app.js"]
