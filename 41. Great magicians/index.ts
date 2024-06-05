let magicians: string[] = ["Magician 1", "Magician 2", "Magician 3"]

function make_great(magicians: string[]) {
    // Modify each magician's name by prepending "the Great"
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians)
show_magicians(magicians);

