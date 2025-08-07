// Common Neo4j queries for hackathons

export const CREATE_USER = `
  CREATE (u:User {id: $id, name: $name, email: $email, createdAt: datetime()})
  RETURN u
`

export const FIND_CONNECTIONS = `
  MATCH (user:User {id: $userId})-[:CONNECTED_TO]-(connection)
  RETURN connection
  ORDER BY connection.name
`

export const SHORTEST_PATH = `
  MATCH path = shortestPath((start:User {id: $startId})-[*]-(end:User {id: $endId}))
  WHERE start <> end
  RETURN path, length(path) as distance
`

export const RECOMMEND_CONNECTIONS = `
  MATCH (user:User {id: $userId})-[:CONNECTED_TO]-(friend)-[:CONNECTED_TO]-(recommendation)
  WHERE NOT (user)-[:CONNECTED_TO]-(recommendation) AND user <> recommendation
  RETURN recommendation, count(*) as mutualConnections
  ORDER BY mutualConnections DESC
  LIMIT 5
`