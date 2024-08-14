composeDev = docker-compose.dev.yaml

run-dev:
	docker compose -f $(composeDev) --env-file=.env.development up --build

stop-dev:
	docker compose -f $(composeDev) --env-file=.env.development down

restart-dev: stop-dev run-dev
