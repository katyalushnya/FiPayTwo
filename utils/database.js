import * as SQLite from 'expo-sqlite';
import {Account} from "../models/account";

const database = SQLite.openDatabase('account.db');

export function init() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS accounts (
          id INTEGER PRIMARY KEY NOT NULL, 
          token TEXT,
          name TEXT,
          address TEXT,
          email TEXT,
        )`,
                [],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}


export function insertPlace(account) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO accounts (token, name, address, email) VALUES (?, ?, ?, ?, ?)`,
                [
                    account.token,
                    account.name,
                    account.address,
                    account.email
                ],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}

export function fetchAccounts() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM accounts',
                [],
                (_, result) => {
                    const accounts = [];

                    for (const dp of result.rows._array) {
                        accounts.push(
                            new Account(
                                dp.id,
                                dp.token,
                                dp.name,
                                dp.address,
                                dp.email
                            )
                        );
                    }
                    resolve(accounts);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}

export function fetchAccountDetails(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM places WHERE id = ?',
                [id],
                (_, result) => {
                    resolve(result.rows._array[0]);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}
