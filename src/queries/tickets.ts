const TABLE = "tickets";

export const ticketsQueries = function (...args: (string | number)[]) {
  return {
    GET_BY_ID: `SELECT * FROM ${TABLE} WHERE id = $1`,
    UPDATE: `UPDATE ${TABLE} SET title = $2 WHERE id = $1;`,
    DELETE: `DELETE FROM  ${TABLE} WHERE id = $1`,
    CREATE: `INSERT INTO ${TABLE} (distributor, type, event, date) VALUES ($1, $2, $3)`,
    PATCH: `UPDATE FROM ${TABLE} date = $2 WHERE id = $1`,
    GET: `
    SELECT * FROM ${TABLE} 
    WHERE ($1 = '' OR title = $1) 
    AND ((CAST($2 as DATE) IS NULL) OR date = $2)
    AND ($3 = '' OR distributor = $3) 
    AND (price BETWEEN $4 AND $5)
    ORDER BY ${args[0]}
  `,
    CHECK_AVAILABILITY: `SELECT 1 FROM ${TABLE} WHERE id = $1 AND quantity < $2`,
  };
};
