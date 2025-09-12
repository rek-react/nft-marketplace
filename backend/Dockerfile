FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build
RUN npm run test

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist  
COPY --from=builder /app/public ./public

EXPOSE 3001

CMD ["npm", "run", "start:prod"]