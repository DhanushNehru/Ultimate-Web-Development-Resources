#include <iostream>
#include <vector>

char chessboard[8][8];

void InitializeChessboard() {
    for (int row = 0; row < 8; ++row) {
        for (int col = 0; col < 8; ++col) {
            chessboard[row][col] = ' ';
        }
    }

    // Place the pawns
    for (int col = 0; col < 8; ++col) {
        chessboard[1][col] = 'P';
        chessboard[6][col] = 'p';
    }

    // Place the other pieces (rooks, knights, bishops, queens, kings)
    chessboard[0][0] = 'R';
    chessboard[0][7] = 'R';
    chessboard[7][0] = 'r';
    chessboard[7][7] = 'r';

    chessboard[0][1] = 'N';
    chessboard[0][6] = 'N';
    chessboard[7][1] = 'n';
    chessboard[7][6] = 'n';

    chessboard[0][2] = 'B';
    chessboard[0][5] = 'B';
    chessboard[7][2] = 'b';
    chessboard[7][5] = 'b';

    chessboard[0][3] = 'Q';
    chessboard[7][3] = 'q';

    chessboard[0][4] = 'K';
    chessboard[7][4] = 'k';
}

void DisplayChessboard() {
    for (int row = 0; row < 8; ++row) {
        for (int col = 0; col < 8; ++col) {
            std::cout << chessboard[row][col] << " ";
        }
        std::cout << std::endl;
    }
}

int main() {
    InitializeChessboard();
    DisplayChessboard();

    // You can add game logic here, allowing players to make moves and checking for the game's end conditions.
    // This simplified example provides only a static board display.

    return 0;
}
