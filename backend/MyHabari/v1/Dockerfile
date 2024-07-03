FROM node:21-alpine
WORKDIR .
COPY . .
RUN npm install
RUN npx prisma generate

EXPOSE 3000
CMD [ "node","src/index.mjs" ]
