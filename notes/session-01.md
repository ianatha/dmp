# ΨΜΠ - Μάθημα 1

- Τι είναι *προγραμματισμός (programming)*;
    - Συγγραφή οδηγιών προς τον υπολογιστή, με επαρκή σαφήνεια, για την μεταποίηση δεδομένων ώστε να επιτύχουμε κάποιον στόχο.
        - Οδηγίες που μπορούν να καταναλώσουν άνθρωποι, χρειάζονται λιγότερη σαφήνεια, λόγω κοινής κοινωνικοπολιτισμικής πλαισίωσης.
        π.χ. Στις οδηγίες για την κατασκευή τοστ, αρκεί να πω “1) πάρε δυο φέτες ψωμί, 2) άλειψε βούτυρο σε κάθε φέτα”, χωρίς να χρειάζεται να πω “1) πάρε δυο φέτες ψωμί, 2) άλειψε βούτυρο στην άνωθεν όψη τον φετών από το βήμα (1)”.
- Τι είναι *πρόγραμμα (program)*;
    - Αλληλουχία σαφών οδηγιών που μεταποιούν κάποια δεδομένα βάσει κάποιας προκαθορισμένης αλληλουχίας οδηγιών.
- Τι είναι *δεδομένα (data)*;
    - Η αναπαράσταση κάποιας ορισμένης τιμής, η οποία επιδέχεται κάποια επεξεργασία. Παραδείγματα δεδομένων είναι:
        - ο αριθμός 2
        - ο αριθμός 2.451
        - η αλληλουχία γραμμάτων (χαρακτήρων) “abc”
        - η λογική τιμή “true”
        - η λογική τιμή “false”
    - Ήδη, από τα άνωθεν παραδείγματα, διακρίνουμε ότι υπάρχουν διαφορετικές “γεύσεις” δεδομένων.
    Αυτές τις γεύσεις τις ονομάζουμε τύπους (types). Κάθε γλώσσα προγραμματισμού αναγνωρίζει και οργανώνει διαφορετικά τα δεδομένα σε τύπους.
- “Simple” Data types in Javascript
    - Numbers (both integers, and reals)
    - Strings (a sequence of letters/characters) [1]
    - Booleans (true, or false)
- “Complex” Data Types in Javascript
    - Containers for the “simpler” data types.
    - Arrays (a sequence of values, with a specific order)
        - Other programming languages call this a “list”
        - A few examples of arrays are:
            - `[0, 1, 2, 3, 4]`
            - `[10, "abc", true]`
        - We represent arrays using:
            - a `[` to denote the beginning of the sequence,
            - a `,` to separate each value, and
            - a `]` to denote the end of the sequence.
        - Each value of an array is called an element.
    - Objects (a mapping from one value to another, without a specific order)
        - Other programming languages call this a “map”
        - A few examples of maps are:
            - `{ "cat": "meow", "dog": "woof" }`
            - `{ "GR": 24, "IT": 22, "ES": 21 }`
        - In the first example, the value `cat` maps to the value `meow`.
        - In the second example, `GR` maps to 24.
- Τι είναι *μεταβλητές (variables)*;
    
    

Javascript REPL

Chrome DevTools

Tic-Tac-Toe

How to represent a tic-tac-toe board? 

What is a function?

(black box)

function increase(x) { return x + 1; }

Let’s write our first function, that returns a new tic-tac-toe board. We will call it newBoard.

The `return` statement.

We can now interact with this board.

However, there are a number of mistakes that we could make while interacting directly with the board. For example, we could use an invalid player marking. Or we could overwrite a player’s move.

Let’s write a function that prevents us from making these mistakes, and only updates the board when our instruction is permissible. We will call this function `play`.

What do our instructions to update the board look like? What information do we need to have a complete representation of a move? The player, and the x & y coordinates of their move.

`Boolean` values and operators

The `if` statement…

```jsx
function updateBoard(board, player, x, y) {
    if (player != 'X' || player != 'Y') {
        return;
    }
    if (x < 0 || x > 2 || y < 0 || y > 2) {
        return;
    }
    if (board[x][y] != ' ') {
        return;
    }
    board[x][y] = player;
}
```

```jsx
function newBoard() {
    return [
        [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
}
```

This informs the arguments our function 

What is an “API”?

Footnotes

[1]: this is technically incorrect, but it’s a useful simplification for now. We’ll revisit this later.

## Φλυαρίες

- Σε αυτή την σειρά μαθημάτων, αν και αποσκοπούμε στην μετάδοση κάποιων γενικών ιδεών περί προγραμματισμού, θα εντρυφήσουμε στην γλώσσα Javascript.

Δεν έχει σημασία πια γλώσσα προγραμματισμού θα μάθουμε — είναι σαν να αναρωτιέσαι τι αυτοκίνητο θα χρησιμοποιήσεις για να μάθεις οδήγηση.

Κάποιες γλώσσες προγραμματισμού είναι σαν αυτοκίνητα με αυτόματο κιβώτιο ταχυτήτων, ενώ κάποιες με χειροκίνητο — η Javascript μάλλον τείνει να είναι με “αυτόματο κιβώτιο ταχυτήτων”.

Επέλεξα την Javascript ως η πλέον κυρίαρχη γλώσσα προγραμματισμού

# Homework

- Make a GitHub account
- Modify the play function to only allow the correct next player to play
- (Extra credit) Write an hasWinner(board) function that returns false if nobody won, or the player that has won if someone won
