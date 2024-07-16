import sqlite3 from "sqlite3";

export const db = new sqlite3.Database(
    "./spacexcargo.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to the SpaceX Cargo database.");
    }
);

