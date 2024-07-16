const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
    "./spacexcargo.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to the SQlite database.");
    }
);

db.serialize(() => {
    // Create the items table if it doesn't exist
    db.run(
        `CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY,
          name TEXT,
          description TEXT,
        )`,
        (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Created items table.");

            // Clear the existing data in the products table
            db.run(`DELETE FROM items`, (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log("All rows deleted from items");
            });
        }
    );
})
