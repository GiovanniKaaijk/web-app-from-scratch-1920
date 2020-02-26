const users = [
    {
        name: "Gio",
        shirts: 4,
        sweather: 5,
    },
    {
        name: "John",
        shirts: 3,
        sweather: 4,
    },
    {
        name: "Karel",
        shirts: 0,
        sweather: 5,
    }
]

const newUsers = users.map(user => {
    user.cothingCount = user.training + user.matches;
    return user
});

const activeUsers = newusers.filter(user => {
        user.cothingCount > 6
    }
);


//reduce => geeft 1 waarde terug van een array
//alle cothingCount bij elkaar
// acc is de waarde die je returned
// 0 is het startgetal, kan je vervangen door null met een if als het geen getal is
const totalcothingCount = newUsers.reduce( (acc, user) => {
    const sum = acc += user.cothingCount
    console.log(sum)
    return sum
}, 0);

//alleen de hoogste waarde van degene met de meeste kleding
const topUser = newUsers.reduce( (acc, user) => {
    if (!acc) return user
    if (user.cothingCount > acc.cothingCount) return user
}, null );
