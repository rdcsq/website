FROM oven/bun:1 AS runtime
WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile
RUN bun --bun run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["bun", "--bun", "./dist/server/entry.mjs"]