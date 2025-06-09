FROM node:22.16.0

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci --omit=dev
RUN npm install 


RUN npx 

COPY . .

RUN npx prisma generate
RUN npm cache clean --force
CMD [ "npm", "start", "start:migrate:prod" ]
