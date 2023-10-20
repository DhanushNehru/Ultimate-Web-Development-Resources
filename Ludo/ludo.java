import java.util.Random;
import java.util.Scanner;

public class LudoGame {
    private static final int BOARD_SIZE = 40;
    private static final int PLAYERS = 4;
    private static final int MAX_PIECES = 4;

    private int[] playerPositions;
    private int currentPlayer;
    private int[] playerPieces;

    public LudoGame() {
        playerPositions = new int[PLAYERS];
        playerPieces = new int[PLAYERS];
        currentPlayer = 0;
    }

    public void rollDice() {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        System.out.println("Player " + (currentPlayer + 1) + ", press Enter to roll the dice.");
        scanner.nextLine();

        int dice = random.nextInt(6) + 1;
        System.out.println("You rolled a " + dice);

        movePiece(dice);
        currentPlayer = (currentPlayer + 1) % PLAYERS;
    }

    public void movePiece(int steps) {
        int currentPosition = playerPositions[currentPlayer];
        int newPosition = (currentPosition + steps) % BOARD_SIZE;

        if (newPosition == 0)
            System.out.println("Player " + (currentPlayer + 1) + " has finished!");

        playerPositions[currentPlayer] = newPosition;
    }

    public void playGame() {
        while (!isGameFinished()) {
            displayBoard();
            rollDice();
        }

        System.out.println("Player " + (currentPlayer + 1) + " wins!");
    }

    public boolean isGameFinished() {
        return playerPieces[currentPlayer] == MAX_PIECES;
    }

    public void displayBoard() {
        System.out.println("Ludo Board:");
        for (int i = 0; i < PLAYERS; i++) {
            System.out.println("Player " + (i + 1) + " - Pieces: " + playerPieces[i] + ", Position: " + playerPositions[i]);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LudoGame game = new LudoGame();
        game.playGame();
    }
}
