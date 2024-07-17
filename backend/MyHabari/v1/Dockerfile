FROM node:21-alpine
WORKDIR .
COPY . .
RUN npm install
RUN npx prisma generate
CMD [ "node","src/index.mjs" ]
