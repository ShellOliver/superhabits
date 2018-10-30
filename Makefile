startall:
	docker-compose down	
	docker-compose up
stopall:
	docker-compose down

startpsql:
	docker-compose exec db psql -U postgres