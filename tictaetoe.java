import java.util.Scanner;

public class tictaetoe {
    private static char[][] board = new char[3][3];
    private static char currentPlayer = 'X';

    public static void main(String[] args) {
        initializeBoard();
        displayBoard();

        while (true) {
            play();
            displayBoard();
            char winner = checkWinner();
            if (winner != ' ') {
                if (winner == 'D') {
                    System.out.println("It's a draw!");
                } else {
                    System.out.println("Player " + winner + " wins!");
                }
                break;
            }
            switchPlayer();
        }
    }

    private static void initializeBoard() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                board[i][j] = ' ';
            }
        }
    }

    private static void displayBoard() {
        System.out.println("-------------");
        for (int i = 0; i < 3; i++) {
            System.out.print("| ");
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j] + " | ");
            }
            System.out.println("\n-------------");
        }
    }

    private static void play() {
        Scanner scanner = new Scanner(System.in);
        int row, col;
        do {
            System.out.print("Player " + currentPlayer + ", enter row (1-3) and column (1-3) separated by space: ");
            row = scanner.nextInt() - 1;
            col = scanner.nextInt() - 1;
        } while (row < 0 || row >= 3 || col < 0 || col >= 3 || board[row][col] != ' ');

        board[row][col] = currentPlayer;
    }

    private static void switchPlayer() {
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }

    private static char checkWinner() {
        // Check rows, columns, and diagonals
        for (int i = 0; i < 3; i++) {
            if (board[i][0] == currentPlayer && board[i][1] == currentPlayer && board[i][2] == currentPlayer) {
                return currentPlayer;
            }
            if (board[0][i] == currentPlayer && board[1][i] == currentPlayer && board[2][i] == currentPlayer) {
                return currentPlayer;
            }
        }
        if (board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) {
            return currentPlayer;
        }
        if (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer) {
            return currentPlayer;
        }

        // Check for a draw
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == ' ') {
                    return ' ';
                }
            }
        }
        return 'D'; // Draw
    }
}
