function newBoard() {
	return [
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	];
}

function updateBoard(board, player, x, y) {
	if (player != 'X' && player != 'O') {
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
