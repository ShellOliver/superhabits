startall:
	docker-compose down	
	docker-compose up
stopall:
	docker-compose down

startpsql:
	docker-compose exec habit-postgres-db psql -U postgres