FROM node:21.1.0-alpine3.18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
ENTRYPOINT ["npm", "run", "dev"]