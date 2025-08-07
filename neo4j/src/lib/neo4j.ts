import neo4j, { Driver, Session } from 'neo4j-driver'

class Neo4jService {
  private driver: Driver | null = null

  private getDriver(): Driver {
    if (!this.driver) {
      this.driver = neo4j.driver(
        process.env.NEO4J_URI || 'neo4j+s://localhost:7687',
        neo4j.auth.basic(
          process.env.NEO4J_USER || 'neo4j',
          process.env.NEO4J_PASSWORD || 'hackathon2024'
        )
      )
    }
    return this.driver
  }

  async executeQuery(query: string, params: Record<string, any> = {}) {
    const session = this.getDriver().session()
    try {
      const result = await session.run(query, params)
      return result.records.map(record => record.toObject())
    } finally {
      await session.close()
    }
  }

  async close() {
    if (this.driver) {
      await this.driver.close()
    }
  }
}

export const neo4j = new Neo4jService()