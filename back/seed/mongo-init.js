print('########################### MONGO START SEED ###########################');

db = db.getSiblingDB('store');

db.createUser({
    user: "dev",
    pwd: "dev",
    roles: [
        {
            role: "readWrite",
            db: "store"
        }
        // {role: "dbAdmin", db: "store"},
        // {role: "userAdmin", db: "store"}
    ]
});

// db.getUsers();

db.book.insert([{
        title: "Title of Book 1",
        author: "John Doe 1",
        isbn: "abc123"
    },
    {
        title: "Title of Book 2",
        author: "John Doe 2",
        isbn: "123abcd"
    },
]);

print('########################### MONGO END SEED ###########################');