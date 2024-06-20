function skillsMember() {
    const member = {
        name: 'John',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        greet: function() {
            console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
        }
    };

    return member;
}